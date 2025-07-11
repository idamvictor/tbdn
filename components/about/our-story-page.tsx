"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Users, Award, Target, Globe, Zap } from "lucide-react";
import Image from "next/image";
import { heroImages } from "@/app/constants/images";

const foundationHistory = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "TBDN was founded with a vision to bridge the gap between blood donors and recipients in Nigeria.",
    details:
      "Started with just 5 volunteers and a simple website to connect donors with hospitals.",
    milestone: true,
  },
  {
    year: "2021",
    title: "First Major Drive",
    description:
      "Organized our first large-scale blood drive at University of Lagos.",
    details:
      "Collected 200 units of blood and registered 500 new donors in a single day.",
    milestone: true,
  },
  {
    year: "2022",
    title: "Technology Integration",
    description:
      "Launched the LifeBlood mobile app and automated donor matching system.",
    details:
      "Introduced AI-powered donor-recipient matching and SMS notification system.",
    milestone: false,
  },
  {
    year: "2023",
    title: "National Expansion",
    description: "Expanded operations to 15 states across Nigeria.",
    details:
      "Established regional offices and trained local volunteer coordinators.",
    milestone: true,
  },
  {
    year: "2024",
    title: "International Recognition",
    description:
      "Received WHO recognition for innovative blood donation practices.",
    details:
      "Featured as a case study in global health innovation and community engagement.",
    milestone: true,
  },
];

const milestones = [
  {
    number: "50,000+",
    title: "Lives Saved",
    description: "Through our blood donation network",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    number: "25,000+",
    title: "Active Donors",
    description: "Registered in our database",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    number: "200+",
    title: "Partner Hospitals",
    description: "Across Nigeria",
    icon: Award,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    number: "15",
    title: "States Covered",
    description: "With active operations",
    icon: Globe,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

const focusAreas = [
  {
    icon: Target,
    title: "Youth Engagement",
    description:
      "Targeting 18-35 age group through universities and youth organizations",
    initiatives: [
      "Campus blood drives",
      "Youth ambassador program",
      "Social media campaigns",
    ],
  },
  {
    icon: Zap,
    title: "Technology Innovation",
    description:
      "Leveraging technology to improve donor experience and operational efficiency",
    initiatives: [
      "AI-powered matching",
      "Mobile app development",
      "Automated notifications",
    ],
  },
  {
    icon: Globe,
    title: "Rural Outreach",
    description:
      "Expanding blood donation services to underserved rural communities",
    initiatives: [
      "Mobile blood units",
      "Community health partnerships",
      "Local volunteer training",
    ],
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Maintaining highest standards in blood collection and testing",
    initiatives: [
      "Staff training programs",
      "Equipment upgrades",
      "Quality monitoring systems",
    ],
  },
];

export function OurStoryPage() {
  const [playingVideo, setPlayingVideo] = useState(false);
  // Replace with your YouTube or direct video link
  const videoUrl = "https://www.youtube.com/embed/2Vv-BfVoq4g"; // Example YouTube embed link

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Founder's Message */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Story
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From a simple idea to a life-saving network that spans across
                Nigeria
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Video Section */}
              <div className="relative">
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
                  {/* If playingVideo, show video player, else show image with play button */}
                  {playingVideo ? (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/90">
                      {/* YouTube or video embed */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <iframe
                          src={videoUrl}
                          title="Founder's message video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-2xl aspect-video border-none"
                        ></iframe>
                        <Button
                          size="sm"
                          className="absolute top-4 right-4 bg-white text-gray-900 hover:bg-gray-200 rounded-full shadow"
                          aria-label="Close video"
                          onClick={() => setPlayingVideo(false)}
                        >
                          ✕
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={heroImages.slide1}
                        alt="Founder's message video thumbnail"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-red-600 hover:bg-red-700 rounded-full w-20 h-20"
                          onClick={() => setPlayingVideo(true)}
                        >
                          <Play className="h-8 w-8 ml-1" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
                <Badge className="absolute -bottom-4 left-4 bg-white text-gray-900 shadow-lg">
                  Message from our Founder
                </Badge>
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    A Message from Our Founder
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      &quot;When I lost my younger brother due to lack of
                      available blood during an emergency, I realized that this
                      tragedy could have been prevented. That moment changed my
                      life forever and sparked the vision for TBDN.&quot;
                    </p>
                    <p>
                      &quot;We started with a simple belief: no one should lose
                      their life because blood wasn&apos;t available when they
                      needed it most. Today, TBDN has grown into a network that
                      has saved over 50,000 lives, but our mission remains the
                      same.&quot;
                    </p>
                    <p>
                      &quot;Every donor in our network is a hero. Every
                      volunteer is a lifesaver. Together, we&apos;re building a
                      future where blood is always available for those who need
                      it.&quot;
                    </p>
                  </div>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <p className="text-lg font-semibold text-gray-900">
                    Dr. Adebayo Ogundimu
                  </p>
                  <p className="text-red-600 font-medium">
                    Founder & CEO, TBDN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation History Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                From humble beginnings to a nationwide network saving lives
                every day
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-red-200"></div>

              <div className="space-y-12">
                {foundationHistory.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${
                        item.milestone ? "bg-red-600" : "bg-red-300"
                      } border-4 border-white shadow-lg z-10`}
                    ></div>

                    {/* Content Card */}
                    <div
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge
                              variant={item.milestone ? "default" : "secondary"}
                              className="text-sm"
                            >
                              {item.year}
                            </Badge>
                            {item.milestone && (
                              <Award className="h-5 w-5 text-yellow-500" />
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 mb-3">
                            {item.description}
                          </p>
                          <p className="text-sm text-gray-600">
                            {item.details}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Achieved */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Milestones Achieved
              </h2>
              <p className="text-xl text-gray-600">
                Key achievements that mark our impact on communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone) => {
                const Icon = milestone.icon;
                return (
                  <Card
                    key={milestone.title}
                    className="text-center hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 ${milestone.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className={`h-8 w-8 ${milestone.color}`} />
                      </div>
                      <div
                        className={`text-3xl font-bold ${milestone.color} mb-2`}
                      >
                        {milestone.number}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Focus Areas
              </h2>
              <p className="text-xl text-gray-600">
                Our strategic priorities for expanding impact and improving
                services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <Card
                    key={area.title}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                          <Icon className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {area.title}
                            </h3>
                            <p className="text-gray-700">{area.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Key Initiatives:
                            </h4>
                            <ul className="space-y-1">
                              {area.initiatives.map((initiative, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-600 flex items-center"
                                >
                                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                                  {initiative}
                                </li>
                              ))}
                            </ul>
                          </div>
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
    </div>
  );
}
