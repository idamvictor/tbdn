"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Heart,
  MessageSquare,
  Target,
  Globe,
  Award,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

interface AIPartner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category:
    | "Healthcare AI"
    | "Matching AI"
    | "Analytics AI"
    | "Communication AI";
  established: string;
  employees: string;
  headquarters: string;
  website: string;
  specialties: string[];
  useCases: string[];
  achievements: string[];
  featured: boolean;
}

const aiPartners: AIPartner[] = [
  {
    id: "1",
    name: "HealthTech AI Solutions",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Leading AI company specializing in healthcare optimization and patient matching systems",
    category: "Healthcare AI",
    established: "2019",
    employees: "500+",
    headquarters: "Lagos, Nigeria",
    website: "healthtech-ai.com",
    specialties: [
      "Machine Learning",
      "Healthcare Analytics",
      "Patient Matching",
      "Predictive Modeling",
    ],
    useCases: [
      "Blood type compatibility prediction",
      "Donor-recipient matching optimization",
      "Emergency blood request prioritization",
      "Inventory management automation",
    ],
    achievements: [
      "Reduced blood wastage by 35% across partner hospitals",
      "Improved donor-recipient matching accuracy by 92%",
      "Processed over 1M blood compatibility checks",
    ],
    featured: true,
  },
  {
    id: "2",
    name: "MedConnect AI",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "AI-powered communication platform connecting healthcare providers and patients",
    category: "Communication AI",
    established: "2020",
    employees: "200+",
    headquarters: "Abuja, Nigeria",
    website: "medconnect-ai.com",
    specialties: [
      "Natural Language Processing",
      "Chatbot Development",
      "Voice Recognition",
      "Multilingual AI",
    ],
    useCases: [
      "Automated donor screening questionnaires",
      "Multi-language support for diverse communities",
      "Real-time translation for medical consultations",
      "Intelligent appointment scheduling",
    ],
    achievements: [
      "Supports 12 Nigerian languages",
      "Handles 50,000+ conversations daily",
      "99.2% accuracy in medical terminology translation",
    ],
    featured: false,
  },
  {
    id: "3",
    name: "DataMed Analytics",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Advanced analytics platform for healthcare data insights and predictive modeling",
    category: "Analytics AI",
    established: "2018",
    employees: "300+",
    headquarters: "Port Harcourt, Nigeria",
    website: "datamed-analytics.com",
    specialties: [
      "Big Data Analytics",
      "Predictive Modeling",
      "Real-time Monitoring",
      "Business Intelligence",
    ],
    useCases: [
      "Blood demand forecasting",
      "Donor behavior pattern analysis",
      "Supply chain optimization",
      "Risk assessment modeling",
    ],
    achievements: [
      "Improved blood supply forecasting accuracy by 87%",
      "Reduced emergency shortages by 45%",
      "Analyzed 10M+ healthcare data points",
    ],
    featured: false,
  },
];

export function AiPartnerPage() {
  const [selectedPartner, setSelectedPartner] = useState<AIPartner | null>(
    null
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Healthcare AI":
        return Heart;
      case "Communication AI":
        return MessageSquare;
      case "Analytics AI":
        return TrendingUp;
      case "Matching AI":
        return Target;
      default:
        return Bot;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Healthcare AI":
        return "bg-red-100 text-red-800";
      case "Communication AI":
        return "bg-blue-100 text-blue-800";
      case "Analytics AI":
        return "bg-green-100 text-green-800";
      case "Matching AI":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8 container mx-auto py-10">
      {/* Header Section */}
      <section className="text-center space-y-4 ">
        <h2 className="text-3xl font-bold">AI Partners</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore cutting-edge AI technology in healthcare and discover how
          artificial intelligence is revolutionizing blood donation and medical
          services.
        </p>
      </section>

      {/* AI Partners Section */}
      <section className="space-y-6">
        {/* Featured Partner */}
        {aiPartners.find((p) => p.featured) && (
          <section className="space-y-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Featured AI Partner</h3>
              <p className="text-muted-foreground">
                Leading innovation in healthcare AI
              </p>
            </div>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              {(() => {
                const partner = aiPartners.find((p) => p.featured)!;
                const CategoryIcon = getCategoryIcon(partner.category);
                return (
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Bot className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold">
                              {partner.name}
                            </h4>
                            <Badge
                              className={getCategoryColor(partner.category)}
                            >
                              <CategoryIcon className="h-3 w-3 mr-1" />
                              {partner.category}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {partner.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              Established:
                            </span>
                            <div className="font-medium">
                              {partner.established}
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Employees:
                            </span>
                            <div className="font-medium">
                              {partner.employees}
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Headquarters:
                            </span>
                            <div className="font-medium">
                              {partner.headquarters}
                            </div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              Website:
                            </span>
                            <div className="font-medium text-blue-600">
                              {partner.website}
                            </div>
                          </div>
                        </div>
                        <Button
                          onClick={() => setSelectedPartner(partner)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <h5 className="font-semibold">Key Achievements</h5>
                        <ul className="space-y-2">
                          {partner.achievements
                            .slice(0, 3)
                            .map((achievement, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-sm"
                              >
                                <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </Card>
          </section>
        )}

        {/* All Partners */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiPartners
            .filter((p) => !p.featured)
            .map((partner) => {
              const CategoryIcon = getCategoryIcon(partner.category);
              return (
                <Card
                  key={partner.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Bot className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {partner.name}
                          </CardTitle>
                          <Badge
                            className={getCategoryColor(partner.category)}
                            variant="secondary"
                          >
                            <CategoryIcon className="h-3 w-3 mr-1" />
                            {partner.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {partner.description}
                    </p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Specialties</h5>
                      <div className="flex flex-wrap gap-1">
                        {partner.specialties
                          .slice(0, 2)
                          .map((specialty, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        {partner.specialties.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{partner.specialties.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => setSelectedPartner(partner)}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </section>

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Bot className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      {selectedPartner.name}
                    </CardTitle>
                    <Badge
                      className={getCategoryColor(selectedPartner.category)}
                    >
                      {selectedPartner.category}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedPartner(null)}
                  className="bg-transparent"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                {selectedPartner.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Company Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Established:
                      </span>
                      <span>{selectedPartner.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Employees:</span>
                      <span>{selectedPartner.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Headquarters:
                      </span>
                      <span>{selectedPartner.headquarters}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Website:</span>
                      <span className="text-blue-600">
                        {selectedPartner.website}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPartner.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Healthcare Use Cases</h4>
                <ul className="space-y-2">
                  {selectedPartner.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedPartner.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Award className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Globe className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
                <Button variant="outline" className="bg-transparent">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Partner
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
