"use client";

import { motion } from "framer-motion";

interface FloatingCardProps {
  children:  React.ReactNode;
  delay?:    number;
  floatY?:   number;
  style?:    React.CSSProperties;
}

export default function FloatingCard({
  children,
  delay   = 0,
  floatY  = 6,
  style,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -floatY, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale:   { delay, duration: 0.5 },
        y:       { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      }}
      style={{
        background:     "rgba(15,37,64,0.92)",
        backdropFilter: "blur(16px)",
        border:         "1px solid rgba(255,255,255,0.08)",
        borderRadius:   "14px",
        padding:        "12px 16px",
        boxShadow:      "0 20px 40px rgba(0,0,0,0.4)",
        whiteSpace:     "nowrap",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}