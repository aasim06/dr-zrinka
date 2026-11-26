import { NextResponse } from "next/server";
import { getEventApiKey, klicktippSignin } from "@/lib/klicktipp";

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  const firstName = str(body.firstName);
  const lastName = str(body.lastName);
  const email = str(body.email);

  if (!firstName || !lastName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please complete all required registration fields." }, { status: 400 });
  }
  if (!body.confirmAttendance || !body.consentData) {
    return NextResponse.json({ error: "Please confirm your registration and data consent." }, { status: 400 });
  }

  const eventSlug = str(body.eventSlug);
  const apiKey = getEventApiKey(eventSlug);

  try {
    if (apiKey) {
      const result = await klicktippSignin({
        apiKey,
        email,
        fields: {
          fieldFirstName: firstName,
          fieldLastName: lastName,
          fieldPhone: str(body.phone),
          field1000684: str(body.guests), // Number of Participants
          field1000683: str(body.language), // Preferred Language
        },
      });
      if (!result.ok) {
        return NextResponse.json({ error: "Registration could not be saved." }, { status: 502 });
      }
    } else {
      // Safety parity with PHP: if no API key is configured for this event, do not send to KlickTipp
      console.warn(`[/api/events/register] No KlickTipp API key configured for event "${eventSlug}".`);
    }

    const code = `ZR-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    return NextResponse.json({ ok: true, confirmationCode: code });
  } catch (err) {
    console.error("[/api/events/register] KlickTipp error:", err);
    return NextResponse.json({ error: "Registration could not be saved." }, { status: 502 });
  }
}
