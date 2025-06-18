import { TextEffect } from "./motion/text-effect";
import { AnimatedGroup } from "./motion/animated-group";
import { LogoCloud } from "./logo-cloud";
import { SectionContainer } from "./section-container";
import HeroFormSection from "./hero-form-section";
import ReservationBar from "./reservation-bar";
import { TextLoop } from "./ui/text-loop";

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
        <AnimatedGroup
          preset="blur-slide"
          className="relative z-10 mx-auto pt-32 lg:pb-16 lg:pt-48"
        >
          <div className="max-w-4xl">
            <h1 className="text-balance text-4xl font-medium sm:text-5xl md:text-6xl">
              Discover the best dining experiences in{" "}
              <TextLoop
                className="overflow-y-clip"
                interval={5}
                transition={{
                  type: "tween",
                  stiffness: 900,
                  damping: 80,
                  mass: 10,
                }}
                variants={{
                  initial: {
                    y: 20,
                    rotateX: 90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                  animate: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  },
                  exit: {
                    y: -20,
                    rotateX: -90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                }}
              >
                <span>Bali</span>
                <span>Jakarta</span>
              </TextLoop>
            </h1>
          </div>
          <div>
            <ReservationBar />
          </div>
        </AnimatedGroup>
      </SectionContainer>
    </>
  );
}
