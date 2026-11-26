import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Please Check Your Inbox",
  description: "Confirm your email subscription to The Journal by Dr. Zrinka K. Fidermuc Maler.",
};

export default function CheckEmailPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Almost There"
        title="Please check your inbox."
        lead={[
          "We have sent you an email to confirm your subscription to The Journal. Click the confirmation link in the email to complete your registration.",
          "Please also check your spam or promotions folder if you do not see it within a few minutes.",
        ]}
        primaryCta={{ label: "Back to Home", href: "/" }}
        secondaryCta={{ label: "Explore The Journal", href: "/journal" }}
      />

      <section className="bg-paper py-16">
        <Container className="max-w-2xl text-center">
          <p className="text-muted">
            Double opt-in ensures that your email address is verified before any dispatch from The Journal is delivered.
          </p>
          <div className="mt-6">
            <Button href="/" variant="outline" size="sm">
              Return to Homepage
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
