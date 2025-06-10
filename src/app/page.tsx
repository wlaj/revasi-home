import CallToAction from "@/components/call-to-action";
import FeaturedSection from "@/components/featured-section";
import HeroSimpleSection from "@/components/hero-simple-section";
import React from "react";

const Page = () => {
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 isolate z-10 hidden opacity-45 contain-strict lg:block pointer-events-none"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,90%,85%,.16)_0,hsla(0,90%,55%,.06)_50%,hsla(0,90%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,90%,85%,.15)_0,hsla(0,90%,45%,.06)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,90%,85%,.12)_0,hsla(0,90%,45%,.06)_80%,transparent_100%)]" />
      </div>
      <HeroSimpleSection />
      <FeaturedSection />
      <CallToAction />
    </main>
  );
};

export default Page;
