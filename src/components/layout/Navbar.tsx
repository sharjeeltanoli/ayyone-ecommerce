"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ShoppingCart, Menu, X, ChevronDown,
  User, Package, Heart, LogOut, Store,
  LayoutDashboard, Bell, Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const categories = [
  { label: "Mobiles & Tablets", href: "/category/mobiles" },
  { label: "Electronics",       href: "/category/electronics" },
  { label: "Fashion",           href: "/category/fashion" },
  { label: "Home & Living",     href: "/category/home" },
  { label: "Sports",            href: "/category/sports" },
  { label: "Beauty & Health",   href: "/category/beauty" },
];

const navLinks = [
  { label: "Deals",       href: "/deals" },
  { label: "Sellers",     href: "/sellers" },
  { label: "Track Order", href: "/track" },
];

const userMenuItems = [
  { label: "My Profile",       href: "/profile",          icon: <User size={15} /> },
  { label: "My Orders",        href: "/orders",           icon: <Package size={15} /> },
  { label: "Wishlist",         href: "/wishlist",         icon: <Heart size={15} /> },
  { label: "Seller Dashboard", href: "/seller/dashboard", icon: <LayoutDashboard size={15} /> },
  { label: "My Shop",          href: "/seller/listings",  icon: <Store size={15} /> },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [userOpen,    setUserOpen]    = useState(false);
  const [catOpen,     setCatOpen]     = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  const isLoggedIn = false;
  const cartCount  = 3;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => { setUserOpen(false); setCatOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        style={{
          position:   "fixed",
          top:        0,
          left:       0,
          right:      0,
          zIndex:     50,
          background: scrolled ? "rgba(12,26,46,0.97)" : "rgba(12,26,46,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Single centered row */}
        <div style={{
          maxWidth:      "1280px",
          margin:        "0 auto",
          padding:       "0 32px",
          height:        "64px",
          display:       "flex",
          alignItems:    "center",
          gap:           "16px",
        }}>

          {/* Logo */}
<Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", flexShrink: 0 }}>
  <motion.div
    whileHover={{ rotate: 15, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400 }}
    style={{ flexShrink: 0 }}
  >
    <Image
      src="/icon.svg"
      alt="Ayyone"
      width={34}
      height={34}
      style={{ borderRadius: "10px" }}
    />
  </motion.div>
  <span style={{
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 700, fontSize: "20px", color: "#fff",
  }}>
    Ayyone
  </span>
</Link>
          {/* Search */}
          <div style={{ flex: 1, maxWidth: "480px" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
              padding: "8px 14px", borderRadius: "12px",
              background: searchFocus ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
              border: searchFocus ? "1px solid rgba(249,115,22,0.6)" : "1px solid rgba(255,255,255,0.1)",
              boxShadow: searchFocus ? "0 0 20px rgba(249,115,22,0.15)" : "none",
              transition: "all 0.2s ease",
            }}>
              <Search size={15} color="#64748b" style={{ flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search products, brands..."
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
                style={{
                  background: "transparent", border: "none", outline: "none",
                  color: "#fff", fontSize: "13px", width: "100%",
                }}
              />
            </div>
          </div>

          {/* Nav Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }} className="hidden lg:flex">

            {/* Categories */}
            <div style={{ position: "relative" }} onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setCatOpen(!catOpen)}
                style={{
                  display: "flex", alignItems: "center", gap: "4px",
                  padding: "8px 12px", borderRadius: "10px", border: "none",
                  background: catOpen ? "rgba(255,255,255,0.06)" : "transparent",
                  color: "#cbd5e1", fontSize: "14px", cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#cbd5e1"}
              >
                Categories
                <motion.span animate={{ rotate: catOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {catOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{   opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: "absolute", top: "100%", left: 0, marginTop: "8px",
                      width: "220px", background: "#0f2540",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "14px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                      zIndex: 100,
                    }}
                  >
                    {categories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        style={{
                          display: "flex", alignItems: "center", gap: "10px",
                          padding: "10px 16px", color: "#cbd5e1", fontSize: "13px",
                          textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.04)",
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(249,115,22,0.08)"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#cbd5e1"; }}
                      >
                        <Zap size={13} color="#f97316" />
                        {cat.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Regular links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 12px", borderRadius: "10px",
                  color: "#cbd5e1", fontSize: "14px", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#cbd5e1"; e.currentTarget.style.background = "transparent"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "auto", flexShrink: 0 }}>

            {/* Cart */}
            <Link href="/cart" style={{ position: "relative", padding: "8px", color: "#94a3b8", borderRadius: "10px", display: "flex", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "transparent"; }}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{
                    position: "absolute", top: "2px", right: "2px",
                    width: "16px", height: "16px", background: "#f97316",
                    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontSize: "10px", fontWeight: 700,
                  }}
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <div style={{ position: "relative" }} onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setUserOpen(!userOpen)}
                  style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    padding: "6px 10px", borderRadius: "12px", border: "none",
                    background: "transparent", cursor: "pointer", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <User size={15} color="#fb923c" />
                  </div>
                  <ChevronDown size={13} color="#94a3b8" />
                </button>

                <AnimatePresence>
                  {userOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{   opacity: 0, y: 6, scale: 0.97 }}
                      style={{
                        position: "absolute", top: "100%", right: 0, marginTop: "8px",
                        width: "210px", background: "#0f2540",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "14px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                        zIndex: 100,
                      }}
                    >
                      <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                        <p style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>John Ahmed</p>
                        <p style={{ color: "#94a3b8", fontSize: "12px" }}>john@example.com</p>
                      </div>
                      {userMenuItems.map((item) => (
                        <Link key={item.href} href={item.href}
                          style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", color: "#cbd5e1", fontSize: "13px", textDecoration: "none", transition: "all 0.15s" }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#fff"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#cbd5e1"; }}
                        >
                          <span style={{ color: "#fb923c" }}>{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                        <button
                          style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", padding: "10px 16px", color: "#f87171", fontSize: "13px", background: "none", border: "none", cursor: "pointer", transition: "all 0.15s" }}
                          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(239,68,68,0.08)"}
                          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                        >
                          <LogOut size={15} /> Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden sm:flex" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Button variant="ghost" size="sm">
                  <Link href="/login" style={{ textDecoration: "none", color: "inherit" }}>Sign In</Link>
                </Button>
                <Button size="sm">
                  <Link href="/register" style={{ textDecoration: "none", color: "inherit" }}>Get Started</Link>
                </Button>
              </div>
            )}

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden"
              style={{ padding: "8px", color: "#94a3b8", background: "none", border: "none", cursor: "pointer" }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{   opacity: 0, height: 0 }}
              style={{ background: "#0f2540", borderTop: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}
            >
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                {[...navLinks].map((link) => (
                  <Link key={link.href} href={link.href}
                    style={{ padding: "10px 12px", color: "#cbd5e1", fontSize: "14px", textDecoration: "none", borderRadius: "10px" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Button variant="ghost" fullWidth><Link href="/login" style={{ textDecoration: "none", color: "inherit" }}>Sign In</Link></Button>
                  <Button fullWidth><Link href="/register" style={{ textDecoration: "none", color: "inherit" }}>Get Started</Link></Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div style={{ height: "64px" }} />
    </>
  );
}