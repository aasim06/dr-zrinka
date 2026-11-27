import { NextResponse } from "next/server";
import { processPublicInquiry } from "@/lib/inquiry-service";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }

  const result = await processPublicInquiry(body as Record<string, unknown>);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json({ ok: true, id: result.id, skipped: result.skipped });
}
