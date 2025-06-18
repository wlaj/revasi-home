import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Legal Terms & Conditions",
  description: "Read Revasi's terms of service covering user agreements, acceptable use policies, and legal conditions for using our restaurant reservation management system. Understand your rights and responsibilities.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "legal terms",
    "acceptable use policy",
    "restaurant software terms",
    "service agreement",
    "user responsibilities"
  ],
  openGraph: {
    title: "Terms of Service - Legal Terms & Conditions | Revasi",
    description: "Read Revasi's terms of service and understand the legal conditions for using our restaurant management platform.",
    url: "https://www.revasi.net/terms",
    type: "article",
  },
  alternates: {
    canonical: "https://www.revasi.net/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 