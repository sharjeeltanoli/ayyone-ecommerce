"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Zap, Shield, Truck, RefreshCw
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const footerLinks = {
  "Company": [
    { label: "About Us",    href: "/about" },
    { label: "Careers",     href: "/careers" },
    { label: "Press",       href: "/press" },
    { label: "Blog",        href: "/blog" },
  ],
  "Buyers": [
    { label: "How to Buy",     href: "/how-to-buy" },
    { label: "Track Order",    href: "/track" },
    { label: "Return Policy",  href: "/returns" },
    { label: "Help Center",    href: "/help" },
  ],
  "Sellers": [
    { label: "Start Selling",  href: "/sell" },
    { label: "Seller Fees",    href: "/fees" },
    { label: "Seller Docs",    href: "/docs" },
    { label: "Seller Support", href: "/seller/support" },
  ],
  "Legal": [
    { label: "Privacy Policy",    href: "/privacy" },
    { label: "Terms of Service",  href: "/terms" },
    { label: "Cookie Policy",     href: "/cookies" },
    { label: "Dispute Policy",    href: "/disputes" },
  ],
};

const socials = [
  { icon: "f",  href: "#", label: "Facebook"  },
  { icon: "𝕏",  href: "#", label: "Twitter"   },
  { icon: "in", href: "#", label: "Instagram" },
  { icon: "▶",  href: "#", label: "YouTube"   },
];

const trustBadges = [
  { icon: <Shield   size={20} />, label: "100% Secure Payments"  },
  { icon: <Truck    size={20} />, label: "Fast Nationwide Delivery" },
  { icon: <RefreshCw size={20} />, label: "Easy 7-Day Returns"    },
  { icon: <Zap      size={20} />, label: "Best Price Guaranteed"  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer style={{ background: "#070f1c", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {/* Trust Badges Row */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "28px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.label}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "16px", borderRadius: "14px",
                  background: "rgba(249,115,22,0.06)",
                  border: "1px solid rgba(249,115,22,0.12)",
                }}
              >
                <span style={{ color: "#f97316" }}>{badge.icon}</span>
                <span style={{ color: "#cbd5e1", fontSize: "14px", fontWeight: 500 }}>
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 32px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "40px" }}>

          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
              <div style={{
                width: "36px", height: "36px", background: "#f97316",
                borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(249,115,22,0.4)",
              }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "16px" }}>
                    <Image
  src="/icon.svg"
  alt="Ayyone"
  width={36}
  height={36}
  style={{ borderRadius: "10px" }}
/>
                </span>
              </div>
              <span style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 700, fontSize: "22px", color: "#fff",
              }}>
                Ayyone
              </span>
            </Link>

            <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.7", maxWidth: "280px" }}>
              Pakistan's most seller-friendly marketplace. Transparent fees, fast payouts, zero hidden charges.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { icon: <Mail size={14} />,    text: "support@ayyone.pk" },
                { icon: <Phone size={14} />,   text: "+92 300 0000000" },
                { icon: <MapPin size={14} />,  text: "Karachi, Pakistan" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b", fontSize: "13px" }}>
                  <span style={{ color: "#f97316" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "8px" }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={s.label}
                  style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#64748b", textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#f97316";
                    e.currentTarget.style.borderColor = "rgba(249,115,22,0.4)";
                    e.currentTarget.style.background = "rgba(249,115,22,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4 style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 600, fontSize: "14px", color: "#fff",
                letterSpacing: "0.05em", textTransform: "uppercase",
              }}>
                {title}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ color: "#64748b", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#f97316"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          marginTop: "48px", paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{ color: "#374151", fontSize: "13px" }}>
            © {new Date().getFullYear()} Ayyone. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{ color: "#374151", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#f97316"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#374151"}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}