"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapComponent } from "./map-component"

export function OfficeLocations() {
  const offices = [
    {
      id: 1,
      name: "Lagos Headquarters",
      address: "123 Life Avenue, Victoria Island, Lagos",
      phone: "+234-1-234-5678",
      coordinates: [6.4281, 3.4219] as [number, number],
    },
    {
      id: 2,
      name: "Abuja Branch",
      address: "456 Unity Street, Wuse II, Abuja",
      phone: "+234-9-876-5432",
      coordinates: [9.0579, 7.4951] as [number, number],
    },
    {
      id: 3,
      name: "Port Harcourt Office",
      address: "789 Garden City Road, Port Harcourt",
      phone: "+234-84-123-456",
      coordinates: [4.8156, 7.0498] as [number, number],
    },
    {
      id: 4,
      name: "Kano Center",
      address: "321 Sabon Gari, Kano",
      phone: "+234-64-789-123",
      coordinates: [12.0022, 8.592] as [number, number],
    },
  ]

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-800 mb-4">Our Locations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find us across Nigeria. We have offices and blood donation centers in major cities to serve you better.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          {offices.map((office) => (
            <Card key={office.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h3 className="font-semibold text-red-800 mb-2">{office.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                <p className="text-sm font-medium text-red-600">{office.phone}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Map</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <MapComponent offices={offices} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
