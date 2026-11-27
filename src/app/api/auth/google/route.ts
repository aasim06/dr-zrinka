import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, signAdminToken } from "@/lib/auth";
import { isAdminGoogleEmailAllowed, verifyFirebaseIdToken } from "@/lib/firebase-auth-server";

export async function POST(req: Request) {
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.trim().length < 16) {
    return NextResponse.json(
      { error: "JWT_SECRET (16+ chars) must be configured in environment variables." },
      { status: 503 }
    );
  }

  const body = await req.json().catch(() => null);
  const idToken = typeof body?.idToken === "string" ? body.idToken : "";
  const verified = await verifyFirebaseIdToken(idToken);
  if (!verified.ok) {
    return NextResponse.json({ error: verified.error }, { status: verified.status });
  }

  if (!isAdminGoogleEmailAllowed(verified.user.email)) {
    return NextResponse.json(
      {
        error:
          "This Google account is not authorized for Executive Console access. Add it to ADMIN_EMAIL or ADMIN_GOOGLE_EMAILS.",
      },
      { status: 403 }
    );
  }

  const sessionToken = await signAdminToken(verified.user.email);
  const res = NextResponse.json({
    ok: true,
    email: verified.user.email,
    name: verified.user.name,
  });

  res.cookies.set(ADMIN_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
