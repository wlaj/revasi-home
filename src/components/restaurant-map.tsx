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
    : -7.375; // Center point between Jakarta and Ubud
  
  const centerLng = restaurants.length > 0
    ? restaurants.reduce((sum, restaurant) => sum + restaurant.coordinates[1], 0) / restaurants.length
    : 111.03; // Center point between Jakarta and Ubud

  const createCustomIcon = (restaurant: Restaurant) => {
    if (!L) return null;
    
    const isAvailable = !restaurant.availability.toLowerCase().includes("sorry");
    
    // Determine icon based on restaurant type/tags
    let iconSvg = '';
    const tags = restaurant.tags.map(tag => tag.toLowerCase());
    
    if (tags.includes('wine bar') || tags.includes('cocktails') || tags.includes('bar')) {
      // Wine glass icon for bars
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-7 8-7-8Z"/></svg>`;
    } else if (tags.includes('fine dining') || tags.includes('luxury')) {
      // Crown icon for fine dining
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`;
    } else if (tags.includes('pizza') || tags.includes('pasta') || restaurant.cuisine.toLowerCase() === 'italian') {
      // Pizza slice icon for Italian
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/></svg>`;
    } else if (tags.includes('dim sum') || restaurant.cuisine.toLowerCase() === 'chinese') {
      // Soup/bowl icon for Chinese
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"/><path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"/><path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"/></svg>`;
    } else {
      // Default utensils icon for general restaurants
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`;
    }
    
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="relative">
          <div class="w-12 h-12 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-orange-500'} border-2 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
            ${iconSvg}
          </div>
        </div>
      `,
      iconSize: [48, 48],
      iconAnchor: [24, 48],
      popupAnchor: [0, -48],
    });
  };

  if (!leafletLoaded) {
    return (
      <div className="h-full flex items-center justify-center bg-muted/20 border-l border-neutral-800">
        <div className="text-center space-y-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full relative bg-muted/20 border-l border-neutral-800">
      {/* Map Container */}
      <div className="h-full w-full [&_.leaflet-container]:bg-neutral-900/50 [&_.leaflet-control-zoom]:border-neutral-700 [&_.leaflet-control-zoom]:bg-background/90 [&_.leaflet-control-zoom]:backdrop-blur [&_.leaflet-control-zoom-in]:border-b-neutral-700 [&_.leaflet-control-zoom-in]:text-foreground [&_.leaflet-control-zoom-out]:text-foreground [&_.leaflet-control-attribution]:bg-background/90 [&_.leaflet-control-attribution]:backdrop-blur [&_.leaflet-control-attribution]:text-xs [&_.leaflet-control-attribution]:text-muted-foreground [&_.leaflet-control-attribution]:border-neutral-700">
        <MapContainer
          center={[centerLat, centerLng]}
          zoom={restaurants.length > 0 ? 6 : 6} // Lower zoom to show both cities
          style={{ height: "100%", width: "100%" }}
          ref={mapRef}
          attributionControl={true}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
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
              <Popup className="[&_.leaflet-popup-content-wrapper]:bg-background [&_.leaflet-popup-content-wrapper]:border [&_.leaflet-popup-content-wrapper]:border-neutral-700 [&_.leaflet-popup-content-wrapper]:rounded-lg [&_.leaflet-popup-content-wrapper]:shadow-xl [&_.leaflet-popup-content]:m-0 [&_.leaflet-popup-tip]:bg-background [&_.leaflet-popup-tip]:border-neutral-700">
                <div className="min-w-[220px] p-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-base">{restaurant.name}</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{restaurant.rating}</span>
                        <span className="text-muted-foreground">({restaurant.reviews})</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{restaurant.cuisine}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{restaurant.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {restaurant.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="w-full text-sm h-8">
                      View Details
                      <ExternalLink className="ml-2 h-3 w-3" />
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
        <Card className="absolute top-6 left-6 right-6 z-[1000] shadow-xl border-neutral-700 bg-background/95 backdrop-blur">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2 min-w-0 flex-1">
                <h3 className="font-semibold text-base">{selectedRestaurant.name}</h3>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{selectedRestaurant.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{selectedRestaurant.cuisine}</span>
                  <span>•</span>
                  <span>{selectedRestaurant.priceRange}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{selectedRestaurant.address}</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSelectedRestaurant(null)}
                className="h-8 w-8 p-0 hover:bg-muted"
              >
                ×
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Map Legend */}
      <Card className="absolute bottom-8 right-4 z-[1000] shadow-xl border-neutral-700 bg-background/95 backdrop-blur">
        <CardContent className="p-3">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-green-500 border border-background"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-4 h-4 rounded-full bg-orange-500 border border-background"></div>
              <span>Limited availability</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantMap; 