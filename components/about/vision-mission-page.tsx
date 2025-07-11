"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { heroImages } from "@/app/constants/images";
const visionSlides = [
  {
    image: heroImages.slide1,
    headline: "A Nigeria Where No Life is Lost Due to Blood Shortage",
    description:
      "We envision a future where every Nigerian has access to safe, adequate blood supply when they need it most, supported by a thriving community of voluntary donors and cutting-edge technology.",
    stats: [
      { label: "Target Year", value: "2030" },
      { label: "Full Coverage", value: "36 States" },
      { label: "Preventable Deaths", value: "Zero" },
    ],
  },
  {
    image: heroImages.slide2,
    headline: "Empowering Communities, Saving Lives",
    description:
      "Our vision is to empower every community with the resources and knowledge to ensure no one suffers due to blood shortage.",
    stats: [
      { label: "Target Year", value: "2030" },
      { label: "Communities Reached", value: "500+" },
      { label: "Lives Impacted", value: "100,000+" },
    ],
  },
  {
    image: heroImages.slide3,
    headline: "Innovation for Lifesaving Impact",
    description:
      "Harnessing technology and compassion to build a future where blood is always available for those in need.",
    stats: [
      { label: "Tech Solutions", value: "AI & Blockchain" },
      { label: "Donor Network", value: "50,000+" },
      { label: "Hospitals Partnered", value: "100+" },
    ],
  },
];
import {
  Heart,
  Shield,
  Users,
  Globe,
  Zap,
  Award,
  Target,
  CheckCircle,
} from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We care deeply about every life we touch and approach our work with empathy and understanding.",
    details:
      "Every decision we make is guided by our commitment to human dignity and care.",
    color: "text-red-600",
    bgColor: "bg-red-100",
    hoverColor: "hover:bg-red-200",
  },
  {
    icon: Shield,
    title: "Safety & Quality",
    description:
      "We maintain the highest standards in blood collection, testing, and distribution.",
    details:
      "Safety is never compromised - we follow international best practices and protocols.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    hoverColor: "hover:bg-blue-200",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We build strong networks of donors, volunteers, and partners working together.",
    details:
      "Our strength lies in the communities we serve and the relationships we build.",
    color: "text-green-600",
    bgColor: "bg-green-100",
    hoverColor: "hover:bg-green-200",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "We make blood donation accessible to everyone, regardless of location or background.",
    details:
      "Breaking down barriers to ensure equitable access to life-saving blood services.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    hoverColor: "hover:bg-purple-200",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We embrace technology and innovative approaches to improve donation experiences.",
    details:
      "Continuously evolving our methods to serve donors and recipients better.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    hoverColor: "hover:bg-orange-200",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to excellence in everything we do, from service to operations.",
    details:
      "Setting high standards and continuously improving our processes and outcomes.",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    hoverColor: "hover:bg-teal-200",
  },
];

const strategicGoals = [
  {
    period: "2024",
    title: "Expansion & Technology",
    goals: [
      "Launch operations in 5 additional states",
      "Deploy AI-powered donor matching system",
      "Achieve 50,000 registered donors",
      "Establish 10 new hospital partnerships",
    ],
    status: "In Progress",
    progress: 65,
  },
  {
    period: "2025",
    title: "Innovation & Quality",
    goals: [
      "Implement blockchain for blood tracking",
      "Launch mobile blood collection units",
      "Achieve WHO quality certification",
      "Develop youth engagement programs",
    ],
    status: "Planning",
    progress: 25,
  },
  {
    period: "2026",
    title: "Regional Leadership",
    goals: [
      "Become West Africa's leading blood network",
      "Establish international partnerships",
      "Launch donor health monitoring program",
      "Achieve 100,000 lives saved milestone",
    ],
    status: "Future",
    progress: 10,
  },
  {
    period: "2027",
    title: "Sustainability & Impact",
    goals: [
      "Achieve financial sustainability",
      "Launch blood donation research center",
      "Establish emergency response network",
      "Create donor recognition foundation",
    ],
    status: "Vision",
    progress: 5,
  },
];

const missionBreakdown = [
  {
    icon: Target,
    title: "Save Lives",
    description:
      "Connect voluntary blood donors with those in critical need of blood transfusions",
  },
  {
    icon: Users,
    title: "Build Community",
    description:
      "Create a sustainable network of donors, volunteers, and healthcare partners",
  },
  {
    icon: Globe,
    title: "Educate & Advocate",
    description:
      "Raise awareness about blood donation importance and dispel common myths",
  },
  {
    icon: Zap,
    title: "Innovate Solutions",
    description:
      "Leverage technology to improve efficiency and accessibility of blood services",
  },
];

export function VisionMissionPage() {
  const [currentVision, setCurrentVision] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVision((prev) => (prev + 1) % visionSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // const slide = visionSlides[currentVision];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Vision Statement - Sliding Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 to-pink-600 text-white">
        {/* Background Image with fade animation */}
        <div className="absolute inset-0 z-0">
          {visionSlides.map((s, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentVision ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ pointerEvents: idx === currentVision ? "auto" : "none" }}
            >
              <Image
                src={s.image}
                alt="Vision Slide"
                fill
                className="object-cover"
                priority={idx === currentVision}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
        {/* Content with fade animation */}
        <div className="relative z-10 container mx-auto px-4">
          {visionSlides.map((s, idx) => (
            <div
              key={idx}
              className={`max-w-4xl mx-auto text-center space-y-8 transition-opacity duration-1000 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full ${
                idx === currentVision ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ pointerEvents: idx === currentVision ? "auto" : "none" }}
            >
              <Badge className="bg-white/20 text-white border-white/30">
                Our Vision
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {s.headline}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                {s.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                {s.stats.map((stat) => (
                  <div className="text-center" key={stat.label}>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-75">{stat.label}</div>
                  </div>
                ))}
              </div>
              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 pt-4">
                {visionSlides.map((_, idx2) => (
                  <button
                    key={idx2}
                    onClick={() => setCurrentVision(idx2)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx2 === currentVision ? "bg-white w-8" : "bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx2 + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement Breakdown */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                To save lives by connecting voluntary blood donors with those in
                need, while educating communities about the importance of
                regular blood donation and building sustainable healthcare
                partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missionBreakdown.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                          <Icon className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide every decision we make and every
                action we take
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <CardContent className="p-8 text-center space-y-4">
                      <div
                        className={`w-16 h-16 ${value.bgColor} ${value.hoverColor} rounded-full flex items-center justify-center mx-auto transition-colors group-hover:scale-110 transform duration-300`}
                      >
                        <Icon className={`h-8 w-8 ${value.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-700">{value.description}</p>
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-600 italic">
                          {value.details}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Strategic Goals 2024-2027
              </h2>
              <p className="text-xl text-gray-600">
                Our roadmap to achieving our vision and expanding our impact
                across Nigeria
              </p>
            </div>

            <div className="space-y-8">
              {strategicGoals.map((goal) => (
                <Card
                  key={goal.period}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center space-x-4">
                          <Badge
                            variant={
                              goal.status === "In Progress"
                                ? "default"
                                : "secondary"
                            }
                            className="text-sm"
                          >
                            {goal.period}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-sm ${
                              goal.status === "In Progress"
                                ? "border-green-500 text-green-700"
                                : goal.status === "Planning"
                                ? "border-blue-500 text-blue-700"
                                : "border-gray-500 text-gray-700"
                            }`}
                          >
                            {goal.status}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {goal.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {goal.goals.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lg:w-48 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold">
                            {goal.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-red-600 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Join Us in Achieving These Goals
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Your support, whether as a donor, volunteer, or partner,
                    helps us reach these ambitious targets and save more lives.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Become a Partner
                    </button>
                    <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                      Support Our Mission
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
