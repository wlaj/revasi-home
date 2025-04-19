import { SectionContainer } from "./section-container";
import { AnimatedGroup } from "./motion/animated-group";

export default function StatsSection() {
  return (
    <SectionContainer>
      <div className="space-y-8 md:space-y-12">
        <AnimatedGroup preset="blur-slide" className="relative z-10 max-w-xl space-y-4 md:space-y-6 text-left">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
            <span>Excellence in Numbers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium lg:text-5xl">
            Elevating dining experiences across Indonesia
          </h2>
          <p className="text-base md:text-lg">
            Founded in 2024, Revasi was originally created to meet the high standards of
            <span className="font-medium"> Locavore NXT</span>, a pioneering dining experience in Bali.
          </p>
        </AnimatedGroup>
        
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <AnimatedGroup preset="slide" className="space-y-8">
            <p className="text-base md:text-lg">
              Developed by a small, dedicated team, Revasi is the result of close collaboration with restaurateurs, 
              ensuring every feature is built to handle the complexities of fine dining operations.
            </p>
            <div className="mb-12 mt-8 md:mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <AnimatedGroup preset="scale" className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-4xl md:text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  100%
                </div>
                <p>Fine Dining Focus</p>
              </AnimatedGroup>
              <AnimatedGroup preset="scale" className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-4xl md:text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  2024
                </div>
                <p>Founded in Bali</p>
              </AnimatedGroup>
            </div>
          </AnimatedGroup>
          
          <AnimatedGroup preset="fade" className="relative">
            <blockquote className="border-l-4 pl-4">
              <p className="text-base md:text-lg">
                Revasi is more than a system—it&apos;s a partner in delivering exceptional hospitality and 
                memorable dining experiences. Its thoughtful design simplifies reservations while enhancing 
                guest interactions.
              </p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium">Locavore NXT</cite>
                <p className="text-muted-foreground text-sm">Featured Client</p>
              </div>
            </blockquote>
          </AnimatedGroup>
        </div>
      </div>
    </SectionContainer>
  );
}
