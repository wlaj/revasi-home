import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SectionContainer } from "./section-container"
import { AnimatedGroup } from "./motion/animated-group"

export default function TestimonialsSection() {
  return (
    <SectionContainer>
      <div className="space-y-8 md:space-y-16">
        <AnimatedGroup preset="blur-slide" className="relative z-10 mx-auto max-w-6xl space-y-4 md:space-y-6 text-left">
          {/* <div className="inline-flex items-center text-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
            <span>Client Experiences</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-medium lg:text-5xl">Built for restaurateurs, loved by fine dining establishments</h2>
        </AnimatedGroup>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <AnimatedGroup preset="fade">
                <h3 className="text-xl font-semibold">Locavore NXT</h3>
                <p className="text-muted-foreground text-sm">A hyper local restaurant hub inspired by nature</p>
              </AnimatedGroup>
            </CardHeader>
            <CardContent>
              <AnimatedGroup preset="fade">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-lg md:text-xl font-medium">
                    Revasi has transformed how we manage our reservations. The system&apos;s elegance and reliability perfectly 
                    complement our commitment to fine dining excellence. Its thoughtful design has streamlined our operations
                    and enhanced the experience for both our staff and guests.
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/shekinah.webp"
                        alt="Chef Ray Adriansyah"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>RA</AvatarFallback>
                    </Avatar>

                    <div>
                      <cite className="text-sm font-medium">Chef Ray Adriansyah</cite>
                      <span className="text-muted-foreground block text-sm">Head Chef, Locavore NXT</span>
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
                    The guest profile feature has been invaluable for creating personalized dining experiences. Our returning
                    customers are always impressed when we remember their preferences.
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/jonathan.webp"
                        alt="Maya Sari"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">Maya Sari</cite>
                      <span className="text-muted-foreground block text-sm">Restaurant Manager</span>
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
                    Revasi has made our table management so much more efficient. We&apos;ve increased turnover without sacrificing 
                    the quality of service.
                  </p>

                  <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/yucel.webp"
                        alt="Putu Wijaya"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>PW</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">Putu Wijaya</cite>
                      <span className="text-muted-foreground block text-sm">Operations Director</span>
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
                    As a fine dining establishment, we appreciate the attention to detail in Revasi&apos;s design. It matches our 
                    own commitment to excellence.
                  </p>

                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/rodrigo.webp"
                        alt="Ketut Ariana"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>KA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Ketut Ariana</p>
                      <span className="text-muted-foreground block text-sm">Owner, Fine Dining Restaurant</span>
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
