"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, ExternalLink } from "lucide-react";
import { Restaurant } from "./restaurant-list";

// Dynamic imports for Leaflet to avoid SSR issues
let L: any;
let MapContainer: any;
let TileLayer: any;
let Marker: any;
let Popup: any;

interface RestaurantMapProps {
  restaurants: Restaurant[];
}

const RestaurantMap: React.FC<RestaurantMapProps> = ({ restaurants }) => {
  const mapRef = useRef<any>(null);
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    // Dynamic import of Leaflet components
    const loadLeaflet = async () => {
      try {
        const leaflet = await import("leaflet");
        const reactLeaflet = await import("react-leaflet");
        
        L = leaflet.default;
        MapContainer = reactLeaflet.MapContainer;
        TileLayer = reactLeaflet.TileLayer;
        Marker = reactLeaflet.Marker;
        Popup = reactLeaflet.Popup;

        // Fix for default markers
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        setLeafletLoaded(true);
      } catch (error) {
        console.error("Failed to load Leaflet:", error);
      }
    };

    loadLeaflet();
  }, []);

  // Calculate center point from restaurants
  const centerLat = restaurants.length > 0 
    ? restaurants.reduce((sum, restaurant) => sum + restaurant.coordinates[0], 0) / restaurants.length
    : 52.3676;
  
  const centerLng = restaurants.length > 0
    ? restaurants.reduce((sum, restaurant) => sum + restaurant.coordinates[1], 0) / restaurants.length
    : 4.8892;

  const createCustomIcon = (restaurant: Restaurant) => {
    if (!L) return null;
    
    const isAvailable = !restaurant.availability.toLowerCase().includes("sorry");
    
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="relative">
          <div class="w-8 h-8 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-orange-500'} border-2 border-neutral-800 shadow-lg flex items-center justify-center">
            <div class="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 ${isAvailable ? 'bg-green-500' : 'bg-orange-500'} rotate-45"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  if (!leafletLoaded) {
    return (
      <Card className="h-full flex items-center justify-center">
        <CardContent className="text-center">
          <div className="space-y-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full hidden md:block overflow-hidden">
      <CardContent className="p-0 h-full relative">
        {/* Map */}
        <div className="h-full w-full">
          <MapContainer
            center={[centerLat, centerLng]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {restaurants.map((restaurant) => (
              <Marker
                key={restaurant.id}
                position={restaurant.coordinates}
                icon={createCustomIcon(restaurant)}
                eventHandlers={{
                  click: () => setSelectedRestaurant(restaurant),
                }}
              >
                <Popup>
                  <div className="min-w-[200px] p-2">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm">{restaurant.name}</h3>
                      <div className="flex items-center space-x-1 text-xs">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{restaurant.rating}</span>
                        <span className="text-muted-foreground">({restaurant.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{restaurant.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs px-1 py-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" className="w-full text-xs h-7">
                        View Details
                        <ExternalLink className="ml-1 h-2 w-2" />
                      </Button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Selected Restaurant Info */}
        {selectedRestaurant && (
          <Card className="absolute top-4 left-4 right-4 z-[1000] shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm">{selectedRestaurant.name}</h3>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{selectedRestaurant.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{selectedRestaurant.cuisine}</span>
                    <span>•</span>
                    <span>{selectedRestaurant.priceRange}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{selectedRestaurant.address}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSelectedRestaurant(null)}
                  className="h-6 w-6 p-0"
                >
                  ×
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Map Legend */}
        <Card className="absolute bottom-6 right-4 z-[1000]">
          <CardContent className="p-3">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span>Limited availability</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default RestaurantMap; 