import React from "react";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team-hero-bg.svg"
            alt="Resources Background"
            fill
            className="object-cover brightness-95"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Resources
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Explore inspiring stories, stay updated with our latest news,
              access media resources, and download educational materials to
              support our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-red-600">50+</div>
                <div className="text-gray-200">Success Stories</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-red-600">100+</div>
                <div className="text-gray-200">Media Resources</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <div className="text-3xl font-bold text-red-600">20+</div>
                <div className="text-gray-200">Educational Materials</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">{children}</div>
    </main>
  );
}
