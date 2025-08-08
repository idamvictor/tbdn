"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Quote,
  Star,
  Heart,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { useInView } from "framer-motion";
import { avatarImage, heroImages } from "@/constants/images";

const testimonials = [
  {
    id: 1,
    type: "video",
    name: "Sarah Johnson",
    role: "Regular Donor",
    location: "Lagos, Nigeria",
    image: avatarImage.image1,
    videoThumbnail: heroImages.slide1,
    quote:
      "Donating blood has become a meaningful part of my life. Knowing that my donation can save up to three lives gives me incredible purpose.",
    rating: 5,
    donationCount: 12,
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 2,
    type: "written",
    name: "Michael Adebayo",
    role: "First-time Donor",
    location: "Abuja, Nigeria",
    image: avatarImage.image1,
    quote:
      "I was nervous about my first donation, but the TBDN team made me feel so comfortable. The process was smooth and I felt like a hero afterwards!",
    rating: 5,
    donationCount: 1,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    type: "video",
    name: "Dr. Amina Hassan",
    role: "Medical Professional",
    location: "Kano, Nigeria",
    image: avatarImage.image1,
    videoThumbnail: heroImages.slide2,
    quote:
      "As a doctor, I've seen firsthand how blood donations save lives. TBDN's work is crucial for our healthcare system.",
    rating: 5,
    donationCount: 25,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    type: "written",
    name: "Grace Okafor",
    role: "Volunteer Coordinator",
    location: "Port Harcourt, Nigeria",
    image: avatarImage.image1,
    quote:
      "Volunteering with TBDN has been incredibly rewarding. Seeing the community come together to save lives is truly inspiring.",
    rating: 5,
    donationCount: 8,
    gradient: "from-purple-500 to-violet-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
};

export function DonorTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  console.log("Playing video ID:", playingVideo);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-gradient-to-br from-red-200/20 to-blue-200/20 rounded-full blur-xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl"
        ref={ref}
      >
        <motion.div
          className="space-y-8 sm:space-y-12 lg:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
            <motion.div className="inline-block" whileHover={{ scale: 1.02 }}>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Stories from Our Heroes
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
              Hear from donors, volunteers, and medical professionals about
              their experience with TBDN
            </motion.p>
          </motion.div>

          {/* Main Testimonial Carousel */}
          <motion.div
            className="relative max-w-7xl mx-auto"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.4 },
                  }}
                >
                  <Card className="overflow-hidden border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Media Section */}
                        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200">
                          {currentTestimonial.type === "video" ? (
                            <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full group">
                              <Image
                                src={
                                  currentTestimonial.videoThumbnail ||
                                  "/placeholder.svg?height=600&width=600"
                                }
                                alt={`${currentTestimonial.name} testimonial`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="relative"
                                >
                                  <Button
                                    size="lg"
                                    className={`bg-gradient-to-r ${currentTestimonial.gradient} hover:shadow-2xl rounded-full w-16 h-16 sm:w-20 sm:h-20 shadow-lg`}
                                    onClick={() =>
                                      setPlayingVideo(currentTestimonial.id)
                                    }
                                  >
                                    <Play className="h-8 w-8 ml-1" />
                                  </Button>
                                  <motion.div
                                    className="absolute inset-0 rounded-full bg-white/20"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                    }}
                                  />
                                </motion.div>
                              </div>
                              {/* Video Type Badge */}
                              <div className="absolute top-4 left-4">
                                <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                  Video Story
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="aspect-square lg:aspect-auto lg:h-full flex items-center justify-center p-8 sm:p-12 relative">
                              <div className="relative">
                                <motion.div
                                  className={`absolute inset-0 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full blur-2xl opacity-20`}
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                  }}
                                />
                                <Image
                                  src={
                                    currentTestimonial.image ||
                                    "/placeholder.svg?height=300&width=300"
                                  }
                                  alt={currentTestimonial.name}
                                  width={300}
                                  height={300}
                                  className="relative w-72 h-72 rounded-full object-cover shadow-2xl border-4 border-white"
                                  priority
                                />
                                <motion.div
                                  className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <MessageCircle className="h-8 w-8 text-white" />
                                </motion.div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content Section */}
                        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-6 sm:space-y-8 bg-white relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100/50 to-pink-100/50 rounded-full blur-3xl" />
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl" />

                          <div className="relative z-10 space-y-8">
                            {/* Rating */}
                            <motion.div
                              className="flex items-center space-x-1"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.4 + i * 0.1 }}
                                >
                                  <Star
                                    className={`h-6 w-6 ${
                                      i < currentTestimonial.rating
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                </motion.div>
                              ))}
                            </motion.div>

                            {/* Quote */}
                            <div className="relative">
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                <Quote
                                  className={`h-12 w-12 bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent absolute -top-4 -left-4`}
                                />
                              </motion.div>
                              <motion.blockquote
                                className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed pl-6 sm:pl-8 font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                              >
                                {currentTestimonial.quote}
                              </motion.blockquote>
                            </div>

                            {/* Author Info */}
                            <motion.div
                              className="space-y-3"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 }}
                            >
                              <div className="font-bold text-gray-900 text-2xl">
                                {currentTestimonial.name}
                              </div>
                              <div
                                className={`bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent font-semibold text-lg`}
                              >
                                {currentTestimonial.role}
                              </div>
                              <div className="text-gray-500 text-lg">
                                {currentTestimonial.location}
                              </div>
                              <div className="flex items-center space-x-2">
                                <Heart className="h-5 w-5 text-red-500" />
                                <span className="text-gray-600 font-medium">
                                  {currentTestimonial.donationCount} donation
                                  {currentTestimonial.donationCount !== 1
                                    ? "s"
                                    : ""}
                                </span>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <motion.div
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="bg-white/90 backdrop-blur-sm shadow-xl border-white/50 hover:bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </motion.div>
            <motion.div
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="bg-white/90 backdrop-blur-sm shadow-xl border-white/50 hover:bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Testimonial Indicators */}
          <motion.div
            className="flex justify-center space-x-3"
            variants={itemVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 rounded-full ${
                  index === currentIndex ? "w-12 h-4" : "w-4 h-4"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `bg-gradient-to-r ${testimonial.gradient} shadow-lg`
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div variants={itemVariants}>
            <div className="relative bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-10 md:p-12 text-white overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />

              {/* Floating Hearts */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white/10"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                    }}
                  >
                    <Heart className="h-8 w-8" />
                  </motion.div>
                ))}
              </div>

              <div className="relative text-center space-y-8">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold"
                  whileHover={{ scale: 1.02 }}
                >
                  Share Your Story
                </motion.h3>
                <motion.p
                  className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  Have you been impacted by blood donation? We&apos;d love to
                  hear your story and share it with our community.
                </motion.p>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Share Your Story
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
