import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="overflow-hidden bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Built for Scaling teams
          </h2>
          <p className="mt-6 text-lg">
            Empower your team with workflows that adapt to your needs, whether
            you prefer git synchronization or a AI Agents interface.
          </p>
        </div>
        <div className="relative -mt-16 -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
          <div className="perspective-midrange">
            <div>
              <div className="aspect-[21/9] relative">
                <div className="absolute inset-x-0 scale-110 -mb-24 bottom-0 h-120 bg-gradient-to-t from-background to-transparent z-20"></div>
                <Image
                  src="/details.png"
                  className="absolute inset-0 z-0 object-cover object-center scale-115"
                  alt="payments illustration dark"
                  width={2797}
                  height={1137}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-30 mx-auto mt-24 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Faaast</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an entire helping developers and innovate.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Powerful</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an entire helping developers and businesses.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Security</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an helping developers businesses innovate.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">AI Powered</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an helping developers businesses innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
