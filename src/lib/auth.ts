export const ADMIN_COOKIE_NAME = "zrinka_admin_session";

export type AdminSessionPayload = {
  email: string;
  role: "admin";
  iat: number;
  exp: number;
};

function getSecret(): string {
  const secret = process.env.JWT_SECRET?.trim();
  if (!secret || secret.length < 16) {
    throw new Error("JWT_SECRET must be configured (at least 16 characters).");
  }
  return secret;
}

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(input: string): Uint8Array {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((input.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function importHmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function signAdminToken(email: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = toBase64Url(new TextEncoder().encode(JSON.stringify({ alg: "HS256", typ: "JWT" })));
  const payload = toBase64Url(
    new TextEncoder().encode(
      JSON.stringify({
        email,
        role: "admin",
        iat: now,
        exp: now + 60 * 60 * 24 * 7,
      } satisfies AdminSessionPayload)
    )
  );
  const data = `${header}.${payload}`;
  const key = await importHmacKey(getSecret());
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return `${data}.${toBase64Url(new Uint8Array(sig))}`;
}

export async function verifyAdminToken(token?: string | null): Promise<AdminSessionPayload | null> {
  if (!token) return null;
  try {
    const secret = process.env.JWT_SECRET?.trim();
    if (!secret || secret.length < 16) return null;

    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [headerB64, payloadB64, sigB64] = parts;

    const key = await importHmacKey(secret);
    const sigBytes = fromBase64Url(sigB64);
    const sigBuf = sigBytes.buffer.slice(sigBytes.byteOffset, sigBytes.byteOffset + sigBytes.byteLength) as ArrayBuffer;
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBuf,
      new TextEncoder().encode(`${headerB64}.${payloadB64}`)
    );
    if (!valid) return null;

    const payload = JSON.parse(new TextDecoder().decode(fromBase64Url(payloadB64))) as AdminSessionPayload;
    if (payload.role !== "admin" || typeof payload.email !== "string") return null;
    if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) return null;

    return payload;
  } catch {
    return null;
  }
}
