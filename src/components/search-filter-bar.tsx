"use client";

import React, { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFilterBarProps {
  filters: {
    seating: string;
    cuisines: string[];
    lists: string;
    priceRange: string;
    rating: string;
  };
  onFiltersChange: (filters: {
    seating: string;
    cuisines: string[];
    lists: string;
    priceRange: string;
    rating: string;
  }) => void;
  reservationType: string;
  location: string;
  partySize: string;
  date: string;
  time: string;
  onReservationChange?: (params: {
    reservationType?: string;
    location?: string;
    partySize?: string;
    date?: string;
    time?: string;
  }) => void;
}

const Calendar: React.FC<{
  selectedDate: string;
  onDateSelect: (date: string) => void;
}> = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (selectedDate) {
      return new Date(selectedDate);
    }
    return new Date();
  });

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const formatDateForComparison = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const isDateSelected = (day: number | null) => {
    if (!selectedDate || !day) return false;
    const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return formatDateForComparison(dateToCheck) === selectedDate;
  };

  const isDateDisabled = (day: number | null) => {
    if (!day) return true;
    const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dateToCheck < today;
  };

  const handleDateClick = (day: number | null) => {
    if (!day || isDateDisabled(day)) return;
    const selectedDateObj = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onDateSelect(formatDateForComparison(selectedDateObj));
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="p-4 w-72">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateMonth('prev')}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateMonth('next')}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="h-8 flex items-center justify-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(day)}
            disabled={isDateDisabled(day)}
            className={cn(
              "h-8 w-8 text-sm rounded-lg transition-colors",
              day ? "hover:bg-accent" : "",
              isDateSelected(day) ? "bg-primary text-primary-foreground" : "",
              isDateDisabled(day) ? "text-muted-foreground/50 cursor-not-allowed" : "cursor-pointer",
              !day ? "invisible" : ""
            )}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  filters,
  onFiltersChange,
  reservationType,
  location,
  partySize,
  date,
  time,
  onReservationChange,
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

  const reservationTypeOptions = ["Dine in", "Takeout", "Delivery"];
  const locationOptions = ["Singapore", "Amsterdam", "Jakarta", "Ubud", "Tokyo", "New York"];
  const partySizeOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];
  const timeOptions = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

  const toggleCuisine = (cuisine: string) => {
    const newCuisines = filters.cuisines.includes(cuisine)
      ? filters.cuisines.filter(c => c !== cuisine)
      : [...filters.cuisines, cuisine];
    
    onFiltersChange({
      ...filters,
      cuisines: newCuisines,
    });
  };

  const handleReservationChange = (key: string, value: string) => {
    if (onReservationChange) {
      onReservationChange({ [key]: value });
    }
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

  return (
    <div className="bg-background border-y border-neutral-800 px-6 py-4">
      <div className="flex items-center space-x-3">
        {/* Reservation Type */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full px-4 py-2 h-auto">
              {reservationType}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Reservation Type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {reservationTypeOptions.map((type) => (
              <DropdownMenuItem
                key={type}
                onClick={() => handleReservationChange("reservationType", type)}
                className={cn(
                  "cursor-pointer",
                  reservationType === type && "bg-accent text-accent-foreground"
                )}
              >
                {type}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Location */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full px-4 py-2 h-auto flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuLabel>Location</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {locationOptions.map((loc) => (
              <DropdownMenuItem
                key={loc}
                onClick={() => handleReservationChange("location", loc)}
                className={cn(
                  "cursor-pointer",
                  location === loc && "bg-accent text-accent-foreground"
                )}
              >
                {loc}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Date, Time & Guests Combined */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full flex gap-2 px-4 py-2 h-auto">
              <span className="text-sm border-r border-neutral-800 pr-2">{formatDate(date)}</span>
              <span className="text-sm border-r border-neutral-800 pr-2">{formatTime(time)}</span>
              <span className="text-sm">{partySize} guest{parseInt(partySize) > 1 ? 's' : ''}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-auto">
            <DropdownMenuSeparator />
            <Calendar selectedDate={date} onDateSelect={(newDate) => handleReservationChange("date", newDate)} />
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Party Size</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="grid grid-cols-4 gap-1 p-2">
              {partySizeOptions.map((size) => (
                <Button
                  key={size}
                  variant={partySize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleReservationChange("partySize", size)}
                  className="h-8"
                >
                  {size}
                </Button>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Time</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="grid grid-cols-3 gap-1 p-2 max-h-32 overflow-y-auto">
              {timeOptions.map((timeOption) => (
                <Button
                  key={timeOption}
                  variant={time === timeOption ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleReservationChange("time", timeOption)}
                  className="h-8 text-xs"
                >
                  {timeOption}
                </Button>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* More Filters Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="rounded-full border-neutral-800 px-4 py-2 h-auto flex items-center space-x-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span>More filters</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Filter Restaurants</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-sm mb-3">Cuisines</h4>
                <div className="space-y-2">
                  {cuisineOptions.map((cuisine) => (
                    <label key={cuisine} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.cuisines.includes(cuisine)}
                        onChange={() => toggleCuisine(cuisine)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm">{cuisine}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium text-sm mb-3">Price Range</h4>
                <div className="grid grid-cols-4 gap-2">
                  {["€", "€€", "€€€", "€€€€"].map((price) => (
                    <Button
                      key={price}
                      variant={filters.priceRange === price ? "default" : "outline"}
                      size="sm"
                      onClick={() => onFiltersChange({ ...filters, priceRange: price })}
                      className="h-8"
                    >
                      {price}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium text-sm mb-3">Restaurant Type</h4>
                <div className="space-y-1">
                  {["All", "Fine Dining", "Casual", "Trendy"].map((list) => (
                    <Button
                      key={list}
                      variant={filters.lists === list ? "default" : "ghost"}
                      size="sm"
                      onClick={() => onFiltersChange({ ...filters, lists: list })}
                      className="w-full justify-start h-8"
                    >
                      {list}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium text-sm mb-3">Minimum Rating</h4>
                <div className="space-y-1">
                  {["All", "4.0", "4.5", "4.8"].map((rating) => (
                    <Button
                      key={rating}
                      variant={filters.rating === rating ? "default" : "ghost"}
                      size="sm"
                      onClick={() => onFiltersChange({ ...filters, rating: rating })}
                      className="w-full justify-start h-8"
                    >
                      {rating === "All" ? "All ratings" : `${rating}+ stars`}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SearchFilterBar; 