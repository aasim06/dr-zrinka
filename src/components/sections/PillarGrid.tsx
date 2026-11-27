"use client";
import { Container } from "@/components/ui/Container";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizePath } from "@/lib/i18n";

export type PillarItem = {
  index?: string;
  eyebrow?: string;
  title: string;
  text: string;
  meta?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PillarGrid({
  id,
  surface = "paper",
  eyebrow,
  title,
  intro,
  items,
  columns = 3,
  bottomCta,
}: {
  id?: string;
  surface?: "paper" | "white";
  eyebrow?: string;
  title: string;
  intro?: string;
  items: PillarItem[];
  columns?: 2 | 3 | 4;
  bottomCta?: { label: string; href: string; variant?: "outline" | "secondary" | "primary" };
}) {
  const { locale } = useLocale();
  const colClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-3";

  return (
    <section
      id={id}
      className={cn(
        "py-[72px] md:py-[104px]",
        surface === "white" ? "border-y border-line bg-white" : "bg-paper"
      )}
    >
      <Container>
        <div className="mb-14 max-w-[700px]">
          {eyebrow && (
            <Eyebrow tone="red" className="mb-4">
              {eyebrow}
            </Eyebrow>
          )}
          <Heading level={2}>{title}</Heading>
          {intro && <p className="mt-4 text-muted">{intro}</p>}
        </div>

        <div className={cn("grid border-t border-ink", colClass)}>
          {items.map((it, i) => (
            <Card
              key={`${it.title}-${i}`}
              className={cn(
                "py-8 md:pb-6 md:pt-10",
                columns === 2 && (i % 2 === 0 ? "md:pr-10" : "md:border-l md:border-line md:pl-10"),
                columns === 3 && (i % 3 !== 0 ? "md:border-l md:border-line md:pl-9" : "") + (i % 3 !== 2 ? " md:pr-9" : ""),
                columns === 4 && (i % 4 !== 0 ? "lg:border-l lg:border-line lg:pl-7" : "") + (i % 4 !== 3 ? " lg:pr-7" : ""),
                i > 0 && "border-t border-line md:border-t-0",
                ((columns === 2 && i >= 2) || (columns === 3 && i >= 3) || (columns === 4 && i >= 4)) &&
                  "md:border-t md:border-line"
              )}
            >
              {it.index && (
                <span className="mb-3 block font-serif text-[26px] font-medium leading-none text-gold">
                  {it.index}
                </span>
              )}
              {it.eyebrow && (
                <Eyebrow tone="red" className="mb-3">
                  {it.eyebrow}
                </Eyebrow>
              )}
              <Heading level={3} className="!text-[26px] md:!text-[28px]">
                {it.title}
              </Heading>
              <p className="mb-6 mt-4 flex-1 text-muted">{it.text}</p>
              {it.meta && <p className="mb-5 text-xs tracking-[0.08em] text-muted uppercase">{it.meta}</p>}
              {it.ctaLabel && it.ctaHref && (
                <Button href={localizePath(it.ctaHref, locale)} variant="link" className="self-start">
                  {it.ctaLabel}
                </Button>
              )}
            </Card>
          ))}
        </div>

        {bottomCta && (
          <div className="mt-14 text-center">
            <Button href={localizePath(bottomCta.href, locale)} variant={bottomCta.variant ?? "outline"}>
              {bottomCta.label}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
