"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import SearchFilterBar from "@/components/search-filter-bar";
import RestaurantList, { Restaurant } from "@/components/restaurant-list";
import RestaurantMap from "@/components/restaurant-map";
import { HeroHeader } from "@/components/hero-header";
import { StarIcon } from "lucide-react";

const mockRestaurants = [
  {
    id: 1,
    name: "Herbivore",
    rating: 4.5,
    reviews: 1735,
    cuisine: "Indonesian",
    priceRange: "€€",
    location: "Bali",
    address:
      "Jl. Dewisita No.10, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia",
    coordinates: [-8.507605, 115.26469] as [number, number],
    image: "/restaurants/herbivore.jpg",
    tags: ["Fine dining", "Vegetarian"],
    availability: "Sorry, we don't currently have any tables available for 2.",
    distance: "0.5 km",
    url: "https://locavorenxt.com/family/herbivore",
    reservation_url: "https://herbivore.revasi.net/reservations/availability",
  },
  {
    id: 2,
    name: "Nusantara",
    rating: 4.5,
    reviews: 647,
    cuisine: "Indonesian",
    priceRange: "€€",
    location: "Bali",
    address:
      "Jl. Dewisita No.09C, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia",
    coordinates: [-8.50767, 115.26485] as [number, number],
    image: "/restaurants/nusantara.jpg",
    tags: ["Contemporary", "Traditional"],
    availability: "Sorry, we don't currently have any tables available for 2.",
    distance: "0.8 km",
    url: "https://locavorenxt.com/family/nusantara",
    reservation_url: "https://nusantara.revasi.net/reservations/availability",
  },
  {
    id: 3,
    name: "Locavore NXT",
    rating: 4.7,
    reviews: 328,
    cuisine: "Indonesian",
    priceRange: "€€€",
    location: "Bali",
    address:
      "Jl. A.A. Gede Rai Gang Pura Panti Bija, Lodtunduh, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571, Indonesia",
    coordinates: [-8.5391, 115.2668] as [number, number],
    image: "/restaurants/locavorenxt.jpg",
    tags: ["Fine dining", "Local"],
    availability: "Available now",
    distance: "1.2 km",
    url: "https://locavorenxt.com/family/locavorenxt",
    reservation_url: "https://locavorenxt.revasi.net/reservations/availability",
  },
  {
    id: 4,
    name: "Peggy‘s Brass Knuckles",
    rating: 4.6,
    reviews: 119,
    cuisine: "Western",
    priceRange: "€€",
    location: "Jakarta",
    address:
      "Shophaus Mahakam Jl. Mahakam No.17 2nd Floor, Kramat Pela, Kec. Kby. Baru, Jakarta, Daerah Khusus Ibukota Jakarta 12310, Indonesia",
    coordinates: [-6.24425, 106.7979] as [number, number],
    image: "/restaurants/peggysbrassknuckles.webp",
    tags: ["Proper", "Local"],
    availability: "Available at 8:00 PM",
    distance: "0.3 km",
    url: "https://locavorenxt.com/family/peggysbrassknuckles",
    reservation_url: "https://peggysbrassknuckles.revasi.net/reservations/availability",
  },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
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
    seating: searchParams.get("seating") || "All Day",
    cuisines: searchParams.get("cuisines")?.split(',').filter(Boolean) || [],
    lists: searchParams.get("lists") || "All",
    priceRange: searchParams.get("priceRange") || "All",
    rating: searchParams.get("rating") || "All",
  });

  const handleFiltersChange = (newFilters: typeof filters) => {
    console.log('Updating filters:', newFilters); // Debug log
    setFilters(newFilters);
    
    // Update URL with filter parameters
    const filterParams: Record<string, string> = {};
    if (newFilters.seating !== "All Day") filterParams.seating = newFilters.seating;
    if (newFilters.cuisines.length > 0) filterParams.cuisines = newFilters.cuisines.join(',');
    if (newFilters.lists !== "All") filterParams.lists = newFilters.lists;
    if (newFilters.priceRange !== "All") filterParams.priceRange = newFilters.priceRange;
    if (newFilters.rating !== "All") filterParams.rating = newFilters.rating;
    
    updateURL({ ...reservationParams, ...filterParams });
  };

  const [pinnedRestaurant, setPinnedRestaurant] = useState<Restaurant | null>(
    null
  );

  const updateURL = (newParams: Record<string, string>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    // Update the URL parameters
    Object.entries(newParams).forEach(([key, value]) => {
      if (value && value.trim() !== '') {
        current.set(key, value);
      } else {
        current.delete(key);
      }
    });

    // Push the new URL without causing a page refresh
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`, { scroll: false });
  };

  const handleReservationChange = (params: {
    reservationType?: string;
    location?: string;
    partySize?: string;
    date?: string;
    time?: string;
  }) => {
    console.log('Updating reservation params:', params); // Debug log
    
    // Update local state
    setReservationParams((prev) => {
      const newParams = { ...prev, ...params };
      console.log('New reservation params:', newParams); // Debug log
      
      // Update URL with the new parameters
      updateURL(newParams);
      
      return newParams;
    });
  };

  // Filter restaurants based on active filters
  const filteredRestaurants = mockRestaurants.filter((restaurant) => {
    // Filter by location
    if (reservationParams.location && reservationParams.location.trim() !== "") {
      if (restaurant.location.toLowerCase() !== reservationParams.location.toLowerCase()) {
        return false;
      }
    }

    // Filter by cuisines
    if (filters.cuisines.length > 0) {
      const restaurantCuisine = restaurant.cuisine.toLowerCase();
      const selectedCuisines = filters.cuisines.map((c: string) =>
        c.toLowerCase()
      );
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
      const restaurantTags = restaurant.tags.map((tag) => tag.toLowerCase());
      switch (filters.lists.toLowerCase()) {
        case "fine dining":
          if (
            !restaurantTags.includes("fine dining") &&
            !restaurantTags.includes("luxury")
          ) {
            return false;
          }
          break;
        case "casual":
          if (
            restaurantTags.includes("fine dining") ||
            restaurantTags.includes("luxury")
          ) {
            return false;
          }
          break;
        case "trendy":
          if (
            !restaurantTags.includes("romantic") &&
            !restaurantTags.includes("trendy")
          ) {
            return false;
          }
          break;
      }
    }

    return true;
  });

  // Create final restaurant list with pinned restaurant at top
  // Only pin the restaurant if it passes the current filters
  const finalRestaurantList = pinnedRestaurant && 
    filteredRestaurants.some((r) => r.id === pinnedRestaurant.id)
    ? [
        pinnedRestaurant,
        ...filteredRestaurants.filter((r) => r.id !== pinnedRestaurant.id),
      ]
    : filteredRestaurants;

  const handlePinRestaurant = (restaurant: Restaurant) => {
    setPinnedRestaurant(restaurant);
  };

  const handleTimeSelect = (restaurantId: number, time: string) => {
    // Handle time selection - could navigate to booking page or show booking form
    console.log(`Selected time ${time} for restaurant ${restaurantId}`);
  };

  return (
    <div className="fixed inset-0 bg-background z-50">
      {/* Search Header */}
      <HeroHeader variant="search" fullWidth={true} />

      {/* Filter Bar */}
      <SearchFilterBar
        filters={filters}
        onFiltersChange={handleFiltersChange}
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
                  A crowd-sourced stamp of approval. The five-star treatment.
                  Resy&apos;s top-rated restaurants according to you, the
                  guests.
                  {filteredRestaurants.length !== mockRestaurants.length && (
                    <span className="block mt-1 font-medium">
                      Showing {filteredRestaurants.length} of{" "}
                      {mockRestaurants.length} restaurants
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Restaurant List */}
          <div className="flex-1 overflow-hidden">
            <RestaurantList
              restaurants={finalRestaurantList}
              searchDate={reservationParams.date}
              searchPartySize={parseInt(reservationParams.partySize)}
              onTimeSelect={handleTimeSelect}
            />
          </div>
        </div>

        {/* Right Panel - Map */}
        <div className="hidden md:block md:w-1/2">
          <RestaurantMap
            restaurants={filteredRestaurants}
            onPinRestaurant={handlePinRestaurant}
          />
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-800 mx-auto"></div>
            <p className="text-muted-foreground">
              Searching for restaurants...
            </p>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
