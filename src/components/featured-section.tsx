import React from "react";
import { SectionContainer } from "./section-container";
import FeaturedRestaurantCard from "./featured-restaurant-card";

const featuredRestaurants = [
  {
    id: 1,
    title: "Herbivore",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/restaurants/herbivore.jpg",
  },
  {
    id: 2,
    title: "Locavore Nxt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/restaurants/locavorenxt.jpg",
  },
  {
    id: 3,
    title: "Nusantara",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/restaurants/nusantara.jpg",
  },
];

const FeaturedSection = () => {
  return (
    <SectionContainer noPadding>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Featured</h2>
          <p className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredRestaurants.map((restaurant) => (
            <FeaturedRestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeaturedSection;
