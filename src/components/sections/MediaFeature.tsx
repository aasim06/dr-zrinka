import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MediaFeature({
  id,
  surface = "white",
  imagePosition = "right",
  frame = "editorial",
  eyebrow,
  title,
  paragraphs,
  quote,
  image,
  cta,
  secondaryCta,
}: {
  id?: string;
  surface?: "paper" | "white";
  imagePosition?: "left" | "right";
  frame?: "arch" | "editorial";
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  quote?: string;
  image: { src: string; alt: string; width: number; height: number; caption?: string };
  cta?: { label: string; href: string; variant?: "primary" | "secondary" | "outline" | "link" };
  secondaryCta?: { label: string; href: string; variant?: "primary" | "secondary" | "outline" | "link" };
}) {
  const mediaBlock = (
    <div>
      <div
        className={cn(
          "relative mx-auto",
          frame === "arch" ? "max-w-[360px]" : "max-w-[480px]"
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute -bottom-4 -right-4 left-4 top-4 border border-gold",
            frame === "arch" && "rounded-t-[180px] rounded-b-[4px]"
          )}
        />
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={cn(
            "relative w-full object-cover shadow-[0_24px_50px_rgba(22,19,18,.12)]",
            frame === "arch" ? "aspect-[4/5] rounded-t-[180px] rounded-b-[4px]" : "aspect-[4/3]"
          )}
        />
      </div>
      {image.caption && (
        <p className="mx-auto mt-6 max-w-[460px] text-center font-serif text-lg italic text-muted">
          {image.caption}
        </p>
      )}
    </div>
  );

  const textBlock = (
    <div>
      {eyebrow && (
        <Eyebrow tone="red" className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <Heading level={2} className="!text-[clamp(30px,3.6vw,46px)]">
        {title}
      </Heading>
      <div className="mt-6 space-y-4 text-muted">
        {paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "text-[17px] leading-[1.75] text-ink" : undefined}>
            {p}
          </p>
        ))}
      </div>
      {quote && (
        <blockquote className="mt-7 border-l-2 border-gold pl-5 font-serif text-2xl italic text-red">
          “{quote}”
        </blockquote>
      )}
      {(cta || secondaryCta) && (
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {cta && (
            <Button href={cta.href} variant={cta.variant ?? "outline"}>
              {cta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button href={secondaryCta.href} variant={secondaryCta.variant ?? "link"}>
              {secondaryCta.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section
      id={id}
      className={cn(
        "py-[72px] md:py-[104px]",
        surface === "white" ? "border-y border-line bg-white" : "bg-paper"
      )}
    >
      <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {imagePosition === "left" ? (
          <>
            {mediaBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {mediaBlock}
          </>
        )}
      </Container>
    </section>
  );
}
