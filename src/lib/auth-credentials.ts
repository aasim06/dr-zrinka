import bcrypt from "bcryptjs";

function timingSafeEqualString(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export function isAdminAuthConfigured(): boolean {
  return Boolean(
    process.env.ADMIN_EMAIL?.trim() &&
      process.env.ADMIN_PASSWORD &&
      process.env.JWT_SECRET?.trim() &&
      process.env.JWT_SECRET.trim().length >= 16
  );
}

export async function verifyAdminCredentials(email: string, password: string): Promise<boolean> {
  const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredEmail || !configuredPassword) return false;

  if (email.trim().toLowerCase() !== configuredEmail) return false;

  // Support either bcrypt hash ($2a$ / $2b$ / $2y$) or plain secret in .env
  if (/^\$2[aby]\$\d{2}\$/.test(configuredPassword)) {
    return bcrypt.compare(password, configuredPassword);
  }
  return timingSafeEqualString(password, configuredPassword);
}
