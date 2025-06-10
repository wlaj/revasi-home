"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Search, ChevronDown, Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const reservationSchema = z.object({
  reservationType: z.string().min(1, "Please select reservation type"),
  location: z.string().min(1, "Please select location"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  partySize: z
    .number()
    .min(1, "Please add at least 1 guest")
    .max(20, "Maximum 20 guests allowed"),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const ReservationBar = () => {
  const [open, setOpen] = React.useState(false);

  const form = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      reservationType: "Dine in",
      location: "",
      date: "",
      time: "",
      partySize: 2,
    },
  });

  const onSubmit = (data: ReservationFormData) => {
    console.log("Reservation data:", data);
    setOpen(false);
    // Handle form submission here
  };

  const generateTimeOptions = () => {
    const times = [
      { value: "now", display: "Now" },
      { value: "asap", display: "ASAP" },
    ];

    for (let hour = 17; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        const displayTime = new Date(
          `2000-01-01T${timeString}`
        ).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        times.push({ value: timeString, display: displayTime });
      }
    }
    return times;
  };

  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const dateString = date.toISOString().split("T")[0];
      const displayDate =
        i === 0
          ? "Today"
          : i === 1
          ? "Tomorrow"
          : date.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            });

      dates.push({ value: dateString, display: displayDate });
    }
    return dates;
  };

  const generatePartySizeOptions = () => {
    const sizes = [];
    for (let i = 1; i <= 20; i++) {
      sizes.push({
        value: i,
        display: `${i} guest${i > 1 ? "s" : ""}`,
      });
    }
    return sizes;
  };

  const timeOptions = generateTimeOptions();
  const dateOptions = generateDateOptions();
  const partySizeOptions = generatePartySizeOptions();

  const reservationTypes = [
    { value: "Dine in", display: "Dine in" },
    { value: "Takeout", display: "Takeout" },
    { value: "Delivery", display: "Delivery" },
  ];

  const locations = [
    { value: "Hong Kong", display: "Hong Kong" },
    { value: "Singapore", display: "Singapore" },
    { value: "Tokyo", display: "Tokyo" },
    { value: "Bangkok", display: "Bangkok" },
  ];

  const DropdownField = ({
    children,
    label,
    isOpen,
    onClick,
  }: {
    children: React.ReactNode;
    label: string;
    isOpen?: boolean;
    onClick?: () => void;
  }) => (
    <div className="relative">
      <div className="text-xs text-gray-500 mb-1 font-medium">{label}</div>
      <div
        className="flex items-center justify-between py-2 cursor-pointer"
        onClick={onClick}
      >
        <div className="text-sm font-medium text-gray-900">{children}</div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-400 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </div>
    </div>
  );

  const FormFields = () => (
    <>
      {/* Reservation Type */}
      <FormField
        control={form.control}
        name="reservationType"
        render={({ field }) => (
          <FormItem className="border-0 space-y-0 min-w-0 flex-1">
            <DropdownField label="Reservation type">
              <FormControl>
                <select
                  {...field}
                  className="appearance-none bg-transparent border-0 outline-none text-sm font-medium text-gray-900 cursor-pointer w-full"
                >
                  {reservationTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.display}
                    </option>
                  ))}
                </select>
              </FormControl>
            </DropdownField>
            <FormMessage className="text-red-500 text-xs" />
          </FormItem>
        )}
      />

      <div className="w-px h-12 bg-gray-200 hidden lg:block" />

      {/* Location */}
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem className="border-0 space-y-0 min-w-0 flex-1">
            <DropdownField label="Location">
              <FormControl>
                <select
                  {...field}
                  className="appearance-none bg-transparent border-0 outline-none text-sm font-medium text-gray-900 cursor-pointer w-full"
                >
                  <option value="">Select location</option>
                  {locations.map((location) => (
                    <option key={location.value} value={location.value}>
                      {location.display}
                    </option>
                  ))}
                </select>
              </FormControl>
            </DropdownField>
            <FormMessage className="text-red-500 text-xs" />
          </FormItem>
        )}
      />

      <div className="w-px h-12 bg-gray-200 hidden lg:block" />

      {/* Date */}
      <FormField
        control={form.control}
        name="date"
        render={({ field }) => (
          <FormItem className="border-0 space-y-0 min-w-0 flex-1">
            <DropdownField label="Date">
              <FormControl>
                <select
                  {...field}
                  className="appearance-none bg-transparent border-0 outline-none text-sm font-medium text-gray-900 cursor-pointer w-full"
                >
                  <option value="">Select date</option>
                  {dateOptions.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.display}
                    </option>
                  ))}
                </select>
              </FormControl>
            </DropdownField>
            <FormMessage className="text-red-500 text-xs" />
          </FormItem>
        )}
      />

      <div className="w-px h-12 bg-gray-200 hidden lg:block" />

      {/* Time */}
      <FormField
        control={form.control}
        name="time"
        render={({ field }) => (
          <FormItem className="border-0 space-y-0 min-w-0 flex-1">
            <DropdownField label="Time">
              <FormControl>
                <select
                  {...field}
                  className="appearance-none bg-transparent border-0 outline-none text-sm font-medium text-gray-900 cursor-pointer w-full"
                >
                  <option value="">Select time</option>
                  {timeOptions.map((time) => (
                    <option key={time.value} value={time.value}>
                      {time.display}
                    </option>
                  ))}
                </select>
              </FormControl>
            </DropdownField>
            <FormMessage className="text-red-500 text-xs" />
          </FormItem>
        )}
      />

      <div className="w-px h-12 bg-gray-200 hidden lg:block" />

      {/* Party Size */}
      <FormField
        control={form.control}
        name="partySize"
        render={({ field }) => (
          <FormItem className="border-0 space-y-0 min-w-0 flex-1">
            <DropdownField label="Party size">
              <FormControl>
                <select
                  {...field}
                  value={field.value}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  className="appearance-none bg-transparent border-0 outline-none text-sm font-medium text-gray-900 cursor-pointer w-full"
                >
                  {partySizeOptions.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.display}
                    </option>
                  ))}
                </select>
              </FormControl>
            </DropdownField>
            <FormMessage className="text-red-500 text-xs" />
          </FormItem>
        )}
      />
    </>
  );

  return (
    <div className="w-full mx-auto py-8">
      <Form {...form}>
        {/* Desktop Layout */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative hidden lg:block">
          <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 p-4 gap-8">
            <FormFields />

            {/* Search Button */}
            <Button
              type="submit"
              size="icon"
              className="bg-black text-white rounded-full w-12 h-12 flex-shrink-0 ml-4"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </form>

        {/* Mobile Layout with Drawer */}
        <div className="lg:hidden">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Find a table</div>
                      <div className="text-xs text-gray-500">
                        {form.watch("location") || "Select location"} • {form.watch("date") || "Select date"} • {form.watch("partySize")} guests
                      </div>
                    </div>
                  </div>
                  <Search className="h-5 w-5" />
                </div>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <DrawerHeader>
                  <DrawerTitle>Make a Reservation</DrawerTitle>
                  <DrawerDescription>
                    Choose your preferences for dining
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-6">
                  <FormFields />
                </div>
                <DrawerFooter>
                  <Button type="submit" className="text-white">
                    <Search className="h-4 w-4 mr-2" />
                    Find Table
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </DrawerContent>
          </Drawer>
        </div>
      </Form>
    </div>
  );
};

export default ReservationBar;
