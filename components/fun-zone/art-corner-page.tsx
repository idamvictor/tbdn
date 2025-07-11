"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import {
  Palette,
  Heart,
  Upload,
  Star,
  Eye,
  ThumbsUp,
  Share2,
  Trophy,
  Calendar,
  User,
  Brush,
  Download,
  Award,
  Camera,
  Pencil,
} from "lucide-react"

interface Artwork {
  id: string
  title: string
  description: string
  artist: string
  artistAvatar: string
  category: "Digital Art" | "Traditional Art" | "Photography" | "Mixed Media"
  theme: string
  uploadDate: string
  views: number
  likes: number
  image: string
  featured: boolean
  contestEntry: boolean
  tags: string[]
}

interface Contest {
  id: string
  title: string
  theme: string
  description: string
  startDate: string
  endDate: string
  status: "Active" | "Upcoming" | "Ended"
  prize: string
  submissions: number
  maxSubmissions: number
  guidelines: string[]
  judgingCriteria: string[]
}

interface Artist {
  id: string
  name: string
  avatar: string
  bio: string
  artworks: number
  followers: number
  featured: boolean
  specialties: string[]
}

const artworks: Artwork[] = [
  {
    id: "1",
    title: "Unity in Giving",
    description:
      "A digital illustration showing diverse hands coming together to form a heart, symbolizing unity in blood donation",
    artist: "Sarah Adebayo",
    artistAvatar: "/placeholder.svg?height=40&width=40",
    category: "Digital Art",
    theme: "Community Unity",
    uploadDate: "2024-01-15",
    views: 1250,
    likes: 89,
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    contestEntry: false,
    tags: ["Unity", "Community", "Digital", "Hearts"],
  },
  {
    id: "2",
    title: "The Gift of Life",
    description: "Traditional watercolor painting depicting the journey of blood from donor to recipient",
    artist: "Michael Chen",
    artistAvatar: "/placeholder.svg?height=40&width=40",
    category: "Traditional Art",
    theme: "Life Journey",
    uploadDate: "2024-01-12",
    views: 890,
    likes: 67,
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    contestEntry: true,
    tags: ["Watercolor", "Journey", "Traditional", "Life"],
  },
  {
    id: "3",
    title: "Heroes Among Us",
    description: "Photography series capturing the emotions and stories of blood donors",
    artist: "Fatima Hassan",
    artistAvatar: "/placeholder.svg?height=40&width=40",
    category: "Photography",
    theme: "Human Stories",
    uploadDate: "2024-01-10",
    views: 2100,
    likes: 156,
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    contestEntry: false,
    tags: ["Photography", "Portrait", "Stories", "Heroes"],
  },
  {
    id: "4",
    title: "Blood Drop Mandala",
    description: "Intricate mandala design incorporating blood drop motifs and healing symbols",
    artist: "Aisha Okafor",
    artistAvatar: "/placeholder.svg?height=40&width=40",
    category: "Digital Art",
    theme: "Healing Symbols",
    uploadDate: "2024-01-08",
    views: 756,
    likes: 92,
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    contestEntry: true,
    tags: ["Mandala", "Symbols", "Digital", "Healing"],
  },
]

const contests: Contest[] = [
  {
    id: "1",
    title: "Blood Heroes Art Challenge",
    theme: "Celebrating Blood Donors",
    description: "Create artwork that celebrates the everyday heroes who donate blood and save lives",
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    status: "Active",
    prize: "₦100,000 + Art Supplies",
    submissions: 47,
    maxSubmissions: 100,
    guidelines: [
      "Original artwork only",
      "Blood donation theme required",
      "Maximum file size: 10MB",
      "High resolution (300 DPI minimum)",
    ],
    judgingCriteria: [
      "Creativity and originality (30%)",
      "Technical skill (25%)",
      "Theme relevance (25%)",
      "Emotional impact (20%)",
    ],
  },
  {
    id: "2",
    title: "Future of Healthcare",
    theme: "Innovation in Medicine",
    description: "Envision the future of healthcare and blood donation through artistic expression",
    startDate: "2024-02-01",
    endDate: "2024-02-28",
    status: "Upcoming",
    prize: "₦75,000 + Exhibition Opportunity",
    submissions: 0,
    maxSubmissions: 75,
    guidelines: [
      "Digital or traditional media accepted",
      "Future-focused theme",
      "Include artist statement",
      "Submit in multiple formats",
    ],
    judgingCriteria: [
      "Innovation and vision (35%)",
      "Artistic execution (30%)",
      "Concept clarity (20%)",
      "Technical proficiency (15%)",
    ],
  },
]

const featuredArtists: Artist[] = [
  {
    id: "1",
    name: "Sarah Adebayo",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Digital artist passionate about healthcare advocacy through visual storytelling",
    artworks: 23,
    followers: 1250,
    featured: true,
    specialties: ["Digital Illustration", "Character Design", "Medical Art"],
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Traditional artist exploring the intersection of medicine and human emotion",
    artworks: 18,
    followers: 890,
    featured: true,
    specialties: ["Watercolor", "Oil Painting", "Portrait"],
  },
  {
    id: "3",
    name: "Fatima Hassan",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Documentary photographer capturing stories of hope and healing",
    artworks: 31,
    followers: 2100,
    featured: true,
    specialties: ["Documentary Photography", "Portrait", "Photojournalism"],
  },
]

export function ArtCornerPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [filter, setFilter] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState("")

  const featuredArtwork = artworks.find((artwork) => artwork.featured)
  const regularArtworks = artworks.filter((artwork) => !artwork.featured)

  const filteredArtworks = regularArtworks.filter((artwork) => {
    const matchesFilter = filter === "All" || artwork.category === filter
    const matchesSearch =
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Digital Art":
        return Palette
      case "Traditional Art":
        return Brush
      case "Photography":
        return Camera
      case "Mixed Media":
        return Pencil
      default:
        return Palette
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Digital Art":
        return "bg-purple-100 text-purple-800"
      case "Traditional Art":
        return "bg-orange-100 text-orange-800"
      case "Photography":
        return "bg-blue-100 text-blue-800"
      case "Mixed Media":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getContestStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Upcoming":
        return "bg-blue-100 text-blue-800"
      case "Ended":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Art Corner</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore creative expressions of blood donation and healthcare through community art. Share your artwork,
          participate in contests, and connect with fellow artists.
        </p>
      </section>

      {/* Art Tabs */}
      <section>
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="contests" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Contests
            </TabsTrigger>
            <TabsTrigger value="artists" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Artists
            </TabsTrigger>
            <TabsTrigger value="create" className="flex items-center gap-2">
              <Brush className="h-4 w-4" />
              Create
            </TabsTrigger>
          </TabsList>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-6">
            {/* Featured Artwork */}
            {featuredArtwork && (
              <section className="space-y-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Featured Artwork</h3>
                  <p className="text-muted-foreground">This week's highlighted creation</p>
                </div>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative aspect-[4/3] lg:aspect-auto">
                      <Image
                        src={featuredArtwork.image || "/placeholder.svg"}
                        alt={featuredArtwork.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Badge className={getCategoryColor(featuredArtwork.category)}>
                            {featuredArtwork.category}
                          </Badge>
                          <Badge variant="secondary">Featured</Badge>
                        </div>
                        <h4 className="text-2xl font-bold leading-tight">{featuredArtwork.title}</h4>
                        <p className="text-muted-foreground">{featuredArtwork.description}</p>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={featuredArtwork.artistAvatar || "/placeholder.svg"}
                              alt={featuredArtwork.artist}
                            />
                            <AvatarFallback>
                              {featuredArtwork.artist
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{featuredArtwork.artist}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {featuredArtwork.views.toLocaleString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-3 w-3" />
                                {featuredArtwork.likes}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => setSelectedArtwork(featuredArtwork)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            View Full Size
                          </Button>
                          <Button variant="outline" className="bg-transparent">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {/* Search and Filter */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search artworks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  <SelectItem value="Digital Art">Digital Art</SelectItem>
                  <SelectItem value="Traditional Art">Traditional Art</SelectItem>
                  <SelectItem value="Photography">Photography</SelectItem>
                  <SelectItem value="Mixed Media">Mixed Media</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Artworks Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtworks.map((artwork) => {
                const CategoryIcon = getCategoryIcon(artwork.category)
                return (
                  <Card key={artwork.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={artwork.image || "/placeholder.svg"}
                        alt={artwork.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(artwork.category)}>
                          <CategoryIcon className="h-3 w-3 mr-1" />
                          {artwork.category}
                        </Badge>
                      </div>
                      {artwork.contestEntry && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-100 text-yellow-800">
                            <Trophy className="h-3 w-3 mr-1" />
                            Contest
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold leading-tight line-clamp-2">{artwork.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{artwork.description}</p>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={artwork.artistAvatar || "/placeholder.svg"} alt={artwork.artist} />
                            <AvatarFallback className="text-xs">
                              {artwork.artist
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{artwork.artist}</p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {artwork.views.toLocaleString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-3 w-3" />
                                {artwork.likes}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {artwork.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {artwork.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{artwork.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="flex-1 bg-transparent"
                            onClick={() => setSelectedArtwork(artwork)}
                          >
                            View
                          </Button>
                          <Button variant="outline" size="icon" className="bg-transparent">
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Contests Tab */}
          <TabsContent value="contests" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {contests.map((contest) => (
                <Card key={contest.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{contest.title}</CardTitle>
                        <CardDescription className="mt-2">{contest.description}</CardDescription>
                      </div>
                      <Badge className={getContestStatusColor(contest.status)}>{contest.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Theme:</span>
                        <div className="font-medium">{contest.theme}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Prize:</span>
                        <div className="font-medium">{contest.prize}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deadline:</span>
                        <div className="font-medium">{new Date(contest.endDate).toLocaleDateString()}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Submissions:</span>
                        <div className="font-medium">
                          {contest.submissions}/{contest.maxSubmissions}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Submission Progress</span>
                        <span>{Math.round((contest.submissions / contest.maxSubmissions) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-600 h-2 rounded-full"
                          style={{ width: `${(contest.submissions / contest.maxSubmissions) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">Guidelines</h5>
                      <ul className="space-y-1">
                        {contest.guidelines.slice(0, 2).map((guideline, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{guideline}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700" disabled={contest.status !== "Active"}>
                        {contest.status === "Active"
                          ? "Submit Entry"
                          : contest.status === "Upcoming"
                            ? "Coming Soon"
                            : "Contest Ended"}
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="bg-transparent">
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{contest.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p>{contest.description}</p>
                            <div>
                              <h4 className="font-semibold mb-2">Submission Guidelines</h4>
                              <ul className="space-y-1">
                                {contest.guidelines.map((guideline, index) => (
                                  <li key={index} className="flex items-start gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{guideline}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Judging Criteria</h4>
                              <ul className="space-y-1">
                                {contest.judgingCriteria.map((criteria, index) => (
                                  <li key={index} className="flex items-start gap-2 text-sm">
                                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <span>{criteria}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Artists Tab */}
          <TabsContent value="artists" className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Featured Artists</h3>
              <p className="text-muted-foreground">Meet the talented artists in our community</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArtists.map((artist) => (
                <Card key={artist.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col items-center space-y-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={artist.avatar || "/placeholder.svg"} alt={artist.name} />
                        <AvatarFallback className="text-lg">
                          {artist.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl">{artist.name}</CardTitle>
                        {artist.featured && (
                          <Badge className="mt-2 bg-yellow-100 text-yellow-800">
                            <Award className="h-3 w-3 mr-1" />
                            Featured Artist
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{artist.bio}</p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold">{artist.artworks}</div>
                        <div className="text-xs text-muted-foreground">Artworks</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">{artist.followers.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">Followers</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-sm">Specialties</h5>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {artist.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Create Tab */}
          <TabsContent value="create" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Artwork */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Submit Your Artwork
                  </CardTitle>
                  <CardDescription>Share your blood donation themed artwork with the community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="artwork-title">Title</Label>
                    <Input id="artwork-title" placeholder="Enter artwork title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="artwork-description">Description</Label>
                    <Textarea id="artwork-description" placeholder="Describe your artwork" rows={3} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="artwork-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="digital">Digital Art</SelectItem>
                        <SelectItem value="traditional">Traditional Art</SelectItem>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="mixed">Mixed Media</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="artwork-tags">Tags</Label>
                    <Input id="artwork-tags" placeholder="Enter tags separated by commas" />
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drag and drop your artwork here, or click to browse
                    </p>
                    <Button variant="outline" className="bg-transparent">
                      Choose File
                    </Button>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Submit Artwork</Button>
                </CardContent>
              </Card>

              {/* Digital Art Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brush className="h-5 w-5" />
                    Digital Art Tools
                  </CardTitle>
                  <CardDescription>Create artwork directly in your browser</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-square bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Palette className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-4">Digital canvas coming soon!</p>
                      <Button variant="outline" className="bg-transparent">
                        Launch Canvas
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold">Available Templates</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Blood Drop
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Heart Design
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Donor Badge
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Unity Symbol
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download Templates
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Submission Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Submission Guidelines</CardTitle>
                <CardDescription>Please review these guidelines before submitting your artwork</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Content Requirements</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <Heart className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Must relate to blood donation or healthcare themes</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Heart className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Original artwork only - no copyrighted material</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Heart className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Appropriate for all ages</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Heart className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>High quality and clear resolution</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Technical Specifications</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <Heart className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Maximum file size: 10MB</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Heart className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Accepted formats: JPG, PNG, GIF</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Heart className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>Minimum resolution: 1200x800 pixels</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Heart className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>RGB color mode preferred</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Artwork Detail Modal */}
      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArtwork && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className={getCategoryColor(selectedArtwork.category)}>{selectedArtwork.category}</Badge>
                    {selectedArtwork.contestEntry && (
                      <Badge className="bg-yellow-100 text-yellow-800">Contest Entry</Badge>
                    )}
                  </div>
                  <DialogTitle className="text-2xl leading-tight">{selectedArtwork.title}</DialogTitle>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={selectedArtwork.artistAvatar || "/placeholder.svg"}
                        alt={selectedArtwork.artist}
                      />
                      <AvatarFallback>
                        {selectedArtwork.artist
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedArtwork.artist}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(selectedArtwork.uploadDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {selectedArtwork.views.toLocaleString()} views
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          {selectedArtwork.likes} likes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={selectedArtwork.image || "/placeholder.svg"}
                  alt={selectedArtwork.title}
                  fill
                  className="object-contain bg-gray-50"
                />
              </div>

              <div>
                <p className="text-muted-foreground">{selectedArtwork.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArtwork.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
