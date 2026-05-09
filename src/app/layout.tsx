import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ayyone — Pakistan's Seller-Friendly Marketplace",
    template: "%s | Ayyone",
  },
  description: "Pakistan's most seller-friendly ecommerce platform. Transparent fees, 3-day payouts, zero hidden charges.",
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}