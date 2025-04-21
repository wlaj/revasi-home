import { InfiniteSlider } from "./motion/infinite-slider";
import { ProgressiveBlur } from "./motion/progressive-blur";
import Image from "next/image";

export const LogoCloud = () => {
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Collaborating with</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider className="flex items-center" speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <Image
                  className="mx-auto h-8 w-fit invert"
                  src="/logos/herbivore.png"
                  alt="Herbivore Logo"
                  width={100}
                  height={100}
                />
              </div>

              <div className="flex">
                <Image
                  className="mx-auto h-8 w-fit invert"
                  src="/logos/locavorenxt.png"
                  alt="Locavore Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex">
                <Image
                  className="mx-auto h-8 w-fit invert"
                  src="/logos/nusantara.png"
                  alt="Nusantara Logo"
                  width={100}
                  height={100}
                />
              </div>
            </InfiniteSlider>

            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
