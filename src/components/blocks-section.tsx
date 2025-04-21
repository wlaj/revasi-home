import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, type LucideIcon, MapIcon } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { SectionContainer } from "./section-container";
import { AnimatedGroup } from "./motion/animated-group";

export default function BlocksSection() {
  return (
    <SectionContainer>
      <div className="space-y-8 md:space-y-16">
        <AnimatedGroup preset="fade" className="text-left mb-10">
          {/* <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
            <span>Core Capabilities</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-medium lg:text-5xl">
            Reliability and elegance in every detail
          </h2>
        </AnimatedGroup>
        <div className="grid gap-4 lg:grid-cols-2">
          <AnimatedGroup preset="slide" className="group">
            <FeatureCard>
              <CardHeader className="pb-3">
                <CardHeading
                  icon={MapIcon}
                  title="Guest Experience"
                  description="Create memorable dining journeys with detailed guest profiles and preferences."
                />
              </CardHeader>

              <div className="relative mb-6 border-t border-dashed sm:mb-0">
                <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-primary),var(--color-white)_100%)]"></div>
                <div className="aspect-[21/9] p-1 px-6">
                  <DualModeImage
                    darkSrc="/details-2.png"
                    lightSrc="/details-2.png"
                    alt="payments illustration"
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </FeatureCard>
          </AnimatedGroup>

          <AnimatedGroup preset="slide" className="group">
            <FeatureCard>
              <CardHeader className="pb-3">
                <CardHeading
                  icon={Calendar}
                  title="Advanced Reservations"
                  description="Intelligent booking system that optimizes table turnover and guest flow."
                />
              </CardHeader>

              <CardContent>
                <div className="relative mb-6 sm:mb-0">
                  <div className="absolute -inset-6 [background:radial-gradient(75%_75%_at_90%_75%,transparent,var(--color-background)_100%)]"></div>
                  <div className="aspect-[21/9] border">
                    <DualModeImage
                      darkSrc="/reservations.png"
                      lightSrc="/reservations.png"
                      alt="calendar illustration"
                      width={1207}
                      height={929}
                    />
                  </div>
                </div>
              </CardContent>
            </FeatureCard>
          </AnimatedGroup>

          <AnimatedGroup preset="blur-slide" className="group lg:col-span-2">
            <FeatureCard className="p-6">
              <p className="mx-auto my-6 max-w-md text-balance text-center text-xl md:text-2xl font-semibold">
                Developed in close collaboration with restaurateurs in Bali
              </p>

              <div className="flex justify-center gap-6 overflow-hidden">
                <CircularUI
                  label="Inclusion"
                  circles={[{ pattern: "border" }, { pattern: "border" }]}
                />

                <CircularUI
                  label="Inclusion"
                  circles={[{ pattern: "none" }, { pattern: "primary" }]}
                />

                <CircularUI
                  label="Join"
                  circles={[{ pattern: "white" }, { pattern: "none" }]}
                />

                <CircularUI
                  label="Exclusion"
                  circles={[{ pattern: "primary" }, { pattern: "none" }]}
                  className="hidden sm:block"
                />
              </div>
            </FeatureCard>
          </AnimatedGroup>
        </div>
      </div>
    </SectionContainer>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn("group relative rounded-none shadow-zinc-950/5", className)}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);

interface DualModeImageProps {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const DualModeImage = ({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  className,
}: DualModeImageProps) => (
  <>
    <Image
      src={darkSrc}
      className={cn("block", className)}
      alt={`${alt} dark`}
      width={width}
      height={height}
    />
    <Image
      src={lightSrc}
      className={cn("shadow hidden", className)}
      alt={`${alt} light`}
      width={width}
      height={height}
    />
  </>
);

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "white";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px">
      <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-primary bg-background bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "bg-background z-1 border-foreground bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "white",
            })}
          ></div>
        ))}
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-sm">
      {label}
    </span>
  </div>
);
