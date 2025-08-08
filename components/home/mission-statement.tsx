"use client";
import { Heart, Shield, Users, Globe, Zap, Award } from "lucide-react";
import { motion, easeInOut } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We care deeply about every life we touch",
    color: "from-red-500 to-pink-500",
    iconColor: "text-red-600",
    bgColor: "bg-red-50",
    hoverBg: "group-hover:bg-red-100",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Highest standards in blood collection and testing",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-100",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong networks of donors and volunteers",
    color: "from-green-500 to-emerald-500",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
    hoverBg: "group-hover:bg-green-100",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making blood donation accessible to everyone",
    color: "from-purple-500 to-violet-500",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    hoverBg: "group-hover:bg-purple-100",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Using technology to improve donation experience",
    color: "from-yellow-500 to-orange-500",
    iconColor: "text-orange-600",
    bgColor: "bg-yellow-50",
    hoverBg: "group-hover:bg-yellow-100",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest quality in everything we do",
    color: "from-indigo-500 to-blue-500",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    hoverBg: "group-hover:bg-indigo-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
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
    scale: 0.9,
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

const iconVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};

export function MissionStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
      </div>

      {/* Optimized Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-red-200/10 to-pink-200/10 rounded-full blur-xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-10 sm:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Mission Statement */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={itemVariants}
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-700 bg-clip-text text-transparent leading-tight px-2">
                Our Mission
              </h2>
              <motion.div
                className="h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-6"
              variants={itemVariants}
            >
              To save lives by connecting voluntary blood donors with those in
              need, while educating communities about the importance of regular
              blood donation. We believe every person deserves access to safe,
              life-saving blood when they need it most.
            </motion.p>
          </motion.div>

          {/* Core Values */}
          <motion.div className="space-y-12" variants={itemVariants}>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent px-2">
                Our Core Values
              </h3>
              <motion.div
                className="h-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-4 mx-auto"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6"
              variants={containerVariants}
            >
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="group"
                    variants={cardVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="relative p-5 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden h-full">
                      {/* Card Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div className="relative flex flex-col items-center text-center space-y-4 sm:space-y-6">
                        {/* Icon Container */}
                        <motion.div
                          className={`relative p-3 sm:p-4 ${value.bgColor} ${value.hoverBg} rounded-xl sm:rounded-2xl transition-all duration-300 shadow-md group-hover:shadow-lg`}
                          variants={iconVariants}
                          whileHover="hover"
                        >
                          <Icon
                            className={`h-8 w-8 sm:h-10 sm:w-10 ${value.iconColor}`}
                          />

                          {/* Icon Glow Effect */}
                          <motion.div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 blur-md -z-10`}
                            whileHover={{ scale: 1.2, opacity: 0.3 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>

                        {/* Content */}
                        <div className="space-y-3">
                          <motion.h4
                            className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            {value.title}
                          </motion.h4>
                          <motion.p
                            className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {value.description}
                          </motion.p>
                        </div>

                        {/* Hover Accent Line */}
                        <motion.div
                          className={`absolute bottom-0 left-1/2 h-1 bg-gradient-to-r ${value.color} rounded-full`}
                          initial={{ width: 0, x: "-50%" }}
                          whileHover={{ width: "80%", x: "-50%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="pt-8 sm:pt-12" variants={itemVariants}>
            <motion.button
              className="inline-flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base sm:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
              <span>Join Our Mission Today</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
