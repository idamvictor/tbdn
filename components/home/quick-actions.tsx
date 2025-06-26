"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  MapPin,
  Smartphone,
  Phone,
  Calendar,
  Users,
  Heart,
  Download,
} from "lucide-react";

const quickActions = [
  {
    icon: CheckCircle,
    title: "Check Eligibility",
    description: "Quick 2-minute assessment to see if you can donate",
    buttonText: "Check Now",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
  {
    icon: MapPin,
    title: "Find Blood Drive",
    description: "Locate upcoming donation drives near you",
    buttonText: "Find Drive",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
  },
  {
    icon: Smartphone,
    title: "Download LifeBlood App",
    description: "Get the mobile app for easy donation scheduling",
    buttonText: "Download",
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
  },
  {
    icon: Phone,
    title: "Emergency Blood Request",
    description: "24/7 emergency line for urgent blood needs",
    buttonText: "Call Now",
    color: "bg-red-500",
    hoverColor: "hover:bg-red-600",
  },
];

const additionalActions = [
  {
    icon: Calendar,
    title: "Schedule Donation",
    description: "Book your next donation appointment",
    link: "/schedule",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our volunteer team",
    link: "/volunteer",
  },
  {
    icon: Heart,
    title: "Donor Portal",
    description: "Access your donation history",
    link: "/portal",
  },
];

export function QuickActions() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Quick Actions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with blood donation in just a few clicks
            </p>
          </div>

          {/* Main Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card
                  key={action.title}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                    <Button
                      className={`w-full ${action.color} ${action.hoverColor} text-white`}
                    >
                      {action.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* App Download Section */}
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Smartphone className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Get the LifeBlood Mobile App
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Schedule donations, track your impact, find nearby drives, and
                get reminders - all in one convenient app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3">
                  <Download className="h-5 w-5 mr-2" />
                  Download for iOS
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3">
                  <Download className="h-5 w-5 mr-2" />
                  Download for Android
                </Button>
              </div>
              <div className="text-sm opacity-75">
                Available on App Store and Google Play
              </div>
            </div>
          </div>

          {/* Additional Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card
                  key={action.title}
                  className="group hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                        <Icon className="h-6 w-6 text-gray-600 group-hover:text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                          {action.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {action.description}
                        </p>
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
  );
}
