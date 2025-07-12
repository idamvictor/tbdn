"use client";

import { useEffect, useState } from "react";
import { Heart, Droplets } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Welcome to TBDN
          </h1>
          <p className="text-gray-600">Ready to save lives together</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Droplets className="w-8 h-8 text-white" />
          </div>
        ))}
      </div>

      {/* Main loading content */}
      <div className="text-center z-10 relative">
        {/* Logo/Icon area */}
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <Heart
              className="w-20 h-20 text-white animate-pulse mx-auto mb-4"
              fill="currentColor"
            />
            <div className="absolute inset-0 animate-ping">
              <Heart
                className="w-20 h-20 text-white opacity-30"
                fill="currentColor"
              />
            </div>
          </div>

          {/* Blood drops animation */}
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-4 bg-white rounded-full animate-bounce opacity-80"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                }}
              />
            ))}
          </div>
        </div>

        {/* TBDN Text */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-2 tracking-wider animate-fade-in-up">
            TBDN
          </h1>
          <p className="text-xl text-red-100 animate-fade-in-up animation-delay-300">
            Together Building Dreams Network
          </p>
          <p className="text-sm text-red-200 mt-2 animate-fade-in-up animation-delay-500">
            Every Drop Counts • Every Life Matters
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-white text-sm mb-2">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-red-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Motivational text */}
        <div className="mt-8 animate-fade-in-up animation-delay-700">
          <p className="text-red-100 text-sm">
            {progress < 30 && "Connecting hearts..."}
            {progress >= 30 && progress < 60 && "Preparing to save lives..."}
            {progress >= 60 && progress < 90 && "Building hope together..."}
            {progress >= 90 && "Almost ready to make a difference..."}
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
