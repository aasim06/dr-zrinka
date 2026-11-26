import { cn } from "@/lib/utils";

type Level = 1 | 2 | 3 | 4;
const sizes: Record<Level, string> = {
  1: "text-[clamp(42px,5.6vw,72px)] tracking-[-0.005em]",
  2: "text-[clamp(34px,4vw,50px)]",
  3: "text-[30px]",
  4: "text-xl",
};

export function Heading({
  level = 2,
  className,
  children,
}: {
  level?: Level;
  className?: string;
  children: React.ReactNode;
}) {
  const Tag = `h${level}` as const;
  return <Tag className={cn(sizes[level], className)}>{children}</Tag>;
}

type EyebrowTone = "light" | "red" | "gold" | "muted";
const eyebrowTones: Record<EyebrowTone, string> = {
  light: "text-gold-soft",
  red: "text-red uppercase",
  gold: "text-gold uppercase",
  muted: "text-muted uppercase",
};

export function Eyebrow({
  tone = "light",
  className,
  children,
}: {
  tone?: EyebrowTone;
  className?: string;
  children: React.ReactNode;
}) {
  return <small className={cn("block text-xs font-medium tracking-[0.14em]", eyebrowTones[tone], className)}>{children}</small>;
}
