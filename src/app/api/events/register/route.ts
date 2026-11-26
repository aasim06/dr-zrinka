import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!body.firstName || !body.lastName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please complete all required registration fields." }, { status: 400 });
  }
  if (!body.confirmAttendance || !body.consentData) {
    return NextResponse.json({ error: "Please confirm your registration and data consent." }, { status: 400 });
  }

  const webhook = process.env.EVENT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, registeredAt: new Date().toISOString() }),
      });
    } catch (err) {
      console.error("Event registration webhook failed:", err);
      return NextResponse.json({ error: "Registration could not be saved." }, { status: 502 });
    }
  } else {
    console.info(`[event-register:${body.eventSlug ?? "event"}] Registration from ${email}`);
  }

  const code = `ZR-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
  return NextResponse.json({ ok: true, confirmationCode: code });
}
