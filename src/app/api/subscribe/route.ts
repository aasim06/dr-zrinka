import { NextResponse } from "next/server";

const BASE = "https://api.klicktipp.com";

export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({}));
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const { KLICKTIPP_USERNAME: user, KLICKTIPP_PASSWORD: pass, KLICKTIPP_LIST_ID: listid } = process.env;
  if (!user || !pass || !listid) {
    // Not configured yet: don't break the UI during development
    console.warn("KlickTipp env vars missing – subscription not sent:", email);
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    // 1) login -> session
    const login = await fetch(`${BASE}/account/login`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ username: user, password: pass }),
    });
    if (!login.ok) throw new Error("login failed");
    const { session_name, sessionid } = await login.json();

    // 2) subscribe -> the double opt-in process (listid) sends the confirmation mail
    const sub = await fetch(`${BASE}/subscriber`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Cookie: `${session_name}=${sessionid}` },
      body: new URLSearchParams({ email, listid }),
    });
    if (!sub.ok) throw new Error("subscribe failed");

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }
}
