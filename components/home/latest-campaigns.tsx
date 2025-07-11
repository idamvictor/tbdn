"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import { heroImages } from "@/app/constants/images";

const upcomingDrives = [
  {
    id: 1,
    title: "University Campus Blood Drive",
    date: "March 15, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "University of Lagos, Main Campus",
    expectedDonors: 200,
    registered: 156,
    image: heroImages.slide1,
    status: "Open",
  },
  {
    id: 2,
    title: "Corporate Partnership Drive",
    date: "March 18, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Victoria Island Business District",
    expectedDonors: 150,
    registered: 89,
    image: heroImages.slide2,
    status: "Open",
  },
  {
    id: 3,
    title: "Community Health Fair",
    date: "March 22, 2024",
    time: "8:00 AM - 5:00 PM",
    location: "National Stadium, Surulere",
    expectedDonors: 300,
    registered: 234,
    image: heroImages.slide3,
    status: "Almost Full",
  },
];

const recentHighlights = [
  {
    id: 1,
    title: "Record-Breaking February Drive",
    description:
      "Collected 450 units in a single day at Lagos State University",
    image: heroImages.slide4,
    date: "Feb 28, 2024",
    impact: "1,350 lives potentially saved",
  },
  {
    id: 2,
    title: "Youth Engagement Success",
    description:
      "Over 200 first-time donors registered through our youth program",
    image: heroImages.slide5,
    date: "Feb 25, 2024",
    impact: "200 new lifelong donors",
  },
];

export function LatestCampaigns() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Campaigns & Drives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our upcoming blood drives or see the impact of recent
              campaigns
            </p>
          </div>

          {/* Upcoming Blood Drives */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Upcoming Blood Drives
              </h3>
              <Button variant="outline" className="hidden sm:flex">
                View All Drives
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingDrives.map((drive) => (
                <div
                  key={drive.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={drive.image || "/placeholder.svg"}
                      alt={drive.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                      priority={true}
                    />
                    <Badge
                      className={`absolute top-4 right-4 ${
                        drive.status === "Almost Full"
                          ? "bg-orange-500"
                          : "bg-green-500"
                      }`}
                    >
                      {drive.status}
                    </Badge>
                  </div>

                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {drive.title}
                    </h4>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-red-500" />
                        {drive.date} • {drive.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-red-500" />
                        {drive.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-red-500" />
                        {drive.registered}/{drive.expectedDonors} registered
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-600 h-2 rounded-full transition-all"
                        style={{
                          width: `${
                            (drive.registered / drive.expectedDonors) * 100
                          }%`,
                        }}
                      />
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Register Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center sm:hidden">
              <Button variant="outline">
                View All Drives
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Recent Campaign Highlights */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Recent Campaign Highlights
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentHighlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={highlight.image || "/placeholder.svg"}
                        alt={highlight.title}
                        width={300}
                        height={200}
                        className="w-full h-48 md:h-full object-cover"
                        priority={true}
                      />
                    </div>
                    <div className="p-6 md:w-2/3 space-y-3">
                      <div className="text-sm text-gray-500">
                        {highlight.date}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {highlight.description}
                      </p>
                      <div className="flex items-center text-sm">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          Impact: {highlight.impact}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              View All Campaigns
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
