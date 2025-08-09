import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-slate-400 rounded-full opacity-50 animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-fade-in text-sm sm:text-base">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
            <span className="text-slate-200 font-medium">
              Saving Lives Together
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            Get in Touch
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-slate-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            We&apos;re here to help you save lives through blood donation. Every
            contact matters, every donation counts.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                label: "24/7 Hotline",
                desc: "Always available",
                color: "bg-blue-500",
              },
              {
                icon: Mail,
                label: "Email Support",
                desc: "Quick responses",
                color: "bg-indigo-500",
              },
              {
                icon: MapPin,
                label: "Multiple Locations",
                desc: "Nationwide coverage",
                color: "bg-slate-500",
              },
              {
                icon: Clock,
                label: "Always Available",
                desc: "Emergency ready",
                color: "bg-teal-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div
                  className={`p-3 ${item.color} rounded-full group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <span className="text-sm font-semibold text-white block">
                    {item.label}
                  </span>
                  <span className="text-xs text-slate-300">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
