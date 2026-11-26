"use client";
import { useEffect, useState } from "react";
import { Heading } from "@/components/ui/Heading";
import { NewsletterForm } from "./NewsletterForm";

// Floating "Your Sunday morning read" pop-up (appears after 6s, once per session)
export function Newsletter() {
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

  return (
    <aside
      role="dialog"
      aria-label="Subscribe to The Journal"
      className={[
        "fixed bottom-6 right-4 z-40 w-[min(380px,calc(100%-32px))] border-t-[3px] border-gold bg-white px-7 pb-[26px] pt-[30px] shadow-[0_24px_60px_rgba(0,0,0,.28)] transition-all duration-[400ms] sm:right-6",
        open ? "visible translate-y-0 opacity-100" : "invisible translate-y-6 opacity-0",
      ].join(" ")}
    >
      <button onClick={close} aria-label="Close" className="absolute right-3 top-2 p-1.5 text-[26px] leading-none text-muted">
        &times;
      </button>
      <Heading level={3} className="italic">Your Sunday morning read.</Heading>
      <p className="mb-[18px] mt-1.5 font-medium">Subscribe to The Journal.</p>
      <NewsletterForm onDone={close} />
    </aside>
  );
}
