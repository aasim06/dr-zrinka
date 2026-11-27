"use client";
import { useEffect, useState } from "react";
import { Heading } from "@/components/ui/Heading";
import { NewsletterForm } from "./NewsletterForm";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getUiCopy } from "@/data/translations";

// Floating "Your Sunday morning read" pop-up (mounted only when open so it never collides with hydration)
export function Newsletter() {
  const { locale } = useLocale();
  const copy = getUiCopy(locale).newsletter;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("jpop") === "1"; } catch {}
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
    try { sessionStorage.setItem("jpop", "1"); } catch {}
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <aside
      role="dialog"
      aria-label={copy.subtitle}
      style={{ animation: "drawerFadeIn 260ms ease-out" }}
      className="fixed bottom-6 left-4 z-30 w-[min(360px,calc(100%-32px))] border-t-[3px] border-gold bg-white px-7 pb-[26px] pt-[30px] shadow-[0_24px_60px_rgba(0,0,0,.28)] sm:left-6"
    >
      <button onClick={close} aria-label="Close" className="absolute right-3 top-2 p-1.5 text-[26px] leading-none text-muted hover:text-ink">
        &times;
      </button>
      <Heading level={3} className="italic">{copy.title}</Heading>
      <p className="mb-[18px] mt-1.5 font-medium">{copy.subtitle}</p>
      <NewsletterForm onDone={close} compact />
    </aside>
  );
}
