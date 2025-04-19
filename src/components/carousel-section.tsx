'use client';

import { AnimatedGroup } from './motion/animated-group';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from './motion/carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionContainer } from './section-container';
import { Button } from './ui/button';

// Define the data structure for feature items
type FeatureItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
};

// Better feature data with meaningful content for Revasi
const features: FeatureItem[] = [
  {
    id: 1,
    title: 'Reservations Dashboard',
    description: 'Streamlined booking management',
    image: '/photo.jpeg',
    link: '#dashboard',
  },
  {
    id: 2,
    title: 'Guest Profiles',
    description: 'Personalized dining experiences',
    image: '/photo.jpeg',
    link: '#profiles',
  },
  {
    id: 3,
    title: 'Table Management',
    description: 'Optimize restaurant layouts',
    image: '/photo.jpeg',
    link: '#tables',
  },
  {
    id: 4,
    title: 'Analytics & Insights',
    description: 'Data-driven decision making',
    image: '/photo.jpeg',
    link: '#analytics',
  },
];

function CarouselControls() {
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <div className="mt-12 space-y-8">
      <div className="flex justify-center md:justify-end md:pr-3 space-x-4">
        <button
          onClick={() => setIndex(Math.max(0, index - 1))}
          disabled={index === 0}
          className={cn(
            "flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300",
            "hover:bg-primary/10 hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed",
            "focus:outline-none focus:ring-2 focus:ring-primary/30",
            "shadow-lg"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-primary" />
        </button>
        <button
          onClick={() => setIndex(Math.min(itemsCount - 1, index + 1))}
          disabled={index === itemsCount - 1}
          className={cn(
            "flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 border-primary/20 bg-background/80 backdrop-blur-sm transition-all duration-300",
            "hover:bg-primary/10 hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed",
            "focus:outline-none focus:ring-2 focus:ring-primary/30",
            "shadow-lg"
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-primary" />
        </button>
      </div>
      
      {/* Position indicators */}
      <div className="flex justify-center md:justify-end md:pr-3 space-x-2">
        {Array.from({ length: itemsCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              index === i 
                ? "bg-white w-16" 
                : "bg-white/20 w-8 hover:bg-white/40"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Helper function to get style properties based on distance from current index
function getItemStyles(currentIndex: number, itemIndex: number, totalItems: number) {
  // Calculate the distance differently to ensure we always fill the right side
  // When at the boundaries, we want to adjust the calculation to prevent empty spaces
  let distance;
  
  // Special case for the last item - show first items on the right instead of empty space
  if (currentIndex >= totalItems - 2 && itemIndex < 2) {
    // For the first couple items when we're at the end, show them as if they're right after the visible items
    distance = totalItems - currentIndex + itemIndex;
  } else {
    distance = Math.abs(currentIndex - itemIndex);
  }
  
  // Progressive opacity, scale, and blur based on distance
  const opacity = distance === 0 ? 100 : 
                 distance === 1 ? 80 : 
                 distance === 2 ? 40 : 10;
  
  const scale = distance === 0 ? 100 : 
               distance === 1 ? 95 : 
               distance === 2 ? 90 : 85;
  
  // No blur for current item, very slight for adjacent, more for others
  const blur = distance === 0 ? 0 : 
              distance === 1 ? 1 : 
              distance === 2 ? 2 : 3;
  
  return {
    opacity: `${opacity}%`,
    transform: `scale(${scale / 100}) translateY(${distance === 0 ? 0 : 4}px)`,
    filter: `blur(${blur}px)`,
    transitionDelay: `${distance * 50}ms`,
    zIndex: 10 - distance
  };
}

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the middle (Feature 2)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure features are always displayed, even at boundaries
  const renderFeatures = () => {
    // Create a continuous display of features for visual continuity
    return features.map((feature, i) => (
      <CarouselItem 
        key={feature.id}
        className="pl-6 md:pl-8 lg:pl-10 md:basis-1/2 lg:basis-1/3"
      >
        <div 
          className="relative aspect-[4/5] transition-all duration-700"
          style={getItemStyles(currentIndex, i, features.length)}
        >
          <div className="rounded-2xl overflow-hidden h-full shadow-2xl border border-primary/10">
            {/* Background image */}
            <Image 
              src={feature.image}
              alt={feature.title}
              fill
              priority={currentIndex === i}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            {/* Gradient overlay with primary color */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent mix-blend-overlay z-10"></div>
            
            {/* Content */}
            <div className={cn(
              "absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20",
              "transform transition-all duration-700",
              currentIndex === i 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            )}
            style={{
              transitionDelay: currentIndex === i ? "200ms" : "0ms"
            }}
            >
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/80 bg-primary/80 px-3 py-1 rounded-full mb-3">
                {feature.description}
              </span>
              <h3 className="text-xl md:text-2xl font-bold">
                {feature.title}
              </h3>
              
              {/* Action link for each feature */}
              {feature.link && currentIndex === i && (
                <a 
                  href={feature.link} 
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary-foreground/90 hover:text-primary-foreground group transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              )}
              
              {/* Decorative line that animates when active */}
              <div 
                className={cn(
                  "h-0.5 bg-primary/30 mt-4 transition-all duration-1000",
                  currentIndex === i ? "w-full bg-primary/70" : "w-10"
                )}
              />
            </div>
          </div>
        </div>
      </CarouselItem>
    ));
  };

  return (
    <SectionContainer className="bg-gradient-to-b from-background to-background/90 text-foreground overflow-hidden" noPadding>
      <div className="py-16 md:py-24 lg:py-32 space-y-8 md:space-y-12">
        <AnimatedGroup preset="fade" className="relative z-10 max-w-xl space-y-4 md:space-y-6 text-left">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 mb-4 text-sm font-medium text-primary">
            <span>Elegant Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Redefining hospitality standards
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4">
            Our thoughtful design simplifies reservations management while enhancing guest interactions, 
            making it a valuable tool for both restaurants and their patrons.
          </p>
          
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button className="rounded-full">
              Get Started
            </Button>
            <Button variant="outline" className="rounded-full">
              <span>Schedule Demo</span>
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
        </AnimatedGroup>
        
        {mounted && (
          <div className="relative py-12">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10" />
            
            <Carousel 
              className="w-full"
              index={currentIndex}
              onIndexChange={setCurrentIndex}
              disableDrag={true} // Disable drag to only use buttons for navigation
            >
              <CarouselContent className="-ml-6 md:-ml-8">
                {renderFeatures()}
              </CarouselContent>
              
              <CarouselControls />
            </Carousel>
          </div>
        )}
      </div>
    </SectionContainer>
  );
} 