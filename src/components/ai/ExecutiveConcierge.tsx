"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MessageSquare, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getUiCopy } from "@/data/translations";
import { localizePath } from "@/lib/i18n";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function hasBookingIntent(messages: ChatMessage[]): boolean {
  const combined = messages.map((m) => m.content).join(" ");
  return /\b(strategic conversation|advisory|keynote|book|diagnostic|contact|fee|fees|schedule|consult|engage|beratung|gespräch|vortrag|honorar|kontakt|termin|zusammenarbeit)\b/i.test(
    combined
  );
}

export function ExecutiveConcierge() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const copy = getUiCopy(locale).concierge;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const existing = sessionStorage.getItem("zrinka_chat_sid");
      if (existing) {
        setSessionId(existing);
      } else {
        const next = `sid_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
        sessionStorage.setItem("zrinka_chat_sid", next);
        setSessionId(next);
      }
    } catch {
      setSessionId(`sid_${Date.now()}`);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextHistory: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...nextHistory, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextHistory, sessionId, locale }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Concierge request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: accumulated };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: copy.fallbackError,
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  const showBookingCta = messages.length > 0 && hasBookingIntent(messages);

  return (
    <div className="fixed bottom-6 right-4 z-40 sm:right-6">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={copy.trigger}
          className="inline-flex items-center gap-2.5 border border-gold/80 bg-ink px-5 py-3 text-xs font-medium tracking-[0.06em] text-paper shadow-[0_14px_36px_rgba(22,19,18,0.28)] transition-colors hover:border-gold hover:bg-[#231e1c]"
        >
          <MessageSquare className="h-3.5 w-3.5 text-gold" />
          <span>{copy.trigger}</span>
        </button>
      ) : (
        <section
          role="dialog"
          aria-label={copy.eyebrow}
          className="flex h-[min(560px,calc(100vh-48px))] w-[min(410px,calc(100vw-32px))] flex-col border border-line border-t-[3px] border-t-gold bg-paper shadow-[0_24px_70px_rgba(22,19,18,0.3)]"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-line bg-white px-5 py-4">
            <div>
              <span className="block text-[10px] font-medium tracking-[0.16em] text-red uppercase">
                {copy.eyebrow}
              </span>
              <h2 translate="no" className="notranslate mt-0.5 font-serif text-xl font-medium text-ink">
                Dr. Zrinka K. Fidermuc Maler
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Concierge"
              className="inline-flex h-8 w-8 items-center justify-center border border-line bg-paper text-muted hover:border-gold hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
            {messages.length === 0 ? (
              <div className="space-y-5">
                <p className="text-sm leading-relaxed text-muted">{copy.welcome}</p>
                <div className="space-y-2">
                  <span className="block text-[10px] font-medium tracking-[0.14em] text-muted uppercase">
                    {copy.promptsHeading}
                  </span>
                  {copy.prompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      className="block w-full border border-line bg-white px-3.5 py-2.5 text-left text-xs leading-snug text-ink transition-colors hover:border-gold hover:text-red"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((m, idx) => (
                <div key={idx} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[88%] px-4 py-3 text-[13px] leading-relaxed",
                      m.role === "user"
                        ? "bg-ink text-paper"
                        : "border border-line bg-white text-ink"
                    )}
                  >
                    <p className="whitespace-pre-wrap">
                      {m.content || (loading && idx === messages.length - 1 ? "…" : "")}
                    </p>
                  </div>
                </div>
              ))
            )}

            {showBookingCta && (
              <div className="border-t border-line pt-3">
                <Link
                  href={localizePath("/strategic-conversation", locale)}
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 border border-gold bg-gold px-4 py-2.5 text-xs font-medium tracking-[0.06em] text-[#17110a] transition-colors hover:bg-gold-light"
                >
                  <span>{copy.cta}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Input & GDPR Footer */}
          <div className="border-t border-line bg-white px-5 pb-4 pt-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                aria-label={copy.placeholder}
                placeholder={copy.placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                className="flex-1 border border-line bg-paper px-3 py-2.5 text-xs text-ink placeholder:text-muted/70 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center bg-red text-white transition-colors hover:bg-red-light disabled:opacity-50"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
            <p className="mt-2.5 text-[10px] leading-snug text-muted">
              {copy.gdprPrefix}
              <Link href={localizePath("/datenschutz", locale)} onClick={() => setOpen(false)} className="underline hover:text-red">
                {copy.gdprLink}
              </Link>
              {copy.gdprSuffix}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
