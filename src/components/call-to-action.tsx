import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SectionContainer } from "./section-container";

const CallToAction = () => {
  return (
    <SectionContainer noPadding className="py-16">
      <div className="mx-auto rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Start Building
          </h2>
          <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <span>Get Started</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Book Demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CallToAction;
