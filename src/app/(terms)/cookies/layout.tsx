import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - How We Use Cookies & Tracking",
  description: "Learn about Revasi's cookie usage, tracking technologies, and how we use cookies to improve your experience with our restaurant reservation management system. Manage your cookie preferences.",
  keywords: [
    "cookie policy",
    "cookies",
    "tracking technologies",
    "web cookies",
    "privacy settings",
    "cookie preferences",
    "website tracking",
    "analytics cookies"
  ],
  openGraph: {
    title: "Cookie Policy - How We Use Cookies & Tracking | Revasi",
    description: "Learn about Revasi's cookie usage and tracking technologies. Understand how we use cookies to improve your experience.",
    url: "https://www.revasi.net/cookies",
    type: "article",
  },
  alternates: {
    canonical: "https://www.revasi.net/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 