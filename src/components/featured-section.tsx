import React from "react";
import { SectionContainer } from "./section-container";
import FeaturedRestaurantCard from "./featured-restaurant-card";

const featuredRestaurants = [
  {
    id: 1,
    title: "Herbivore",
    url: "https://locavorenxt.com/family/herbivore",
    description:
      "Herbivore revives Locavore’s original Ubud space with a seasonal, plant‑only tasting menu—fully vegetarian.",
    image: "/restaurants/herbivore.jpg",
  },
  {
    id: 2,
    title: "Locavore NXT",
    url: "https://locavorenxt.com/family/locavorenxt",
    description:
      "Locavore NXT pushes the local‑ingredients philosophy further—a space for culinary creation, experiment & nature.",
    image: "/restaurants/locavorenxt.jpg",
  },
  {
    id: 3,
    title: "Nusantara",
    url: "https://locavorenxt.com/family/nusantara",
    description:
      "Nusantara celebrates Indonesia’s archipelago through a contemporary showcase of regional ingredients, techniques, and heritage-driven cuisine.",
    image: "/restaurants/nusantara.jpg",
  },
  {
    id: 4,
    title: "Peggy's Brass Knuckles",
    url: "https://locavorenxt.com/family/peggysbrassknuckles",
    description:
      "Peggy’s Brass Knuckles is a proper Jakarta restaurant featuring local produce, an onsite butcher, bakery, café and craft‑beer bar.",
    image: "/restaurants/peggysbrassknuckles.webp",
  },
];

const FeaturedSection = () => {
  return (
    <SectionContainer noPadding className="py-16 md:py-24">
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
