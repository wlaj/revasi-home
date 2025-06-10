"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchHeader from "@/components/search-header";
import SearchFilterBar from "@/components/search-filter-bar";
import RestaurantList from "@/components/restaurant-list";
import RestaurantMap from "@/components/restaurant-map";
import { HeroHeader } from "@/components/hero-header";
import { StarIcon } from "lucide-react";

// Mock restaurant data - in a real app, this would come from an API
const mockRestaurants = [
  {
    id: 1,
    name: "Herbivore",
    rating: 4.8,
    reviews: 20,
    cuisine: "French",
    priceRange: "€€€",
    location: "City centre",
    address: "Johannes Vermeerstraat 12, Amsterdam",
    coordinates: [-8.507605, 115.264690] as [number, number],
    image: "/restaurants/herbivore.jpg",
    tags: ["Fine dining", "Romantic", "Wine bar"],
    availability: "Sorry, we don't currently have any tables available for 2.",
    distance: "0.5 km",
  },
  {
    id: 2,
    name: "Nusantara",
    rating: 4.7,
    reviews: 18,
    cuisine: "Chinese",
    priceRange: "€€€",
    location: "City Centre",
    address: "Oosterdokskade 8, Amsterdam",
    coordinates: [-8.507670, 115.264850] as [number, number],
    image: "/restaurants/nusantara.jpg",
    tags: ["Floating restaurant", "Traditional", "Dim sum"],
    availability: "Sorry, we don't currently have any tables available for 2.",
    distance: "0.8 km",
  },
  {
    id: 3,
    name: "Locavore NXT",
    rating: 4.6,
    reviews: 32,
    cuisine: "Italian",
    priceRange: "€€",
    location: "Museum Quarter",
    address: "Museumplein 15, Amsterdam",
    coordinates: [-8.539100, 115.266800] as [number, number],
    image: "/restaurants/locavorenxt.jpg",
    tags: ["Pizza", "Pasta", "Family friendly"],
    availability: "Available now",
    distance: "1.2 km",
  },
  {
    id: 4,
    name: "Peggy's Brass Knuckles",
    rating: 4.9,
    reviews: 45,
    cuisine: "European",
    priceRange: "€€€€",
    location: "Central Station",
    address: "Spuistraat 172, Amsterdam",
    coordinates: [-6.244250, 106.797900] as [number, number],
    image: "/restaurants/peggysbrassknuckles.webp",
    tags: ["Luxury", "Historic", "Cocktails"],
    availability: "Available at 8:00 PM",
    distance: "0.3 km",
  },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const [reservationParams, setReservationParams] = useState({
    reservationType: searchParams.get("reservationType") || "Dine in",
    location: searchParams.get("location") || "",
    date: searchParams.get("date") || "",
    time: searchParams.get("time") || "",
    partySize: searchParams.get("partySize") || "2",
  });

  const [filters, setFilters] = useState<{
    seating: string;
    cuisines: string[];
    lists: string;
    priceRange: string;
    rating: string;
  }>({
    seating: "All Day",
    cuisines: [],
    lists: "All",
    priceRange: "All",
    rating: "All"
  });

  const handleReservationChange = (params: {
    reservationType?: string;
    location?: string;
    partySize?: string;
    date?: string;
    time?: string;
  }) => {
    setReservationParams(prev => ({ ...prev, ...params }));
  };

  // Filter restaurants based on active filters
  const filteredRestaurants = mockRestaurants.filter(restaurant => {
    // Filter by cuisines
    if (filters.cuisines.length > 0) {
      const restaurantCuisine = restaurant.cuisine.toLowerCase();
      const selectedCuisines = filters.cuisines.map((c: string) => c.toLowerCase());
      if (!selectedCuisines.includes(restaurantCuisine)) {
        return false;
      }
    }

    // Filter by price range
    if (filters.priceRange !== "All") {
      if (restaurant.priceRange !== filters.priceRange) {
        return false;
      }
    }

    // Filter by rating
    if (filters.rating !== "All") {
      const ratingThreshold = parseFloat(filters.rating);
      if (restaurant.rating < ratingThreshold) {
        return false;
      }
    }

    // Filter by lists (restaurant type)
    if (filters.lists !== "All") {
      const restaurantTags = restaurant.tags.map(tag => tag.toLowerCase());
      switch (filters.lists.toLowerCase()) {
        case "fine dining":
          if (!restaurantTags.includes("fine dining") && !restaurantTags.includes("luxury")) {
            return false;
          }
          break;
        case "casual":
          if (restaurantTags.includes("fine dining") || restaurantTags.includes("luxury")) {
            return false;
          }
          break;
        case "trendy":
          if (!restaurantTags.includes("romantic") && !restaurantTags.includes("trendy")) {
            return false;
          }
          break;
      }
    }

    return true;
  });

  return (
    <div className="fixed inset-0 bg-background z-50">
      {/* Search Header */}
      <HeroHeader variant="search" fullWidth={true} />
      
      {/* Filter Bar */}
      <SearchFilterBar 
        filters={filters}
        onFiltersChange={setFilters}
        reservationType={reservationParams.reservationType}
        location={reservationParams.location}
        partySize={reservationParams.partySize}
        date={reservationParams.date}
        time={reservationParams.time}
        onReservationChange={handleReservationChange}
      />
      
      {/* Main Content */}
      <div className="flex h-[calc(100vh-128px)]">
        {/* Left Panel - Restaurant List */}
        <div className="md:w-1/2 flex flex-col border-r border-neutral-800">
          {/* Results Header */}
          <div className="px-6 py-4 border-b border-neutral-800 bg-background/95 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-primary/10">
                <StarIcon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Top Rated</h2>
                <p className="text-sm text-muted-foreground">
                  A crowd-sourced stamp of approval. The five-star treatment. Resy's top-rated restaurants according to you, the guests.
                  {filteredRestaurants.length !== mockRestaurants.length && (
                    <span className="block mt-1 font-medium">
                      Showing {filteredRestaurants.length} of {mockRestaurants.length} restaurants
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Restaurant List */}
          <div className="flex-1 overflow-hidden">
            <RestaurantList restaurants={filteredRestaurants} />
          </div>
        </div>

        {/* Right Panel - Map */}
        <div className="hidden md:block md:w-1/2">
          <RestaurantMap restaurants={filteredRestaurants} />
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-800 mx-auto"></div>
          <p className="text-muted-foreground">Searching for restaurants...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
} 