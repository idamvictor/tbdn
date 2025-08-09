import React from "react";
import Image from "next/image";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <main>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/volunteer-hero-bg.svg"
            alt="Programs Background"
            fill
            className="object-cover brightness-95"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 drop-shadow-sm">
              Our Programs
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
              Discover our comprehensive programs designed to save lives,
              educate communities, and build a sustainable blood donation
              ecosystem across Nigeria.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 max-w-3xl mx-auto">
              <div className="text-center bg-white/20 backdrop-blur-md rounded-xl p-5 hover:bg-white/30 transition-all duration-300 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">
                  100+
                </div>
                <div className="text-gray-800 font-medium">Blood Drives</div>
              </div>
              <div className="text-center bg-white/20 backdrop-blur-md rounded-xl p-5 hover:bg-white/30 transition-all duration-300 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">
                  10K+
                </div>
                <div className="text-gray-800 font-medium">Lives Saved</div>
              </div>
              <div className="text-center bg-white/20 backdrop-blur-md rounded-xl p-5 hover:bg-white/30 transition-all duration-300 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">
                  30+
                </div>
                <div className="text-gray-800 font-medium">
                  Educational Events
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">{children}</div>
    </main>
  );
}
