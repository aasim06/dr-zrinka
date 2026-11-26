import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Private executive advisory",
    text: "Strategic advisory for individuals and leaders navigating consequential decisions, career transitions, questions of authority, and personal or professional reinvention.",
    cta: "Explore private advisory",
    href: "/advisory#private",
  },
  {
    title: "Organizational and leadership advisory",
    text: "Strategic collaboration with organizations seeking stronger leadership alignment, more effective execution, or new concepts and experiences, including premium hospitality.",
    cta: "For organizations",
    href: "/advisory#organizations",
  },
  {
    title: "Author and book",
    text: "A provocative, science-informed exploration of reinvention, identity, and sovereignty in the second half of life. A book that challenges expectations and invites readers to question what’s possible.",
    cta: "Discover the book",
    href: "/book",
  },
];

export function WorkWithMe() {
  return (
    <section className="py-[72px] md:py-[104px]">
      <Container>
        <div className="mb-14 max-w-[640px]"><Heading level={2}>Explore my work</Heading></div>
        <div className="grid border-t border-ink md:grid-cols-3">
          {items.map((it, i) => (
            <Card
              key={it.title}
              className={cn(
                "py-8 md:pb-2 md:pr-9 md:pt-10",
                i > 0 && "border-t border-line md:border-l md:border-t-0 md:pl-9"
              )}
            >
              <Heading level={3}>{it.title}</Heading>
              <p className="mb-7 mt-4 flex-1 text-muted">{it.text}</p>
              <Button href={it.href} variant="link" className="self-start">{it.cta}</Button>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href="/contact" variant="outline">Request a Strategic Conversation</Button>
        </div>
      </Container>
    </section>
  );
}
