"use client";
import { useEffect, useState, useRef } from "react";
import {
  Heart,
  Droplets,
  Users,
  Building,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
} from "lucide-react";
import { motion, easeOut, easeInOut } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";

const impactStats = [
  {
    icon: Heart,
    label: "Lives Saved This Year",
    value: 15420,
    suffix: "",
    color: "text-red-600",
    bgColor: "bg-red-100",
    gradient: "from-red-500 to-pink-500",
    hoverGradient: "from-red-600 to-pink-600",
  },
  {
    icon: Droplets,
    label: "Total Blood Units Collected",
    value: 89340,
    suffix: "",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Users,
    label: "Active Registered Donors",
    value: 12567,
    suffix: "+",
    color: "text-green-600",
    bgColor: "bg-green-100",
    gradient: "from-green-500 to-emerald-500",
    hoverGradient: "from-green-600 to-emerald-600",
  },
  {
    icon: Building,
    label: "Partner Organizations",
    value: 234,
    suffix: "",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    gradient: "from-purple-500 to-violet-500",
    hoverGradient: "from-purple-600 to-violet-600",
  },
  {
    icon: Calendar,
    label: "Blood Drives This Month",
    value: 45,
    suffix: "",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    gradient: "from-orange-500 to-red-500",
    hoverGradient: "from-orange-600 to-red-600",
  },
  {
    icon: MapPin,
    label: "Cities Reached",
    value: 28,
    suffix: "",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    gradient: "from-teal-500 to-cyan-500",
    hoverGradient: "from-teal-600 to-cyan-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
};

const numberVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export function ImpactStatistics() {
  const [animatedValues, setAnimatedValues] = useState(
    impactStats.map(() => 0)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

    if (isInView && !hasAnimated) {
      setTimeout(animateCounters, 500); // Delay to sync with entrance animation
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-br from-blue-200/20 to-red-200/20 rounded-full blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: easeInOut,
            }}
            style={{
              left: `${15 + i * 25}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div className="inline-block" whileHover={{ scale: 1.02 }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-red-600 bg-clip-text text-transparent leading-tight">
                Our Impact in Numbers
              </h2>
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Every donation makes a difference. Here&apos;s how our community
              has been saving lives together.
            </motion.p>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
          >
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="group relative"
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                    {/* Card Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Animated Border */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-sm`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative flex flex-col items-center text-center space-y-4 sm:space-y-6">
                      {/* Icon Container */}
                      <motion.div
                        className={`relative p-4 sm:p-5 ${stat.bgColor} rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Icon
                          className={`h-8 w-8 sm:h-10 sm:w-10 ${stat.color}`}
                        />

                        {/* Icon Glow Effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-30 blur-md -z-10`}
                          whileHover={{ scale: 1.3, opacity: 0.4 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>

                      {/* Statistics */}
                      <div className="space-y-2 sm:space-y-3">
                        <motion.div
                          className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                          variants={numberVariants}
                          initial="hidden"
                          animate={hasAnimated ? "visible" : "hidden"}
                          transition={{ delay: index * 0.1 }}
                        >
                          {animatedValues[index].toLocaleString()}
                          {stat.suffix}
                        </motion.div>
                        <motion.div
                          className="text-gray-700 font-medium text-base sm:text-lg group-hover:text-gray-800 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {stat.label}
                        </motion.div>
                      </div>

                      {/* Progress Indicator */}
                      <motion.div
                        className={`absolute bottom-0 left-1/2 h-1 bg-gradient-to-r ${stat.gradient} rounded-full`}
                        initial={{ width: 0, x: "-50%" }}
                        whileHover={{ width: "90%", x: "-50%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div variants={itemVariants}>
            <div className="relative bg-gradient-to-r from-red-600 via-pink-600 to-red-700 rounded-3xl p-8 sm:p-10 md:p-12 text-white overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />

              {/* Floating Icons */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 text-white/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-4 text-white/20"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              </div>

              <div className="relative text-center space-y-6 sm:space-y-8">
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold"
                  whileHover={{ scale: 1.02 }}
                >
                  Join Our Growing Community
                </motion.h3>
                <motion.p
                  className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  Be part of something bigger. Your donation today becomes
                  someone&apos;s tomorrow.
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4">
                  <motion.button
                    className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center space-x-2">
                      <Heart className="h-5 w-5" />
                      <span>
                        <Link href="/contact"> Become a Donor</Link>
                      </span>
                    </span>
                  </motion.button>
                  <motion.button
                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact">Learn More</Link>
                  </motion.button>
                </div>
                .
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
