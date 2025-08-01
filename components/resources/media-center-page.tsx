"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Camera,
  Video,
  Search,
  Newspaper,
  FileText,
  Youtube,
} from "lucide-react";
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
  type: "photo" | "video" | "news" | "press-release";
  category: string;
  date: string;
  url: string;
  thumbnail: string;
  tags: string[];
  views?: number;
  downloads?: number;
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
  // News Articles
  {
    id: "6",
    title: "TBDN Receives National Healthcare Excellence Award",
    description:
      "Recognition for outstanding contribution to healthcare in Nigeria",
    type: "news",
    category: "Awards",
    date: "2024-01-03",
    url: "https://example-news.com/tbdn-award",
    thumbnail: heroImages.slide1,
    tags: ["Award", "Recognition", "Excellence", "Healthcare"],
    views: 3200,
  },
  {
    id: "7",
    title: "New Partnership with Lagos State Government",
    description: "TBDN signs MOU with Lagos State for expanded blood services",
    type: "news",
    category: "Partnerships",
    date: "2024-01-01",
    url: "https://example-news.com/lagos-partnership",
    thumbnail: heroImages.slide2,
    tags: ["Partnership", "Government", "Lagos", "Expansion"],
    views: 2800,
  },
  // Press Releases
  {
    id: "8",
    title: "TBDN Launches Mobile App for Donors",
    description:
      "New mobile application makes blood donation scheduling easier",
    type: "press-release",
    category: "Technology",
    date: "2023-12-28",
    url: "/press-releases/mobile-app-launch.pdf",
    thumbnail: heroImages.slide3,
    tags: ["Mobile App", "Technology", "Innovation", "Donors"],
    downloads: 450,
  },
];

const youtubePlaylist = [
  {
    id: "yt1",
    title: "Blood Donation Awareness Campaign 2024",
    description: "Complete playlist of our awareness campaign videos",
    videoCount: 12,
    thumbnail: heroImages.slide4,
    playlistId: "PLexample1",
  },
  {
    id: "yt2",
    title: "Educational Series: Understanding Blood Types",
    description:
      "Educational videos explaining different blood types and compatibility",
    videoCount: 8,
    thumbnail: heroImages.slide5,
    playlistId: "PLexample2",
  },
  {
    id: "yt3",
    title: "Donor Stories and Testimonials",
    description: "Real stories from donors and recipients",
    videoCount: 15,
    thumbnail: heroImages.slide1,
    playlistId: "PLexample3",
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
      (activeTab === "videos" && item.type === "video") ||
      (activeTab === "news" &&
        (item.type === "news" || item.type === "press-release"));
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
      case "news":
        return Newspaper;
      case "press-release":
        return FileText;
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
      case "news":
        return "bg-green-100 text-green-800";
      case "press-release":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Media Center</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Access our comprehensive media library including photos, videos, news
          coverage, and press releases documenting our impact and activities.
        </p>
      </section>

      {/* Media Tabs */}
      <section>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              Photos
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="youtube" className="flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              YouTube
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              Media Coverage
            </TabsTrigger>
          </TabsList>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Photos Tab Content */}
          <TabsContent value="photos" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getTypeColor(item.type)}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          {item.type}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold leading-tight line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
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
                          className="w-full bg-transparent"
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
          <TabsContent value="videos" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <Video className="h-6 w-6 text-red-600 ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className={getTypeColor(item.type)}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          Video
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold leading-tight line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
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
                          className="w-full bg-transparent"
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

          {/* YouTube Tab Content */}
          <TabsContent value="youtube" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubePlaylist.map((playlist) => (
                <Card
                  key={playlist.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={playlist.thumbnail || "/placeholder.svg"}
                      alt={playlist.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Youtube className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-100 text-red-800">
                        <Youtube className="h-3 w-3 mr-1" />
                        Playlist
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold leading-tight line-clamp-2">
                        {playlist.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {playlist.description}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {playlist.videoCount} videos
                      </div>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        size="sm"
                      >
                        View Playlist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* News/Media Coverage Tab Content */}
          <TabsContent value="news" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const TypeIcon = getTypeIcon(item.type);
                return (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getTypeColor(item.type)}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          {item.type === "press-release"
                            ? "Press Release"
                            : "News"}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold leading-tight line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                          <span>
                            {item.views?.toLocaleString() ||
                              item.downloads?.toLocaleString()}{" "}
                            {item.views ? "views" : "downloads"}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                          size="sm"
                        >
                          {item.type === "press-release"
                            ? "Download"
                            : "Read Article"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No Media Coverage Found
                </h3>
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
