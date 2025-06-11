import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Heart, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useAvailability } from '@/hooks/use-availability';
import TimeSlotPicker from './time-slot-picker';

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
  url: string;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
  searchDate?: string;
  searchPartySize?: number;
  onTimeSelect?: (restaurantId: number, time: string) => void;
}

const RestaurantCard = ({ 
  restaurant, 
  searchDate, 
  searchPartySize,
  onTimeSelect 
}: { 
  restaurant: Restaurant;
  searchDate?: string;
  searchPartySize?: number;
  onTimeSelect?: (restaurantId: number, time: string) => void;
}) => {
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  const { availability, loading, error } = useAvailability(
    restaurant.name,
    searchDate || '',
    searchPartySize || 2
  );

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onTimeSelect?.(restaurant.id, time);
  };

  const availableSlots = availability?.availableSlots.filter(slot => slot.available) || [];
  const hasAvailability = availableSlots.length > 0;

  return (
      <Card className="overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer border-0 shadow-none">
        <CardContent className="p-6">
          <div className="flex space-x-4">
            {/* Restaurant Image */}
            <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="112px"
              />
              {/* Hover overlay with external link icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-75 group-hover:opacity-100">
                <div className="rounded-full bg-white/10 p-2 backdrop-blur-sm">
                  <ExternalLink className="h-5 w-5" />
                </div>
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
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{restaurant.location}</span>
                  <span>•</span>
                  <span>{restaurant.distance}</span>
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span 
                        className={cn(
                          "text-sm font-medium",
                          loading ? "text-muted-foreground" : 
                          hasAvailability ? "text-green-600" : "text-orange-600"
                        )}
                      >
                        {loading ? "Checking availability..." : 
                         hasAvailability ? `${availableSlots.length} time${availableSlots.length === 1 ? '' : 's'} available` : 
                         "No tables available"}
                      </span>
                    </div>
                    {searchDate && searchPartySize && hasAvailability && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowTimeSlots(!showTimeSlots)}
                        className="h-auto p-1 text-xs"
                      >
                        {showTimeSlots ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                        {showTimeSlots ? 'Hide' : 'View'} times
                      </Button>
                    )}
                  </div>
                  
                  {/* Time slots */}
                  {showTimeSlots && searchDate && searchPartySize && availability && (
                    <div className="pt-2 border-t border-neutral-800/50">
                      <TimeSlotPicker
                        slots={availability.availableSlots}
                        selectedTime={selectedTime}
                        onTimeSelect={handleTimeSelect}
                        loading={loading}
                      />
                      {selectedTime && (
                        <div className="mt-2 pt-2 border-t border-neutral-800/50">
                          <Button 
                            size="sm" 
                            className="w-full text-xs"
                            onClick={() => {
                              // This would open a reservation form or redirect to booking page
                              window.open(`${restaurant.url}?time=${selectedTime}&date=${searchDate}&party=${searchPartySize}`, '_blank');
                            }}
                          >
                            Reserve {selectedTime}
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {error && (
                    <p className="text-xs text-red-500 mt-1">{error}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  );
};

const RestaurantList: React.FC<RestaurantListProps> = ({ 
  restaurants, 
  searchDate, 
  searchPartySize, 
  onTimeSelect 
}) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-4 p-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard 
            key={restaurant.id} 
            restaurant={restaurant}
            searchDate={searchDate}
            searchPartySize={searchPartySize}
            onTimeSelect={onTimeSelect}
          />
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