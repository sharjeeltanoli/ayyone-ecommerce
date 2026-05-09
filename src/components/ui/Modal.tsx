"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Variants, Transition } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────

type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

interface ModalProps {
  open:       boolean;
  onClose:    () => void;
  title?:     string;
  description?: string;
  size?:      ModalSize;
  children:   React.ReactNode;
  footer?:    React.ReactNode;
  closable?:  boolean;
}

// ─── Sizes ───────────────────────────────────────────────────────────────────

const sizes: Record<ModalSize, string> = {
  sm:   "max-w-sm",
  md:   "max-w-md",
  lg:   "max-w-lg",
  xl:   "max-w-2xl",
  full: "max-w-5xl",
};

// ─── Animations ──────────────────────────────────────────────────────────────

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden:  { opacity: 0, scale: 0.92, y: 20 },
  visible: { 
    opacity: 1, scale: 1, y: 0,
    transition: { 
      type: "spring" as const, 
      stiffness: 300, 
      damping: 25,
    }
  },
  exit: { 
    opacity: 0, scale: 0.92, y: 20,
    transition: { duration: 0.2 }
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function Modal({
  open,
  onClose,
  title,
  description,
  size     = "md",
  children,
  footer,
  closable = true,
}: ModalProps) {

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closable) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closable, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={closable ? onClose : undefined}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={cn(
                "relative w-full pointer-events-auto",
                "bg-slate-900 border border-white/10 rounded-2xl shadow-2xl",
                sizes[size]
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              {(title || closable) && (
                <div className="flex items-start justify-between p-6 border-b border-white/8">
                  <div>
                    {title && (
                      <h2 className="font-display font-semibold text-lg text-white">
                        {title}
                      </h2>
                    )}
                    {description && (
                      <p className="text-sm text-slate-400 mt-0.5">{description}</p>
                    )}
                  </div>
                  {closable && (
                    <button
                      onClick={onClose}
                      className="text-slate-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/8 ml-4 flex-shrink-0"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              )}

              {/* Body */}
              <div className="p-6">{children}</div>

              {/* Footer */}
              {footer && (
                <div className="flex items-center justify-end gap-3 px-6 pb-6 pt-2 border-t border-white/8">
                  {footer}
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}