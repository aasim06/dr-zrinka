"use client";
import { cn } from "@/lib/utils";

export function LanguageToggle({
  value,
  onChange,
  label = "Preferred Language",
  compact,
}: {
  value: "English" | "German";
  onChange: (lang: "English" | "German") => void;
  label?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn(compact ? "mb-3 flex items-center justify-between gap-3" : "mb-4")}>
      <span className={cn("text-xs tracking-wide text-muted", !compact && "mb-1.5 block")}>{label}</span>
      <div className="inline-flex border border-line bg-paper p-0.5" role="group" aria-label={label}>
        {(["English", "German"] as const).map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => onChange(lang)}
            aria-pressed={value === lang}
            className={cn(
              "font-medium tracking-[0.06em] transition-colors",
              compact ? "px-3 py-1 text-[11px]" : "px-4 py-2 text-xs",
              value === lang ? "bg-red text-white" : "text-muted hover:text-ink"
            )}
          >
            {lang === "German" ? "Deutsch" : "English"}
          </button>
        ))}
      </div>
    </div>
  );
}
