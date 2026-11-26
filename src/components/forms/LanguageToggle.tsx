"use client";
import { cn } from "@/lib/utils";

export function LanguageToggle({
  value,
  onChange,
  label = "Preferred Language",
}: {
  value: "English" | "German";
  onChange: (lang: "English" | "German") => void;
  label?: string;
}) {
  return (
    <div className="mb-4">
      <span className="mb-1.5 block text-xs tracking-wide text-muted">{label}</span>
      <div className="inline-flex border border-line bg-paper p-0.5" role="group" aria-label={label}>
        {(["English", "German"] as const).map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => onChange(lang)}
            aria-pressed={value === lang}
            className={cn(
              "px-4 py-2 text-xs font-medium tracking-[0.06em] transition-colors",
              value === lang ? "bg-red text-white" : "text-muted hover:text-ink"
            )}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
