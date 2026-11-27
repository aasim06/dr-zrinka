"use client";
import { Container } from "@/components/ui/Container";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizePath } from "@/lib/i18n";

export function EditorialSplit({
  id,
  surface = "paper",
  eyebrow,
  title,
  quote,
  paragraphs = [],
  listItems = [],
  cta,
  children,
}: {
  id?: string;
  surface?: "paper" | "white";
  eyebrow?: string;
  title: string;
  quote?: string;
  paragraphs?: string[];
  listItems?: { title?: string; text: string }[];
  cta?: { label: string; href: string; variant?: "primary" | "secondary" | "outline" | "link" };
  children?: React.ReactNode;
}) {
  const { locale } = useLocale();
  return (
    <section
      id={id}
      className={cn(
        "py-[72px] md:py-[104px]",
        surface === "white" ? "border-y border-line bg-white" : "bg-paper"
      )}
    >
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-[72px]">
        <div>
          {eyebrow && (
            <Eyebrow tone="red" className="mb-4">
              {eyebrow}
            </Eyebrow>
          )}
          <Heading level={2} className="!text-[clamp(30px,3.6vw,44px)]">
            {title}
          </Heading>
          {quote && (
            <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-[1.35] text-red">
              “{quote}”
            </blockquote>
          )}
          {cta && (
            <div className="mt-8">
              <Button href={localizePath(cta.href, locale)} variant={cta.variant ?? "outline"}>
                {cta.label}
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-5 text-muted">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-[17px] leading-[1.75] text-ink" : undefined}>
              {p}
            </p>
          ))}
          {listItems.length > 0 && (
            <ul className="m-0 list-none border-t border-ink p-0 pt-1">
              {listItems.map((item, idx) => (
                <li key={idx} className="border-b border-line py-5">
                  {item.title && (
                    <h3 className="mb-1.5 font-serif text-2xl font-medium text-ink">{item.title}</h3>
                  )}
                  <p className="text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
