import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
