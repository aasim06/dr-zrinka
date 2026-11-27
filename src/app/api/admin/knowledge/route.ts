import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse } from "@/lib/api-helpers";
import { ensureBaseSeedData } from "@/lib/seed";
import { AiKnowledgeRepo } from "@/models/AiKnowledge";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = requireFirestoreDb();
    await ensureBaseSeedData();
    const items = await AiKnowledgeRepo.list(false, db);
    return NextResponse.json({ items });
  } catch (err) {
    return apiErrorResponse(err, "Failed to fetch AI knowledge");
  }
}

export async function POST(req: Request) {
  try {
    requireFirestoreDb();
    const body = await req.json().catch(() => null);
    const topic = typeof body?.topic === "string" ? body.topic.trim() : "";
    const content = typeof body?.content === "string" ? body.content.trim() : "";
    if (!topic || !content) {
      return NextResponse.json({ error: "Topic and content are required." }, { status: 400 });
    }

    const item = await AiKnowledgeRepo.create({
      topic,
      content,
      active: body?.active !== false,
    });
    return NextResponse.json({ item }, { status: 201 });
  } catch (err) {
    return apiErrorResponse(err, "Failed to create knowledge block");
  }
}
