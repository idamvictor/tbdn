"use client";

import { motion } from "framer-motion";
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardHoverVariants = {
  hover: {
    scale: 1.03,
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const iconHoverVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
};

const additionalCardHoverVariants = {
  hover: {
    x: 5,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
  },
};

export function QuickActions() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Section Header */}
          <motion.div className="text-center space-y-4" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Quick Actions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with blood donation in just a few clicks
            </p>
          </motion.div>

          {/* Main Quick Actions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.title}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial="initial"
                  animate="animate"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <motion.div
                    variants={cardHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="h-full"
                  >
                    <Card className="group border border-gray-100 rounded-xl overflow-hidden h-full">
                      <CardContent className="p-6 text-center space-y-4">
                        <motion.div
                          className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center mx-auto transition-transform`}
                          variants={iconHoverVariants}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </motion.div>
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
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* App Download Section */}
          <motion.div
            className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white text-center"
            variants={itemVariants}
          >
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex justify-center">
                <motion.div
                  className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Smartphone className="h-10 w-10" />
                </motion.div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Get the LifeBlood Mobile App
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Schedule donations, track your impact, find nearby drives, and
                get reminders - all in one convenient app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3">
                    <Download className="h-5 w-5 mr-2" />
                    Download for iOS
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3">
                    <Download className="h-5 w-5 mr-2" />
                    Download for Android
                  </Button>
                </motion.div>
              </div>
              <div className="text-sm opacity-75">
                Available on App Store and Google Play
              </div>
            </div>
          </motion.div>

          {/* Additional Actions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {additionalActions.map((action) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.title}
                  variants={itemVariants}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <motion.div
                    variants={additionalCardHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="h-full"
                  >
                    <Card className="group border border-gray-100 rounded-xl overflow-hidden h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                            variants={additionalCardHoverVariants}
                          >
                            <Icon className="h-6 w-6 text-gray-600 group-hover:text-red-600" />
                          </motion.div>
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
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
