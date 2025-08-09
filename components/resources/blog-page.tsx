"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Calendar,
  Clock,
  Heart,
  BookOpen,
  Megaphone,
  Users,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { avatarImage, heroImages } from "@/constants/images";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category:
    | "Health & Wellness"
    | "Education & Awareness"
    | "TBDN Updates"
    | "Community Features";
  author: string;
  authorRole: string;
  authorAvatar: string;
  publishDate: string;
  readTime: number;
  image: string;
  tags: string[];
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Hidden Health Benefits of Regular Blood Donation",
    excerpt:
      "Discover how donating blood regularly can improve your cardiovascular health, reduce cancer risk, and provide valuable health insights.",
    content: `Regular blood donation offers numerous health benefits that many people are unaware of. Beyond the altruistic act of saving lives, donors can experience significant personal health advantages.

**Cardiovascular Health Benefits**
Regular blood donation helps maintain healthy iron levels in your body. Excess iron can contribute to heart disease, and donation helps regulate these levels naturally. Studies have shown that regular donors have a 33% lower risk of cardiovascular disease.

**Cancer Risk Reduction**
High iron levels have been linked to increased cancer risk. By donating blood regularly, you help maintain optimal iron levels, potentially reducing your risk of liver, lung, colon, and throat cancers.

**Free Health Screening**
Every time you donate, you receive a mini health checkup including blood pressure, pulse, temperature, and hemoglobin level checks. Your blood is also tested for various diseases, providing early detection opportunities.

**Calorie Burning**
A single blood donation burns approximately 650 calories as your body works to replenish the donated blood. While this shouldn't be your primary motivation, it's a nice bonus!

**Mental Health Benefits**
The act of helping others releases endorphins, creating a "helper's high" that can improve mood and reduce stress. Many regular donors report feeling a sense of purpose and satisfaction.

**Improved Blood Flow**
Regular donation helps maintain healthy blood viscosity, improving circulation and reducing the risk of blood clots.

Remember to maintain a healthy diet rich in iron, vitamin C, and protein between donations to support your body's recovery process.`,
    category: "Health & Wellness",
    author: "Dr. Kemi Adeyemi",
    authorRole: "Hematologist",
    authorAvatar: avatarImage.image1,
    publishDate: "2024-01-15",
    readTime: 5,
    image: heroImages.slide1,
    tags: [
      "Health Benefits",
      "Cardiovascular",
      "Cancer Prevention",
      "Wellness",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Debunking Common Blood Donation Myths",
    excerpt:
      "Separating fact from fiction about blood donation to help more people make informed decisions about giving blood.",
    content: `Despite the critical need for blood donations, many myths and misconceptions prevent people from donating. Let's address the most common myths with scientific facts.

**Myth 1: Blood donation makes you weak**
Fact: Your body replaces the donated plasma within 24 hours and red blood cells within 4-6 weeks. Most donors feel normal within hours of donating.

**Myth 2: You can catch diseases from donating**
Fact: All equipment is sterile and used only once. There is zero risk of contracting any disease from donating blood.

**Myth 3: Donation is painful**
Fact: You'll feel a brief pinch when the needle is inserted, similar to any injection. The actual donation process is painless.

**Myth 4: You need to be a certain blood type to help**
Fact: All blood types are needed. While O-negative is the universal donor, every blood type can help specific patients.

**Myth 5: Older adults can't donate**
Fact: Healthy adults up to age 65 (and sometimes older with doctor approval) can donate blood.

**Myth 6: You can't donate if you take medication**
Fact: Most medications don't prevent donation. Always inform the medical staff about any medications you're taking.

**Myth 7: Vegetarians can't donate**
Fact: Vegetarians can absolutely donate blood. A plant-based diet doesn't disqualify you from donation.

**Myth 8: You need to fast before donating**
Fact: You should eat a healthy meal before donating to maintain your blood sugar levels.

Understanding these facts can help you make an informed decision about blood donation and potentially save lives in your community.`,
    category: "Education & Awareness",
    author: "Nurse Fatima Hassan",
    authorRole: "Blood Bank Supervisor",
    authorAvatar: avatarImage.image2,
    publishDate: "2024-01-12",
    readTime: 4,
    image: heroImages.slide2,
    tags: ["Myths", "Facts", "Education", "Awareness"],
    featured: false,
  },
  {
    id: "3",
    title: "TBDN Partners with 15 New Hospitals Across Nigeria",
    excerpt:
      "Expanding our reach to serve more communities with life-saving blood supplies through strategic hospital partnerships.",
    content: `We're excited to announce a major expansion of our hospital network with 15 new partnerships across Nigeria, bringing our total to 45 partner hospitals nationwide.

**New Partnership Locations**
Our new partnerships span across six states:
- Lagos: 4 new hospitals
- Abuja: 3 new hospitals  
- Kano: 2 new hospitals
- Port Harcourt: 2 new hospitals
- Ibadan: 2 new hospitals
- Kaduna: 2 new hospitals

**Enhanced Service Delivery**
These partnerships will enable us to:
- Reduce blood delivery times by 40%
- Serve an additional 2 million people
- Establish 8 new collection centers
- Create 150 new jobs in local communities

**Partnership Benefits**
Each partner hospital will receive:
- 24/7 blood supply support
- Emergency delivery services
- Staff training programs
- Quality assurance protocols
- Technology integration support

**Community Impact**
This expansion represents our commitment to ensuring no Nigerian dies from lack of blood. With these new partnerships, we're creating a robust network that can respond quickly to emergencies and routine medical needs.

**Technology Integration**
All partner hospitals will be connected to our digital blood management system, enabling real-time inventory tracking and automated ordering processes.

**Training and Development**
We'll be conducting comprehensive training programs for hospital staff on blood handling, storage, and transfusion best practices.

This expansion wouldn't be possible without the continued support of our donors, volunteers, and community partners. Together, we're building a stronger, more resilient healthcare system for all Nigerians.`,
    category: "TBDN Updates",
    author: "Adebayo Ogundimu",
    authorRole: "Executive Director",
    authorAvatar: avatarImage.image3,
    publishDate: "2024-01-10",
    readTime: 3,
    image: heroImages.slide3,
    tags: ["Partnership", "Expansion", "Hospitals", "Growth"],
    featured: false,
  },
  {
    id: "4",
    title: "Spotlight: Meet Our Volunteer of the Month - Sarah Okafor",
    excerpt:
      "Celebrating Sarah's incredible dedication to organizing blood drives and educating communities about donation.",
    content: `This month, we're proud to spotlight Sarah Okafor, a remarkable volunteer who has been instrumental in organizing community blood drives across Lagos State.

**Sarah's Journey**
Sarah joined TBDN as a volunteer two years ago after her brother needed multiple blood transfusions following a motorcycle accident. What started as a personal mission to give back has evolved into a passionate commitment to community health.

**Outstanding Contributions**
In the past year, Sarah has:
- Organized 12 community blood drives
- Recruited over 300 new donors
- Conducted 25 awareness sessions in schools
- Trained 15 new volunteers
- Helped collect 450 units of blood

**Community Impact**
Sarah's work has been particularly impactful in underserved communities where blood donation awareness was previously low. Her culturally sensitive approach and ability to communicate in local languages has helped break down barriers to donation.

**Personal Motivation**
"When I saw how blood donations saved my brother's life, I knew I had to do something," Sarah explains. "Every person I convince to donate could be saving someone's brother, sister, mother, or father."

**Recognition and Awards**
Sarah recently received the Lagos State Community Health Champion Award for her outstanding volunteer service. She's also been featured in local media for her innovative approaches to donor recruitment.

**Future Plans**
Sarah is currently working on launching a youth ambassador program in secondary schools, training students to become peer educators about blood donation.

**Volunteer Opportunities**
Inspired by Sarah's story? We're always looking for dedicated volunteers to join our team. Whether you have a few hours a month or can commit to regular activities, there's a place for you in our mission.

Sarah's dedication exemplifies the spirit of volunteerism that makes TBDN's work possible. We're grateful for her service and excited to see her continued impact in our communities.`,
    category: "Community Features",
    author: "Michael Adebayo",
    authorRole: "Volunteer Coordinator",
    authorAvatar: avatarImage.image4,
    publishDate: "2024-01-08",
    readTime: 4,
    image: heroImages.slide4,
    tags: ["Volunteer", "Spotlight", "Community", "Recognition"],
    featured: false,
  },
];

export function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesFilter = filter === "All" || post.category === filter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Health & Wellness":
        return Heart;
      case "Education & Awareness":
        return BookOpen;
      case "TBDN Updates":
        return Megaphone;
      case "Community Features":
        return Users;
      default:
        return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Health & Wellness":
        return "bg-red-100 text-red-800";
      case "Education & Awareness":
        return "bg-blue-100 text-blue-800";
      case "TBDN Updates":
        return "bg-green-100 text-green-800";
      case "Community Features":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-3 sm:space-y-4 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">TBDN Blog</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Stay informed with the latest news, health tips, educational content,
          and community stories from the world of blood donation and healthcare.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Featured Article
            </h3>
            <p className="text-sm text-muted-foreground">
              Our latest featured blog post
            </p>
          </div>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category}
                    </Badge>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {featuredPost.readTime} min read
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold leading-tight">
                    {featuredPost.title}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage
                        src={featuredPost.authorAvatar || "/placeholder.svg"}
                        alt={featuredPost.author}
                      />
                      <AvatarFallback>
                        {featuredPost.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm sm:text-base font-medium">
                        {featuredPost.author}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{featuredPost.authorRole}</span>
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(
                            featuredPost.publishDate
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedPost(featuredPost)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Filters and Search */}
      <section className="space-y-4 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-10 text-sm"
              />
            </div>
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-[200px] h-10">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Health & Wellness">
                Health & Wellness
              </SelectItem>
              <SelectItem value="Education & Awareness">
                Education & Awareness
              </SelectItem>
              <SelectItem value="TBDN Updates">TBDN Updates</SelectItem>
              <SelectItem value="Community Features">
                Community Features
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="space-y-4 sm:space-y-6 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-semibold">
            All Articles ({filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "post" : "posts"})
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPosts.map((post) => {
            const CategoryIcon = getCategoryIcon(post.category);
            return (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-video sm:aspect-[4/3]">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <Badge
                      className={`text-xs ${getCategoryColor(post.category)}`}
                    >
                      <CategoryIcon className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3">
                    <h4 className="text-sm sm:text-base font-semibold leading-tight line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                        <AvatarImage
                          src={post.authorAvatar || "/placeholder.svg"}
                          alt={post.author}
                        />
                        <AvatarFallback className="text-xs">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium truncate">
                          {post.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {post.readTime} min read
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent text-sm"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read Post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            Latest Posts ({filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "post" : "posts"})
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const CategoryIcon = getCategoryIcon(post.category);
            return (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>
                      <CategoryIcon className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold leading-tight line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={post.authorAvatar || "/placeholder.svg"}
                          alt={post.author}
                        />
                        <AvatarFallback className="text-xs">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {post.author}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime} min read</span>
                          <span>•</span>
                          <span>
                            {new Date(post.publishDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Posts Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find more blog
                posts.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setFilter("All");
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Blog Post Detail Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className=" h-[90vh] sm:h-[95vh] overflow-y-auto p-4 sm:p-6  my-4 sm:my-6 rounded-lg">
          {selectedPost && (
            <div className="space-y-4 sm:space-y-6 max-w-full overflow-x-hidden">
              <DialogHeader>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <Badge className={getCategoryColor(selectedPost.category)}>
                      {selectedPost.category}
                    </Badge>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {selectedPost.readTime} min read
                    </span>
                  </div>
                  <DialogTitle className="text-xl sm:text-2xl leading-tight break-words">
                    {selectedPost.title}
                  </DialogTitle>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                      <AvatarImage
                        src={selectedPost.authorAvatar || "/placeholder.svg"}
                        alt={selectedPost.author}
                      />
                      <AvatarFallback>
                        {selectedPost.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-sm sm:text-base font-medium truncate">
                        {selectedPost.author}
                      </p>
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
                        <span className="truncate">
                          {selectedPost.authorRole}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 flex-shrink-0" />
                          <span>
                            {new Date(
                              selectedPost.publishDate
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
                <Image
                  src={selectedPost.image || "/placeholder.svg"}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-gray max-w-full overflow-hidden">
                {selectedPost.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h3
                        key={index}
                        className="text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 break-words"
                      >
                        {paragraph.slice(2, -2)}
                      </h3>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed break-words"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-2">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs sm:text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">
                    Share this article
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent text-xs sm:text-sm h-8 sm:h-9"
                    >
                      <Facebook className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span className="truncate">Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent text-xs sm:text-sm h-8 sm:h-9"
                    >
                      <Twitter className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span className="truncate">Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent text-xs sm:text-sm h-8 sm:h-9"
                    >
                      <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span className="truncate">LinkedIn</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent text-xs sm:text-sm h-8 sm:h-9"
                    >
                      <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span className="truncate">Share</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
