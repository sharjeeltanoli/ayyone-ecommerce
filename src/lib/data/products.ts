import { Product } from "@/components/product/ProductCard";

export const featuredProducts: Product[] = [
  {
    id: "1", name: "Samsung Galaxy A55", category: "Mobiles",
    price: 74999, oldPrice: 89999, rating: 4.8, reviews: 320, sellers: 5,
    badge: { label: "Best Seller", color: "#f97316", bg: "rgba(249,115,22,0.15)" },
    gradient: "linear-gradient(135deg, #1a2f4a, #0f2030)", icon: "📱",
  },
  {
    id: "2", name: "Nike Air Max 270", category: "Fashion",
    price: 18500, oldPrice: 22000, rating: 4.6, reviews: 215, sellers: 3,
    badge: { label: "Hot Deal", color: "#ef4444", bg: "rgba(239,68,68,0.15)" },
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e)", icon: "👟",
  },
  {
    id: "3", name: "OnePlus 12 Pro", category: "Mobiles",
    price: 89999, rating: 4.9, reviews: 180, sellers: 4,
    badge: { label: "New Arrival", color: "#0ea5e9", bg: "rgba(14,165,233,0.15)" },
    gradient: "linear-gradient(135deg, #0f2540, #1a3050)", icon: "📱",
  },
  {
    id: "4", name: "Sony WH-1000XM5", category: "Electronics",
    price: 54999, oldPrice: 64999, rating: 4.9, reviews: 450, sellers: 6,
    badge: { label: "Top Rated", color: "#a855f7", bg: "rgba(168,85,247,0.15)" },
    gradient: "linear-gradient(135deg, #1a1535, #0f0f2e)", icon: "🎧",
  },
  {
    id: "5", name: "Apple Watch Series 9", category: "Watches",
    price: 119999, rating: 4.7, reviews: 290, sellers: 3,
    gradient: "linear-gradient(135deg, #1a2a1a, #0f1f0f)", icon: "⌚",
  },
  {
    id: "6", name: "Dyson V15 Detect", category: "Home & Living",
    price: 129999, oldPrice: 149999, rating: 4.8, reviews: 167, sellers: 2,
    badge: { label: "Premium", color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
    gradient: "linear-gradient(135deg, #2a1a0f, #1f1509)", icon: "🧹",
  },
  {
    id: "7", name: "MacBook Air M3", category: "Laptops",
    price: 289999, rating: 4.9, reviews: 520, sellers: 4,
    badge: { label: "Best Seller", color: "#f97316", bg: "rgba(249,115,22,0.15)" },
    gradient: "linear-gradient(135deg, #1a2535, #0f1a25)", icon: "💻",
  },
  {
    id: "8", name: "Instant Pot Duo 7-in-1", category: "Kitchen",
    price: 24999, oldPrice: 32000, rating: 4.5, reviews: 380, sellers: 5,
    badge: { label: "Hot Deal", color: "#ef4444", bg: "rgba(239,68,68,0.15)" },
    gradient: "linear-gradient(135deg, #1a1a1a, #111111)", icon: "🍲",
  },
];