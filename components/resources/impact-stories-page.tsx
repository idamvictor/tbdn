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
  Heart,
  User,
  Stethoscope,
  Users,
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Donor" | "Beneficiary" | "Healthcare Worker" | "Family";
  author: string;
  location: string;
  date: string;
  image: string;
  avatar: string;
  featured: boolean;
  tags: string[];
  readTime: number;
}

const stories: Story[] = [
  {
    id: "1",
    title: "From Fear to Hope: My First Blood Donation Experience",
    excerpt:
      "Sarah shares her journey from being afraid of needles to becoming a regular blood donor who has saved over 30 lives.",
    content: `I never thought I'd be writing about blood donation, especially considering my lifelong fear of needles. But here I am, three years and 12 donations later, sharing my story of transformation.

It all started when my colleague collapsed at work due to severe anemia. Watching her struggle and seeing how blood transfusions literally brought her back to life was a wake-up call. I realized that my fear was nothing compared to someone's need for life-saving blood.

My first donation was terrifying. I was shaking, sweating, and almost backed out twice. But the nurses at TBDN were incredibly patient and supportive. They talked me through every step, distracted me with conversation, and made sure I was comfortable throughout the process.

The actual donation took only about 10 minutes, and I felt an incredible sense of accomplishment afterward. Knowing that my blood could save up to three lives gave me a purpose I'd never felt before.

Now, I donate every three months religiously. I've brought friends and family members with me, and we've created a small community of regular donors. My fear of needles hasn't completely disappeared, but it's been overshadowed by the joy of giving life.

To anyone hesitant about donating: your fear is valid, but don't let it stop you from potentially saving lives. The staff at TBDN will take care of you, and the feeling of making a difference is indescribable.`,
    category: "Donor",
    author: "Sarah Adebayo",
    location: "Lagos, Nigeria",
    date: "2024-01-10",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    featured: true,
    tags: ["First Time Donor", "Fear", "Inspiration", "Regular Donor"],
    readTime: 4,
  },
  {
    id: "2",
    title: "A Mother's Gratitude: How Blood Donors Saved My Son",
    excerpt:
      "When 8-year-old Michael was diagnosed with leukemia, blood donations became his lifeline during treatment.",
    content: `When my son Michael was diagnosed with acute lymphoblastic leukemia at age 8, our world turned upside down. The doctors explained that he would need multiple blood transfusions throughout his treatment, and that's when I truly understood the importance of blood donation.

Over the course of his 2-year treatment, Michael received over 40 units of blood and platelets. Each transfusion was a gift from anonymous donors who had taken time out of their day to give the gift of life.

I remember sitting by his bedside during one particularly difficult night when his blood count was dangerously low. The nurse came in with a bag of red blood cells, and I watched as color slowly returned to my son's pale cheeks. In that moment, I realized that somewhere out there, a stranger had saved my child's life.

Michael is now 12 years old and has been in remission for two years. He's back to playing football, excelling in school, and living the normal life of a pre-teen. None of this would have been possible without the generosity of blood donors.

Our family now organizes an annual blood drive in Michael's honor. We've collected over 200 units of blood in the past three years, and we're not stopping anytime soon. We want to pay forward the kindness that was shown to us during our darkest hours.

To every blood donor out there: you are heroes. You may never meet the people whose lives you save, but please know that families like ours are forever grateful for your selfless act of giving.`,
    category: "Beneficiary",
    author: "Mrs. Funmi Okafor",
    location: "Abuja, Nigeria",
    date: "2024-01-08",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    featured: false,
    tags: ["Leukemia", "Child Patient", "Family", "Gratitude"],
    readTime: 5,
  },
  {
    id: "3",
    title: "On the Front Lines: A Doctor's Perspective on Blood Shortages",
    excerpt:
      "Dr. Ahmed shares his experiences in the emergency room and how blood shortages affect patient care daily.",
    content: `As an emergency room physician at Lagos University Teaching Hospital, I witness the critical importance of blood availability every single day. In my 15 years of practice, I've seen how the difference between life and death often comes down to having enough blood in our blood bank.

Last month, we had a young mother come in after a severe car accident. She was losing blood rapidly, and we needed to perform emergency surgery immediately. Thanks to TBDN's consistent supply and the generosity of donors, we had the blood types we needed readily available. She made a full recovery and went home to her three children.

But I've also experienced the heartbreak of blood shortages. There have been times when we've had to delay surgeries, transfer patients to other hospitals, or watch helplessly as someone's condition deteriorated while we waited for compatible blood to arrive.

The most challenging times are during holidays and vacation periods when donations typically drop. People don't realize that medical emergencies don't take breaks. Accidents, surgeries, and medical conditions requiring blood transfusions happen 365 days a year.

What many people don't understand is that blood has a limited shelf life. Red blood cells can only be stored for 42 days, platelets for just 5 days. This means we need a constant, steady supply of donors to maintain adequate levels.

I've seen the immediate impact of blood donation campaigns. When TBDN organizes drives and raises awareness, we notice the difference in our blood bank within days. More available blood means we can help more patients, perform more life-saving surgeries, and provide better care overall.

To potential donors reading this: your donation directly impacts our ability to save lives. Every unit matters, and every donor is a hero in our eyes.`,
    category: "Healthcare Worker",
    author: "Dr. Ahmed Musa",
    location: "Lagos, Nigeria",
    date: "2024-01-05",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    featured: false,
    tags: ["Emergency Medicine", "Blood Shortage", "Healthcare", "Doctor"],
    readTime: 6,
  },
  {
    id: "4",
    title: "United in Crisis: How Our Community Came Together",
    excerpt:
      "The Adeyemi family's story of how their community rallied to support them during a medical emergency.",
    content: `When our father suffered a massive heart attack and needed emergency surgery, we never expected our small community in Kano to come together the way they did.

Papa needed multiple units of blood for his surgery, but the hospital's blood bank was running low on his blood type (O-negative). The doctors told us we had maybe 6 hours to find compatible donors before his condition would become critical.

That's when our neighbor, Mallam Ibrahim, took action. He started making phone calls, posting on social media, and going door-to-door in our neighborhood. Within 2 hours, we had a line of people outside the hospital waiting to get tested for compatibility.

People came from everywhere - our mosque community, Papa's former colleagues, neighbors we barely knew, even strangers who had heard about our situation through social media. In total, 47 people showed up to get tested, and 8 were compatible matches.

But the most amazing part was that even those who weren't compatible stayed to support us. They brought food for our family, helped coordinate the donors, and provided emotional support during those terrifying hours.

Papa's surgery was successful, and he made a full recovery. But the experience taught our entire family about the power of community and the importance of blood donation. We learned that in times of crisis, people are willing to literally give their blood to help a neighbor.

Our family now organizes quarterly blood drives in our community. We've partnered with TBDN to make it easy for people to donate regularly, not just during emergencies. We want to ensure that no other family has to go through the panic we experienced when blood isn't readily available.

The bonds formed during Papa's crisis have made our community stronger. We now have a network of regular donors who support each other, and we've seen this spirit of giving extend beyond blood donation to other community needs.`,
    category: "Family",
    author: "Amina Adeyemi",
    location: "Kano, Nigeria",
    date: "2024-01-03",
    image: "/placeholder.svg?height=400&width=600",
    avatar: "/placeholder.svg?height=60&width=60",
    featured: false,
    tags: ["Community", "Emergency", "Family", "Heart Surgery"],
    readTime: 5,
  },
];

export function ImpactStoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const featuredStory = stories.find((story) => story.featured);
  const regularStories = stories.filter((story) => !story.featured);

  const filteredStories = regularStories.filter((story) => {
    const matchesFilter = filter === "All" || story.category === filter;
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Donor":
        return Heart;
      case "Beneficiary":
        return User;
      case "Healthcare Worker":
        return Stethoscope;
      case "Family":
        return Users;
      default:
        return Heart;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Donor":
        return "bg-red-100 text-red-800";
      case "Beneficiary":
        return "bg-blue-100 text-blue-800";
      case "Healthcare Worker":
        return "bg-green-100 text-green-800";
      case "Family":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleShare = (platform: string, story: Story) => {
    const url = `${window.location.origin}/resources/stories/${story.id}`;
    const text = `${story.title} - ${story.excerpt}`;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Impact Stories</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real stories from real people whose lives have been touched by blood
          donation. These powerful narratives showcase the human impact of
          giving and receiving the gift of life.
        </p>
      </section>

      {/* Featured Story */}
      {featuredStory && (
        <section className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Featured Story</h3>
            <p className="text-muted-foreground">
              This week&apos;s highlighted impact story
            </p>
          </div>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={featuredStory.image || "/placeholder.svg"}
                  alt={featuredStory.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className={getCategoryColor(featuredStory.category)}>
                      {featuredStory.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {featuredStory.readTime} min read
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold leading-tight">
                    {featuredStory.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {featuredStory.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={featuredStory.avatar || "/placeholder.svg"}
                        alt={featuredStory.author}
                      />
                      <AvatarFallback>
                        {featuredStory.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{featuredStory.author}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{featuredStory.location}</span>
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(featuredStory.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedStory(featuredStory)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Read Full Story
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Filters and Search */}
      <section className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Donor">Donor Stories</SelectItem>
              <SelectItem value="Beneficiary">Beneficiary Stories</SelectItem>
              <SelectItem value="Healthcare Worker">
                Healthcare Worker Stories
              </SelectItem>
              <SelectItem value="Family">Family Stories</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            All Stories ({filteredStories.length}{" "}
            {filteredStories.length === 1 ? "story" : "stories"})
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => {
            const CategoryIcon = getCategoryIcon(story.category);
            return (
              <Card
                key={story.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(story.category)}>
                      <CategoryIcon className="h-3 w-3 mr-1" />
                      {story.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold leading-tight line-clamp-2">
                      {story.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={story.avatar || "/placeholder.svg"}
                          alt={story.author}
                        />
                        <AvatarFallback className="text-xs">
                          {story.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {story.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {story.readTime} min read
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {story.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {story.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{story.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => setSelectedStory(story)}
                    >
                      Read Story
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredStories.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Stories Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find more stories.
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

      {/* Story Detail Modal */}
      <Dialog
        open={!!selectedStory}
        onOpenChange={() => setSelectedStory(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedStory && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className={getCategoryColor(selectedStory.category)}>
                      {selectedStory.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {selectedStory.readTime} min read
                    </span>
                  </div>
                  <DialogTitle className="text-2xl leading-tight">
                    {selectedStory.title}
                  </DialogTitle>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={selectedStory.avatar || "/placeholder.svg"}
                        alt={selectedStory.author}
                      />
                      <AvatarFallback>
                        {selectedStory.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedStory.author}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{selectedStory.location}</span>
                        <span>•</span>
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(selectedStory.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
                <Image
                  src={selectedStory.image || "/placeholder.svg"}
                  alt={selectedStory.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-gray max-w-none">
                {selectedStory.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Share this story</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("facebook", selectedStory)}
                      className="bg-transparent"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("twitter", selectedStory)}
                      className="bg-transparent"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("linkedin", selectedStory)}
                      className="bg-transparent"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare("copy", selectedStory)}
                      className="bg-transparent"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Link
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
