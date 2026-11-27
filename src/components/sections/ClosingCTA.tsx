"use client";
import { Container } from "@/components/ui/Container";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getUiCopy } from "@/data/translations";
import { localizePath } from "@/lib/i18n";

export function ClosingCTA({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref = "/strategic-conversation",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const { locale } = useLocale();
  const homeCopy = getUiCopy(locale).home;
  const resolvedTitle = title ?? homeCopy.closingTitle;
  const resolvedCtaLabel = ctaLabel ?? homeCopy.closingCta;

  return (
    <div className="bg-ink py-28 text-center text-white">
      <Container>
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        <Heading level={2} className="mx-auto mb-8 max-w-[840px] !text-[clamp(34px,4.6vw,58px)]">
          {resolvedTitle}
        </Heading>
        {description && <p className="mx-auto mb-10 max-w-[600px] text-[#d6cec8]">{description}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={localizePath(ctaHref, locale)}>{resolvedCtaLabel}</Button>
          {secondaryLabel && secondaryHref && (
            <Button href={localizePath(secondaryHref, locale)} variant="outline-light">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}
