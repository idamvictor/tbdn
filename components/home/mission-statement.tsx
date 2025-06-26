"use client";

import { Heart, Shield, Users, Globe, Zap, Award } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We care deeply about every life we touch",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Highest standards in blood collection and testing",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong networks of donors and volunteers",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making blood donation accessible to everyone",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Using technology to improve donation experience",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest quality in everything we do",
  },
];

export function MissionStatement() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Mission Statement */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              To save lives by connecting voluntary blood donors with those in
              need, while educating communities about the importance of regular
              blood donation. We believe every person deserves access to safe,
              life-saving blood when they need it most.
            </p>
          </div>

          {/* Core Values */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 bg-red-100 rounded-full group-hover:bg-red-200 transition-colors">
                        <Icon className="h-8 w-8 text-red-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
