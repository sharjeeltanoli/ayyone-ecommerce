"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Smartphone, Tv, Shirt, Home, Dumbbell,
  Sparkles, BookOpen, Baby, Car, Laptop,
  Watch, UtensilsCrossed
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  { label: "Mobiles",       href: "/category/mobiles",     icon: <Smartphone size={28} />, color: "#f97316", bg: "rgba(249,115,22,0.12)",  border: "rgba(249,115,22,0.25)" },
  { label: "Electronics",  href: "/category/electronics",  icon: <Tv size={28} />,         color: "#0ea5e9", bg: "rgba(14,165,233,0.12)",   border: "rgba(14,165,233,0.25)"  },
  { label: "Fashion",      href: "/category/fashion",      icon: <Shirt size={28} />,      color: "#ec4899", bg: "rgba(236,72,153,0.12)",   border: "rgba(236,72,153,0.25)"  },
  { label: "Home & Living",href: "/category/home",         icon: <Home size={28} />,       color: "#22c55e", bg: "rgba(34,197,94,0.12)",    border: "rgba(34,197,94,0.25)"   },
  { label: "Sports",       href: "/category/sports",       icon: <Dumbbell size={28} />,   color: "#f59e0b", bg: "rgba(245,158,11,0.12)",   border: "rgba(245,158,11,0.25)"  },
  { label: "Beauty",       href: "/category/beauty",       icon: <Sparkles size={28} />,   color: "#a855f7", bg: "rgba(168,85,247,0.12)",   border: "rgba(168,85,247,0.25)"  },
  { label: "Books",        href: "/category/books",        icon: <BookOpen size={28} />,   color: "#06b6d4", bg: "rgba(6,182,212,0.12)",    border: "rgba(6,182,212,0.25)"   },
  { label: "Baby & Kids",  href: "/category/baby",         icon: <Baby size={28} />,       color: "#f43f5e", bg: "rgba(244,63,94,0.12)",    border: "rgba(244,63,94,0.25)"   },
  { label: "Automotive",   href: "/category/auto",         icon: <Car size={28} />,        color: "#64748b", bg: "rgba(100,116,139,0.12)",  border: "rgba(100,116,139,0.25)" },
  { label: "Laptops",      href: "/category/laptops",      icon: <Laptop size={28} />,     color: "#3b82f6", bg: "rgba(59,130,246,0.12)",   border: "rgba(59,130,246,0.25)"  },
  { label: "Watches",      href: "/category/watches",      icon: <Watch size={28} />,      color: "#f97316", bg: "rgba(249,115,22,0.12)",   border: "rgba(249,115,22,0.25)"  },
  { label: "Food & Kitchen",href:"/category/food",         icon: <UtensilsCrossed size={28}/>,color:"#10b981",bg:"rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.25)"  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function CategoryGrid() {
  return (
    <section style={{
      background: "#0a1628",
      padding: "80px 0",
      borderTop: "1px solid rgba(255,255,255,0.04)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}
        >
          <div>
            <p style={{ color: "#f97316", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>
              Browse by Category
            </p>
            <h2 style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.2,
            }}>
              What are you looking for?
            </h2>
          </div>
          <Link
            href="/categories"
            style={{
              color: "#f97316", fontSize: "14px", fontWeight: 600,
              textDecoration: "none", display: "flex", alignItems: "center", gap: "4px",
              paddingBottom: "4px", borderBottom: "1px solid rgba(249,115,22,0.4)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = "#f97316"}
            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = "rgba(249,115,22,0.4)"}
          >
            View All →
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid-responsive-categories"
style={{
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "16px",
}}
        >
          {categories.map((cat) => (
            <motion.div key={cat.label} variants={item}>
              <Link
                href={cat.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: "12px", padding: "24px 12px",
                    background: cat.bg,
                    border: `1px solid ${cat.border}`,
                    borderRadius: "18px",
                    cursor: "pointer",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 40px ${cat.bg}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "16px",
                    background: cat.bg, border: `1px solid ${cat.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: cat.color,
                  }}>
                    {cat.icon}
                  </div>
                  <p style={{
                    color: "#e2e8f0", fontSize: "13px", fontWeight: 600,
                    margin: 0, textAlign: "center", lineHeight: 1.3,
                  }}>
                    {cat.label}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}