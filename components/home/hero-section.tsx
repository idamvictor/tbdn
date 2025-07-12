"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Users, Droplets, Award } from "lucide-react";

import Image from "next/image";
import { heroImages } from "@/constants/images";

const heroSlides = [
  {
    id: 1,
    image: heroImages.slide1,
    title: "Every Drop Counts, Every Donor Matters",
    subtitle: "Join thousands of heroes saving lives through blood donation",
    cta: "Donate Blood Now",
  },
  {
    id: 2,
    image: heroImages.slide2,
    title: "Be Someone's Hero Today",
    subtitle: "Your single donation can save up to three lives",
    cta: "Find Blood Drive",
  },
  {
    id: 3,
    image: heroImages.slide3,
    title: "Together We Save Lives",
    subtitle: "Join our community of voluntary blood donors",
    cta: "Register Now",
  },
];

const liveStats = [
  { icon: Heart, label: "Lives Saved", value: 12847, suffix: "" },
  { icon: Droplets, label: "Pints Collected", value: 8934, suffix: "" },
  { icon: Users, label: "Active Donors", value: 5672, suffix: "+" },
  { icon: Award, label: "Partner Organizations", value: 156, suffix: "" },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(liveStats.map(() => 0));

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Animate counters
  useEffect(() => {
    const animateCounters = () => {
      liveStats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev];
            newStats[index] = Math.floor(start);
            return newStats;
          });
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("hero-stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`Hero slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === currentSlide}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge
            variant="secondary"
            className="bg-red-600/20 text-red-100 border-red-400"
          >
            <Heart className="h-4 w-4 mr-2 fill-current" />
            Saving Lives Since 2020
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {heroSlides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            {heroSlides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6"
            >
              <Heart className="h-5 w-5 mr-2 fill-current" />
              {heroSlides[currentSlide].cta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              <Play className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Live Stats */}
          <div
            id="hero-stats"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20"
          >
            {liveStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon className="h-8 w-8 text-red-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">
                    {animatedStats[index].toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-red-500 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
