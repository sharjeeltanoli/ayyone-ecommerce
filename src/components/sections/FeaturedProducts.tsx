"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { featuredProducts } from "@/lib/data/products";

const tabs = ["All", "Mobiles", "Electronics", "Fashion", "Home & Living"];

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? featuredProducts
    : featuredProducts.filter((p) => p.category === activeTab);

  return (
    <section style={{
      background: "#0c1a2e",
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
          style={{ marginBottom: "36px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}
        >
          <div>
            <p style={{ color: "#f97316", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 8px" }}>
              ⚡ Featured Products
            </p>
            <h2 style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 700, color: "#fff", margin: 0,
            }}>
              Trending Right Now
            </h2>
          </div>
          <Link href="/search" style={{
            color: "#f97316", fontSize: "14px", fontWeight: 600,
            textDecoration: "none", borderBottom: "1px solid rgba(249,115,22,0.4)",
            paddingBottom: "2px",
          }}>
            View All Products →
          </Link>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "8px 18px", borderRadius: "100px",
                border: activeTab === tab ? "1px solid #f97316" : "1px solid rgba(255,255,255,0.1)",
                background: activeTab === tab ? "rgba(249,115,22,0.15)" : "transparent",
                color: activeTab === tab ? "#f97316" : "#94a3b8",
                fontSize: "13px", fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
  key={activeTab}
  variants={container}
  initial="hidden"
  animate="visible"
  className="grid-responsive-products"
>
          {filtered.map((product) => (
            <motion.div key={product.id} variants={item} style={{ height: "100%" }}>
  <ProductCard product={product} />
</motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}