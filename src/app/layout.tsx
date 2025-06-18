import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import { HeroHeader } from "@/components/hero-header";
import FooterSection from "@/components/footer-section";

const inter = Inter({ subsets: ["latin"] });

const stagewiseConfig = {
  plugins: []
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.revasi.net'),
  title: {
    default: "Revasi - Premium Restaurant Reservation Management System",
    template: "%s | Revasi"
  },
  description: "Revasi is the premium reservation management system tailored for fine dining restaurants. Founded in 2024, originally created for Locavore NXT in Bali. Streamline your restaurant operations with our comprehensive booking platform.",
  keywords: [
    "restaurant reservation system",
    "fine dining management",
    "restaurant booking platform",
    "table reservation software",
    "restaurant management system",
    "Bali restaurants",
    "fine dining reservations",
    "restaurant technology",
    "hospitality software",
    "table management"
  ],
  authors: [{ name: "Digics", url: "https://www.revasi.net" }],
  creator: "Digics",
  publisher: "Digics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.revasi.net",
    siteName: "Revasi",
    title: "Revasi - Premium Restaurant Reservation Management System",
    description: "Streamline your fine dining restaurant operations with Revasi's comprehensive reservation management platform. Trusted by leading restaurants in Bali.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Revasi Restaurant Reservation Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revasi - Premium Restaurant Reservation Management System",
    description: "Streamline your fine dining restaurant operations with Revasi's comprehensive reservation management platform.",
    images: ["/og-image.jpg"],
    creator: "@revasi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.revasi.net" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Revasi",
              "description": "Premium restaurant reservation management system for fine dining establishments",
              "url": "https://www.revasi.net",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web-based",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "price": "Contact for pricing"
              },
              "creator": {
                "@type": "Organization",
                "name": "Digics",
                "url": "https://www.revasi.net"
              },
              "screenshot": "https://www.revasi.net/og-image.jpg"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          {children}
          <FooterSection />
          <Toaster />
        </ThemeProvider>
        <Analytics />
        {process.env.NODE_ENV === 'development' && (
          <StagewiseToolbar config={stagewiseConfig} />
        )}
      </body>
    </html>
  );
}
