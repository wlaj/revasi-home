"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { MapPin, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFilterBarProps {
  filters: {
    seating: string;
    cuisines: string[];
    lists: string;
    priceRange: string;
    rating: string;
  };
  onFiltersChange: (filters: any) => void;
  reservationType: string;
  location: string;
  partySize: string;
  date: string;
  time: string;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  filters,
  onFiltersChange,
  reservationType,
  location,
  partySize,
  date,
  time,
}) => {
  const cuisineOptions = [
    "French",
    "Italian",
    "Chinese",
    "Japanese",
    "Mediterranean",
    "American",
    "Thai",
    "Indian",
    "Mexican",
    "Dutch",
    "European",
  ];

  const toggleCuisine = (cuisine: string) => {
    const newCuisines = filters.cuisines.includes(cuisine)
      ? filters.cuisines.filter(c => c !== cuisine)
      : [...filters.cuisines, cuisine];
    
    onFiltersChange({
      ...filters,
      cuisines: newCuisines,
    });
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Select date";
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";
    
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric" 
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return "";
    if (timeString === "now") return "Now";
    if (timeString === "asap") return "ASAP";
    
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString("en-US", { 
      hour: "numeric", 
      minute: "2-digit", 
      hour12: false 
    });
  };

  const reservationText = `${formatDate(date)} ${formatTime(time)} ${partySize} guest${parseInt(partySize) > 1 ? 's' : ''}`;

  return (
    <div className="bg-background border-y border-neutral-800 px-6 py-4">
      <div className="flex items-center space-x-3">
        {/* Reservation Type */}
        <Button variant="outline" className="rounded-full px-4 py-2 h-auto">
          {reservationType}
        </Button>

        {/* Location */}
        <Button variant="outline" className="rounded-full px-4 py-2 h-auto flex items-center space-x-2">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </Button>

        {/* Date, Time & Guests Combined */}
        <Button variant="outline" className="rounded-full px-4 py-2 h-auto">
          {reservationText}
        </Button>

        {/* More Filters Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full px-4 py-2 h-auto flex items-center space-x-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span>More filters</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 max-h-80 overflow-y-auto">
            <DropdownMenuLabel>Cuisines</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {cuisineOptions.map((cuisine) => (
              <DropdownMenuCheckboxItem
                key={cuisine}
                checked={filters.cuisines.includes(cuisine)}
                onCheckedChange={() => toggleCuisine(cuisine)}
                className="cursor-pointer"
              >
                {cuisine}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Price Range</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["€", "€€", "€€€", "€€€€"].map((price) => (
              <DropdownMenuItem
                key={price}
                onClick={() => onFiltersChange({ ...filters, priceRange: price })}
                className={cn(
                  "cursor-pointer",
                  filters.priceRange === price && "bg-accent text-accent-foreground"
                )}
              >
                {price}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SearchFilterBar; 