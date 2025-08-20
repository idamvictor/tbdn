"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { TabsContent } from "@/components/ui/tabs";
import { heroImages } from "@/constants/images";
// import { he } from "date-fns/locale";

interface MediaItem {
  id: string;
  title: string;
  description: string;
  type: "photo" | "video";
  category: string;
  date: string;
  url: string;
  thumbnail: string;
  tags: string[];
  views?: number;
}

const mediaItems: MediaItem[] = [
  // Photos
  {
    id: "1",
    title: "Lagos Blood Drive 2024",
    description:
      "Community members participating in our largest blood drive event",
    type: "photo",
    category: "Events",
    date: "2024-01-15",
    url: "/placeholder.svg?height=600&width=800",
    thumbnail: heroImages.slide1,
    tags: ["Blood Drive", "Lagos", "Community", "2024"],
    views: 1250,
  },
  {
    id: "2",
    title: "TBDN Team at National Health Conference",
    description:
      "Our team presenting at the National Healthcare Innovation Conference",
    type: "photo",
    category: "Team",
    date: "2024-01-12",
    url: "/placeholder.svg?height=600&width=800",
    thumbnail: heroImages.slide2,
    tags: ["Team", "Conference", "Healthcare", "Innovation"],
    views: 890,
  },
  {
    id: "3",
    title: "Mobile Blood Collection Unit",
    description: "Our new mobile unit serving rural communities",
    type: "photo",
    category: "Equipment",
    date: "2024-01-10",
    url: "/placeholder.svg?height=600&width=800",
    thumbnail: heroImages.slide3,
    tags: ["Mobile Unit", "Rural", "Equipment", "Innovation"],
    views: 2100,
  },
  // Videos
  {
    id: "4",
    title: "Blood Donation Process Explained",
    description: "Step-by-step guide to the blood donation process",
    type: "video",
    category: "Educational",
    date: "2024-01-08",
    url: "https://youtube.com/watch?v=example1",
    thumbnail: heroImages.slide4,
    tags: ["Education", "Process", "Tutorial", "Donors"],
    views: 15000,
  },
  {
    id: "5",
    title: "Donor Testimonials - Lives Saved",
    description: "Heartwarming stories from blood donors and recipients",
    type: "video",
    category: "Testimonials",
    date: "2024-01-05",
    url: "https://youtube.com/watch?v=example2",
    thumbnail: heroImages.slide5,
    tags: ["Testimonials", "Stories", "Impact", "Community"],
    views: 8500,
  },
];

export function MediaCenterPage() {
  // const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
  const [filter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("photos");

  const filteredItems = mediaItems.filter((item) => {
    const matchesTab =
      (activeTab === "photos" && item.type === "photo") ||
      (activeTab === "videos" && item.type === "video");
    const matchesFilter = filter === "All" || item.category === filter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesTab && matchesFilter && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "photo":
        return Camera;
      case "video":
        return Video;
      default:
        return Camera;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "photo":
        return "bg-blue-100 text-blue-800";
      case "video":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-3 sm:space-y-4 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Media Center</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Access our comprehensive media library including photos, videos, news
          coverage, and press releases documenting our impact and activities.
        </p>
      </section>

      {/* Media Tabs */}
      <section className="px-4 sm:px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="relative w-full">
            <TabsList className="flex w-full overflow-x-auto scrollbar-none -mb-px space-x-2 sm:space-x-4">
              <TabsTrigger
                value="photos"
                className="flex-shrink-0 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
              >
                <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                Photos
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="flex-shrink-0 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
              >
                <Video className="h-3 w-3 sm:h-4 sm:w-4" />
                Videos
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-10 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Photos Tab Content */}
          <TabsContent value="photos" className="mt-4 sm:mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredItems.map((item) => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative aspect-video sm:aspect-[4/3]">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                        <Badge className={`text-xs ${getTypeColor(item.type)}`}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          {item.type}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <div className="space-y-2">
                        <h4 className="text-sm sm:text-base font-semibold leading-tight line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                          <span>{item.views?.toLocaleString()} views</span>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full bg-transparent text-xs sm:text-sm h-8 sm:h-9"
                          size="sm"
                        >
                          View Photo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Photos Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms.
                </p>
              </div>
            )}
          </TabsContent>

          {/* Videos Tab Content */}
          <TabsContent value="videos" className="mt-4 sm:mt-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredItems.map((item) => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Video className="h-4 w-4 sm:h-6 sm:w-6 text-red-600 ml-0.5 sm:ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                        <Badge className={`text-xs ${getTypeColor(item.type)}`}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          Video
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <div className="space-y-2">
                        <h4 className="text-sm sm:text-base font-semibold leading-tight line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                          <span>{item.views?.toLocaleString()} views</span>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full bg-transparent text-xs sm:text-sm h-8 sm:h-9"
                          size="sm"
                        >
                          Watch Video
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Videos Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
