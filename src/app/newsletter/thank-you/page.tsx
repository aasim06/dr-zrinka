import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Subscription Confirmed",
  description: "Thank you for confirming your email subscription to The Journal.",
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="You’re All Set"
        title="Thank you for confirming your email."
        lead="You have successfully subscribed to The Journal. Your Sunday morning dispatches will arrive directly in your inbox."
        primaryCta={{ label: "Read the Featured Journal Entry", href: "/journal/in-the-valley-of-tears" }}
        secondaryCta={{ label: "Back to Home", href: "/" }}
      />

      <section className="bg-paper py-20">
        <Container className="max-w-2xl">
          <div className="border border-line border-t-[3px] border-t-gold bg-white p-8 text-center md:p-10">
            <Eyebrow tone="red" className="mb-3">Subscriber Access</Eyebrow>
            <Heading level={3} className="mb-3">In the Valley of Tears</Heading>
            <p className="text-sm text-muted">
              You can now read the subscriber edition of <em>In the Valley of Tears</em> using the subscriber access
              code <strong className="text-ink">journal2026</strong>.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="/journal/in-the-valley-of-tears" variant="secondary" size="sm">
                → Open Journal Entry
              </Button>
              <Button href="/book" variant="outline" size="sm">
                Discover The Hat &amp; The Hill
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
