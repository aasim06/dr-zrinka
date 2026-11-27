import { COLLECTIONS, requireFirestoreDb, toIsoString } from "@/lib/firebase";
import type { Firestore } from "firebase-admin/firestore";

export function calculateReadingTime(rawContent: string): number {
  const plain = rawContent.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!plain) return 1;
  const words = plain.split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export type PostRecord = {
  _id: string;
  title: string;
  slug: string;
  language: "EN" | "DE";
  excerpt: string;
  content: string;
  coverImage: string;
  audioUrl: string;
  readingTime: number;
  published: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
};

function mapPost(id: string, data: FirebaseFirestore.DocumentData): PostRecord {
  return {
    _id: id,
    title: String(data.title || ""),
    slug: String(data.slug || ""),
    language: data.language === "DE" ? "DE" : "EN",
    excerpt: String(data.excerpt || ""),
    content: String(data.content || ""),
    coverImage: String(data.coverImage || ""),
    audioUrl: String(data.audioUrl || ""),
    readingTime: typeof data.readingTime === "number" ? data.readingTime : calculateReadingTime(String(data.content || "")),
    published: Boolean(data.published),
    publishedAt: toIsoString(data.publishedAt) || undefined,
    createdAt: toIsoString(data.createdAt),
    updatedAt: toIsoString(data.updatedAt),
  };
}

export const PostRepo = {
  async list(opts?: { publishedOnly?: boolean; search?: string }, dbOverride?: Firestore): Promise<PostRecord[]> {
    const db = dbOverride ?? requireFirestoreDb();
    const snap = await db.collection(COLLECTIONS.posts).orderBy("updatedAt", "desc").get();
    let items = snap.docs.map((d) => mapPost(d.id, d.data()));

    if (opts?.publishedOnly) {
      items = items
        .filter((p) => p.published)
        .sort((a, b) => (b.publishedAt || b.createdAt).localeCompare(a.publishedAt || a.createdAt));
    }
    if (opts?.search) {
      const q = opts.search.toLowerCase();
      items = items.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }
    return items;
  },

  async getById(id: string): Promise<PostRecord | null> {
    const db = requireFirestoreDb();
    const doc = await db.collection(COLLECTIONS.posts).doc(id).get();
    return doc.exists ? mapPost(doc.id, doc.data()!) : null;
  },

  async getPublishedBySlug(slug: string, dbOverride?: Firestore): Promise<PostRecord | null> {
    const db = dbOverride ?? requireFirestoreDb();
    const snap = await db.collection(COLLECTIONS.posts).where("slug", "==", slug).limit(1).get();
    if (snap.empty) return null;
    const post = mapPost(snap.docs[0].id, snap.docs[0].data());
    return post.published ? post : null;
  },

  async existsBySlug(slug: string, excludeId?: string): Promise<boolean> {
    const db = requireFirestoreDb();
    const snap = await db.collection(COLLECTIONS.posts).where("slug", "==", slug).get();
    return snap.docs.some((d) => d.id !== excludeId);
  },

  async create(input: {
    title: string;
    slug: string;
    language?: "EN" | "DE";
    excerpt?: string;
    content?: string;
    coverImage?: string;
    audioUrl?: string;
    published?: boolean;
    publishedAt?: Date;
  }): Promise<PostRecord> {
    const db = requireFirestoreDb();
    const now = new Date();
    const content = input.content ?? "";
    const published = Boolean(input.published);
    const payload = {
      title: input.title,
      slug: input.slug.toLowerCase(),
      language: input.language === "DE" ? "DE" : "EN",
      excerpt: input.excerpt ?? "",
      content,
      coverImage: input.coverImage ?? "",
      audioUrl: input.audioUrl ?? "",
      readingTime: calculateReadingTime(content),
      published,
      publishedAt: published ? (input.publishedAt ?? now) : null,
      createdAt: now,
      updatedAt: now,
    };
    const ref = await db.collection(COLLECTIONS.posts).add(payload);
    const created = await ref.get();
    return mapPost(created.id, created.data()!);
  },

  async update(
    id: string,
    patch: Partial<{
      title: string;
      slug: string;
      language: "EN" | "DE";
      excerpt: string;
      content: string;
      coverImage: string;
      audioUrl: string;
      published: boolean;
    }>
  ): Promise<PostRecord | null> {
    const db = requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.posts).doc(id);
    const existing = await ref.get();
    if (!existing.exists) return null;

    const current = existing.data()!;
    const update: Record<string, unknown> = { updatedAt: new Date() };
    if (patch.title !== undefined) update.title = patch.title;
    if (patch.slug !== undefined) update.slug = patch.slug.toLowerCase();
    if (patch.language !== undefined) update.language = patch.language === "DE" ? "DE" : "EN";
    if (patch.excerpt !== undefined) update.excerpt = patch.excerpt;
    if (patch.content !== undefined) {
      update.content = patch.content;
      update.readingTime = calculateReadingTime(patch.content);
    }
    if (patch.coverImage !== undefined) update.coverImage = patch.coverImage;
    if (patch.audioUrl !== undefined) update.audioUrl = patch.audioUrl;
    if (patch.published !== undefined) {
      update.published = patch.published;
      if (patch.published && !current.publishedAt) {
        update.publishedAt = new Date();
      }
    }

    await ref.update(update);
    const updated = await ref.get();
    return mapPost(updated.id, updated.data()!);
  },

  async remove(id: string): Promise<boolean> {
    const db = requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.posts).doc(id);
    const snap = await ref.get();
    if (!snap.exists) return false;
    await ref.delete();
    return true;
  },
};
