import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const variants = {
  primary: "bg-orange text-white hover:bg-orange-hover",
  secondary: "bg-navy text-paper hover:bg-navy-mid",
  ghost: "bg-transparent text-paper border border-paper/70 hover:bg-paper/10",
  outline: "bg-transparent text-ink border border-line hover:border-ink",
  text: "bg-transparent text-ink underline-offset-4 hover:underline px-0",
};

const sizes = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[15px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-serif tracking-wide transition-colors duration-200",
        variants[variant],
        variant !== "text" && sizes[size],
        variant === "text" && "text-sm",
        className,
      )}
    >
      {children}
    </Link>
  );
}
