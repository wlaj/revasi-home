import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find & Book Premium Restaurants",
  description: "Discover and book tables at the finest restaurants. Search by location, cuisine, and availability. Access exclusive dining experiences in Bali and beyond with Revasi's restaurant network.",
  keywords: [
    "restaurant search",
    "fine dining booking",
    "restaurant reservations",
    "Bali restaurants",
    "table booking",
    "restaurant finder",
    "dining reservations",
    "premium restaurants"
  ],
  openGraph: {
    title: "Find & Book Premium Restaurants | Revasi",
    description: "Discover and book tables at the finest restaurants. Search by location, cuisine, and availability.",
    url: "https://www.revasi.net/search",
    images: [
      {
        url: "/og-search.jpg",
        width: 1200,
        height: 630,
        alt: "Search Premium Restaurants with Revasi",
      },
    ],
  },
  alternates: {
    canonical: "https://www.revasi.net/search",
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Restaurant Search & Booking",
            "description": "Search and book premium restaurants across locations",
            "url": "https://www.revasi.net/search",
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
                  "name": "Search Restaurants",
                  "item": "https://www.revasi.net/search"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.revasi.net/search?location={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      {children}
    </>
  );
} 