import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse } from "@/lib/api-helpers";
import { importStaticContentToDB } from "@/lib/seed";

export async function POST() {
  try {
    requireFirestoreDb();
    const result = await importStaticContentToDB();
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    return apiErrorResponse(err, "Failed to import initial data");
  }
}
