import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import CarouselSection from "@/components/carousel-section";
import BlocksSection from "@/components/blocks-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Revasi - Partner with Leading Restaurant Management Platform",
  description: "Join the Revasi network and transform your restaurant operations. Partner with the premium reservation management system trusted by fine dining establishments. Streamline bookings, enhance guest experiences, and grow your business.",
  keywords: [
    "restaurant partnership",
    "join restaurant network",
    "restaurant management software",
    "fine dining platform",
    "restaurant technology partner",
    "reservation system partnership",
    "restaurant growth",
    "hospitality technology"
  ],
  openGraph: {
    title: "Join Revasi - Partner with Leading Restaurant Management Platform",
    description: "Transform your restaurant operations by joining the Revasi network. Premium reservation management for fine dining establishments.",
    url: "https://www.revasi.net/join",
    images: [
      {
        url: "/og-join.jpg",
        width: 1200,
        height: 630,
        alt: "Join Revasi Restaurant Partner Network",
      },
    ],
  },
  alternates: {
    canonical: "https://www.revasi.net/join",
  },
};

export default async function JoinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Join Revasi Restaurant Network",
            "description": "Partner with Revasi to transform your restaurant operations",
            "url": "https://www.revasi.net/join",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.revasi.net"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Join Network",
                  "item": "https://www.revasi.net/join"
                }
              ]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Restaurant Partnership Program",
              "description": "Join Revasi's premium restaurant management platform",
              "provider": {
                "@type": "Organization",
                "name": "Revasi",
                "url": "https://www.revasi.net"
              },
              "serviceType": "Restaurant Management Software",
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Indonesia"
                },
                {
                  "@type": "Country", 
                  "name": "Netherlands"
                }
              ]
            }
          })
        }}
      />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CarouselSection />
        <BlocksSection />
      </main>
    </>
  );
}
