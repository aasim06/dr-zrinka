import { COLLECTIONS, requireFirestoreDb, toIsoString } from "@/lib/firebase";
import type { Firestore } from "firebase-admin/firestore";

export type SubscriberRecord = {
  _id: string;
  uid: string;
  email: string;
  name: string;
  picture: string;
  language: "English" | "German";
  subscribedToJournal: boolean;
  lastLoginAt: string;
  createdAt: string;
};

function mapSubscriber(id: string, data: FirebaseFirestore.DocumentData): SubscriberRecord {
  return {
    _id: id,
    uid: String(data.uid || id),
    email: String(data.email || ""),
    name: String(data.name || ""),
    picture: String(data.picture || ""),
    language: data.language === "German" ? "German" : "English",
    subscribedToJournal: Boolean(data.subscribedToJournal),
    lastLoginAt: toIsoString(data.lastLoginAt),
    createdAt: toIsoString(data.createdAt),
  };
}

export const SubscriberRepo = {
  async upsert(
    input: {
      uid: string;
      email: string;
      name?: string;
      picture?: string;
      language?: "English" | "German";
      subscribedToJournal?: boolean;
    },
    dbOverride?: Firestore
  ): Promise<SubscriberRecord> {
    const db = dbOverride ?? requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.subscribers).doc(input.uid);
    const snap = await ref.get();
    const now = new Date();

    const patch: Record<string, unknown> = {
      uid: input.uid,
      email: input.email.toLowerCase(),
      name: input.name ?? "",
      picture: input.picture ?? "",
      language: input.language === "German" ? "German" : "English",
      lastLoginAt: now,
    };

    if (!snap.exists) {
      patch.createdAt = now;
      patch.subscribedToJournal = Boolean(input.subscribedToJournal);
    } else if (input.subscribedToJournal) {
      patch.subscribedToJournal = true;
    }

    await ref.set(patch, { merge: true });
    const updated = await ref.get();
    return mapSubscriber(updated.id, updated.data()!);
  },

  async list(limitCount = 50, dbOverride?: Firestore): Promise<SubscriberRecord[]> {
    const db = dbOverride ?? requireFirestoreDb();
    const snap = await db.collection(COLLECTIONS.subscribers).orderBy("lastLoginAt", "desc").limit(limitCount).get();
    return snap.docs.map((d) => mapSubscriber(d.id, d.data()));
  },
};
