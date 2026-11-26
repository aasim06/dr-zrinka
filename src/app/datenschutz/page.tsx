import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { privacySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Datenschutz / Privacy",
  description:
    "Datenschutzerklärung (GDPR Privacy Policy) for Dr. Zrinka K. Fidermuc Maler including hosting, contact inquiries, KlickTipp newsletter, and user rights.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Legal · DSGVO / GDPR"
        title="Datenschutzerklärung"
        lead="Informationen zur Erhebung und Verarbeitung personenbezogener Daten auf dr-zrinka.com gemäß DSGVO."
        secondaryCta={{ label: "Impressum", href: "/impressum" }}
      />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <aside className="space-y-6">
            <div className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:sticky md:top-28">
              <Eyebrow tone="red" className="mb-3">Inhaltsübersicht</Eyebrow>
              <Heading level={3} className="mb-5 !text-[24px]">
                Abschnitte
              </Heading>
              <nav aria-label="Datenschutz Inhaltsverzeichnis">
                <ul className="m-0 list-none divide-y divide-line p-0 text-sm">
                  {privacySections.map((sec, idx) => (
                    <li key={sec.title} className="py-2.5">
                      <a href={`#sec-${idx + 1}`} className="text-muted transition-colors hover:text-red">
                        {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 border-t border-line pt-5">
                <Button href="/impressum" variant="link">
                  → Impressum ansehen
                </Button>
              </div>
            </div>
          </aside>

          <div className="space-y-12 border-t border-ink pt-8">
            {privacySections.map((sec, idx) => (
              <section key={sec.title} id={`sec-${idx + 1}`} className="scroll-mt-28 border-b border-line pb-10">
                <Heading level={2} className="mb-6 !text-[clamp(26px,3vw,36px)] text-red">
                  {sec.title}
                </Heading>
                <div className="space-y-3.5 text-sm leading-[1.85] text-muted">
                  {sec.blocks.map((block, bIdx) =>
                    block.kind === "heading" ? (
                      <h3 key={bIdx} className="pt-4 font-serif text-[22px] font-medium text-ink">
                        {block.text}
                      </h3>
                    ) : (
                      <p key={bIdx}>{block.text}</p>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
