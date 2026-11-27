import { NextResponse } from "next/server";

export function isValidDocId(id: string): boolean {
  return Boolean(id && id.trim().length > 0 && !id.includes("/"));
}

export function apiErrorResponse(err: unknown, fallback = "Server error") {
  const message = err instanceof Error ? err.message : fallback;
  const isConfig =
    message.includes("Firebase is not configured") ||
    message.includes("FIREBASE_") ||
    message.includes("Could not load the default credentials");
  console.error("[API Error]", err);
  return NextResponse.json(
    {
      error: isConfig
        ? "Firebase is not configured. Add FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY to .env.local."
        : message,
    },
    { status: isConfig ? 503 : 500 }
  );
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}
