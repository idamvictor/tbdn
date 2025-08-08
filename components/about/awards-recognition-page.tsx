"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  // Award,
  Shield,
  Star,
  Trophy,
  Calendar,
  ExternalLink,
  Quote,
  Play,
} from "lucide-react";
import { avatarImage, heroImages } from "@/constants/images";

const certifications = [
  {
    title: "WHO Blood Safety Certification",
    issuer: "World Health Organization",
    date: "2023",
    description:
      "International recognition for maintaining highest blood safety standards",
    badge: "/placeholder.svg?height=100&width=100",
    level: "International",
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "ISO 9001:2015 Quality Management",
    issuer: "International Organization for Standardization",
    date: "2023",
    description: "Certified quality management system for healthcare services",
    badge: "/placeholder.svg?height=100&width=100",
    level: "International",
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Nigerian Health Excellence Award",
    issuer: "Federal Ministry of Health",
    date: "2022",
    description:
      "Outstanding contribution to public health and blood donation awareness",
    badge: "/placeholder.svg?height=100&width=100",
    level: "National",
    color: "bg-purple-100 text-purple-800",
  },
  {
    title: "Digital Health Innovation Certificate",
    issuer: "Nigeria Health Tech Alliance",
    date: "2022",
    description: "Recognition for innovative use of technology in healthcare",
    badge: "/placeholder.svg?height=100&width=100",
    level: "National",
    color: "bg-orange-100 text-orange-800",
  },
];

const governmentRecognition = [
  {
    title: "Presidential Award for Healthcare Excellence",
    authority: "Office of the President, Federal Republic of Nigeria",
    date: "March 2024",
    description:
      "Highest national recognition for exceptional contribution to healthcare sector and saving lives through innovative blood donation network.",
    image: heroImages.slide1,
    significance: "National",
  },
  {
    title: "Ministry of Health Partnership Recognition",
    authority: "Federal Ministry of Health",
    date: "December 2023",
    description:
      "Official recognition as a key partner in Nigeria's national blood transfusion service improvement initiative.",
    image: heroImages.slide2,
    significance: "Federal",
  },
  {
    title: "Lagos State Health Innovation Award",
    authority: "Lagos State Ministry of Health",
    date: "October 2023",
    description:
      "Recognition for innovative approaches to blood donation and community health engagement in Lagos State.",
    image: heroImages.slide3,
    significance: "State",
  },
  {
    title: "National Youth Service Corps Partnership",
    authority: "NYSC Directorate Headquarters",
    date: "August 2023",
    description:
      "Official partnership recognition for engaging youth corps members in blood donation drives nationwide.",
    image: heroImages.slide4,
    significance: "National",
  },
];

const partnerTestimonials = [
  {
    name: "Dr. Folake Adeyemi",
    role: "Chief Medical Director",
    organization: "Lagos University Teaching Hospital",
    image: avatarImage.image1,
    testimonial:
      "TBDN has been instrumental in ensuring we have adequate blood supply for our patients. Their efficient system and dedicated team have saved countless lives in our hospital.",
    rating: 5,
    partnership: "3 years",
  },
  {
    name: "Prof. Ibrahim Mohammed",
    role: "Director of Blood Transfusion Services",
    organization: "Ahmadu Bello University Teaching Hospital",
    image: avatarImage.image2,
    testimonial:
      "The partnership with TBDN has revolutionized our blood banking operations. Their technology platform and donor network have significantly improved our service delivery.",
    rating: 5,
    partnership: "2 years",
  },
  {
    name: "Mrs. Grace Okafor",
    role: "Hospital Administrator",
    organization: "National Hospital Abuja",
    image: avatarImage.image1,
    testimonial:
      "TBDN's professionalism and commitment to quality have made them our preferred blood donation partner. They consistently exceed our expectations.",
    rating: 5,
    partnership: "4 years",
  },
  {
    name: "Dr. Chidi Nnamdi",
    role: "Head of Emergency Medicine",
    organization: "University of Port Harcourt Teaching Hospital",
    image: avatarImage.image2,
    testimonial:
      "In emergency situations, TBDN's rapid response and reliable blood supply have been life-saving. We couldn't ask for a better partner.",
    rating: 5,
    partnership: "2 years",
  },
];

const mediaCoverage = [
  {
    title: "TBDN: Revolutionizing Blood Donation in Nigeria",
    outlet: "CNN Africa",
    type: "TV Interview",
    date: "February 2024",
    description:
      "Feature story on TBDN's innovative approach to blood donation and its impact on Nigerian healthcare.",
    thumbnail: heroImages.slide1,
    duration: "12 min",
    views: "2.3M",
  },
  {
    title: "The Future of Blood Banking in Africa",
    outlet: "BBC World Service",
    type: "Radio Interview",
    date: "January 2024",
    description:
      "Discussion on how TBDN is setting new standards for blood donation across Africa.",
    thumbnail: heroImages.slide2,
    duration: "25 min",
    views: "1.8M",
  },
  {
    title: "Young Entrepreneurs Saving Lives",
    outlet: "Forbes Africa",
    type: "Magazine Feature",
    date: "December 2023",
    description:
      "Profile of TBDN's founder and the organization's journey from startup to national impact.",
    thumbnail: heroImages.slide3,
    duration: "8 min read",
    views: "500K",
  },
  {
    title: "Technology for Good: TBDN's Digital Innovation",
    outlet: "TechCrunch",
    type: "Online Article",
    date: "November 2023",
    description:
      "Deep dive into TBDN's technology platform and AI-powered donor matching system.",
    thumbnail: heroImages.slide4,
    duration: "6 min read",
    views: "750K",
  },
  {
    title: "Blood Donation Heroes of Nigeria",
    outlet: "Channels Television",
    type: "Documentary",
    date: "October 2023",
    description:
      "30-minute documentary featuring TBDN's work and stories from donors and recipients.",
    thumbnail: heroImages.slide5,
    duration: "30 min",
    views: "3.1M",
  },
  {
    title: "Healthcare Innovation in West Africa",
    outlet: "The Guardian Nigeria",
    type: "Newspaper Feature",
    date: "September 2023",
    description:
      "Front-page feature on TBDN's expansion and impact on regional healthcare systems.",
    thumbnail: heroImages.slide1,
    duration: "5 min read",
    views: "1.2M",
  },
];

export function AwardsRecognitionPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Page Header */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/awards-hero-bg.svg"
            alt="Awards Background"
            fill
            className="object-cover object-center brightness-90"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-100/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 md:h-10 md:w-10 text-yellow-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Awards & Recognition
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Celebrating the recognition and trust we&apos;ve earned from
              partners, government bodies, and the international community for
              our commitment to saving lives
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-6 md:pt-8 max-w-3xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/20 transition-all">
                <div className="text-2xl md:text-3xl font-bold text-yellow-600">
                  15+
                </div>
                <div className="text-sm md:text-base text-gray-700">
                  Awards Received
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/20 transition-all">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  8
                </div>
                <div className="text-sm md:text-base text-gray-700">
                  Certifications
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/20 transition-all">
                <div className="text-2xl md:text-3xl font-bold text-green-600">
                  50+
                </div>
                <div className="text-gray-700">Media Features</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Certifications & Standards
              </h2>
              <p className="text-xl text-gray-600">
                International and national certifications that validate our
                commitment to quality and safety
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <Card
                  key={cert.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600" />
                      </div>
                      <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
                        <div>
                          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-2 mb-2">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                              {cert.title}
                            </h3>
                            <Badge className={cert.color}>{cert.level}</Badge>
                          </div>
                          <p className="text-red-600 font-medium">
                            {cert.issuer}
                          </p>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700">
                          {cert.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            Certified {cert.date}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full sm:w-auto"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Verify
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Recognition */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Government Recognition
              </h2>
              <p className="text-xl text-gray-600">
                Official recognition from government bodies at federal, state,
                and local levels
              </p>
            </div>

            <div className="space-y-8">
              {governmentRecognition.map((recognition) => (
                <Card
                  key={recognition.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 items-start">
                      <div className="lg:col-span-1">
                        <Image
                          src={recognition.image || "/placeholder.svg"}
                          alt={recognition.title}
                          width={400}
                          height={192}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:col-span-2 space-y-3 sm:space-y-4 mt-4 lg:mt-0">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:justify-between">
                          <Badge
                            variant={
                              recognition.significance === "National"
                                ? "default"
                                : "secondary"
                            }
                            className="text-sm"
                          >
                            {recognition.significance} Level
                          </Badge>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            {recognition.date}
                          </div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {recognition.title}
                        </h3>
                        <p className="text-red-600 font-medium text-sm sm:text-base">
                          {recognition.authority}
                        </p>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {recognition.description}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partner Testimonials
              </h2>
              <p className="text-xl text-gray-600">
                What our hospital partners and healthcare professionals say
                about working with TBDN
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {partnerTestimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-1 justify-center sm:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="relative">
                      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-red-200 absolute -top-2 -left-2" />
                      <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed pl-4 sm:pl-6 italic">
                        &quot;{testimonial.testimonial}&quot;
                      </blockquote>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 border-t border-gray-100 text-center sm:text-left">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-red-600 text-sm font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {testimonial.organization}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs whitespace-nowrap"
                      >
                        {testimonial.partnership} partnership
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Media Coverage
              </h2>
              <p className="text-xl text-gray-600">
                Featured stories and coverage from leading media outlets
                highlighting our impact
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {mediaCoverage.map((media) => (
                <Card
                  key={media.title}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={media.thumbnail || "/placeholder.svg"}
                        alt={media.title}
                        width={400}
                        height={192}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {media.type.includes("TV") ||
                        media.type.includes("Documentary") ? (
                          <Play className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
                        ) : (
                          <ExternalLink className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                        )}
                      </div>
                      <Badge className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/70 text-white text-xs sm:text-sm">
                        {media.type}
                      </Badge>
                    </div>
                    <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                      <div className="flex flex-col sm:flex-row gap-1 sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600">
                        <span className="font-medium text-red-600">
                          {media.outlet}
                        </span>
                        <span>{media.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                        {media.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                        {media.description}
                      </p>
                      <div className="flex items-center justify-between pt-2 text-xs sm:text-sm text-gray-500">
                        <span>{media.duration}</span>
                        <span>{media.views} views</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-red-600 hover:bg-red-700">
                View All Media Coverage
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition CTA */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              <CardContent className="p-12 text-center space-y-6">
                <div className="flex justify-center mb-4">
                  <Award className="h-16 w-16" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Nominate TBDN for Recognition
                </h2>
                <p className="text-xl opacity-90 leading-relaxed">
                  Know of an award or recognition opportunity that aligns with
                  our mission? We&apos;d love to hear about it. Help us continue
                  to gain recognition for our life-saving work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
                    Submit Nomination
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3"
                  >
                    Media Inquiries
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}
