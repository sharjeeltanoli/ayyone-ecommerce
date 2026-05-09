"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FloatingCard from "@/components/ui/FloatingCard";
import {
  ArrowRight, ShoppingBag, Store, Star,
  Package, TrendingUp, Shield, Zap
} from "lucide-react";

// ─── Typing Animation ─────────────────────────────────────────────────────────

const words = ["Smarter", "Faster", "Easier", "Better"];

function TypingText() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35 }}
        style={{
          background: "linear-gradient(135deg, #f97316, #fbbf24)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block",
        }}
      >
        {words[i]}
      </motion.span>
    </AnimatePresence>
  );
}

// ─── Counter ──────────────────────────────────────────────────────────────────

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let v = 0;
    const step = to / 50;
    const t = setInterval(() => {
      v += step;
      if (v >= to) { setN(to); clearInterval(t); }
      else setN(Math.floor(v));
    }, 30);
    return () => clearInterval(t);
  }, [to]);
  return <>{n.toLocaleString()}{suffix}</>;
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────

function PhoneMockup() {
  const products = [
    { name: "Samsung A55",  price: "74,999", color: "#f97316" },
    { name: "Nike Air Max", price: "18,500", color: "#0ea5e9" },
    { name: "OnePlus 12",   price: "89,999", color: "#8b5cf6" },
  ];

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      style={{
        width: "185px",
        height: "370px",
        borderRadius: "32px",
        background: "linear-gradient(160deg, #1a3050, #0c1a2e)",
        border: "2px solid rgba(249,115,22,0.3)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(249,115,22,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
        overflow: "hidden",
        padding: "18px 14px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 5,
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#f97316", fontWeight: 700, fontSize: "13px", fontFamily: "'Clash Display', sans-serif" }}>
          Ayyone
        </span>
        <div style={{ width: "26px", height: "26px", background: "rgba(249,115,22,0.15)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ShoppingBag size={13} color="#f97316" />
        </div>
      </div>

      {/* Search */}
      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "8px", padding: "6px 10px", display: "flex", alignItems: "center", gap: "6px" }}>
        <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#334155" }} />
        <span style={{ color: "#475569", fontSize: "9px" }}>Search products...</span>
      </div>

      {/* Products */}
      {products.map((p) => (
        <div key={p.name} style={{
          background: "rgba(255,255,255,0.04)", borderRadius: "10px",
          padding: "8px 10px", display: "flex", alignItems: "center", gap: "8px",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: `${p.color}20`, border: `1px solid ${p.color}40`, flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <p style={{ color: "#e2e8f0", fontSize: "9px", fontWeight: 600, margin: 0 }}>{p.name}</p>
            <p style={{ color: p.color, fontSize: "9px", fontWeight: 700, margin: 0 }}>Rs. {p.price}</p>
          </div>
          <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ArrowRight size={8} color="#fff" />
          </div>
        </div>
      ))}

      {/* Bottom nav */}
      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-around", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {[ShoppingBag, Star, Package, Store].map((Icon, idx) => (
          <Icon key={idx} size={14} color={idx === 0 ? "#f97316" : "#334155"} />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const stats = [
    { label: "Active Buyers",   value: 50000,  suffix: "+" },
    { label: "Products Listed", value: 120000, suffix: "+" },
    { label: "Sellers",         value: 8000,   suffix: "+" },
    { label: "Cities Covered",  value: 50,     suffix: "+" },
  ];

  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(160deg, #0c1a2e 0%, #0f2540 60%, #0c1a2e 100%)",
      minHeight: "calc(100vh - 64px)",
      display: "flex",
      alignItems: "center",
    }}>

      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Top glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "900px", height: "300px", pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(249,115,22,0.12), transparent)",
      }} />

      {/* Main content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 32px", width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}>

          {/* ── LEFT ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "6px 16px", borderRadius: "100px",
                background: "rgba(249,115,22,0.1)",
                border: "1px solid rgba(249,115,22,0.25)",
                color: "#fb923c", fontSize: "13px", fontWeight: 600,
              }}>
                <Zap size={13} fill="#fb923c" color="#fb923c" />
                Pakistan's #1 Seller-Friendly Marketplace
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 style={{
                fontFamily: "'Clash Display', sans-serif",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                fontWeight: 700, lineHeight: 1.15,
                color: "#fff", margin: 0,
              }}>
                Shop{" "}
                <span style={{ display: "inline-block", minWidth: "160px" }}>
                  <TypingText />
                </span>
                <br />
                <span style={{ color: "#cbd5e1" }}>with Ayyone</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.75, margin: 0, maxWidth: "460px" }}
            >
              Discover millions of products from verified sellers across Pakistan.
              Best prices, secure payments, and fast delivery — guaranteed.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
            >
              <Link href="/search" style={{
  display: "inline-flex", alignItems: "center", gap: "10px",
  padding: "12px 24px", borderRadius: "14px",
  background: "#f97316", color: "#fff",
  fontFamily: "'Clash Display', sans-serif",
  fontWeight: 600, fontSize: "16px",
  textDecoration: "none",
  boxShadow: "0 0 30px rgba(249,115,22,0.4)",
}}>
  <ShoppingBag size={18} />
  Start Shopping
  <ArrowRight size={16} />
</Link>

<Link href="/sell" style={{
  display: "inline-flex", alignItems: "center", gap: "10px",
  padding: "14px 28px", borderRadius: "14px",
  background: "transparent", color: "#fb923c",
  fontFamily: "'Clash Display', sans-serif",
  fontWeight: 600, fontSize: "16px",
  textDecoration: "none",
  border: "2px solid rgba(249,115,22,0.4)",
}}>
  <Store size={18} />
  Become a Seller
</Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ display: "flex", gap: "36px", paddingTop: "4px", flexWrap: "wrap" }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: "26px", fontWeight: 700,
                    color: "#f97316", margin: 0,
                  }}>
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p style={{ color: "#475569", fontSize: "12px", margin: "2px 0 0" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

        {/* ── RIGHT ── */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, delay: 0.2 }}
  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>
  {/* Fixed size box — sab kuch iske andar */}
  <div style={{ position: "relative", width: "460px", height: "460px", display: "flex", justifyContent: "center", alignItems: "center" }}>

    {/* Glow */}
    <div style={{
      position: "absolute", width: "200px", height: "200px", borderRadius: "50%",
      background: "radial-gradient(circle, rgba(249,115,22,0.2), transparent 70%)",
      filter: "blur(40px)", pointerEvents: "none",
    }} />

    {/* Orbit ring 1 */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      style={{
        position: "absolute", width: "260px", height: "260px", borderRadius: "50%",
        border: "1px dashed rgba(249,115,22,0.15)", pointerEvents: "none",
      }}
    />

    {/* Orbit ring 2 */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      style={{
        position: "absolute", width: "360px", height: "360px", borderRadius: "50%",
        border: "1px dashed rgba(14,165,233,0.1)", pointerEvents: "none",
      }}
    />

    {/* Phone — center */}
    <div style={{ position: "relative", zIndex: 5 }}>
      <PhoneMockup />
    </div>

    {/* TOP LEFT */}
    <div style={{ position: "absolute", top: "20px", left: "-10px", zIndex: 10 }}>
      <FloatingCard delay={0.4}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "9px", background: "rgba(34,197,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <TrendingUp size={14} color="#22c55e" />
          </div>
          <div>
            <p style={{ color: "#94a3b8", fontSize: "10px", margin: 0 }}>Today's Sales</p>
            <p style={{ color: "#22c55e", fontSize: "13px", fontWeight: 700, margin: 0 }}>+Rs. 24,500</p>
          </div>
        </div>
      </FloatingCard>
    </div>

    {/* TOP RIGHT */}
    <div style={{ position: "absolute", top: "20px", right: "-10px", zIndex: 10 }}>
      <FloatingCard delay={0.6}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "9px", background: "rgba(249,115,22,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Package size={14} color="#f97316" />
          </div>
          <div>
            <p style={{ color: "#94a3b8", fontSize: "10px", margin: 0 }}>Orders Today</p>
            <p style={{ color: "#fff", fontSize: "13px", fontWeight: 700, margin: 0 }}>142 Orders</p>
          </div>
        </div>
      </FloatingCard>
    </div>

    {/* BOTTOM LEFT */}
    <div style={{ position: "absolute", bottom: "20px", left: "-10px", zIndex: 10 }}>
      <FloatingCard delay={0.8} floatY={5}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} color="#f97316" fill="#f97316" />
          ))}
          <span style={{ color: "#e2e8f0", fontSize: "11px", fontWeight: 600 }}>4.9</span>
        </div>
        <p style={{ color: "#64748b", fontSize: "10px", margin: 0 }}>12,000+ happy buyers</p>
      </FloatingCard>
    </div>

    {/* BOTTOM RIGHT */}
    <div style={{ position: "absolute", bottom: "20px", right: "-10px", zIndex: 10 }}>
      <FloatingCard delay={1.0} floatY={5}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "9px", background: "rgba(14,165,233,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Shield size={14} color="#0ea5e9" />
          </div>
          <div>
            <p style={{ color: "#94a3b8", fontSize: "10px", margin: 0 }}>Buyer Protection</p>
            <p style={{ color: "#0ea5e9", fontSize: "12px", fontWeight: 700, margin: 0 }}>100% Secure</p>
          </div>
        </div>
      </FloatingCard>
    </div>

  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}