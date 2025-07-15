"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Camera,
  Video,
  TrendingUp,
  Heart,
  Award,
  Newspaper,
  Quote,
  Play,
  Share2,
  Calendar,
  MapPin,
  Target,
} from "lucide-react";

interface Campaign {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "Active" | "Completed" | "Upcoming";
  location: string;
  targetDonors: number;
  actualDonors: number;
  bloodUnitsCollected: number;
  livesImpacted: number;
  images: string[];
  videos: string[];
  volunteers: number;
  mediaLinks: string[];
  testimonials: {
    name: string;
    role: string;
    content: string;
    avatar: string;
  }[];
}

const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Save Lives Lagos 2024",
    description:
      "A city-wide campaign to collect 10,000 units of blood across Lagos State during the first quarter of 2024.",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    status: "Active",
    location: "Lagos State",
    targetDonors: 10000,
    actualDonors: 7845,
    bloodUnitsCollected: 7234,
    livesImpacted: 21702,
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    videos: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    volunteers: 234,
    mediaLinks: ["https://example.com/news1", "https://example.com/news2"],
    testimonials: [
      {
        name: "Dr. Adebayo Ogundimu",
        role: "Chief Medical Officer, Lagos University Teaching Hospital",
        content:
          "This campaign has been instrumental in addressing our blood shortage crisis. The response from the community has been overwhelming.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Mrs. Folake Adeyemi",
        role: "Blood Donor",
        content:
          "I'm proud to be part of this life-saving initiative. Knowing that my donation can save up to 3 lives motivates me to donate regularly.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
  {
    id: "2",
    title: "Youth Blood Heroes",
    description:
      "Targeting young adults aged 18-30 to build a sustainable donor base for the future.",
    startDate: "2023-09-01",
    endDate: "2023-12-31",
    status: "Completed",
    location: "National",
    targetDonors: 5000,
    actualDonors: 6234,
    bloodUnitsCollected: 5890,
    livesImpacted: 17670,
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    videos: ["/placeholder.svg?height=200&width=300"],
    volunteers: 156,
    mediaLinks: ["https://example.com/youth-news1"],
    testimonials: [
      {
        name: "Ahmed Musa",
        role: "University Student",
        content:
          "This campaign made blood donation cool among young people. We organized drives in our universities and the response was amazing.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
];

export function CampaignsPage() {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign>(
    campaigns[0]
  );
  const [selectedMedia, setSelectedMedia] = useState<{
    type: "image" | "video";
    src: string;
  } | null>(null);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Blood Donation Campaigns</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our impactful campaigns that have mobilized communities, saved
          lives, and created lasting change across Nigeria.
        </p>
      </section>

      {/* Campaign Selection */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {campaigns.map((campaign) => (
            <Card
              key={campaign.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedCampaign.id === campaign.id ? "ring-2 ring-red-600" : ""
              }`}
              onClick={() => setSelectedCampaign(campaign)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{campaign.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {campaign.description}
                    </CardDescription>
                  </div>
                  <Badge
                    className={
                      campaign.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : campaign.status === "Completed"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-orange-100 text-orange-800"
                    }
                  >
                    {campaign.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(campaign.startDate).toLocaleDateString()} -{" "}
                      {new Date(campaign.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="h-4 w-4" />
                    <span>
                      {campaign.actualDonors}/{campaign.targetDonors} donors
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Campaign Details */}
      <section>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  {selectedCampaign.title}
                </CardTitle>
                <CardDescription>
                  {selectedCampaign.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Campaign Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span>
                          {new Date(
                            selectedCampaign.startDate
                          ).toLocaleDateString()}{" "}
                          -{" "}
                          {new Date(
                            selectedCampaign.endDate
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span>{selectedCampaign.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge
                          className={
                            selectedCampaign.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : selectedCampaign.status === "Completed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-orange-100 text-orange-800"
                          }
                        >
                          {selectedCampaign.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Progress</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Donor Registration</span>
                          <span>
                            {selectedCampaign.actualDonors}/
                            {selectedCampaign.targetDonors}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-red-600 h-2 rounded-full"
                            style={{
                              width: `${Math.min(
                                (selectedCampaign.actualDonors /
                                  selectedCampaign.targetDonors) *
                                  100,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Photo Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Photo Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedCampaign.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() =>
                          setSelectedMedia({ type: "image", src: image })
                        }
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Campaign photo ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-transparent"
                  >
                    View All Photos ({selectedCampaign.images.length})
                  </Button>
                </CardContent>
              </Card>

              {/* Video Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Video Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedCampaign.videos.map((video, index) => (
                      <div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity bg-gray-100"
                        onClick={() =>
                          setSelectedMedia({ type: "video", src: video })
                        }
                      >
                        <Image
                          src={video || "/placeholder.svg"}
                          alt={`Campaign video ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="h-6 w-6 text-red-600 ml-1" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-transparent"
                  >
                    View All Videos ({selectedCampaign.videos.length})
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600">
                    {selectedCampaign.actualDonors.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Donors
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {selectedCampaign.bloodUnitsCollected.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Blood Units Collected
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600">
                    {selectedCampaign.livesImpacted.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Lives Impacted
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {selectedCampaign.volunteers}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Volunteers
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Campaign Results & Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span className="text-sm">
                          Exceeded target by{" "}
                          {(
                            (selectedCampaign.actualDonors /
                              selectedCampaign.targetDonors) *
                              100 -
                            100
                          ).toFixed(1)}
                          %
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span className="text-sm">
                          Collected{" "}
                          {selectedCampaign.bloodUnitsCollected.toLocaleString()}{" "}
                          units of safe blood
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span className="text-sm">
                          Potentially saved{" "}
                          {selectedCampaign.livesImpacted.toLocaleString()}{" "}
                          lives
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span className="text-sm">
                          Engaged {selectedCampaign.volunteers} dedicated
                          volunteers
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Impact Breakdown</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Emergency Cases</span>
                          <span>40%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-red-600 h-2 rounded-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Surgical Procedures</span>
                          <span>35%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Cancer Treatment</span>
                          <span>25%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: "25%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="volunteers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Volunteer Recognition
                </CardTitle>
                <CardDescription>
                  Celebrating the dedicated volunteers who made this campaign
                  successful
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {selectedCampaign.volunteers}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Volunteers
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        1,240
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Volunteer Hours
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        45
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Team Leaders
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Top Volunteers</h4>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Sarah Adebayo",
                        role: "Team Leader",
                        hours: 120,
                        avatar: "/placeholder.svg?height=40&width=40",
                      },
                      {
                        name: "John Okafor",
                        role: "Registration Coordinator",
                        hours: 98,
                        avatar: "/placeholder.svg?height=40&width=40",
                      },
                      {
                        name: "Fatima Ahmed",
                        role: "Donor Care Specialist",
                        hours: 87,
                        avatar: "/placeholder.svg?height=40&width=40",
                      },
                    ].map((volunteer, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg"
                      >
                        <Avatar>
                          <AvatarImage
                            src={volunteer.avatar || "/placeholder.svg"}
                            alt={volunteer.name}
                          />
                          <AvatarFallback>
                            {volunteer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h5 className="font-medium">{volunteer.name}</h5>
                          <p className="text-sm text-muted-foreground">
                            {volunteer.role}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">
                            {volunteer.hours}h
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Volunteer Hours
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5" />
                    Media Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedCampaign.mediaLinks.map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 border rounded-lg"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Newspaper className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium">
                          News Article {index + 1}
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Media coverage of campaign activities
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Quote className="h-5 w-5" />
                    Testimonials
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedCampaign.testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h5 className="font-medium">{testimonial.name}</h5>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm italic">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Media Dialog */}
      <Dialog
        open={!!selectedMedia}
        onOpenChange={() => setSelectedMedia(null)}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              {selectedMedia?.type === "image"
                ? "Campaign Photo"
                : "Campaign Video"}
            </DialogTitle>
          </DialogHeader>
          {selectedMedia && (
            <div className="relative aspect-video">
              <Image
                src={selectedMedia.src || "/placeholder.svg"}
                alt="Campaign media"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
