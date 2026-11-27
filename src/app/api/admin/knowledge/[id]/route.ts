import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse, isValidDocId } from "@/lib/api-helpers";
import { AiKnowledgeRepo } from "@/models/AiKnowledge";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    requireFirestoreDb();
    if (!isValidDocId(params.id)) {
      return NextResponse.json({ error: "Invalid knowledge ID" }, { status: 400 });
    }

    const body = await req.json().catch(() => null);
    const patch: Parameters<typeof AiKnowledgeRepo.update>[1] = {};
    if (typeof body?.topic === "string" && body.topic.trim()) patch.topic = body.topic.trim();
    if (typeof body?.content === "string" && body.content.trim()) patch.content = body.content.trim();
    if (typeof body?.active === "boolean") patch.active = body.active;

    const item = await AiKnowledgeRepo.update(params.id, patch);
    if (!item) {
      return NextResponse.json({ error: "Knowledge entry not found" }, { status: 404 });
    }
    return NextResponse.json({ item });
  } catch (err) {
    return apiErrorResponse(err, "Failed to update knowledge entry");
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    requireFirestoreDb();
    if (!isValidDocId(params.id)) {
      return NextResponse.json({ error: "Invalid knowledge ID" }, { status: 400 });
    }
    const ok = await AiKnowledgeRepo.remove(params.id);
    if (!ok) {
      return NextResponse.json({ error: "Knowledge entry not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return apiErrorResponse(err, "Failed to delete knowledge entry");
  }
}
