"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  Calendar,
  ExternalLink,
  Inbox,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/journal", label: "The Journal", icon: BookOpen },
  { href: "/admin/events", label: "Events & Keynotes", icon: Calendar },
  { href: "/admin/inquiries", label: "Inquiries", icon: Inbox },
  { href: "/admin/ai-concierge", label: "AI Concierge", icon: Sparkles },
  { href: "/admin/settings", label: "Settings & Legal", icon: Settings },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-paper">{children}</div>;
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const sidebarContent = (
    <div className="flex h-full flex-col justify-between bg-white px-5 py-6">
      <div>
        <div className="border-b border-line pb-5">
          <Link href="/admin" className="block font-serif text-2xl font-semibold leading-tight text-ink">
            Dr. Zrinka
          </Link>
          <p className="mt-1 text-[11px] font-medium tracking-[0.14em] text-red uppercase">
            Executive Console
          </p>
        </div>

        <nav aria-label="Admin navigation" className="mt-6 space-y-1">
          {navItems.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3.5 py-2.5 text-[13px] font-medium transition-colors",
                  active
                    ? "border-l-2 border-gold bg-paper text-red"
                    : "border-l-2 border-transparent text-muted hover:bg-paper/70 hover:text-ink"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-2 border-t border-line pt-5 text-[13px]">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2.5 px-3 py-2 text-muted transition-colors hover:text-ink"
        >
          <ExternalLink className="h-4 w-4" />
          <span>View Public Site</span>
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-muted transition-colors hover:text-red"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-paper text-ink md:grid md:grid-cols-[260px_1fr]">
      {/* Desktop Sidebar */}
      <aside className="hidden border-r border-line md:sticky md:top-0 md:block md:h-screen">
        {sidebarContent}
      </aside>

      {/* Mobile Header */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-white px-5 py-3.5 md:hidden">
        <div>
          <span className="font-serif text-xl font-semibold text-ink">Dr. Zrinka</span>
          <span className="ml-2 text-[10px] tracking-[0.14em] text-red uppercase">Admin</span>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle admin menu"
          className="inline-flex h-9 w-9 items-center justify-center border border-line bg-paper text-ink"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-ink/40" />
          <div className="relative h-full w-64 border-r border-line bg-white shadow-xl">{sidebarContent}</div>
        </div>
      )}

      {/* Main Content */}
      <div className="min-w-0 px-5 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1060px]">{children}</div>
      </div>
    </div>
  );
}
