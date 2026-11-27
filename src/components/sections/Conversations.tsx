"use client";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getUiCopy } from "@/data/translations";
import { useLocale } from "@/components/providers/LocaleProvider";

const basePhotos = [
  { src: "/images/brian-smith.jpg", alt: "With Brian Smith" },
  { src: "/images/stedman-graham.jpg", alt: "With Stedman Graham" },
  { src: "/images/kevin-costner.jpg", alt: "With Kevin Costner" },
];

export function Conversations() {
  const { locale } = useLocale();
  const copy = getUiCopy(locale).home;

  return (
    <section className="py-[72px] md:py-[104px]">
      <Container>
        <div className="mb-14 max-w-[640px]">
          <Heading level={2}>{copy.conversationsHeading}</Heading>
        </div>
        <div className="grid gap-9 md:grid-cols-3 md:gap-7">
          {basePhotos.map((p, idx) => (
            <figure key={p.src} className="m-0">
              <Image
                src={p.src}
                alt={p.alt}
                width={800}
                height={840}
                className="aspect-[1/1.05] w-full object-cover saturate-[.92]"
              />
              <figcaption className="mt-4 font-serif text-[19px] font-medium italic leading-[1.35]">
                {copy.conversationsCaptions[idx]}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
