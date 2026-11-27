"use client";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizePath } from "@/lib/i18n";

export type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "outline-light";
};

export type HeroMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  frame?: "arch" | "editorial" | "book" | "emblem";
  caption?: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  primaryCta,
  secondaryCta,
  media,
  compact,
}: {
  eyebrow: string;
  title: string;
  lead?: string | string[];
  primaryCta?: HeroAction;
  secondaryCta?: HeroAction;
  media?: HeroMedia;
  compact?: boolean;
}) {
  const { locale } = useLocale();
  const paragraphs = Array.isArray(lead) ? lead : lead ? [lead] : [];

  return (
    <div className={cn("bg-hero text-white", compact ? "py-14 md:py-20" : "py-16 md:py-[92px]")}>
      <Container
        className={cn(
          media ? "grid items-center gap-14 md:grid-cols-[1.15fr_.85fr] md:gap-[72px]" : "max-w-wrap"
        )}
      >
        <div className={!media ? "max-w-[780px]" : undefined}>
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          <Heading
            level={1}
            className={cn(!media && "!text-[clamp(38px,5vw,64px)]")}
          >
            {title}
          </Heading>
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              className={cn(
                "max-w-[540px] text-[#f2e6e4]",
                idx === 0 ? "mt-7" : "mt-3.5"
              )}
            >
              {p}
            </p>
          ))}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button href={localizePath(primaryCta.href, locale)} variant={primaryCta.variant ?? "primary"}>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={localizePath(secondaryCta.href, locale)} variant={secondaryCta.variant ?? "outline-light"}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {media && (
          <div>
            {media.frame === "arch" && (
              <div className="relative mx-auto max-w-[320px] md:ml-auto md:mr-0 md:max-w-[390px]">
                <div className="pointer-events-none absolute -bottom-[18px] -right-[18px] left-[18px] top-[18px] rounded-t-[200px] rounded-b-[4px] border border-gold" />
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  priority
                  className="relative aspect-[4/5] w-full rounded-t-[200px] rounded-b-[4px] object-cover shadow-[0_30px_60px_rgba(0,0,0,.35)]"
                />
              </div>
            )}

            {media.frame === "editorial" && (
              <div className="relative mx-auto max-w-[440px] md:ml-auto md:mr-0">
                <div className="pointer-events-none absolute -bottom-4 -right-4 left-4 top-4 border border-gold/80" />
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  priority
                  className="relative aspect-[4/3] w-full object-cover shadow-[0_28px_60px_rgba(0,0,0,.35)]"
                />
              </div>
            )}

            {media.frame === "book" && (
              <div className="relative mx-auto max-w-[300px] md:ml-auto md:mr-8 md:max-w-[340px]">
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  priority
                  className="relative w-full drop-shadow-[0_32px_48px_rgba(0,0,0,.45)]"
                />
              </div>
            )}

            {media.frame === "emblem" && (
              <div className="mx-auto flex max-w-[260px] flex-col items-center justify-center rounded-full border border-gold/40 bg-black/15 p-10 md:ml-auto md:mr-0">
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  priority
                  className="h-auto w-40 object-contain"
                />
              </div>
            )}

            {media.caption && (
              <div className="mx-auto mt-8 max-w-[400px] text-center text-xs tracking-[0.12em] text-gold-soft md:ml-auto md:mr-0 md:text-right">
                {media.caption}
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}
