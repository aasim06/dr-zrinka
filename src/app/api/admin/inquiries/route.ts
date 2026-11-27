import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse } from "@/lib/api-helpers";
import { InquiryRepo } from "@/models/Inquiry";
import { INQUIRY_STATUSES, type InquiryStatus } from "@/lib/constants";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const db = requireFirestoreDb();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const validStatus =
      status && (INQUIRY_STATUSES as readonly string[]).includes(status) ? (status as InquiryStatus) : undefined;

    const inquiries = await InquiryRepo.list(validStatus, db);
    return NextResponse.json({ inquiries });
  } catch (err) {
    return apiErrorResponse(err, "Failed to fetch inquiries");
  }
}
