import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-section";
import StatsSection from "@/components/stats-section";
import CarouselSection from '@/components/carousel-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CarouselSection />
      <StatsSection />
      <IntegrationsSection />
    </main>
  );
}
