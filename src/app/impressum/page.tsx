import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Legal notice (Impressum) per § 5 TMG / DDG for Dr. Zrinka K. Fidermuc Maler — Executive & Leadership Advisory.",
};

const legalSections = [
  {
    title: "Streitschlichtung",
    paragraphs: [
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum.",
      "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    ],
  },
  {
    title: "Haftung für Inhalte",
    paragraphs: [
      "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    ],
  },
  {
    title: "Haftung für Links",
    paragraphs: [
      "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
      "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    ],
  },
  {
    title: "Urheberrecht",
    paragraphs: [
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
      "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
    ],
  },
];

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Legal Notice · Angaben gemäß § 5 TMG / DDG"
        title="Impressum"
        lead="Dr. Zrinka – Executive & Leadership Advisory · Geschäftsführerin: Dr. Zrinka K. Fidermuc Maler"
        secondaryCta={{ label: "Datenschutz / Privacy", href: "/datenschutz" }}
      />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <aside className="space-y-6">
            <div className="border border-line border-t-[3px] border-t-gold bg-white p-8">
              <Eyebrow tone="red" className="mb-3">Kontakt &amp; Adresse</Eyebrow>
              <Heading level={3} className="mb-5 !text-[26px]">
                Dr. Zrinka – Executive &amp; Leadership Advisory
              </Heading>
              <dl className="divide-y divide-line text-sm">
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Geschäftsführerin</dt>
                  <dd className="mt-1 font-medium text-ink">Dr. Zrinka K. Fidermuc Maler</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Adresse</dt>
                  <dd className="mt-1 font-medium text-ink">
                    Kaiserstr. 61
                    <br />
                    60329 Frankfurt am Main
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">E-Mail</dt>
                  <dd className="mt-1 font-medium">
                    <a href="mailto:info@dr-zrinka.com" className="text-ink hover:text-red">
                      info@dr-zrinka.com
                    </a>
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Telefon</dt>
                  <dd className="mt-1 font-medium">
                    <a href="tel:+496967727688" className="text-ink hover:text-red">
                      +49 69 677 27 688
                    </a>
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">USt.-Id.Nr.</dt>
                  <dd className="mt-1 font-medium text-ink">DE258257204</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Fotos Dr. Zrinka</dt>
                  <dd className="mt-1 text-ink">
                    Dietrich Skrock —{" "}
                    <a
                      href="https://www.skrock.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-red"
                    >
                      skrock.de
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          <div className="space-y-10 border-t border-ink pt-8">
            {legalSections.map((sec) => (
              <section key={sec.title} className="border-b border-line pb-8">
                <Heading level={3} className="mb-4 !text-[26px]">
                  {sec.title}
                </Heading>
                <div className="space-y-4 text-sm leading-[1.8] text-muted">
                  {sec.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="pt-2">
              <Button href="/datenschutz" variant="outline" size="sm">
                → Datenschutzerklärung lesen
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
