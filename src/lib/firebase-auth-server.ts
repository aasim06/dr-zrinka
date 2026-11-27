import { getApps } from "firebase-admin/app";
import { getAuth, type DecodedIdToken } from "firebase-admin/auth";
import { getFirestoreDb } from "@/lib/firebase";

export const READER_COOKIE_NAME = "zrinka_reader_session";

export type VerifiedGoogleUser = {
  uid: string;
  email: string;
  emailVerified: boolean;
  name: string;
  picture: string;
  signInProvider?: string;
};

export async function verifyFirebaseIdToken(
  idToken: string
): Promise<{ ok: true; user: VerifiedGoogleUser } | { ok: false; error: string; status: number }> {
  const cleanToken = idToken.trim();
  if (!cleanToken) {
    return { ok: false, error: "Missing Firebase ID token.", status: 400 };
  }

  // Ensure firebase-admin app is initialized via existing server initializer
  const db = getFirestoreDb();
  const app = getApps()[0];
  if (!db && !app) {
    return {
      ok: false,
      error: "Firebase Admin is not configured on the server.",
      status: 503,
    };
  }

  try {
    const auth = app ? getAuth(app) : getAuth();
    const decoded: DecodedIdToken = await auth.verifyIdToken(cleanToken, true);
    const email = (decoded.email ?? "").trim().toLowerCase();
    if (!email) {
      return { ok: false, error: "Authenticated account has no email address.", status: 403 };
    }
    if (!decoded.email_verified) {
      return { ok: false, error: "Google account email must be verified.", status: 403 };
    }

    return {
      ok: true,
      user: {
        uid: decoded.uid,
        email,
        emailVerified: Boolean(decoded.email_verified),
        name: typeof decoded.name === "string" ? decoded.name.trim() : "",
        picture: typeof decoded.picture === "string" ? decoded.picture : "",
        signInProvider: decoded.firebase?.sign_in_provider,
      },
    };
  } catch (err) {
    console.error("[verifyFirebaseIdToken] Failed:", err);
    return {
      ok: false,
      error: "Invalid or expired Google sign-in session. Please try again.",
      status: 401,
    };
  }
}

export function getAllowedAdminEmails(): string[] {
  const raw = [process.env.ADMIN_EMAIL ?? "", process.env.ADMIN_GOOGLE_EMAILS ?? ""]
    .join(",")
    .split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);
  return Array.from(new Set(raw));
}

export function isAdminGoogleEmailAllowed(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return false;
  return getAllowedAdminEmails().includes(normalized);
}

function getSigningSecret(): string {
  const secret = process.env.JWT_SECRET?.trim() || process.env.FIREBASE_PRIVATE_KEY?.trim() || "";
  return secret;
}

function toBase64Url(input: string | Uint8Array): string {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : input;
  return Buffer.from(bytes)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function fromBase64Url(value: string): string {
  const pad = value.length % 4 === 0 ? "" : "=".repeat(4 - (value.length % 4));
  return Buffer.from(value.replace(/-/g, "+").replace(/_/g, "/") + pad, "base64").toString("utf8");
}

async function signHmac(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return toBase64Url(new Uint8Array(sig));
}

export type ReaderSessionPayload = {
  role: "subscriber";
  uid: string;
  email: string;
  name: string;
  exp: number;
};

export async function signReaderToken(user: { uid: string; email: string; name?: string }): Promise<string> {
  const secret = getSigningSecret();
  if (!secret || secret.length < 16) {
    throw new Error("Signing secret is not configured.");
  }
  const payload: ReaderSessionPayload = {
    role: "subscriber",
    uid: user.uid,
    email: user.email,
    name: user.name ?? "",
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
  };
  const body = toBase64Url(JSON.stringify(payload));
  const sig = await signHmac(body, `reader:${secret}`);
  return `${body}.${sig}`;
}

export async function verifyReaderToken(token?: string | null): Promise<ReaderSessionPayload | null> {
  if (!token) return null;
  const secret = getSigningSecret();
  if (!secret || secret.length < 16) return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [body, sig] = parts;
  if (!body || !sig) return null;

  try {
    const expected = await signHmac(body, `reader:${secret}`);
    if (sig.length !== expected.length) return null;
    let diff = 0;
    for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
    if (diff !== 0) return null;

    const payload = JSON.parse(fromBase64Url(body)) as ReaderSessionPayload;
    if (payload.role !== "subscriber" || !payload.email || !payload.exp) return null;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}
