"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Heart, Star } from "lucide-react";

export interface Product {
  id:        string;
  name:      string;
  category:  string;
  price:     number;
  oldPrice?: number;
  rating:    number;
  reviews:   number;
  sellers:   number;
  badge?:    { label: string; color: string; bg: string };
  gradient:  string;
  icon:      string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <motion.div
        whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          background: "#0f1f35",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image */}
        <div style={{
          height: "200px",
          minHeight: "200px",
          background: product.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontSize: "68px",
          flexShrink: 0,
        }}>
          {product.icon}

          {product.badge && (
            <div style={{
              position: "absolute", top: "12px", left: "12px",
              padding: "4px 10px", borderRadius: "100px",
              background: product.badge.bg,
              border: `1px solid ${product.badge.color}40`,
              color: product.badge.color,
              fontSize: "11px", fontWeight: 600,
            }}>
              {product.badge.label}
            </div>
          )}

          {discount && (
            <div style={{
              position: "absolute", top: "12px", right: "12px",
              padding: "4px 8px", borderRadius: "8px",
              background: "#ef4444",
              color: "#fff", fontSize: "11px", fontWeight: 700,
            }}>
              -{discount}%
            </div>
          )}

          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={(e) => { e.preventDefault(); setWished(!wished); }}
            style={{
              position: "absolute", bottom: "12px", right: "12px",
              width: "34px", height: "34px", borderRadius: "10px",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Heart size={15} color={wished ? "#ef4444" : "#94a3b8"} fill={wished ? "#ef4444" : "none"} />
          </motion.button>
        </div>

        {/* Info */}
        <div style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
          gap: "10px",
        }}>
          <div>
            <p style={{ color: "#64748b", fontSize: "11px", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {product.category}
            </p>
            <h3 style={{
              color: "#e2e8f0", fontSize: "15px", fontWeight: 600,
              margin: 0, lineHeight: 1.3,
              fontFamily: "'Clash Display', sans-serif",
            }}>
              {product.name}
            </h3>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} color="#f97316" fill={i < Math.floor(product.rating) ? "#f97316" : "none"} />
              ))}
            </div>
            <span style={{ color: "#94a3b8", fontSize: "12px" }}>{product.rating} ({product.reviews})</span>
            <span style={{ color: "#334155" }}>·</span>
            <span style={{ color: "#64748b", fontSize: "12px" }}>{product.sellers} sellers</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "'Clash Display', sans-serif", fontSize: "18px", fontWeight: 700, color: "#f97316", margin: 0 }}>
                Rs. {product.price.toLocaleString()}
              </p>
              <p style={{ color: "#475569", fontSize: "12px", textDecoration: "line-through", margin: "2px 0 0", minHeight: "16px" }}>
                {product.oldPrice ? `Rs. ${product.oldPrice.toLocaleString()}` : ""}
              </p>
            </div>

            <motion.button
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.08 }}
              onClick={(e) => e.preventDefault()}
              style={{
                width: "38px", height: "38px", borderRadius: "12px",
                background: "#f97316", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(249,115,22,0.4)",
                flexShrink: 0,
              }}
            >
              <ShoppingCart size={16} color="#fff" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}