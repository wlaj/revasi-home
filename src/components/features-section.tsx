import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { AnimatedGroup } from "./motion/animated-group";

export default function FeaturesSection() {
  return (
    <SectionContainer>
      <div className="space-y-8 md:space-y-12">
        <AnimatedGroup preset="blur-slide" className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold lg:text-5xl">
            Tailored for Fine Dining Excellence
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg">
            Elevate your restaurant operations with a reservation system designed specifically for Indonesia&apos;s high-end culinary experiences. Balance elegance with efficiency.
          </p>
        </AnimatedGroup>
        
        <AnimatedGroup preset="fade" className="relative -mt-16 -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
          <div className="perspective-midrange">
            <div>
              <div className="aspect-[21/9] relative">
                <div className="absolute inset-x-0 scale-110 -mb-24 bottom-0 h-120 bg-gradient-to-t from-background to-transparent z-20"></div>
                <Image
                  src="/details.png"
                  className="absolute inset-0 z-0 object-cover object-center scale-115"
                  alt="payments illustration dark"
                  width={2797}
                  height={1137}
                  priority
                />
              </div>
            </div>
          </div>
        </AnimatedGroup>
        
        <AnimatedGroup preset="slide" className="relative z-30 mx-auto mt-16 md:mt-24 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Lightning Fast</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Instant booking confirmations and real-time table availability that keeps pace with busy service periods.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Customizable</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Adapt to your unique service style with flexible seating arrangements and personalized guest preferences.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Private & Secure</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Protect guest information with enterprise-grade security while maintaining discretion for VIP clientele.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Smart Insights</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Leverage advanced analytics to optimize seating capacity, predict busy periods, and enhance guest experiences.
            </p>
          </div>
        </AnimatedGroup>
      </div>
    </SectionContainer>
  );
}
