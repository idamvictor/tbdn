import React from "react";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/volunteer-hero-bg.svg"
            alt="Volunteer Background"
            fill
            className="object-cover brightness-95"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Get Involved
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed px-4 sm:px-0">
              Join our mission to save lives through blood donation. Whether you
              want to donate, volunteer, or partner with us, there&apos;s a
              place for you in our community.
            </p>
            <div className="flex  sm:flex-row gap-4 sm:gap-8 justify-center pt-6 sm:pt-8 px-4 sm:px-0">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all w-full sm:w-auto">
                <div className="text-2xl sm:text-3xl font-bold text-red-600">
                  5000+
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  Active Donors
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all w-full sm:w-auto">
                <div className="text-2xl sm:text-3xl font-bold text-red-600">
                  200+
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  Volunteers
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all w-full sm:w-auto">
                <div className="text-2xl sm:text-3xl font-bold text-red-600">
                  50+
                </div>
                <div className="text-sm sm:text-base text-gray-700">
                  Partner Hospitals
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {children}
      </div>
    </main>
  );
}
