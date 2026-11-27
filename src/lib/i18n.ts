export type Locale = "en" | "de";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function normalizeLocale(value?: string | null): Locale {
  return value === "de" ? "de" : "en";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/de") return "/";
  if (pathname.startsWith("/de/")) return pathname.slice(3) || "/";
  return pathname;
}

export function localizePath(href: string, locale: Locale): string {
  if (!href.startsWith("/")) return href;
  if (href.startsWith("/api") || href.startsWith("/admin") || href.startsWith("/images")) {
    return href;
  }
  const clean = stripLocalePrefix(href);
  if (locale === "de") {
    return clean === "/" ? "/de" : `/de${clean}`;
  }
  return clean;
}
