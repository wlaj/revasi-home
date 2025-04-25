import { HeroHeader } from "@/components/hero-header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroHeader />
      {children}
    </>
  );
} 