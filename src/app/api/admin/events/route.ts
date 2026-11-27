import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse } from "@/lib/api-helpers";
import { EventRepo } from "@/models/Event";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = requireFirestoreDb();
    const events = await EventRepo.list(db);
    return NextResponse.json({ events });
  } catch (err) {
    return apiErrorResponse(err, "Failed to fetch events");
  }
}

export async function POST(req: Request) {
  try {
    requireFirestoreDb();
    const body = await req.json().catch(() => null);
    const title = typeof body?.title === "string" ? body.title.trim() : "";
    const dateVal = body?.date ? new Date(body.date) : null;
    if (!title || !dateVal || Number.isNaN(dateVal.getTime())) {
      return NextResponse.json({ error: "Valid event title and date are required." }, { status: 400 });
    }

    const galleryImages = Array.isArray(body?.galleryImages)
      ? body.galleryImages.map((x: unknown) => String(x).trim()).filter(Boolean)
      : [];

    const event = await EventRepo.create({
      title,
      date: dateVal,
      location: typeof body?.location === "string" ? body.location.trim() : "",
      description: typeof body?.description === "string" ? body.description : "",
      externalLink: typeof body?.externalLink === "string" ? body.externalLink.trim() : "",
      galleryImages,
      isPast: Boolean(body?.isPast),
    });

    return NextResponse.json({ event }, { status: 201 });
  } catch (err) {
    return apiErrorResponse(err, "Failed to create event");
  }
}
