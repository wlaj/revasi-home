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
  title: "Revasi - Reservations management system",
  description:
    "Revasi is a reservations management system tailored for fine dining restaurants. Founded in 2024, it was originally created to meet the high standards and unique demands of Locavore NXT, a pioneering dining experience in Bali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter} antialiased`}>
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
