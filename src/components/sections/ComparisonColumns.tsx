import { Container } from "@/components/ui/Container";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

function Column({
  eyebrow,
  title,
  items,
  negative,
}: {
  eyebrow?: string;
  title: string;
  items: string[];
  negative?: boolean;
}) {
  return (
    <div>
      {eyebrow && (
        <Eyebrow tone={negative ? "muted" : "red"} className="mb-3">
          {eyebrow}
        </Eyebrow>
      )}
      <Heading
        level={2}
        className={cn(
          "border-b pb-[22px] !text-[clamp(30px,3.4vw,42px)]",
          negative ? "border-line text-muted" : "border-ink text-red"
        )}
      >
        {title}
      </Heading>
      <ul className="m-0 list-none p-0">
        {items.map((item) => (
          <li key={item} className="border-b border-line py-[18px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ComparisonColumns({
  surface = "white",
  left,
  right,
}: {
  surface?: "white" | "paper";
  left: { eyebrow?: string; title: string; items: string[]; negative?: boolean };
  right: { eyebrow?: string; title: string; items: string[]; negative?: boolean };
}) {
  return (
    <section
      className={cn(
        "py-[72px] md:py-[104px]",
        surface === "white" ? "border-t border-line bg-white" : "bg-paper"
      )}
    >
      <Container className="grid gap-12 md:grid-cols-2 md:gap-[72px]">
        <Column {...left} />
        <Column {...right} />
      </Container>
    </section>
  );
}
