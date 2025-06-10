import React from "react";
import Image from "next/image";

type FeaturedRestaurantCardProps = {
  title: string;
  description: string;
  image: string;
};

const FeaturedRestaurantCard = ({
  title,
  description,
  image,
}: FeaturedRestaurantCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-neutral-800/80">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-2 bg-neutral-900/60 p-4">
        <p className="text-sm text-neutral-400">{title}</p>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedRestaurantCard;
