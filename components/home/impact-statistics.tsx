"use client";

import { useEffect, useState } from "react";
import {
  Heart,
  Droplets,
  Users,
  Building,
  Calendar,
  MapPin,
} from "lucide-react";

const impactStats = [
  {
    icon: Heart,
    label: "Lives Saved This Year",
    value: 15420,
    suffix: "",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: Droplets,
    label: "Total Blood Units Collected",
    value: 89340,
    suffix: "",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Users,
    label: "Active Registered Donors",
    value: 12567,
    suffix: "+",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Building,
    label: "Partner Organizations",
    value: 234,
    suffix: "",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Calendar,
    label: "Blood Drives This Month",
    value: 45,
    suffix: "",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: MapPin,
    label: "Cities Reached",
    value: 28,
    suffix: "",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
];

export function ImpactStatistics() {
  const [animatedValues, setAnimatedValues] = useState(
    impactStats.map(() => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const animateCounters = () => {
      if (hasAnimated) return;

      impactStats.forEach((stat, index) => {
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
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = Math.floor(start);
            return newValues;
          });
        }, 16);
      });

      setHasAnimated(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("impact-stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every donation makes a difference. Here&apos;s how our community
              has been saving lives together.
            </p>
          </div>

          <div
            id="impact-stats"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className={`p-4 ${stat.bgColor} rounded-full group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="space-y-2">
                      <div
                        className={`text-4xl md:text-5xl font-bold ${stat.color}`}
                      >
                        {animatedValues[index].toLocaleString()}
                        {stat.suffix}
                      </div>
                      <div className="text-gray-700 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Be part of something bigger. Your donation today becomes
              someone&apos;s tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Become a Donor
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
