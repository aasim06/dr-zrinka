import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full border border-line bg-paper px-3.5 py-[13px] text-sm text-ink placeholder:text-muted/70 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

type Props = { label: string; error?: string; hideLabel?: boolean } & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { label, error, hideLabel, className, id, ...rest },
  ref
) {
  const auto = useId();
  const inputId = id ?? auto;
  return (
    <div className="mb-2.5">
      <label htmlFor={inputId} className={cn("mb-1.5 block text-xs tracking-wide text-muted", hideLabel && "sr-only")}>
        <span>{label}</span>
        {rest.required && <span aria-hidden> *</span>}
      </label>
      <input
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-err` : undefined}
        className={cn(fieldClass, error && "border-red", className)}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-err`} className="mt-1 text-xs text-red">
          {error}
        </p>
      )}
    </div>
  );
});

type TextareaProps = {
  label: string;
  error?: string;
  hideLabel?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, hideLabel, className, id, ...rest },
  ref
) {
  const auto = useId();
  const inputId = id ?? auto;
  return (
    <div className="mb-2.5">
      <label htmlFor={inputId} className={cn("mb-1.5 block text-xs tracking-wide text-muted", hideLabel && "sr-only")}>
        <span>{label}</span>
        {rest.required && <span aria-hidden> *</span>}
      </label>
      <textarea
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-err` : undefined}
        className={cn(fieldClass, "min-h-[120px] resize-y", error && "border-red", className)}
        {...rest}
      />
      {error && (
        <p id={`${inputId}-err`} className="mt-1 text-xs text-red">
          {error}
        </p>
      )}
    </div>
  );
});

type SelectProps = {
  label: string;
  error?: string;
  hideLabel?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, hideLabel, className, id, children, ...rest },
  ref
) {
  const auto = useId();
  const inputId = id ?? auto;
  return (
    <div className="mb-2.5">
      <label htmlFor={inputId} className={cn("mb-1.5 block text-xs tracking-wide text-muted", hideLabel && "sr-only")}>
        <span>{label}</span>
        {rest.required && <span aria-hidden> *</span>}
      </label>
      <select
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-err` : undefined}
        className={cn(fieldClass, error && "border-red", className)}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <p id={`${inputId}-err`} className="mt-1 text-xs text-red">
          {error}
        </p>
      )}
    </div>
  );
});
