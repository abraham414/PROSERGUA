import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-neutral-900 hover:bg-primary-dark focus-visible:outline-primary-dark",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark focus-visible:outline-secondary-dark",
  outline:
    "border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white",
  "outline-dark":
    "border border-gray-300 text-gray-700 hover:border-secondary hover:text-secondary focus-visible:outline-secondary",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-button px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

export function LinkButton({ href, variant = "primary", className = "", children, ...props }: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      prefetch={false}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
