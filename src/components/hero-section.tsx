import { Mail, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "./motion/text-effect";
import { AnimatedGroup } from "./motion/animated-group";
import { HeroHeader } from "./hero-header";
import { LogoCloud } from "./logo-cloud";
import { SectionContainer } from "./section-container";
import HeroFormSection from "./hero-form-section";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <SectionContainer className="relative overflow-hidden" noPadding>
        {/* Background gradients */}
        <div
          aria-hidden
          className="absolute inset-0 isolate z-10 hidden opacity-45 contain-strict lg:block pointer-events-none"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,90%,85%,.16)_0,hsla(0,90%,55%,.06)_50%,hsla(0,90%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,90%,85%,.15)_0,hsla(0,90%,45%,.06)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,90%,85%,.12)_0,hsla(0,90%,45%,.06)_80%,transparent_100%)]" />
        </div>
        
        <AnimatedGroup preset="blur-slide" className="relative z-10 mx-auto px-6 pt-32 lg:pb-16 lg:pt-48">
          <div className="mx-auto max-w-4xl text-center">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="text-balance text-4xl font-medium sm:text-5xl md:text-6xl"
            >
              The reservations management system for Indonesia&apos;s finest
            </TextEffect>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-8 md:mt-12 max-w-2xl text-pretty text-base md:text-lg"
            >
              Revasi is a refined reservations management system designed for exclusive restaurants . We collaborate with restaurateurs to streamline operations,
              enhance guest experiences, and redefine hospitality standards.
            </TextEffect>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-8 md:mt-12"
            >
              <HeroFormSection />
            </AnimatedGroup>
          </div>
        </AnimatedGroup>

        <AnimatedGroup preset="fade" className="mt-16 md:mt-24">
          <LogoCloud />
        </AnimatedGroup>
      </SectionContainer>
    </>
  );
}
