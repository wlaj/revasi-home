import { TextEffect } from "./motion/text-effect";
import { AnimatedGroup } from "./motion/animated-group";
import { LogoCloud } from "./logo-cloud";
import { SectionContainer } from "./section-container";
import HeroFormSection from "./hero-form-section";
import ReservationBar from "./reservation-bar";

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
      <SectionContainer noPadding>
        <AnimatedGroup preset="blur-slide" className="relative z-10 mx-auto px-6 pt-32 lg:pb-16 lg:pt-48">
          <div className="max-w-4xl">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="text-balance text-4xl font-medium sm:text-5xl md:text-6xl"
            >
              The reservations management system for Indonesia&apos;s finest
            </TextEffect>
          </div>
          <div>
            <ReservationBar />
          </div>
        </AnimatedGroup>
      </SectionContainer>
    </>
  );
}
