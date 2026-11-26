import { NextResponse } from "next/server";
import { assignLanguageTag, klicktippSignin } from "@/lib/klicktipp";

const BASE = "https://api.klicktipp.com";

export async function POST(req: Request) {
  const { email, language } = await req.json().catch(() => ({}));
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const cleanLanguage = language === "German" ? "German" : "English";

  // Primary: Join the Readers double opt-in signin key + language tag (14949948 EN / 14949929 DE)
  const journalKey = process.env.KLICKTIPP_APIKEY_JOURNAL?.trim();
  if (journalKey) {
    try {
      const result = await klicktippSignin({ apiKey: journalKey, email: cleanEmail });
      if (!result.ok) {
        return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
      }
      await assignLanguageTag(cleanEmail, cleanLanguage);
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("[/api/subscribe] KlickTipp signin failed:", err);
      return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
    }
  }

  // Fallback: legacy login + /subscriber with KLICKTIPP_LIST_ID
  const { KLICKTIPP_USERNAME: user, KLICKTIPP_PASSWORD: pass, KLICKTIPP_LIST_ID: listid } = process.env;
  if (!user || !pass || !listid) {
    console.warn("KlickTipp env vars missing – subscription not sent:", cleanEmail);
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const login = await fetch(`${BASE}/account/login`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ username: user, password: pass }),
    });
    if (!login.ok) throw new Error("login failed");
    const { session_name, sessionid } = await login.json();

    const sub = await fetch(`${BASE}/subscriber`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Cookie: `${session_name}=${sessionid}` },
      body: new URLSearchParams({ email: cleanEmail, listid }),
    });
    if (!sub.ok) throw new Error("subscribe failed");

    await assignLanguageTag(cleanEmail, cleanLanguage);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }
}
