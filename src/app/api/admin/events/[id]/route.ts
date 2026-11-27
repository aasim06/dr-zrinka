import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse, isValidDocId } from "@/lib/api-helpers";
import { EventRepo } from "@/models/Event";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    requireFirestoreDb();
    if (!isValidDocId(params.id)) {
      return NextResponse.json({ error: "Invalid event ID" }, { status: 400 });
    }

    const body = await req.json().catch(() => null);
    const patch: Parameters<typeof EventRepo.update>[1] = {};
    if (typeof body?.title === "string" && body.title.trim()) patch.title = body.title.trim();
    if (body?.date) {
      const d = new Date(body.date);
      if (!Number.isNaN(d.getTime())) patch.date = d;
    }
    if (typeof body?.location === "string") patch.location = body.location.trim();
    if (typeof body?.description === "string") patch.description = body.description;
    if (typeof body?.externalLink === "string") patch.externalLink = body.externalLink.trim();
    if (Array.isArray(body?.galleryImages)) {
      patch.galleryImages = body.galleryImages.map((x: unknown) => String(x).trim()).filter(Boolean);
    }
    if (typeof body?.isPast === "boolean") patch.isPast = body.isPast;

    const event = await EventRepo.update(params.id, patch);
    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ event });
  } catch (err) {
    return apiErrorResponse(err, "Failed to update event");
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    requireFirestoreDb();
    if (!isValidDocId(params.id)) {
      return NextResponse.json({ error: "Invalid event ID" }, { status: 400 });
    }
    const ok = await EventRepo.remove(params.id);
    if (!ok) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return apiErrorResponse(err, "Failed to delete event");
  }
}
