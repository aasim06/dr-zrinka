import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <article className={cn("flex flex-col", className)} {...props} />;
}
