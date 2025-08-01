import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { MapComponent } from "./map-component";

export function OfficeLocations() {
  const locations = [
    {
      id: 1,
      name: "Lagos Headquarters",
      address: "123 Life Avenue, Victoria Island, Lagos State",
      phone: "+234-1-234-5678",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      isMain: true,
      coordinates: [6.45407, 3.39467] as [number, number],
    },
    {
      id: 2,
      name: "Abuja Branch",
      address: "456 Hope Street, Wuse II, Abuja FCT",
      phone: "+234-9-876-5432",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-3PM",
      isMain: false,
      coordinates: [9.05785, 7.49508] as [number, number],
    },
    {
      id: 3,
      name: "Port Harcourt Center",
      address: "789 Care Boulevard, GRA, Port Harcourt",
      phone: "+234-84-123-456",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-3PM",
      isMain: false,
      coordinates: [4.82416, 7.03356] as [number, number],
    },
  ];

  return (
    <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="pb-8">
        <CardTitle className="text-3xl font-bold text-slate-800">
          Our Locations
        </CardTitle>
        <p className="text-slate-600 mt-2">
          Visit us at any of our convenient locations across Nigeria
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Locations List */}
          <div className="space-y-8">
            {locations.map((location) => (
              <div
                key={location.id}
                className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  location.isMain
                    ? "bg-blue-50 border-blue-200"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                {location.isMain && (
                  <div className="absolute -top-3 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    Main Office
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {location.name}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600">{location.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-slate-500 flex-shrink-0" />
                    <p className="text-slate-600 font-medium">{location.phone}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600">{location.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map View */}
          <div className="rounded-xl overflow-hidden border-2 border-slate-200 h-[600px] lg:h-auto">
            <MapComponent offices={locations} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}