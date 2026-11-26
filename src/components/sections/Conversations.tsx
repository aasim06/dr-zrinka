import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const photos = [
  { src: "/images/brian-smith.jpg", alt: "With Brian Smith", caption: "With Brian Smith, founder of UGG" },
  { src: "/images/stedman-graham.jpg", alt: "With Stedman Graham", caption: "With Stedman Graham, author and leadership educator" },
  { src: "/images/kevin-costner.jpg", alt: "With Kevin Costner", caption: "With Kevin Costner, actor and entrepreneur" },
];

export function Conversations() {
  return (
    <section className="py-[72px] md:py-[104px]">
      <Container>
        <div className="mb-14 max-w-[640px]"><Heading level={2}>In conversation with global leaders</Heading></div>
        <div className="grid gap-9 md:grid-cols-3 md:gap-7">
          {photos.map((p) => (
            <figure key={p.src} className="m-0">
              <Image src={p.src} alt={p.alt} width={800} height={840} className="aspect-[1/1.05] w-full object-cover saturate-[.92]" />
              <figcaption className="mt-4 font-serif text-[19px] font-medium italic leading-[1.35]">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
