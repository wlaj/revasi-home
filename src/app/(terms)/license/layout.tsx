import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software License Agreement - Usage Rights & Restrictions",
  description: "Review Revasi's software license agreement detailing usage rights, restrictions, and terms for our restaurant reservation management system. Understand your licensing terms and conditions.",
  keywords: [
    "software license",
    "license agreement",
    "usage rights",
    "software terms",
    "licensing conditions",
    "restaurant software license",
    "end user license",
    "software restrictions"
  ],
  openGraph: {
    title: "Software License Agreement - Usage Rights & Restrictions | Revasi",
    description: "Review Revasi's software license agreement detailing usage rights and restrictions for our restaurant management platform.",
    url: "https://www.revasi.net/license",
    type: "article",
  },
  alternates: {
    canonical: "https://www.revasi.net/license",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 