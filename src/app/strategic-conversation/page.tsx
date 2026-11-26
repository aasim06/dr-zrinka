import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StrategicConversationForm } from "@/components/forms/StrategicConversationForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Strategic Conversation",
  description:
    "Apply for a confidential Strategic Conversation with Dr. Zrinka K. Fidermuc Maler regarding advisory work or executive leadership mandates.",
};

export default function StrategicConversationPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Strategic Inquiry"
        title="Start a Strategic Conversation"
        lead="If you are reaching out regarding advisory work, strategic collaboration, or executive leadership topics, please complete the form below. Requests are reviewed personally. Conversations are selective and based on current relevance."
        secondaryCta={{ label: "General Contact", href: "/contact" }}
      />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <StrategicConversationForm />

          <aside className="space-y-6">
            <div className="border border-line border-t-[3px] border-t-ink bg-white p-8">
              <Eyebrow tone="red" className="mb-3">Process</Eyebrow>
              <Heading level={3} className="mb-4 !text-[26px]">How Inquiries Are Reviewed</Heading>
              <ul className="m-0 list-none divide-y divide-line p-0 text-sm text-muted">
                <li className="py-3.5">All inquiries are strictly confidential and reviewed personally.</li>
                <li className="py-3.5">
                  Private engagements begin with the 90-minute Private Advisory Diagnostic.
                </li>
                <li className="py-3.5">
                  Organizational mandates typically open with a six-week Leadership &amp; Decision Diagnostic.
                </li>
                <li className="py-3.5">Frankfurt/M · Zagreb · International (English &amp; German).</li>
              </ul>
            </div>

            <div className="border border-line bg-white p-8">
              <Eyebrow tone="muted" className="mb-3">Explore Formats</Eyebrow>
              <div className="flex flex-col items-start gap-3">
                <Button href="/private-advisory" variant="link">
                  → Private Advisory for Women in Midlife
                </Button>
                <Button href="/executive-advisory" variant="link">
                  → Executive &amp; Organizational Advisory
                </Button>
                <Button href="/keynotes" variant="link">
                  → Keynotes &amp; Speaking
                </Button>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
