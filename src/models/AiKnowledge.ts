import { COLLECTIONS, requireFirestoreDb, toIsoString } from "@/lib/firebase";
import type { Firestore } from "firebase-admin/firestore";

export type AiKnowledgeRecord = {
  _id: string;
  topic: string;
  content: string;
  active: boolean;
  updatedAt: string;
};

function mapKnowledge(id: string, data: FirebaseFirestore.DocumentData): AiKnowledgeRecord {
  return {
    _id: id,
    topic: String(data.topic || ""),
    content: String(data.content || ""),
    active: data.active !== false,
    updatedAt: toIsoString(data.updatedAt),
  };
}

export const AiKnowledgeRepo = {
  async list(activeOnly = false, dbOverride?: Firestore): Promise<AiKnowledgeRecord[]> {
    const db = dbOverride ?? requireFirestoreDb();
    const snap = await db.collection(COLLECTIONS.aiKnowledge).orderBy("updatedAt", "desc").get();
    const items = snap.docs.map((d) => mapKnowledge(d.id, d.data()));
    return activeOnly ? items.filter((i) => i.active) : items;
  },

  async create(input: { topic: string; content: string; active?: boolean }): Promise<AiKnowledgeRecord> {
    const db = requireFirestoreDb();
    const ref = await db.collection(COLLECTIONS.aiKnowledge).add({
      topic: input.topic,
      content: input.content,
      active: input.active !== false,
      updatedAt: new Date(),
    });
    const created = await ref.get();
    return mapKnowledge(created.id, created.data()!);
  },

  async update(
    id: string,
    patch: Partial<{ topic: string; content: string; active: boolean }>
  ): Promise<AiKnowledgeRecord | null> {
    const db = requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.aiKnowledge).doc(id);
    const snap = await ref.get();
    if (!snap.exists) return null;
    await ref.update({ ...patch, updatedAt: new Date() });
    const updated = await ref.get();
    return mapKnowledge(updated.id, updated.data()!);
  },

  async remove(id: string): Promise<boolean> {
    const db = requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.aiKnowledge).doc(id);
    const snap = await ref.get();
    if (!snap.exists) return false;
    await ref.delete();
    return true;
  },
};
