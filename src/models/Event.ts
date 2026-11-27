import { COLLECTIONS, requireFirestoreDb, toIsoString } from "@/lib/firebase";
import type { Firestore } from "firebase-admin/firestore";

export type EventRecord = {
  _id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  externalLink: string;
  galleryImages: string[];
  isPast: boolean;
  createdAt: string;
  updatedAt: string;
};

function mapEvent(id: string, data: FirebaseFirestore.DocumentData): EventRecord {
  return {
    _id: id,
    title: String(data.title || ""),
    date: toIsoString(data.date),
    location: String(data.location || ""),
    description: String(data.description || ""),
    externalLink: String(data.externalLink || ""),
    galleryImages: Array.isArray(data.galleryImages) ? data.galleryImages.map(String) : [],
    isPast: Boolean(data.isPast),
    createdAt: toIsoString(data.createdAt),
    updatedAt: toIsoString(data.updatedAt),
  };
}

export const EventRepo = {
  async list(dbOverride?: Firestore): Promise<EventRecord[]> {
    const db = dbOverride ?? requireFirestoreDb();
    const snap = await db.collection(COLLECTIONS.events).orderBy("date", "desc").get();
    const items = snap.docs.map((d) => mapEvent(d.id, d.data()));
    return items.sort((a, b) => Number(a.isPast) - Number(b.isPast) || b.date.localeCompare(a.date));
  },

  async create(input: {
    title: string;
    date: Date;
    location?: string;
    description?: string;
    externalLink?: string;
    galleryImages?: string[];
    isPast?: boolean;
  }): Promise<EventRecord> {
    const db = requireFirestoreDb();
    const now = new Date();
    const ref = await db.collection(COLLECTIONS.events).add({
      title: input.title,
      date: input.date,
      location: input.location ?? "",
      description: input.description ?? "",
      externalLink: input.externalLink ?? "",
      galleryImages: input.galleryImages ?? [],
      isPast: Boolean(input.isPast),
      createdAt: now,
      updatedAt: now,
    });
    const created = await ref.get();
    return mapEvent(created.id, created.data()!);
  },

  async update(
    id: string,
    patch: Partial<{
      title: string;
      date: Date;
      location: string;
      description: string;
      externalLink: string;
      galleryImages: string[];
      isPast: boolean;
    }>
  ): Promise<EventRecord | null> {
    const db = requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.events).doc(id);
    const snap = await ref.get();
    if (!snap.exists) return null;

    await ref.update({ ...patch, updatedAt: new Date() });
    const updated = await ref.get();
    return mapEvent(updated.id, updated.data()!);
  },

  async remove(id: string): Promise<boolean> {
    const db = requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.events).doc(id);
    const snap = await ref.get();
    if (!snap.exists) return false;
    await ref.delete();
    return true;
  },
};
