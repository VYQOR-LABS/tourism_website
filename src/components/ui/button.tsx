import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5a36] focus-visible:ring-offset-2",
    variant === "primary" && "bg-[#d4a75f] text-[#2d1a12] shadow-lg shadow-[#5a3321]/20 hover:-translate-y-0.5 hover:bg-[#e1b96a]",
    variant === "secondary" && "border border-[#f5d896]/40 bg-[#f5d896]/10 text-[#fff3d2] backdrop-blur-sm hover:bg-[#f5d896]/20",
    variant === "ghost" && "bg-[#f4efe8] text-[#17322a] hover:bg-[#eae1d3]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
        {children}
      </Link>
    );
  }

  return <button type={type} disabled={disabled} className={cn(classes, disabled && "cursor-not-allowed opacity-60")}>{children}</button>;
}
