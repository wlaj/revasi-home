import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

type FeaturedRestaurantCardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const FeaturedRestaurantCard = ({
  title,
  description,
  image,
  url,
}: FeaturedRestaurantCardProps) => {
  return (
    <Link 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transition-transform duration-200"
    >
      <div className="flex flex-col overflow-hidden rounded-lg border border-neutral-800/80 transition-colors duration-200 group-hover:border-neutral-700">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay with external link icon */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-75 group-hover:opacity-100">
            <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
              <ExternalLinkIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-neutral-900/60 p-4">
          <p className="text-sm text-neutral-400">{title}</p>
          <h3 className="text-lg font-bold transition-colors duration-200 group-hover:text-white">{title}</h3>
          <p className="text-sm text-neutral-400 line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedRestaurantCard;
