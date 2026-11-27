"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { localizePath, stripLocalePrefix } from "@/lib/i18n";
import { useLocale } from "@/components/providers/LocaleProvider";

export function SubpageNav({ items }: { items: { label: string; href: string }[] }) {
  const pathname = stripLocalePrefix(usePathname() || "/");
  const { locale } = useLocale();
  return (
    <div className="border-b border-line bg-white">
      <Container className="flex flex-wrap items-center gap-x-8 gap-y-2 py-3.5 text-[12px] tracking-[0.08em] uppercase">
        {items.map((item) => {
          const baseHref = stripLocalePrefix(item.href);
          const active = pathname === baseHref;
          return (
            <Link
              key={item.href}
              href={localizePath(baseHref, locale)}
              className={cn(
                "py-1 transition-colors hover:text-red",
                active ? "border-b border-gold font-medium text-red" : "text-muted"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </Container>
    </div>
  );
}
