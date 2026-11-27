"use client";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { getUiCopy } from "@/data/translations";
import { localizePath } from "@/lib/i18n";
import { useLocale } from "@/components/providers/LocaleProvider";

export function WorkWithMe() {
  const { locale } = useLocale();
  const copy = getUiCopy(locale).home;

  return (
    <section className="py-[72px] md:py-[104px]">
      <Container>
        <div className="mb-14 max-w-[640px]">
          <Heading level={2}>{copy.workHeading}</Heading>
        </div>
        <div className="grid border-t border-ink md:grid-cols-3">
          {copy.workItems.map((it, i) => (
            <Card
              key={it.title}
              className={cn(
                "py-8 md:pb-2 md:pr-9 md:pt-10",
                i > 0 && "border-t border-line md:border-l md:border-t-0 md:pl-9"
              )}
            >
              <Heading level={3}>{it.title}</Heading>
              <p className="mb-7 mt-4 flex-1 text-muted">{it.text}</p>
              <Button href={localizePath(it.href, locale)} variant="link" className="self-start">
                {it.cta}
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href={localizePath("/strategic-conversation", locale)} variant="outline">
            {copy.workBottomCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
