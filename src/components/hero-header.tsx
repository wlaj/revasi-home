"use client";

import Link from "next/link";
import { ExternalLinkIcon, FlowerIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface HeroHeaderProps {
  fullWidth?: boolean;
  minHeight?: string;
  variant?: "default" | "search";
}

export const HeroHeader = ({ 
  fullWidth = false, 
  minHeight = "auto",
  variant = "default" 
}: HeroHeaderProps) => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{ minHeight }}>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-20 w-full px-2",
          variant === "search" && "relative"
        )}
      >
        <div
          className={cn(
            "mx-auto mt-2 transition-all duration-300 px-4",
            fullWidth ? "max-w-full" : "max-w-6xl",
            isScrolled && !fullWidth &&
              "bg-background/40 max-w-4xl rounded-2xl backdrop-blur-lg lg:px-5",
            isScrolled && fullWidth &&
              "bg-background/40 backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <FlowerIcon className="size-8" />
                <h1 className="text-xl font-bold">Revasi</h1>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                {pathname !== "/join" && (
                  <Button variant="ghost" asChild>
                    <Link href="/join" className="flex items-center gap-2">
                      Use Revasi at your business{" "}
                      <ExternalLinkIcon className="size-4" />
                    </Link>
                  </Button>
                )}
                <Button
                  asChild
                  size="sm"
                  variant="secondary"
                  className={cn(isScrolled && "lg:hidden")}
                >
                  <Link href="mailto:lucas@digics.net">
                    <span>Contact us</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="secondary"
                  type="submit"
                  className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
                >
                  <Link href="mailto:lucas@digics.net">
                    <span>Contact us</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
