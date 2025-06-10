import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import CarouselSection from "@/components/carousel-section";
import BlocksSection from "@/components/blocks-section";
import FooterSection from "@/components/footer-section";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CarouselSection />
      <BlocksSection />
      <FooterSection />
    </main>
  );
}
