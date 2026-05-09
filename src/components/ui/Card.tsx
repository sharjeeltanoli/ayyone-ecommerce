"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type CardVariant = "default" | "glass" | "glass-orange" | "solid" | "bordered";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?:  CardVariant;
  hover?:    boolean;
  padding?:  "none" | "sm" | "md" | "lg";
  glow?:     "orange" | "blue" | "none";
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const variants: Record<CardVariant, string> = {
  default:      "bg-white/4 border border-white/8 backdrop-blur-md",
  glass:        "bg-white/4 border border-white/8 backdrop-blur-md",
  "glass-orange": "bg-brand-500/8 border border-brand-500/20 backdrop-blur-md",
  solid:        "bg-slate-800/80 border border-slate-700/50",
  bordered:     "bg-transparent border border-white/10",
};

const paddings = {
  none: "p-0",
  sm:   "p-3",
  md:   "p-5",
  lg:   "p-8",
};

const glows = {
  orange: "shadow-glow-orange",
  blue:   "shadow-[0_0_30px_rgba(14,165,233,0.3)]",
  none:   "",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn("flex flex-col gap-1 pb-4 border-b border-white/8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}
function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn("font-display font-semibold text-lg text-white", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}
function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn("text-sm text-slate-400 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn("pt-4", className)} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}
function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn("flex items-center pt-4 border-t border-white/8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

// ─── Main Card ────────────────────────────────────────────────────────────────

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      hover   = false,
      padding = "md",
      glow    = "none",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "rounded-2xl",
      variants[variant],
      paddings[padding],
      glows[glow],
      className
    );

    if (hover) {
      return (
        <motion.div
          ref={ref}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={cn(classes, "cursor-pointer")}
          {...(props as any)}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};