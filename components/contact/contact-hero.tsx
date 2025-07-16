import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl md:text-2xl mb-8 text-red-100">
          We&apos;re here to help you save lives through blood donation
        </p>

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <Phone className="h-8 w-8 text-red-200" />
            <span className="text-sm font-medium">24/7 Hotline</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Mail className="h-8 w-8 text-red-200" />
            <span className="text-sm font-medium">Email Support</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="h-8 w-8 text-red-200" />
            <span className="text-sm font-medium">Multiple Locations</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Clock className="h-8 w-8 text-red-200" />
            <span className="text-sm font-medium">Always Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
