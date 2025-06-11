"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AvailabilitySlot } from '@/hooks/use-availability';

interface TimeSlotPickerProps {
  slots: AvailabilitySlot[];
  selectedTime?: string;
  onTimeSelect: (time: string) => void;
  loading?: boolean;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  slots,
  selectedTime,
  onTimeSelect,
  loading = false
}) => {
  if (loading) {
    return (
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Checking availability...</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-8 rounded border animate-pulse bg-muted"
            />
          ))}
        </div>
      </div>
    );
  }

  const availableSlots = slots.filter(slot => slot.available);
  const unavailableSlots = slots.filter(slot => !slot.available);

  if (availableSlots.length === 0 && unavailableSlots.length === 0) {
    return (
      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>No availability data</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>
          {availableSlots.length > 0
            ? `${availableSlots.length} time${availableSlots.length === 1 ? '' : 's'} available`
            : 'No times available'
          }
        </span>
      </div>

      {availableSlots.length > 0 && (
        <div className="grid grid-cols-4 gap-2">
          {availableSlots.map((slot) => (
            <Button
              key={slot.time}
              variant={selectedTime === slot.time ? "default" : "outline"}
              size="sm"
              onClick={() => onTimeSelect(slot.time)}
              className={cn(
                "text-xs h-8 transition-all duration-200",
                selectedTime === slot.time
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-primary/10 hover:border-primary/50"
              )}
            >
              {slot.time}
            </Button>
          ))}
        </div>
      )}

      {unavailableSlots.length > 0 && availableSlots.length === 0 && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            All times are currently booked. Here are the unavailable slots:
          </p>
          <div className="grid grid-cols-4 gap-2">
            {unavailableSlots.slice(0, 8).map((slot) => (
              <div
                key={slot.time}
                className="text-xs h-8 px-3 py-1 rounded border border-muted bg-muted/50 text-muted-foreground flex items-center justify-center cursor-not-allowed"
              >
                {slot.time}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlotPicker; 