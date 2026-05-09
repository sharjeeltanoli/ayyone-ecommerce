"use client";

import { motion } from "framer-motion";
import { Shield, Truck, RefreshCw, Headphones, Lock, Zap, Award, Clock } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const badges = [
  {
    icon:        <Shield size={32} />,
    title:       "100% Secure Payments",
    description: "All transactions are encrypted and protected by bank-level security.",
    color:       "#22c55e",
    bg:          "rgba(34,197,94,0.1)",
    border:      "rgba(34,197,94,0.2)",
  },
  {
    icon:        <Truck size={32} />,
    title:       "Nationwide Delivery",
    description: "We deliver to 50+ cities across Pakistan — fast and reliable.",
    color:       "#0ea5e9",
    bg:          "rgba(14,165,233,0.1)",
    border:      "rgba(14,165,233,0.2)",
  },
  {
    icon:        <RefreshCw size={32} />,
    title:       "7-Day Easy Returns",
    description: "Not satisfied? Return within 7 days, no questions asked.",
    color:       "#f97316",
    bg:          "rgba(249,115,22,0.1)",
    border:      "rgba(249,115,22,0.2)",
  },
  {
    icon:        <Headphones size={32} />,
    title:       "24/7 Customer Support",
    description: "Our support team is always available to help you anytime.",
    color:       "#a855f7",
    bg:          "rgba(168,85,247,0.1)",
    border:      "rgba(168,85,247,0.2)",
  },
  {
    icon:        <Lock size={32} />,
    title:       "Buyer Protection",
    description: "Your money is safe until you confirm delivery of your order.",
    color:       "#f59e0b",
    bg:          "rgba(245,158,11,0.1)",
    border:      "rgba(245,158,11,0.2)",
  },
  {
    icon:        <Zap size={32} />,
    title:       "Best Price Guarantee",
    description: "Find a lower price? We'll match it or refund the difference.",
    color:       "#ec4899",
    bg:          "rgba(236,72,153,0.1)",
    border:      "rgba(236,72,153,0.2)",
  },
  {
    icon:        <Award size={32} />,
    title:       "Verified Sellers Only",
    description: "Every seller is verified and rated by real buyers like you.",
    color:       "#06b6d4",
    bg:          "rgba(6,182,212,0.1)",
    border:      "rgba(6,182,212,0.2)",
  },
  {
    icon:        <Clock size={32} />,
    title:       "On-Time Delivery",
    description: "98% of orders are delivered within the promised timeframe.",
    color:       "#10b981",
    bg:          "rgba(16,185,129,0.1)",
    border:      "rgba(16,185,129,0.2)",
  },
];

// ─── Animation ────────────────────────────────────────────────────────────────

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function TrustBadges() {
  return (
    <section style={{
      background: "#070f1c",
      padding: "80px 0",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "300px",
        background: "radial-gradient(ellipse, rgba(249,115,22,0.06), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <p style={{
            color: "#f97316", fontSize: "13px", fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase",
            margin: "0 0 12px",
          }}>
            Why Choose Ayyone
          </p>
          <h2 style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 700, color: "#fff", margin: "0 0 16px",
          }}>
            Shop with Complete Confidence
          </h2>
          <p style={{
            color: "#64748b", fontSize: "16px", maxWidth: "520px",
            margin: "0 auto", lineHeight: 1.7,
          }}>
            We've built Ayyone around trust, transparency, and your peace of mind.
          </p>
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
}}
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.title}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                padding: "28px 24px",
                background: badge.bg,
                border: `1px solid ${badge.border}`,
                borderRadius: "20px",
                display: "flex", flexDirection: "column", gap: "14px",
                cursor: "default",
              }}
            >
              {/* Icon */}
              <div style={{
                width: "56px", height: "56px", borderRadius: "16px",
                background: badge.bg,
                border: `1px solid ${badge.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: badge.color,
              }}>
                {badge.icon}
              </div>

              {/* Text */}
              <div>
                <h3 style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "15px", fontWeight: 600,
                  color: "#e2e8f0", margin: "0 0 6px",
                }}>
                  {badge.title}
                </h3>
                <p style={{
                  color: "#64748b", fontSize: "13px",
                  lineHeight: 1.6, margin: 0,
                }}>
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: "56px", textAlign: "center",
            padding: "40px", borderRadius: "24px",
            background: "rgba(249,115,22,0.06)",
            border: "1px solid rgba(249,115,22,0.15)",
          }}
        >
          <h3 style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: "clamp(22px, 2.5vw, 32px)",
            fontWeight: 700, color: "#fff", margin: "0 0 12px",
          }}>
            Ready to start shopping?
          </h3>
          <p style={{ color: "#94a3b8", fontSize: "15px", margin: "0 0 24px" }}>
            Join 50,000+ happy buyers on Ayyone today.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/search" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 28px", borderRadius: "14px",
              background: "#f97316", color: "#fff",
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 600, fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 0 30px rgba(249,115,22,0.4)",
            }}>
              Start Shopping
            </a>
            <a href="/sell" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 28px", borderRadius: "14px",
              background: "transparent", color: "#fb923c",
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 600, fontSize: "15px",
              textDecoration: "none",
              border: "2px solid rgba(249,115,22,0.4)",
            }}>
              Become a Seller
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}