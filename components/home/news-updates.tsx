"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  ArrowRight,
  ExternalLink,
  Award,
  Newspaper,
  Megaphone,
} from "lucide-react";
import Image from "next/image";
import { heroImages } from "@/constants/images"; // Import the new constants file

const blogPosts = [
  {
    id: 1,
    title: "5 Health Benefits of Regular Blood Donation You Didn't Know",
    excerpt:
      "Discover the surprising health benefits that come with being a regular blood donor, from improved cardiovascular health to...",
    image: heroImages.slide1,
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Health & Wellness",
    author: "Dr. Sarah Johnson",
  },
  {
    id: 2,
    title: "Breaking Myths: Common Blood Donation Misconceptions",
    excerpt:
      "Let's debunk the most common myths about blood donation and provide you with facts that might surprise you...",
    image: heroImages.slide2,
    date: "March 8, 2024",
    readTime: "6 min read",
    category: "Education",
    author: "Michael Adebayo",
  },
  {
    id: 3,
    title: "How Technology is Revolutionizing Blood Donation",
    excerpt:
      "From mobile apps to AI-powered matching systems, explore how technology is making blood donation more efficient...",
    image: heroImages.slide3,
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "Innovation",
    author: "Tech Team",
  },
];

const mediaMentions = [
  {
    id: 1,
    title: "TBDN Featured in National Health Magazine",
    source: "Health Today Nigeria",
    date: "March 12, 2024",
    type: "media",
    link: "#",
  },
  {
    id: 2,
    title: "CEO Interview on Blood Donation Awareness",
    source: "Lagos Radio 103.5 FM",
    date: "March 9, 2024",
    type: "media",
    link: "#",
  },
];

const achievements = [
  {
    id: 1,
    title: "TBDN Receives Excellence Award from Ministry of Health",
    description:
      "Recognized for outstanding contribution to public health and blood donation awareness",
    date: "March 1, 2024",
    type: "achievement",
  },
  {
    id: 2,
    title: "Milestone: 100,000 Lives Saved Through Our Network",
    description:
      "We've officially reached 100,000 lives saved through blood donations facilitated by TBDN",
    date: "February 28, 2024",
    type: "achievement",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardHoverVariants = {
  hover: {
    scale: 1.02,
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const linkHoverVariants = {
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
    },
  },
};

export function NewsUpdates() {
  return (
    <motion.section
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Section Header */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              News & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest blog posts, media coverage, and
              organizational achievements
            </p>
          </motion.div>

          {/* Latest Blog Posts */}
          <div className="space-y-8">
            <motion.div
              className="flex items-center justify-between"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <Newspaper className="h-6 w-6 mr-2 text-red-600" />
                Latest Blog Posts
              </h3>
              <Button
                variant="outline"
                className="hidden sm:flex group bg-transparent"
              >
                View All Posts
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="h-full"
                  >
                    <Card className="group border border-gray-100 rounded-xl overflow-hidden h-full p-0">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            priority={true}
                          />
                          <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                            {post.category}
                          </Badge>
                        </div>
                        <div className="p-6 space-y-3">
                          <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </div>
                            <span>{post.readTime}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-gray-600 text-sm line-clamp-3">
                            {post.excerpt}
                          </p>
                          <motion.div
                            className="flex items-center justify-between pt-2"
                            variants={linkHoverVariants}
                          >
                            <span className="text-sm text-gray-500">
                              By {post.author}
                            </span>
                            <ArrowRight className="h-4 w-4 text-red-600 group-hover:translate-x-1 transition-transform" />
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="text-center sm:hidden"
              variants={itemVariants}
            >
              <Button variant="outline" className="group bg-transparent">
                View All Posts
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Media Mentions & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Media Mentions */}
            <div className="space-y-6">
              <motion.h3
                className="text-2xl font-bold text-gray-900 flex items-center"
                variants={itemVariants}
              >
                <Megaphone className="h-6 w-6 mr-2 text-blue-600" />
                Media Mentions
              </motion.h3>
              <motion.div className="space-y-4" variants={containerVariants}>
                {mediaMentions.map((mention) => (
                  <motion.div
                    key={mention.id}
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <motion.div
                      variants={cardHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="h-full"
                    >
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 space-y-2">
                              <h4 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                {mention.title}
                              </h4>
                              <div className="flex items-center text-sm text-gray-500 space-x-2">
                                <span>{mention.source}</span>
                                <span>•</span>
                                <span>{mention.date}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="group">
                              <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Achievement Announcements */}
            <div className="space-y-6">
              <motion.h3
                className="text-2xl font-bold text-gray-900 flex items-center"
                variants={itemVariants}
              >
                <Award className="h-6 w-6 mr-2 text-yellow-600" />
                Recent Achievements
              </motion.h3>
              <motion.div className="space-y-4" variants={containerVariants}>
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <motion.div
                      variants={cardHoverVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="h-full"
                    >
                      <Card className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <h4 className="font-semibold text-gray-900 flex-1">
                                {achievement.title}
                              </h4>
                              <Badge
                                variant="secondary"
                                className="bg-yellow-100 text-yellow-800"
                              >
                                New
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              {achievement.description}
                            </p>
                            <div className="text-sm text-gray-500">
                              {achievement.date}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
            variants={itemVariants}
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Stay Updated with TBDN News
              </h3>
              <p className="text-lg opacity-90">
                Get the latest updates on blood drives, health tips, and our
                impact delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  whileFocus={{ scale: 1.01 }}
                />
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg">
                    Subscribe
                  </Button>
                </motion.div>
              </div>
              <div className="text-sm opacity-75">
                Join 5,000+ subscribers. Unsubscribe anytime.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
