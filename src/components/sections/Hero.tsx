"use client";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { getUiCopy } from "@/data/translations";
import { localizePath } from "@/lib/i18n";
import { useLocale } from "@/components/providers/LocaleProvider";

export function Hero() {
  const { locale } = useLocale();
  const copy = getUiCopy(locale).home;

  return (
    <div className="bg-hero py-16 text-white md:py-[100px]">
      <Container className="grid items-center gap-14 md:grid-cols-[1.15fr_.85fr] md:gap-[72px]">
        <div>
          <Eyebrow className="mb-[26px]">{copy.heroEyebrow}</Eyebrow>
          <Heading level={1}>{copy.heroTitle}</Heading>
          <p className="mt-7 max-w-[500px] text-[#f2e6e4]">{copy.heroP1}</p>
          <p className="mt-3.5 max-w-[500px] text-[#f2e6e4]">{copy.heroP2}</p>
          <Button href={localizePath("/strategic-conversation", locale)} className="mt-10">
            {copy.heroCta}
          </Button>
        </div>
        <div>
          <div className="relative mx-auto max-w-[320px] md:ml-auto md:mr-0 md:max-w-[400px]">
            <div className="pointer-events-none absolute -bottom-[18px] -right-[18px] left-[18px] top-[18px] rounded-t-[200px] rounded-b-[4px] border border-gold" />
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Dr. Zrinka K. Fidermuc Maler"
              width={800}
              height={1000}
              priority
              className="relative aspect-[4/5] w-full rounded-t-[200px] rounded-b-[4px] object-cover shadow-[0_30px_60px_rgba(0,0,0,.35)]"
            />
          </div>
          <div className="mx-auto mt-[34px] max-w-[400px] text-center text-xs tracking-[0.12em] text-gold-soft md:ml-auto md:mr-0 md:text-right">
            {copy.heroCaption}
          </div>
        </div>
      </Container>
    </div>
  );
}
