import { cert, getApps, initializeApp, type App, type ServiceAccount } from "firebase-admin/app";
import { getFirestore, Timestamp, type Firestore } from "firebase-admin/firestore";

export const COLLECTIONS = {
  posts: "posts",
  events: "events",
  inquiries: "inquiries",
  aiKnowledge: "ai_knowledge",
  aiChatLogs: "ai_chat_logs",
  siteSettings: "site_settings",
  subscribers: "subscribers",
} as const;

type FirebaseCache = {
  app: App | null;
  db: Firestore | null;
};

declare global {
  // eslint-disable-next-line no-var
  var __firebaseCache: FirebaseCache | undefined;
}

const cache: FirebaseCache = global.__firebaseCache ?? { app: null, db: null };
global.__firebaseCache = cache;

function parseServiceAccount(): ServiceAccount | null {
  const rawJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim();
  if (rawJson) {
    try {
      const parsed = JSON.parse(rawJson) as {
        project_id?: string;
        projectId?: string;
        client_email?: string;
        clientEmail?: string;
        private_key?: string;
        privateKey?: string;
      };
      const projectId = parsed.project_id || parsed.projectId;
      const clientEmail = parsed.client_email || parsed.clientEmail;
      const privateKey = (parsed.private_key || parsed.privateKey)?.replace(/\\n/g, "\n");
      if (projectId && clientEmail && privateKey) {
        return { projectId, clientEmail, privateKey };
      }
    } catch (err) {
      console.error("[Firebase] Invalid FIREBASE_SERVICE_ACCOUNT_JSON:", err);
      return null;
    }
  }

  const projectId = process.env.FIREBASE_PROJECT_ID?.trim();
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL?.trim();
  const rawKey = process.env.FIREBASE_PRIVATE_KEY?.trim();
  if (!projectId || !clientEmail || !rawKey) return null;

  const privateKey = rawKey.replace(/^["']|["']$/g, "").replace(/\\n/g, "\n");
  return { projectId, clientEmail, privateKey };
}

export function isFirebaseConfigured(): boolean {
  return Boolean(parseServiceAccount());
}

export function getFirestoreDb(): Firestore | null {
  if (cache.db) return cache.db;

  const serviceAccount = parseServiceAccount();
  if (!serviceAccount) return null;

  const app = getApps().length > 0 ? getApps()[0] : initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore(app);
  try {
    db.settings({ ignoreUndefinedProperties: true });
  } catch {
    // Settings may already be frozen across hot reloads
  }

  cache.app = app;
  cache.db = db;
  return db;
}

export function requireFirestoreDb(): Firestore {
  const db = getFirestoreDb();
  if (!db) {
    throw new Error(
      "Firebase is not configured. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in .env.local."
    );
  }
  return db;
}

export function toIsoString(val: unknown): string {
  if (!val) return "";
  if (val instanceof Timestamp) return val.toDate().toISOString();
  if (val instanceof Date) return val.toISOString();
  if (typeof val === "string") return val;
  if (typeof val === "object" && "toDate" in val && typeof (val as { toDate: () => Date }).toDate === "function") {
    return (val as { toDate: () => Date }).toDate().toISOString();
  }
  return "";
}
