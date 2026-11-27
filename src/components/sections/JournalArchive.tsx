"use client";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { PublicPostSummary } from "@/lib/public-data";
import { getPagesCopy } from "@/data/translations-pages";
import { localizePath, type Locale } from "@/lib/i18n";
import { useLocale } from "@/components/providers/LocaleProvider";

export function JournalArchive({
  posts,
}: {
  posts: PublicPostSummary[];
  locale?: Locale;
}) {
  const { locale } = useLocale();
  const copy = getPagesCopy(locale).journal;
  const isDe = locale === "de";

  const [filter, setFilter] = useState<"ALL" | "EN" | "DE">("ALL");
  const visible = filter === "ALL" ? posts : posts.filter((p) => p.lang === filter);

  return (
    <section className="border-y border-line bg-white py-[72px] md:py-[104px]">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[620px]">
            <Eyebrow tone="red" className="mb-3">{copy.archiveEyebrow}</Eyebrow>
            <Heading level={2}>{copy.archiveTitle}</Heading>
          </div>

          <div className="inline-flex border border-line bg-paper p-0.5" role="group" aria-label="Filter by language">
            {(
              [
                { id: "ALL", label: isDe ? "Alle" : "All" },
                { id: "EN", label: "English" },
                { id: "DE", label: "Deutsch" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setFilter(opt.id)}
                aria-pressed={filter === opt.id}
                className={cn(
                  "px-4 py-2 text-xs font-medium tracking-[0.08em] uppercase transition-colors",
                  filter === opt.id ? "bg-red text-white" : "text-muted hover:text-ink"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid border-t border-ink md:grid-cols-2">
          {visible.map((post, i) => (
            <Card
              key={post.slug}
              className={cn(
                "justify-between border-b border-line py-9",
                i % 2 === 0 ? "md:pr-10" : "md:border-l md:border-line md:pl-10"
              )}
            >
              <div>
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="mb-5 aspect-[16/9] w-full object-cover"
                  />
                )}
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs tracking-[0.1em] text-muted uppercase">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="border border-gold/60 px-2 py-0.5 text-[10px] font-medium text-red">
                    {post.lang}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                  {post.audioUrl && (
                    <>
                      <span>·</span>
                      <span className="text-red">Audio</span>
                    </>
                  )}
                </div>
                <Heading level={3} className="!text-[26px] leading-[1.2]">
                  {post.title}
                </Heading>
                <p className="mb-6 mt-3.5 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
              <Button href={localizePath(`/journal/${post.slug}`, locale)} variant="link" className="self-start">
                {copy.readEssay}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
