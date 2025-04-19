import { SectionContainer } from "./section-container";
import { AnimatedGroup } from "./motion/animated-group";

export default function StatsSection() {
  return (
    <SectionContainer>
      <div className="space-y-8 md:space-y-12">
        <AnimatedGroup preset="blur-slide" className="relative z-10 max-w-xl space-y-4 md:space-y-6 text-left">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
            <span>Impressive Numbers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium lg:text-5xl">
            The Gemini ecosystem brings together our models.
          </h2>
          <p className="text-base md:text-lg">
            Gemini is evolving to be more than just the models.{" "}
            <span className="font-medium">It supports an entire ecosystem</span>{" "}
            — from products innovate.
          </p>
        </AnimatedGroup>
        
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <AnimatedGroup preset="slide" className="space-y-8">
            <p className="text-base md:text-lg">
              It supports an entire ecosystem — from products to the APIs and
              platforms helping developers and businesses innovate
            </p>
            <div className="mb-12 mt-8 md:mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <AnimatedGroup preset="scale" className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-4xl md:text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +1200
                </div>
                <p>Stars on GitHub</p>
              </AnimatedGroup>
              <AnimatedGroup preset="scale" className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-4xl md:text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +500
                </div>
                <p>Powered Apps</p>
              </AnimatedGroup>
            </div>
          </AnimatedGroup>
          
          <AnimatedGroup preset="fade" className="relative">
            <blockquote className="border-l-4 pl-4">
              <p className="text-base md:text-lg">
                Using TailsUI has been like unlocking a secret design
                superpower. It&apos;s the perfect fusion of simplicity and
                versatility, enabling us to create UIs that are as stunning as
                they are user-friendly.
              </p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium">John Doe, CEO</cite>
                <img
                  className="h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                />
              </div>
            </blockquote>
          </AnimatedGroup>
        </div>
      </div>
    </SectionContainer>
  );
}
