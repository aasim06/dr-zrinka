"use client";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getUiCopy } from "@/data/translations";
import { localizePath } from "@/lib/i18n";

export function Footer() {
  const { locale, setLocale } = useLocale();
  const copy = getUiCopy(locale);

  const cols: { href: string; label: string; external?: boolean }[][] = [
    [
      { href: "/", label: copy.nav.home },
      { href: "/advisory", label: copy.nav.workWithMe },
      { href: "/executive-advisory", label: copy.nav.executiveAdvisory },
      { href: "/private-advisory", label: copy.nav.privateAdvisory },
      { href: "/keynotes", label: copy.nav.keynotes },
    ],
    [
      { href: "/book", label: copy.nav.book },
      { href: "/events", label: copy.nav.events },
      { href: "/about", label: copy.nav.about },
      { href: "/journal", label: copy.nav.journal },
      { href: "/contact", label: copy.nav.contact },
    ],
    [
      { href: "/strategic-conversation", label: copy.footer.strategicConversation },
      { href: "/connect", label: copy.nav.connect },
      { href: "/impressum", label: copy.footer.impressum },
      { href: "/datenschutz", label: copy.footer.datenschutz },
      { href: "https://www.linkedin.com/in/dr-zrinka-fidermuc-maler/", label: "LinkedIn", external: true },
    ],
  ];

  return (
    <>
      <footer className="bg-paper pb-7 pt-[72px]">
        <Container className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div
              translate="no"
              className="notranslate font-serif text-[26px] font-semibold leading-none tracking-[0.02em]"
            >
              Dr. Zrinka K. Fidermuc Maler
            </div>
            <p className="mt-3.5 max-w-[320px] text-[13px] text-muted">{copy.footer.blurb}</p>
            <div className="mt-4 flex items-center gap-3 text-[11px] tracking-[0.14em] uppercase">
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={locale === "en" ? "border-b border-gold font-semibold text-red" : "text-muted hover:text-ink"}
              >
                English
              </button>
              <span className="text-line">/</span>
              <button
                type="button"
                onClick={() => setLocale("de")}
                className={locale === "de" ? "border-b border-gold font-semibold text-red" : "text-muted hover:text-ink"}
              >
                Deutsch
              </button>
            </div>
            <p className="mt-3 text-xs tracking-[0.08em] text-muted">{copy.nav.locations}</p>
          </div>
          {cols.map((c, i) => (
            <ul key={i} className="list-none p-0 text-[13px] leading-[2.3]">
              {c.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-red">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={localizePath(l.href, locale)} className="hover:text-red">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </Container>
      </footer>
      <div className="bg-red p-3.5 text-center text-xs text-[#f0dcda]">{copy.footer.copyright}</div>
    </>
  );
}
