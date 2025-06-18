import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy - Data Security & Protection Measures",
  description: "Learn about Revasi's comprehensive security measures to protect your restaurant data and customer information. Our security policy covers data encryption, access controls, and incident response procedures.",
  keywords: [
    "security policy",
    "data security",
    "cybersecurity",
    "data protection",
    "security measures",
    "restaurant data security",
    "information security",
    "security compliance"
  ],
  openGraph: {
    title: "Security Policy - Data Security & Protection Measures | Revasi",
    description: "Learn about Revasi's comprehensive security measures to protect your restaurant data and customer information.",
    url: "https://www.revasi.net/security",
    type: "article",
  },
  alternates: {
    canonical: "https://www.revasi.net/security",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 