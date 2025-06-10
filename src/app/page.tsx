import CallToAction from "@/components/call-to-action";
import FeaturedSection from "@/components/featured-section";
import FrequentAskedQuestions from "@/components/frequent-asked-questions";
import HeroSimpleSection from "@/components/hero-simple-section";
import { HeroHeader } from "@/components/hero-header";
import React from "react";

const Page = () => {
  return (
    <>
      <HeroHeader />
      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate z-10 hidden opacity-60 contain-strict lg:block pointer-events-none"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,90%,65%,.32)_0,hsla(10,85%,55%,.15)_50%,hsla(20,80%,45%,0)_80%)] animate-spin [animation-duration:20s]" />
          <div className="h-320 absolute left-0 top-0 w-60 rotate-12 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(355,95%,70%,.28)_0,hsla(5,90%,50%,.12)_80%,transparent_100%)] [translate:5%_-50%] animate-spin [animation-duration:30s] [animation-direction:reverse]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-75 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(15,90%,60%,.24)_0,hsla(25,85%,45%,.10)_80%,transparent_100%)] animate-spin [animation-duration:25s]" />
        </div>
        <HeroSimpleSection />
        <FeaturedSection />
        <FrequentAskedQuestions />
      </main>
    </>
  );
};

export default Page;
