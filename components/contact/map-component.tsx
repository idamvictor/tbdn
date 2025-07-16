"use client";
import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

interface Office {
  id: number;
  name: string;
  address: string;
  phone: string;
  coordinates: [number, number];
}

interface MapComponentProps {
  offices: Office[];
}

export function MapComponent({ offices }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    const initMap = async () => {
      // Dynamically import Leaflet
      const L = (await import("leaflet")).default;

      // Import Leaflet CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      // Fix for default markers (TypeScript safe)
      if ("_getIconUrl" in L.Icon.Default.prototype) {
        delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })
          ._getIconUrl;
      }
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      // Initialize map centered on Nigeria
      const map = L.map(mapRef.current!).setView([9.082, 8.6753], 6);

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Custom red icon for blood donation centers
      const redIcon = L.divIcon({
        html: `<div style="background-color: #dc2626; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
        className: "custom-div-icon",
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      // Add markers for each office
      offices.forEach((office) => {
        const marker = L.marker(office.coordinates, { icon: redIcon }).addTo(
          map
        );

        marker.bindPopup(`
          <div style="min-width: 200px;">
            <h3 style="color: #dc2626; font-weight: bold; margin-bottom: 8px;">${office.name}</h3>
            <p style="margin-bottom: 4px; font-size: 14px;">${office.address}</p>
            <p style="color: #dc2626; font-weight: 500; font-size: 14px;">${office.phone}</p>
          </div>
        `);
      });

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [offices]);

  return (
    <div
      ref={mapRef}
      className="w-full h-96 rounded-b-lg"
      style={{ minHeight: "400px" }}
    />
  );
}
