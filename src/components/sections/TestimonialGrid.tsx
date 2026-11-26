import { Container } from "@/components/ui/Container";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  author: string;
};

export function TestimonialGrid({
  surface = "white",
  eyebrow,
  title,
  items,
}: {
  surface?: "white" | "paper";
  eyebrow?: string;
  title: string;
  items: Testimonial[];
}) {
  return (
    <section
      className={cn(
        "py-[72px] md:py-[104px]",
        surface === "white" ? "border-y border-line bg-white" : "bg-paper"
      )}
    >
      <Container>
        <div className="mb-14 max-w-[680px]">
          {eyebrow && (
            <Eyebrow tone="red" className="mb-4">
              {eyebrow}
            </Eyebrow>
          )}
          <Heading level={2}>{title}</Heading>
        </div>

        <div className="grid border-t border-ink md:grid-cols-2">
          {items.map((item, idx) => (
            <article
              key={`${item.author}-${idx}`}
              className={cn(
                "flex flex-col justify-between border-b border-line py-9",
                idx % 2 === 0 ? "md:pr-10" : "md:border-l md:border-line md:pl-10"
              )}
            >
              <div>
                <span aria-hidden className="block font-serif text-4xl leading-none text-gold">
                  “
                </span>
                <p className="mt-2 font-serif text-[22px] italic leading-[1.4] text-ink">{item.quote}</p>
              </div>
              <footer className="mt-6 text-xs font-medium tracking-[0.1em] text-muted uppercase">
                — {item.author}
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
