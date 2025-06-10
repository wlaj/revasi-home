"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Users, Calendar, Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFiltersProps {
  filters: {
    seating: string;
    cuisines: string[];
    lists: string;
    priceRange: string;
    rating: string;
  };
  onFiltersChange: (filters: any) => void;
  partySize: string;
  date: string;
  time: string;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFiltersChange,
  partySize,
  date,
  time,
}) => {

  const seatingOptions = ["All Day", "Today", "Tomorrow", "This Week"];
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
  const listOptions = ["All", "Fine Dining", "Casual", "Quick Bites", "Trendy"];

  const formatDate = (dateString: string) => {
    if (!dateString) return "Select date";
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";
    
    return date.toLocaleDateString("en-US", { 
      weekday: "short", 
      month: "short", 
      day: "numeric" 
    });
  };

  const formatTime = (timeString: string) => {
    if (!timeString) return "Select time";
    if (timeString === "now") return "Now";
    if (timeString === "asap") return "ASAP";
    
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString("en-US", { 
      hour: "numeric", 
      minute: "2-digit", 
      hour12: true 
    });
  };

  const toggleCuisine = (cuisine: string) => {
    const newCuisines = filters.cuisines.includes(cuisine)
      ? filters.cuisines.filter(c => c !== cuisine)
      : [...filters.cuisines, cuisine];
    
    onFiltersChange({
      ...filters,
      cuisines: newCuisines,
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      seating: "All Day",
      cuisines: [],
      lists: "All",
      priceRange: "All",
      rating: "All"
    });
  };

  const hasActiveFilters = filters.cuisines.length > 0 || 
                          filters.lists !== "All" || 
                          filters.priceRange !== "All" || 
                          filters.rating !== "All";

  return (
    <div className="bg-background border-b border-neutral-800">
      {/* Reservation Info Bar */}
      <div className="px-6 py-3 bg-muted/30 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{partySize} guest{parseInt(partySize) > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{formatTime(time)}</span>
          </div>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-primary hover:text-primary/80"
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Filter Buttons */}
      <div className="px-6 py-4 flex items-center space-x-3">
        {/* Seating Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <span>Seating</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Seating Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {seatingOptions.map((option) => (
              <DropdownMenuItem
                key={option}
                onClick={() => {
                  onFiltersChange({ ...filters, seating: option });
                }}
                className={cn(
                  "cursor-pointer",
                  filters.seating === option && "bg-accent text-accent-foreground"
                )}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Cuisines Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <span>Cuisines</span>
              {filters.cuisines.length > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {filters.cuisines.length}
                </Badge>
              )}
              <ChevronDown className="h-4 w-4" />
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
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Lists Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <span>Lists</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Restaurant Lists</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {listOptions.map((option) => (
              <DropdownMenuItem
                key={option}
                onClick={() => {
                  onFiltersChange({ ...filters, lists: option });
                }}
                className={cn(
                  "cursor-pointer",
                  filters.lists === option && "bg-accent text-accent-foreground"
                )}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Active Filters Display */}
      {filters.cuisines.length > 0 && (
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-2">
            {filters.cuisines.map((cuisine) => (
              <Badge
                key={cuisine}
                variant="secondary"
                className="flex items-center space-x-1 pr-1"
              >
                <span>{cuisine}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => toggleCuisine(cuisine)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters; 