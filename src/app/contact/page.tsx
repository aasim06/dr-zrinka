import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Clear intent. Selective engagement. Reach out regarding executive advisory, keynote speaking, or editorial collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contact · Frankfurt/M · Zagreb · International"
        title="Clear intent. Selective engagement."
        lead={[
          "If you are reaching out regarding leadership, strategic advisory, or editorial collaboration, please use the form or contact me directly.",
          "I work selectively with senior leaders, founders, and organizations navigating high responsibility, high risk, complexity, and transition. Clear intent is appreciated. Requests are reviewed personally. Selected inquiries receive a response.",
        ]}
        primaryCta={{ label: "Apply for a Strategic Conversation", href: "/strategic-conversation" }}
      />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div className="border border-line border-t-[3px] border-t-ink bg-white p-8">
              <Eyebrow tone="red" className="mb-3">Contact &amp; Office</Eyebrow>
              <Heading level={3} className="mb-2 !text-[28px]">Frankfurt Office (HQ)</Heading>
              <p className="mb-6 text-sm text-muted">
                For office coordination or appointment inquiries, please use the details below. By appointment only.
              </p>

              <dl className="divide-y divide-line text-sm">
                <div className="py-3.5">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Email</dt>
                  <dd className="mt-1 font-medium">
                    <a href="mailto:assistenz@dr-zrinka.com" className="text-ink hover:text-red">
                      assistenz@dr-zrinka.com
                    </a>
                  </dd>
                </div>
                <div className="py-3.5">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Phone</dt>
                  <dd className="mt-1 font-medium">
                    <a href="tel:+496967727688" className="text-ink hover:text-red">
                      +49 69 677 27 688
                    </a>
                  </dd>
                </div>
                <div className="py-3.5">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Address</dt>
                  <dd className="mt-1 font-medium text-ink">Kaiserstraße 61 · 60329 Frankfurt am Main</dd>
                </div>
                <div className="py-3.5">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Locations</dt>
                  <dd className="mt-1 text-muted">Frankfurt/M · Zagreb · International</dd>
                </div>
              </dl>
            </div>

            <div className="border border-line border-t-[3px] border-t-gold bg-white p-8">
              <Eyebrow tone="red" className="mb-3">Executive &amp; Private Advisory</Eyebrow>
              <Heading level={3} className="mb-3 !text-[26px]">Start a Strategic Conversation</Heading>
              <p className="mb-6 text-sm text-muted">
                For private advisory diagnostics, organizational mandates, or board-level collaborations, please share
                your context using the dedicated Strategic Conversation application.
              </p>
              <Button href="/strategic-conversation" variant="outline" size="sm">
                → Open Strategic Intake Form
              </Button>
            </div>
          </aside>
        </Container>
      </section>

      <ClosingCTA
        eyebrow="Work With Me"
        title="Explore advisory, keynotes, and writing."
        ctaLabel="Explore Advisory"
        ctaHref="/advisory"
        secondaryLabel="Connect Directory"
        secondaryHref="/connect"
      />
    </>
  );
}
