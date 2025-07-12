"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, Quote, Star } from "lucide-react";
import Image from "next/image";
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
  },
];

export function DonorTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  console.log("Playing video ID:", playingVideo);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Stories from Our Heroes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from donors, volunteers, and medical professionals about
              their experience with TBDN
            </p>
          </div>

          {/* Main Testimonial Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                  {/* Media Section */}
                  <div className="relative bg-gray-100">
                    {currentTestimonial.type === "video" ? (
                      <div className="relative h-full">
                        <Image
                          src={
                            currentTestimonial.videoThumbnail ||
                            "/placeholder.svg"
                          }
                          alt={`${currentTestimonial.name} testimonial`}
                          className="w-full h-full object-cover"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Button
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 rounded-full w-16 h-16"
                            onClick={() =>
                              setPlayingVideo(currentTestimonial.id)
                            }
                          >
                            <Play className="h-6 w-6 ml-1" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center p-8">
                        <Image
                          src={currentTestimonial.image || "/placeholder.svg"}
                          alt={currentTestimonial.name}
                          width={256}
                          height={256}
                          className="w-64 h-64 rounded-full object-cover shadow-lg"
                          priority
                        />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < currentTestimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="h-8 w-8 text-red-200 absolute -top-2 -left-2" />
                      <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed pl-6">
                        {currentTestimonial.quote}
                      </blockquote>
                    </div>

                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 text-lg">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-red-600 font-medium">
                        {currentTestimonial.role}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {currentTestimonial.location}
                      </div>
                      <div className="text-sm text-gray-600">
                        {currentTestimonial.donationCount} donation
                        {currentTestimonial.donationCount !== 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-red-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Share Your Story
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Have you been impacted by blood donation? We&apos;d love to hear
              your story and share it with our community.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
