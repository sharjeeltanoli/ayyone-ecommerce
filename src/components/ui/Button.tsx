"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Variant = "primary" | "secondary" | "ghost" | "danger" | "outline";
type Size    = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   Variant;
  size?:      Size;
  loading?:   boolean;
  icon?:      React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const base = [
  "relative inline-flex items-center justify-center gap-2",
  "font-display font-semibold rounded-xl",
  "transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
  "disabled:opacity-50 disabled:cursor-not-allowed",
  "overflow-hidden cursor-pointer select-none",
  "tracking-wide",  
].join(" ");

const variants: Record<Variant, string> = {
  primary:   "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-glow-orange",
  secondary: "bg-shark-500/10 text-shark-500 border border-shark-500/30 hover:bg-shark-500/20",
  ghost:     "bg-transparent text-slate-300 hover:bg-white/5 hover:text-white",
  outline: "bg-transparent text-brand-400 border-2 border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-300",
  danger:    "bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20",
};

const sizes: Record<Size, string> = {
  sm:   "h-8  px-4 text-sm  gap-2",
  md:   "h-10 px-6 text-sm  gap-2",
  lg:   "h-12 px-10 text-base gap-3",
  icon: "h-10 w-10 p-0",
};

// ─── Component ───────────────────────────────────────────────────────────────

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant   = "primary",
      size      = "md",
      loading   = false,
      icon,
      iconRight,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || loading}
        {...(props as any)}
      >
        {/* Shimmer on primary */}
        {variant === "primary" && (
          <span
            className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
            aria-hidden
          />
        )}

        {/* Left icon or spinner */}
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          icon && <span className="flex-shrink-0">{icon}</span>
        )}

        {/* Label */}
        {children && (
          <span className={loading ? "opacity-70" : ""}>{children}</span>
        )}

        {/* Right icon */}
        {iconRight && !loading && (
          <span className="flex-shrink-0">{iconRight}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;