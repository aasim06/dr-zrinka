import { COLLECTIONS, requireFirestoreDb } from "@/lib/firebase";
import type { Firestore } from "firebase-admin/firestore";

export type InstitutionLogo = {
  name: string;
  logoUrl: string;
};

export type SiteSettingsRecord = {
  institutionLogos: InstitutionLogo[];
  speakerKitPdfUrl: string;
  bookingCalendarUrl: string;
  impressumHtml: string;
  datenschutzHtml: string;
};

function mapSettings(data?: FirebaseFirestore.DocumentData): SiteSettingsRecord | null {
  if (!data) return null;
  const logos = Array.isArray(data.institutionLogos)
    ? data.institutionLogos.map((l: FirebaseFirestore.DocumentData) => ({
        name: String(l.name || ""),
        logoUrl: String(l.logoUrl || ""),
      }))
    : [];
  return {
    institutionLogos: logos,
    speakerKitPdfUrl: String(data.speakerKitPdfUrl || ""),
    bookingCalendarUrl: String(data.bookingCalendarUrl || "/strategic-conversation"),
    impressumHtml: String(data.impressumHtml || ""),
    datenschutzHtml: String(data.datenschutzHtml || ""),
  };
}

export const SiteSettingsRepo = {
  async get(dbOverride?: Firestore): Promise<SiteSettingsRecord | null> {
    const db = dbOverride ?? requireFirestoreDb();
    const doc = await db.collection(COLLECTIONS.siteSettings).doc("default").get();
    return doc.exists ? mapSettings(doc.data()) : null;
  },

  async upsert(patch: Partial<SiteSettingsRecord>, dbOverride?: Firestore): Promise<SiteSettingsRecord> {
    const db = dbOverride ?? requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.siteSettings).doc("default");
    await ref.set(patch, { merge: true });
    const updated = await ref.get();
    return mapSettings(updated.data())!;
  },
};
