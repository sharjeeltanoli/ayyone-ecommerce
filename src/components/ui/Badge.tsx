import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type BadgeVariant =
  | "orange"
  | "blue"
  | "green"
  | "red"
  | "yellow"
  | "purple"
  | "gray";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?:     boolean;
  size?:    "sm" | "md";
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const variants: Record<BadgeVariant, string> = {
  orange: "bg-brand-500/15 text-brand-400 border border-brand-500/30",
  blue:   "bg-shark-500/15 text-shark-400 border border-shark-500/30",
  green:  "bg-green-500/15 text-green-400 border border-green-500/30",
  red:    "bg-red-500/15 text-red-400 border border-red-500/30",
  yellow: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
  purple: "bg-purple-500/15 text-purple-400 border border-purple-500/30",
  gray:   "bg-white/8 text-slate-400 border border-white/10",
};

const dots: Record<BadgeVariant, string> = {
  orange: "bg-brand-400",
  blue:   "bg-shark-400",
  green:  "bg-green-400",
  red:    "bg-red-400",
  yellow: "bg-yellow-400",
  purple: "bg-purple-400",
  gray:   "bg-slate-400",
};

const sizes = {
  sm: "text-xs px-2 py-0.5 gap-1",
  md: "text-sm px-2.5 py-1 gap-1.5",
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function Badge({
  variant = "orange",
  dot     = false,
  size    = "sm",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-display font-semibold rounded-full",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("rounded-full flex-shrink-0 animate-pulse", dots[variant],
            size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2"
          )}
        />
      )}
      {children}
    </span>
  );
}