import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const kind = body.kind === "strategic-conversation" ? "strategic-conversation" : "contact";
  if (kind === "contact") {
    if (!body.firstName || !body.message) {
      return NextResponse.json({ error: "First name and message are required." }, { status: 400 });
    }
  } else {
    if (!body.name || !body.situation) {
      return NextResponse.json({ error: "Name and current situation are required." }, { status: 400 });
    }
  }

  // Optional webhook forwarding if configured
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...body, receivedAt: new Date().toISOString() }),
      });
    } catch (err) {
      console.error("Contact webhook failed:", err);
      return NextResponse.json({ error: "Unable to send inquiry right now." }, { status: 502 });
    }
  } else {
    console.info(`[${kind}] Inquiry received from ${email}`);
  }

  return NextResponse.json({ ok: true });
}
