import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export interface AvailabilitySlot {
  time: string
  available: boolean
  tablesAvailable: number
}

export interface RestaurantAvailability {
  restaurantName: string
  date: string
  partySize: number
  availableSlots: AvailabilitySlot[]
  isLunchAvailable: boolean
  isDinnerAvailable: boolean
}

// Generate time slots based on availability settings
const generateTimeSlots = (
  startTime: string,
  endTime: string,
  interval: number = 15
): string[] => {
  const slots: string[] = []
  const start = new Date(`2000-01-01T${startTime}`)
  const end = new Date(`2000-01-01T${endTime}`)
  
  let current = new Date(start)
  while (current < end) {
    slots.push(current.toTimeString().slice(0, 5))
    current.setMinutes(current.getMinutes() + interval)
  }
  
  return slots
}

// Check if a table can accommodate the party size
const canTableAccommodateParty = (table: any, partySize: number): boolean => {
  return table.covers_min <= partySize && table.covers_max >= partySize
}

// Get day of week (0 = Sunday, 1 = Monday, etc.)
const getDayOfWeek = (date: string): number => {
  return new Date(date).getDay()
}

export const useAvailability = (
  restaurantName: string,
  date: string,
  partySize: number
) => {
  const [availability, setAvailability] = useState<RestaurantAvailability | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!restaurantName || !date || !partySize) {
      setAvailability(null)
      return
    }

    const fetchAvailability = async () => {
      setLoading(true)
      setError(null)

      try {
        // Get restaurant availability settings
        const { data: restaurant, error: restaurantError } = await supabase
          .from('restaurants')
          .select('availability_settings')
          .eq('name', restaurantName)
          .single()

        if (restaurantError) {
          throw new Error(`Failed to fetch restaurant settings: ${restaurantError.message}`)
        }

        if (!restaurant?.availability_settings) {
          throw new Error('No availability settings found for restaurant')
        }

        const settings = restaurant.availability_settings
        const dayOfWeek = getDayOfWeek(date)

        // Check if restaurant is open on this day
        const isLunchDay = settings.available_lunch_days?.includes(dayOfWeek) || false
        const isDinnerDay = settings.available_dinner_days?.includes(dayOfWeek) || false

        if (!isLunchDay && !isDinnerDay) {
          setAvailability({
            restaurantName,
            date,
            partySize,
            availableSlots: [],
            isLunchAvailable: false,
            isDinnerAvailable: false,
          })
          return
        }

        // Get existing reservations for this date and restaurant
        const { data: reservations, error: reservationsError } = await supabase
          .from('reservations')
          .select('reservation_time, covers, reservation_status')
          .eq('venue', restaurantName)
          .eq('reservation_date', date)
          .in('reservation_status', ['BOOKED', 'CONFIRMED', 'RECONFIRMED', 'SEATED'])

        if (reservationsError) {
          throw new Error(`Failed to fetch reservations: ${reservationsError.message}`)
        }

        // Find tables that can accommodate the party size
        const suitableTables = settings.tables?.filter((table: any) => 
          canTableAccommodateParty(table, partySize)
        ) || []

        const availableSlots: AvailabilitySlot[] = []

        // Generate lunch slots if available
        if (isLunchDay && settings.lunch_start_time && settings.lunch_end_time) {
          const lunchSlots = generateTimeSlots(
            settings.lunch_start_time,
            settings.lunch_end_time,
            settings.time_slot_interval || 15
          )

          for (const time of lunchSlots) {
            // Count how many tables are booked at this time
            const bookedTablesAtTime = reservations?.filter(
              (res: any) => res.reservation_time === `${time}:00`
            ).length || 0

            const availableTables = Math.max(0, suitableTables.length - bookedTablesAtTime)
            
            availableSlots.push({
              time,
              available: availableTables > 0,
              tablesAvailable: availableTables,
            })
          }
        }

        // Generate dinner slots if available
        if (isDinnerDay && settings.dinner_start_time && settings.dinner_end_time) {
          const dinnerSlots = generateTimeSlots(
            settings.dinner_start_time,
            settings.dinner_end_time,
            settings.time_slot_interval || 15
          )

          for (const time of dinnerSlots) {
            // Count how many tables are booked at this time
            const bookedTablesAtTime = reservations?.filter(
              (res: any) => res.reservation_time === `${time}:00`
            ).length || 0

            const availableTables = Math.max(0, suitableTables.length - bookedTablesAtTime)
            
            availableSlots.push({
              time,
              available: availableTables > 0,
              tablesAvailable: availableTables,
            })
          }
        }

        setAvailability({
          restaurantName,
          date,
          partySize,
          availableSlots: availableSlots.sort((a, b) => a.time.localeCompare(b.time)),
          isLunchAvailable: isLunchDay,
          isDinnerAvailable: isDinnerDay,
        })

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        setAvailability(null)
      } finally {
        setLoading(false)
      }
    }

    fetchAvailability()
  }, [restaurantName, date, partySize])

  return { availability, loading, error }
} 