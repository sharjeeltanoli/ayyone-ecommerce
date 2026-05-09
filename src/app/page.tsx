import HeroSection from "@/components/sections/HeroSection";
import CategoryGrid from "@/components/sections/CategoryGrid";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import TrustBadges from "@/components/sections/TrustBadges";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <TrustBadges />
    </main>
  );
}