import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse, isValidDocId } from "@/lib/api-helpers";
import { InquiryRepo } from "@/models/Inquiry";
import { INQUIRY_STATUSES, type InquiryStatus } from "@/lib/constants";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    requireFirestoreDb();
    if (!isValidDocId(params.id)) {
      return NextResponse.json({ error: "Invalid inquiry ID" }, { status: 400 });
    }

    const body = await req.json().catch(() => null);
    const rawStatus = typeof body?.status === "string" ? body.status : "";
    if (!(INQUIRY_STATUSES as readonly string[]).includes(rawStatus)) {
      return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
    }

    const inquiry = await InquiryRepo.updateStatus(params.id, rawStatus as InquiryStatus);
    if (!inquiry) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }
    return NextResponse.json({ inquiry });
  } catch (err) {
    return apiErrorResponse(err, "Failed to update inquiry");
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    requireFirestoreDb();
    if (!isValidDocId(params.id)) {
      return NextResponse.json({ error: "Invalid inquiry ID" }, { status: 400 });
    }
    const ok = await InquiryRepo.remove(params.id);
    if (!ok) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return apiErrorResponse(err, "Failed to delete inquiry");
  }
}
