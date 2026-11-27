import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse } from "@/lib/api-helpers";
import { ensureBaseSeedData } from "@/lib/seed";
import { SiteSettingsRepo } from "@/models/SiteSettings";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = requireFirestoreDb();
    await ensureBaseSeedData();
    const settings = await SiteSettingsRepo.get(db);
    return NextResponse.json({ settings });
  } catch (err) {
    return apiErrorResponse(err, "Failed to load site settings");
  }
}

export async function PUT(req: Request) {
  try {
    const db = requireFirestoreDb();
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const logos = Array.isArray(body.institutionLogos)
      ? body.institutionLogos
          .map((item: unknown) => {
            if (!item || typeof item !== "object") return null;
            const obj = item as { name?: unknown; logoUrl?: unknown };
            const name = typeof obj.name === "string" ? obj.name.trim() : "";
            const logoUrl = typeof obj.logoUrl === "string" ? obj.logoUrl.trim() : "";
            return name ? { name, logoUrl } : null;
          })
          .filter(Boolean)
      : undefined;

    const patch: Record<string, unknown> = {};
    if (logos !== undefined) patch.institutionLogos = logos;
    if (typeof body.speakerKitPdfUrl === "string") patch.speakerKitPdfUrl = body.speakerKitPdfUrl.trim();
    if (typeof body.bookingCalendarUrl === "string") patch.bookingCalendarUrl = body.bookingCalendarUrl.trim();
    if (typeof body.impressumHtml === "string") patch.impressumHtml = body.impressumHtml;
    if (typeof body.datenschutzHtml === "string") patch.datenschutzHtml = body.datenschutzHtml;

    const settings = await SiteSettingsRepo.upsert(patch, db);
    return NextResponse.json({ settings });
  } catch (err) {
    return apiErrorResponse(err, "Failed to save site settings");
  }
}
