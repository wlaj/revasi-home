import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SectionContainer } from "./section-container"
import { AnimatedGroup } from "./motion/animated-group"

export default function TestimonialsSection() {
  return (
    <SectionContainer>
      <div className="space-y-8 md:space-y-16">
        <AnimatedGroup preset="blur-slide" className="relative z-10 mx-auto max-w-xl space-y-4 md:space-y-6 text-left">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
            <span>Trusted Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium lg:text-5xl">Build by makers, loved by thousand developers</h2>
          <p className="text-base md:text-lg">
            Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping
            developers and businesses innovate.
          </p>
        </AnimatedGroup>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <AnimatedGroup preset="fade">
                <img
                  className="h-6 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Nike Logo"
                  height="24"
                  width="auto"
                />
              </AnimatedGroup>
            </CardHeader>
            <CardContent>
              <AnimatedGroup preset="fade">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-lg md:text-xl font-medium">
                    Tailus has transformed the way I develop web applications. Their extensive collection of UI
                    components, blocks, and templates has significantly accelerated my workflow. The flexibility to
                    customize every aspect allows me to create unique user experiences. Tailus is a game-changer for
                    modern web development
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/shekinah.webp"
                        alt="Shekinah Tshiokufila"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>

                    <div>
                      <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
                      <span className="text-muted-foreground block text-sm">Software Ingineer</span>
                    </div>
                  </div>
                </blockquote>
              </AnimatedGroup>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <AnimatedGroup preset="slide">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-lg md:text-xl font-medium">
                    Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/jonathan.webp"
                        alt="Jonathan Yombo"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>JY</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">Jonathan Yombo</cite>
                      <span className="text-muted-foreground block text-sm">Software Ingineer</span>
                    </div>
                  </div>
                </blockquote>
              </AnimatedGroup>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="h-full pt-6">
              <AnimatedGroup preset="scale">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>
                    Great work on tailfolio template. This is one of the best personal website that I have seen so far!
                  </p>

                  <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/yucel.webp"
                        alt="Yucel Faruksahan"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>YF</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                      <span className="text-muted-foreground block text-sm">Creator, Tailkits</span>
                    </div>
                  </div>
                </blockquote>
              </AnimatedGroup>
            </CardContent>
          </Card>
          
          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <AnimatedGroup preset="scale">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>
                    Great work on tailfolio template. This is one of the best personal website that I have seen so far!
                  </p>

                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/rodrigo.webp"
                        alt="Rodrigo Aguilar"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>YF</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Rodrigo Aguilar</p>
                      <span className="text-muted-foreground block text-sm">Creator, TailwindAwesome</span>
                    </div>
                  </div>
                </blockquote>
              </AnimatedGroup>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionContainer>
  )
}
