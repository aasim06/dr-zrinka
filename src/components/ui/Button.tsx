import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "link";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "border-gold bg-gold text-[#17110a] hover:border-gold-light hover:bg-gold-light",
  secondary: "border-red bg-red text-white hover:border-red-light hover:bg-red-light",
  outline: "border-current bg-transparent hover:border-ink hover:bg-ink hover:text-paper",
  "outline-light": "border-white/50 bg-transparent text-white hover:border-gold hover:bg-gold hover:text-[#17110a]",
  link: "border-0 border-b border-gold bg-transparent px-0 pb-1 hover:text-red",
};
const sizes: Record<Size, string> = {
  sm: "px-5 py-3 text-xs",
  md: "px-[34px] py-[15px] text-[13px]",
  lg: "px-10 py-5 text-sm",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "onClick">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  onClick,
  children,
  ...rest
}: Props) {
  const classes = cn(
    "inline-block cursor-pointer border font-medium leading-none tracking-[0.06em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variant === "link" ? "p-0 text-[13px] tracking-[0.04em]" : sizes[size],
    variants[variant],
    className
  );
  if (href) {
    const isExternal = external || /^https?:\/\//i.test(href);
    const isDirectProtocol = /^(mailto:|tel:)/i.test(href);
    if (isExternal || isDirectProtocol) {
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          onClick={onClick}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
