import { NextResponse } from "next/server";
import { assignLanguageTag, klicktippSignin } from "@/lib/klicktipp";

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  const email = str(body.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const kind = body.kind === "strategic-conversation" ? "strategic-conversation" : "contact";
  const language = str(body.language);

  try {
    if (kind === "contact") {
      const firstName = str(body.firstName);
      const message = str(body.message);
      if (!firstName || !message) {
        return NextResponse.json({ error: "First name and message are required." }, { status: 400 });
      }

      const result = await klicktippSignin({
        apiKey: process.env.KLICKTIPP_APIKEY_CONTACT,
        email,
        fields: {
          fieldFirstName: firstName,
          fieldLastName: str(body.lastName),
          fieldPhone: str(body.phone),
          field167961: message,
          field1000683: language,
        },
      });
      if (!result.ok) {
        return NextResponse.json({ error: "Unable to send inquiry right now." }, { status: 502 });
      }

      await assignLanguageTag(email, language);
      return NextResponse.json({ ok: true, skipped: result.skipped });
    }

    const name = str(body.name);
    const situation = str(body.situation);
    if (!name || !situation) {
      return NextResponse.json({ error: "Name and current situation are required." }, { status: 400 });
    }

    const result = await klicktippSignin({
      apiKey: process.env.KLICKTIPP_APIKEY_STRATEGIC,
      email,
      fields: {
        fieldFirstName: name,
        field1000682: str(body.organization),
        field1000681: str(body.role),
        fieldPhone: str(body.phone),
        field1000679: situation,
        field1000680: str(body.desiredChange),
        field1000683: language,
      },
    });
    if (!result.ok) {
      return NextResponse.json({ error: "Unable to submit request right now." }, { status: 502 });
    }

    await assignLanguageTag(email, language);
    return NextResponse.json({ ok: true, skipped: result.skipped });
  } catch (err) {
    console.error("[/api/contact] KlickTipp error:", err);
    return NextResponse.json({ error: "Unable to connect to KlickTipp." }, { status: 502 });
  }
}
