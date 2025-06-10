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
        {daysOfWeek.map((day) => (
          <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-muted-foreground">
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

  const reservationText = `${formatDate(date)} ${formatTime(time)} ${partySize} guest${parseInt(partySize) > 1 ? 's' : ''}`;

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
            <Button variant="outline" className="rounded-full px-4 py-2 h-auto">
              {reservationText}
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
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Restaurant Type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["All", "Fine Dining", "Casual", "Trendy"].map((list) => (
              <DropdownMenuItem
                key={list}
                onClick={() => onFiltersChange({ ...filters, lists: list })}
                className={cn(
                  "cursor-pointer",
                  filters.lists === list && "bg-accent text-accent-foreground"
                )}
              >
                {list}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Minimum Rating</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {["All", "4.0", "4.5", "4.8"].map((rating) => (
              <DropdownMenuItem
                key={rating}
                onClick={() => onFiltersChange({ ...filters, rating: rating })}
                className={cn(
                  "cursor-pointer",
                  filters.rating === rating && "bg-accent text-accent-foreground"
                )}
              >
                {rating === "All" ? "All ratings" : `${rating}+ stars`}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SearchFilterBar; 