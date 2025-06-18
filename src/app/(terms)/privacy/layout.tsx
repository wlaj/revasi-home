import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Privacy Rights",
  description: "Revasi's comprehensive privacy policy explaining how we collect, use, and protect your personal information. Learn about your data rights under GDPR and our commitment to data security in restaurant management software.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "personal information",
    "data security",
    "restaurant data privacy",
    "user rights",
    "data processing"
  ],
  openGraph: {
    title: "Privacy Policy - Data Protection & Privacy Rights | Revasi",
    description: "Learn about Revasi's commitment to protecting your personal information and your rights under GDPR.",
    url: "https://www.revasi.net/privacy",
    type: "article",
  },
  alternates: {
    canonical: "https://www.revasi.net/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 