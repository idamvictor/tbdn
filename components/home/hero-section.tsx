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
  const [isVisible, setIsVisible] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animate counters
  useEffect(() => {
    const animateCounters = () => {
      liveStats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2500;
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
    <section className="relative h-[95dvh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-blue-900/20 animate-pulse" />

      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg?height=1080&width=1920"}
              alt={`Hero slide ${index + 1}`}
              fill
              className="object-cover transition-transform duration-[6000ms] ease-linear hover:scale-110"
              priority={index === currentSlide}
              sizes="100vw"
            />
            {/* Dynamic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>
        ))}
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge with entrance animation */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Badge
              variant="secondary"
              className="bg-red-600/30 text-red-100 border-red-400/50 backdrop-blur-sm hover:bg-red-600/40 transition-all duration-300 shadow-lg"
            >
              <Heart className="h-4 w-4 mr-2 fill-current animate-pulse" />
              Saving Lives Since 2020
            </Badge>
          </div>

          {/* Main Title with staggered animation */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-red-100 bg-clip-text text-transparent drop-shadow-2xl">
              {heroSlides[currentSlide].title}
            </h1>
          </div>

          {/* Subtitle with animation */}
          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>

          {/* CTA Buttons with animation */}
          <div
            className={`transform transition-all duration-1000 delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-lg px-10 py-6 shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 border border-red-500/20"
              >
                <Heart className="h-5 w-5 mr-3 fill-current animate-pulse" />
                {heroSlides[currentSlide].cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-10 py-6 backdrop-blur-sm shadow-xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300"
              >
                <Play className="h-5 w-5 mr-3" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Live Stats with enhanced animations */}
          <div
            id="hero-stats"
            className={`transform transition-all duration-1000 delay-1100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20 relative">
              {/* Animated border line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse" />

              {liveStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center group hover:transform hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <Icon className="h-10 w-10 text-red-400 group-hover:text-red-300 transition-colors duration-300 drop-shadow-lg animate-pulse" />
                        <div className="absolute inset-0 bg-red-400/20 rounded-full blur-xl group-hover:bg-red-400/30 transition-all duration-300" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm">
                      {animatedStats[index].toLocaleString()}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "bg-red-500 w-12 h-3 shadow-lg shadow-red-500/50"
                : "bg-white/40 w-3 h-3 hover:bg-white/60"
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-red-400 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
