import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-section";
import StatsSection from "@/components/stats-section";
import CarouselSection from "@/components/carousel-section";
import BlocksSection from "@/components/blocks-section";
import TestimonialsSection from "@/components/testimonials-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CarouselSection />
      <BlocksSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
