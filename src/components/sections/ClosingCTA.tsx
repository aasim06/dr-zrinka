import { Container } from "@/components/ui/Container";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export function ClosingCTA({
  eyebrow,
  title = "You don’t need another method. You need a position that holds.",
  description,
  ctaLabel = "Request a Strategic Conversation",
  ctaHref = "/contact",
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
  return (
    <div className="bg-ink py-28 text-center text-white">
      <Container>
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        <Heading level={2} className="mx-auto mb-8 max-w-[840px] !text-[clamp(34px,4.6vw,58px)]">
          {title}
        </Heading>
        {description && <p className="mx-auto mb-10 max-w-[600px] text-[#d6cec8]">{description}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={ctaHref}>{ctaLabel}</Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline-light">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}
