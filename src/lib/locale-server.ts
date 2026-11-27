import { cookies, headers } from "next/headers";
import { LOCALE_COOKIE, normalizeLocale, type Locale } from "@/lib/i18n";

export function getServerLocale(): Locale {
  try {
    const h = headers().get("x-locale");
    if (h === "de" || h === "en") return h;
    const c = cookies().get(LOCALE_COOKIE)?.value;
    return normalizeLocale(c);
  } catch {
    return "en";
  }
}
