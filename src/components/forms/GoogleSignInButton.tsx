"use client";
import { cn } from "@/lib/utils";

export function GoogleSignInButton({
  label,
  loading,
  disabled,
  onClick,
  compact,
  className,
}: {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
  compact?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading || disabled}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2.5 border border-line bg-white font-medium text-ink transition-colors hover:border-ink hover:bg-paper disabled:cursor-not-allowed disabled:opacity-60",
        compact ? "px-4 py-2.5 text-xs tracking-[0.06em]" : "px-5 py-3 text-[13px] tracking-[0.04em]",
        className
      )}
    >
      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 shrink-0">
        <path
          fill="#4285F4"
          d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.45a5.52 5.52 0 0 1-2.39 3.62v3.01h3.87c2.26-2.08 3.56-5.15 3.56-8.66Z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.87-3.01c-1.07.72-2.44 1.15-4.06 1.15-3.12 0-5.77-2.11-6.72-4.96H1.28v3.11A12 12 0 0 0 12 24Z"
        />
        <path
          fill="#FBBC05"
          d="M5.28 14.27A7.2 7.2 0 0 1 4.9 12c0-.79.14-1.56.38-2.27V6.62H1.28A12 12 0 0 0 0 12c0 1.94.46 3.77 1.28 5.38l4-3.11Z"
        />
        <path
          fill="#EA4335"
          d="M12 4.77c1.76 0 3.34.61 4.58 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.62l4 3.11c.95-2.85 3.6-4.96 6.72-4.96Z"
        />
      </svg>
      <span>{loading ? "..." : label}</span>
    </button>
  );
}
