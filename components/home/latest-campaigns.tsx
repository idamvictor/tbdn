"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, TrendingUp, Heart } from "lucide-react";
import Image from "next/image";
import { easeInOut, easeOut, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { heroImages } from "@/constants/images";
import Link from "next/link";

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
    gradient: "from-red-500 to-pink-500",
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
    gradient: "from-blue-500 to-cyan-500",
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
    gradient: "from-green-500 to-emerald-500",
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
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 2,
    title: "Youth Engagement Success",
    description:
      "Over 200 first-time donors registered through our youth program",
    image: heroImages.slide5,
    date: "Feb 25, 2024",
    impact: "200 new lifelong donors",
    gradient: "from-orange-500 to-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

export function LatestCampaigns() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-10 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 bg-gradient-to-br from-red-200/10 to-blue-200/10 rounded-full blur-xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: easeInOut,
            }}
            style={{
              left: `${10 + i * 25}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
            <motion.div className="inline-block" whileHover={{ scale: 1.02 }}>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-red-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Latest Campaigns & Drives
              </h2>
              <motion.div
                className="h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Join our upcoming blood drives or see the impact of recent
              campaigns
            </motion.p>
          </motion.div>

          {/* Upcoming Blood Drives */}
          <div className="space-y-10">
            <motion.div
              className="flex items-center justify-between"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-bold text-gray-900">
                Upcoming Blood Drives
              </h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="hidden sm:flex bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg border-gray-200"
                >
                  <Link href="/programs/drives">View All Drives</Link>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {upcomingDrives.map((drive) => (
                <motion.div
                  key={drive.id}
                  className="group relative"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Link href="/contact">
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                      {/* Card Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${drive.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div className="relative">
                        <Image
                          src={
                            drive.image ||
                            "/placeholder.svg?height=300&width=400"
                          }
                          alt={drive.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={true}
                        />
                      </div>
                      <div className="p-6 space-y-5">
                        <h4 className="text-xl font-bold text-gray-900">
                          {drive.title}
                        </h4>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-red-500" />
                            {drive.date} • {drive.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-red-500" />
                            {drive.location}
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            asChild
                            className={`w-full bg-gradient-to-r ${drive.gradient} hover:shadow-lg text-white font-semibold`}
                          >
                            <Link href="/contact">Register Now</Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center sm:hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg border-gray-200"
                >
                  View All Drives
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Recent Campaign Highlights */}
          <div className="space-y-10">
            <motion.h3
              className="text-3xl font-bold text-gray-900"
              variants={itemVariants}
            >
              Recent Campaign Highlights
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {recentHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.id}
                  className="group relative"
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                    {/* Card Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    <div className="md:flex h-full">
                      <div className="md:w-1/3 relative">
                        <Image
                          src={
                            highlight.image ||
                            "/placeholder.svg?height=200&width=300"
                          }
                          alt={highlight.title}
                          width={300}
                          height={200}
                          className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={true}
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                      </div>
                      <div className="p-6 md:w-2/3 space-y-4 flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="text-sm text-gray-500">
                            {highlight.date}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-600 text-base leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                        <div className="flex items-center text-sm">
                          <motion.div
                            className={`px-4 py-2 rounded-full text-white font-semibold shadow-md bg-gradient-to-r ${highlight.gradient}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                            }
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            Impact: {highlight.impact}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div variants={itemVariants}>
            <div className="relative bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-10 md:p-12 text-white overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />

              {/* Floating Icons */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 text-white/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: easeInOut,
                  }}
                >
                  <TrendingUp className="h-8 w-8" />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-4 text-white/20"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: easeInOut,
                  }}
                >
                  <Heart className="h-6 w-6" />
                </motion.div>
              </div>

              <div className="relative text-center space-y-8">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold"
                  whileHover={{ scale: 1.02 }}
                >
                  Ready to Make a Difference?
                </motion.h3>
                <motion.p
                  className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  Find an upcoming blood drive near you and register to save
                  lives.
                </motion.p>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/programs/drives">
                    <Button className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <Calendar className="h-5 w-5 mr-2" />
                      Find a Blood Drive
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
