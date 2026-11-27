import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/auth";
import { LOCALE_COOKIE } from "@/lib/i18n";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Admin API guard
  if (pathname.startsWith("/api/admin")) {
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const session = await verifyAdminToken(token);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  // Admin pages guard (always unprefixed)
  if (pathname === "/admin/login" || pathname.startsWith("/admin")) {
    const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
    const session = await verifyAdminToken(token);

    if (pathname === "/admin/login") {
      if (session) {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
      return NextResponse.next();
    }

    if (!session) {
      const loginUrl = new URL("/admin/login", req.url);
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // Skip other API routes
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Handle /de and /de/* routes via internal rewrite + x-locale: de
  if (pathname === "/de" || pathname.startsWith("/de/")) {
    const stripped = pathname.slice(3) || "/";
    if (stripped.startsWith("/admin") || stripped.startsWith("/api")) {
      return NextResponse.redirect(new URL(stripped, req.url));
    }

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-locale", "de");

    const rewriteUrl = req.nextUrl.clone();
    rewriteUrl.pathname = stripped;

    const res = NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });
    res.cookies.set(LOCALE_COOKIE, "de", {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  // Unprefixed public routes resolve cleanly as English
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", "en");
  const res = NextResponse.next({
    request: { headers: requestHeaders },
  });
  res.cookies.set(LOCALE_COOKIE, "en", {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  return res;
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
