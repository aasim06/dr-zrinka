import { FieldValue, type Firestore } from "firebase-admin/firestore";
import { COLLECTIONS, requireFirestoreDb, toIsoString } from "@/lib/firebase";

export type ChatLogMessage = {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};

export type AiChatLogRecord = {
  _id: string;
  sessionId: string;
  messages: ChatLogMessage[];
  leadCaptured: boolean;
  createdAt: string;
};

function mapChatLog(id: string, data: FirebaseFirestore.DocumentData): AiChatLogRecord {
  const msgs = Array.isArray(data.messages)
    ? data.messages.map((m: FirebaseFirestore.DocumentData) => ({
        role: (m.role === "assistant" ? "assistant" : "user") as "user" | "assistant",
        content: String(m.content || ""),
        timestamp: toIsoString(m.timestamp),
      }))
    : [];
  return {
    _id: id,
    sessionId: String(data.sessionId || id),
    messages: msgs,
    leadCaptured: Boolean(data.leadCaptured),
    createdAt: toIsoString(data.createdAt),
  };
}

export const AiChatLogRepo = {
  async list(limitCount = 50, dbOverride?: Firestore): Promise<AiChatLogRecord[]> {
    const db = dbOverride ?? requireFirestoreDb();
    const snap = await db.collection(COLLECTIONS.aiChatLogs).orderBy("createdAt", "desc").limit(limitCount).get();
    return snap.docs.map((d) => mapChatLog(d.id, d.data()));
  },

  async count(dbOverride?: Firestore): Promise<number> {
    const db = dbOverride ?? requireFirestoreDb();
    const agg = await db.collection(COLLECTIONS.aiChatLogs).count().get();
    return agg.data().count;
  },

  async appendTurn(
    db: Firestore,
    sessionId: string,
    userMessage: string,
    assistantMessage: string,
    leadCaptured: boolean
  ): Promise<void> {
    const safeId = sessionId.replace(/[/\\]/g, "_");
    const ref = db.collection(COLLECTIONS.aiChatLogs).doc(safeId);
    const snap = await ref.get();
    const now = new Date();
    const turn = [
      { role: "user", content: userMessage, timestamp: now },
      { role: "assistant", content: assistantMessage, timestamp: new Date() },
    ];

    if (!snap.exists) {
      await ref.set({
        sessionId: safeId,
        messages: turn,
        leadCaptured,
        createdAt: now,
      });
    } else {
      const update: Record<string, unknown> = {
        messages: FieldValue.arrayUnion(...turn),
      };
      if (leadCaptured) update.leadCaptured = true;
      await ref.update(update);
    }
  },
};
