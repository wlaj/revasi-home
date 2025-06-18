"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  ExternalLink,
  Clock,
  Users,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Restaurant } from "./restaurant-list";
import { RestaurantAvailability } from "@/hooks/use-availability";

interface ReservationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  restaurant: Restaurant;
  availability: RestaurantAvailability | null;
  loading: boolean;
  searchDate: string;
  searchPartySize: number;
  onTimeSelect: (time: string) => void;
  selectedTime?: string;
}

const ReservationDialog: React.FC<ReservationDialogProps> = ({
  open,
  onOpenChange,
  restaurant,
  availability,
  loading,
  searchDate,
  searchPartySize,
  onTimeSelect,
  selectedTime,
}) => {
  const availableSlots =
    availability?.availableSlots.filter((slot) => slot.available) || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleReserve = () => {
    if (selectedTime) {
      window.open(
        `${restaurant.reservation_url}?time=${selectedTime}&date=${searchDate}&people=${searchPartySize}`,
        "_blank"
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">
            Make a reservation at {restaurant.name}
          </DialogTitle>
        </DialogHeader>

        {/* Restaurant Header */}
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-2xl font-bold">{restaurant.name}</h2>
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{restaurant.rating}</span>
                  <span className="text-muted-foreground">
                    ({restaurant.reviews})
                  </span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">
                  {restaurant.cuisine}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="font-medium">{restaurant.priceRange}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{restaurant.location}</span>
                <span>•</span>
                <span>{restaurant.distance}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {restaurant.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Reservation Details */}
          <div className="border rounded-lg p-4 bg-muted/30">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{searchPartySize} Guests</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{formatDate(searchDate)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">All Day</span>
              </div>
            </div>
          </div>

          {/* Time Selection */}
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>
                {loading
                  ? "Checking availability..."
                  : availableSlots.length > 0
                  ? `${availableSlots.length} times available`
                  : "No times available"}
              </span>
            </h3>

            {loading ? (
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-12 rounded border animate-pulse bg-muted"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3 max-h-80 overflow-y-auto">
                {availableSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    type="button"
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    onClick={() => onTimeSelect(slot.time)}
                    className={cn(
                      "h-16 flex flex-col items-center justify-center text-sm space-y-1 transition-all duration-200",
                      selectedTime === slot.time
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "hover:bg-primary/10 hover:border-primary/50"
                    )}
                  >
                    <span className="font-semibold text-base">{slot.time}</span>
                    <span className="text-xs opacity-70">Dining room</span>
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => window.open(restaurant.url, "_blank")}
              className="flex-1"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Restaurant
            </Button>
            {selectedTime && (
              <Button onClick={handleReserve} className="flex-1">
                Reserve {selectedTime}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
