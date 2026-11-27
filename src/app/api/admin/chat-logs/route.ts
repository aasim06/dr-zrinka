import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse } from "@/lib/api-helpers";
import { AiChatLogRepo } from "@/models/AiChatLog";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = requireFirestoreDb();
    const logs = await AiChatLogRepo.list(50, db);
    return NextResponse.json({ logs });
  } catch (err) {
    return apiErrorResponse(err, "Failed to fetch AI chat logs");
  }
}
