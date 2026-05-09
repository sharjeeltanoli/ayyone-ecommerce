"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef, useState } from "react";
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type InputState = "default" | "error" | "success";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?:       string;
  hint?:        string;
  error?:       string;
  success?:     string;
  icon?:        React.ReactNode;
  iconRight?:   React.ReactNode;
  state?:       InputState;
  fullWidth?:   boolean;
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const stateStyles: Record<InputState, string> = {
  default: "border-white/10 focus:border-brand-500 focus:ring-brand-500/20",
  error:   "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
  success: "border-green-500/50 focus:border-green-500 focus:ring-green-500/20",
};

// ─── Component ───────────────────────────────────────────────────────────────

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      success,
      icon,
      iconRight,
      state     = "default",
      fullWidth = false,
      type      = "text",
      className,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType  = isPassword ? (showPassword ? "text" : "password") : type;

    const derivedState: InputState = error ? "error" : success ? "success" : state;

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>

        {/* Label */}
        {label && (
          <label className="text-sm font-display font-medium text-slate-300">
            {label}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative flex items-center">

          {/* Left icon */}
          {icon && (
            <span className="absolute left-3 text-slate-500 pointer-events-none">
              {icon}
            </span>
          )}

          {/* Input */}
          <input
            ref={ref}
            type={inputType}
            className={cn(
              "w-full rounded-xl bg-white/4 border",
              "px-4 py-2.5 text-sm text-white placeholder:text-slate-500",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              stateStyles[derivedState],
              icon        && "pl-10",
              (iconRight || isPassword || derivedState !== "default") && "pr-10",
              className
            )}
            {...props}
          />

          {/* Right — password toggle / state icon / custom icon */}
          <span className="absolute right-3 flex items-center gap-1">
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword
                  ? <EyeOff size={16} />
                  : <Eye size={16} />
                }
              </button>
            )}

            {!isPassword && derivedState === "error" && (
              <AlertCircle size={16} className="text-red-400" />
            )}

            {!isPassword && derivedState === "success" && (
              <CheckCircle2 size={16} className="text-green-400" />
            )}

            {!isPassword && derivedState === "default" && iconRight && (
              <span className="text-slate-500">{iconRight}</span>
            )}
          </span>
        </div>

        {/* Hint / Error / Success message */}
        {error && (
          <p className="text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} /> {error}
          </p>
        )}
        {success && !error && (
          <p className="text-xs text-green-400 flex items-center gap-1">
            <CheckCircle2 size={12} /> {success}
          </p>
        )}
        {hint && !error && !success && (
          <p className="text-xs text-slate-500">{hint}</p>
        )}

      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;