import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

export function QuoteBand({
  surface = "white",
  eyebrow,
  quote,
  subtext,
}: {
  surface?: "white" | "paper" | "ink" | "hero";
  eyebrow?: string;
  quote: string;
  subtext?: string;
}) {
  const dark = surface === "ink" || surface === "hero";
  return (
    <section
      className={cn(
        "py-20 text-center md:py-24",
        surface === "white" && "border-y border-line bg-white text-ink",
        surface === "paper" && "bg-paper text-ink",
        surface === "ink" && "bg-ink text-white",
        surface === "hero" && "bg-hero text-white"
      )}
    >
      <Container className="max-w-[880px]">
        {eyebrow && (
          <Eyebrow tone={dark ? "light" : "red"} className="mb-5">
            {eyebrow}
          </Eyebrow>
        )}
        <div className="mx-auto mb-7 h-px w-14 bg-gold" />
        <blockquote className="font-serif text-[clamp(28px,3.8vw,44px)] font-medium italic leading-[1.22]">
          “{quote}”
        </blockquote>
        {subtext && (
          <p className={cn("mx-auto mt-6 max-w-[640px] text-sm tracking-[0.06em]", dark ? "text-gold-soft" : "text-muted")}>
            {subtext}
          </p>
        )}
      </Container>
    </section>
  );
}
