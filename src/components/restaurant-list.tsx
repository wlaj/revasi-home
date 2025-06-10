import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Heart, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  cuisine: string;
  priceRange: string;
  location: string;
  address: string;
  coordinates: [number, number];
  image: string;
  tags: string[];
  availability: string;
  distance: string;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const isAvailable = !restaurant.availability.toLowerCase().includes("sorry");

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer group border-0 shadow-none">
      <CardContent className="p-6">
        <div className="flex space-x-4">
          {/* Restaurant Image */}
          <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              className="object-cover"
              sizes="112px"
            />
            <div className="absolute top-2 right-2">
              <Button
                size="icon"
                variant="secondary"
                className="h-7 w-7 rounded-full bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Restaurant Details */}
          <div className="flex-1 min-w-0">
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-2 min-w-0 flex-1">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors truncate">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{restaurant.rating}</span>
                      <span className="text-muted-foreground">({restaurant.reviews})</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{restaurant.cuisine}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="font-medium">{restaurant.priceRange}</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant={isAvailable ? "default" : "secondary"}
                  className="ml-4 flex-shrink-0"
                  disabled={!isAvailable}
                >
                  {isAvailable ? "Reserve" : "Notify"}
                </Button>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{restaurant.location}</span>
                <span>•</span>
                <span>{restaurant.distance}</span>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span 
                  className={cn(
                    "text-sm font-medium",
                    isAvailable ? "text-green-600" : "text-orange-600"
                  )}
                >
                  {restaurant.availability}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-4 p-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      
      {restaurants.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-3">
            <div className="text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-medium">No restaurants found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or location.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantList; 