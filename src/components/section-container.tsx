import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function SectionContainer({
  children,
  className,
  noPadding = false,
}: SectionContainerProps) {
  return (
    <div
      className={cn(
        "w-full bg-background",
        !noPadding && "py-16 md:py-24 lg:py-32",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </div>
  );
} 