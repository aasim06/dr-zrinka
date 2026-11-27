"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getUiCopy } from "@/data/translations";
import { localizePath, stripLocalePrefix } from "@/lib/i18n";

export const navLinks = [
  { href: "/", label: "Home", match: ["/"] },
  { href: "/advisory", label: "Work With Me", match: ["/advisory", "/private-advisory", "/executive-advisory"] },
  { href: "/book", label: "The Hat & The Hill", match: ["/book"] },
  { href: "/events", label: "Events", match: ["/events", "/keynotes"] },
  { href: "/about", label: "About", match: ["/about"] },
  { href: "/journal", label: "The Journal", match: ["/journal"] },
  { href: "/contact", label: "Contact", match: ["/contact", "/strategic-conversation", "/connect"] },
];

export function Navbar() {
  const pathname = usePathname() || "/";
  const currentPath = stripLocalePrefix(pathname);
  const { locale, setLocale } = useLocale();
  const copy = getUiCopy(locale);
  const [open, setOpen] = useState(false);

  const items = [
    { href: "/", label: copy.nav.home, match: ["/"] },
    { href: "/advisory", label: copy.nav.workWithMe, match: ["/advisory", "/private-advisory", "/executive-advisory"] },
    { href: "/book", label: copy.nav.book, match: ["/book"] },
    { href: "/events", label: copy.nav.events, match: ["/events", "/keynotes"] },
    { href: "/about", label: copy.nav.about, match: ["/about"] },
    { href: "/journal", label: copy.nav.journal, match: ["/journal"] },
    { href: "/contact", label: copy.nav.contact, match: ["/contact", "/strategic-conversation", "/connect"] },
  ];

  const quickLinks = [
    { href: "/private-advisory", label: copy.nav.privateAdvisory },
    { href: "/executive-advisory", label: copy.nav.executiveAdvisory },
    { href: "/keynotes", label: copy.nav.keynotes },
    { href: "/connect", label: copy.nav.connect },
  ];

  function isActive(href: string, prefixes: string[]) {
    if (href === "/") return currentPath === "/";
    return prefixes.some((prefix) => currentPath === prefix || currentPath.startsWith(`${prefix}/`));
  }

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onViewportChange = () => {
      if (mq.matches) setOpen(false);
    };
    onViewportChange();
    mq.addEventListener("change", onViewportChange);
    return () => mq.removeEventListener("change", onViewportChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function LocaleSwitch({ className }: { className?: string }) {
    return (
      <div
        className={cn("flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase", className)}
        aria-label="Language switcher"
      >
        <button
          type="button"
          onClick={() => setLocale("en")}
          aria-pressed={locale === "en"}
          className={cn(
            "pb-0.5 transition-colors",
            locale === "en" ? "border-b border-gold font-semibold text-red" : "text-muted hover:text-ink"
          )}
        >
          EN
        </button>
        <span className="text-line">|</span>
        <button
          type="button"
          onClick={() => setLocale("de")}
          aria-pressed={locale === "de"}
          className={cn(
            "pb-0.5 transition-colors",
            locale === "de" ? "border-b border-gold font-semibold text-red" : "text-muted hover:text-ink"
          )}
        >
          DE
        </button>
      </div>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-paper py-4 md:pb-4 md:pt-[22px] md:text-center">
        <Container className="relative flex items-center justify-between gap-4 px-5 md:block md:px-7">
          <Link
            href={localizePath("/", locale)}
            translate="no"
            className="notranslate font-serif text-[21px] font-semibold leading-tight tracking-[0.02em] text-ink sm:text-[25px] md:text-[30px] md:leading-none"
          >
            Dr. Zrinka K. Fidermuc Maler
          </Link>

          <LocaleSwitch className="hidden md:absolute md:right-7 md:top-1 md:flex" />

          <div className="flex items-center gap-3 md:hidden">
            <LocaleSwitch />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] border border-line bg-white text-ink transition-colors hover:border-gold hover:text-red"
            >
              <span
                aria-hidden
                className={cn(
                  "block h-[1.5px] w-[18px] bg-current transition-transform duration-200",
                  open && "translate-y-[6.5px] rotate-45"
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "block h-[1.5px] w-[18px] bg-current transition-opacity duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "block h-[1.5px] w-[18px] bg-current transition-transform duration-200",
                  open && "-translate-y-[6.5px] -rotate-45"
                )}
              />
            </button>
          </div>

          <nav
            aria-label="Main"
            className="mt-3.5 hidden flex-wrap justify-center gap-x-[30px] gap-y-1.5 px-4 text-[12.5px] tracking-[0.04em] text-muted md:flex"
          >
            {items.map((l) => {
              const active = isActive(l.href, l.match);
              return (
                <Link
                  key={l.href}
                  href={localizePath(l.href, locale)}
                  className={cn(
                    "transition-colors hover:text-red",
                    active && "border-b border-gold pb-0.5 font-medium text-red"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </Container>
      </header>

      {/* Mobile navigation drawer — mounted only when open on mobile */}
      {open && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 md:hidden"
        >
          <div
            onClick={() => setOpen(false)}
            style={{ animation: "drawerFadeIn 220ms ease-out" }}
            className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
          />

          <div
            style={{ animation: "drawerSlideIn 260ms cubic-bezier(0.22, 1, 0.36, 1)" }}
            className="relative ml-auto flex h-full w-[min(360px,88vw)] flex-col overflow-y-auto border-l border-line border-t-[3px] border-t-gold bg-paper px-6 pb-8 pt-6 shadow-[-20px_0_50px_rgba(22,19,18,0.22)]"
          >
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="text-[11px] font-medium tracking-[0.16em] text-red uppercase">
                {copy.nav.mobileMenuLabel}
              </span>
              <div className="flex items-center gap-3">
                <LocaleSwitch />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="inline-flex h-9 w-9 items-center justify-center border border-line bg-white text-xl leading-none text-ink transition-colors hover:border-gold hover:text-red"
                >
                  &times;
                </button>
              </div>
            </div>

            <nav aria-label="Mobile" className="mt-2 flex-1">
              <ul className="m-0 list-none p-0">
                {items.map((l) => {
                  const active = isActive(l.href, l.match);
                  return (
                    <li key={l.href} className="border-b border-line">
                      <Link
                        href={localizePath(l.href, locale)}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-3.5 font-serif text-[24px] leading-snug transition-colors hover:text-red",
                          active ? "font-semibold text-red" : "font-medium text-ink"
                        )}
                      >
                        <span>{l.label}</span>
                        {active && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-7">
                <p className="mb-3 text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
                  {copy.nav.advisorySpeaking}
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
                  {quickLinks.map((q) => (
                    <Link
                      key={q.href}
                      href={localizePath(q.href, locale)}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "py-1 transition-colors hover:text-red",
                        currentPath === q.href ? "font-medium text-red" : "text-muted"
                      )}
                    >
                      {q.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <div className="mt-8 border-t border-line pt-6">
              <Button
                href={localizePath("/strategic-conversation", locale)}
                variant="secondary"
                size="sm"
                className="w-full text-center"
                onClick={() => setOpen(false)}
              >
                {copy.nav.startConversation}
              </Button>
              <p className="mt-4 text-center text-[11px] tracking-[0.1em] text-muted uppercase">
                {copy.nav.locations}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
