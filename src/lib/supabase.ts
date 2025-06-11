import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ehypfrxbmpwxhpnijikx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoeXBmcnhibXB3eGhwbmlqaWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxOTc4MTgsImV4cCI6MjA2MTc3MzgxOH0.zax8P6wtIIFdGwtK58pIerrQAgszTXMIditu5hR_Dz4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      reservations: {
        Row: {
          id: string
          reservation_date: string | null
          venue: string | null
          reservation_time: string | null
          covers: number | null
          reservation_status: 'DRAFT' | 'SEATED' | 'BOOKED' | 'RECONFIRMED' | 'CONFIRMED' | 'CANCELED' | 'LEFT' | 'EXPIRED'
          reservation_shift: 'LUNCH' | 'DINNER' | null
          created_at: string | null
        }
      }
      restaurants: {
        Row: {
          id: string
          name: string | null
          availability_settings: any | null
        }
      }
    }
  }
} 