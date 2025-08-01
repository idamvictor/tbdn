import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { EmergencyContact } from "@/components/contact/emergency-contact";
import { OfficeLocations } from "@/components/contact/office-locations";
import { SocialLinks } from "@/components/contact/social-links";
import { WhatsAppChat } from "@/components/contact/whatsapp-chat";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-indigo-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-slate-200 rounded-full opacity-15 blur-xl"></div>
      </div>

      <ContactHero />

      <div className="container mx-auto px-4 py-16 space-y-20 relative z-10">
        {/* Emergency Contact - Priority Section */}
        <div className="animate-fade-in-up">
          <EmergencyContact />
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 animate-fade-in-up animation-delay-200">
          <div className="space-y-10">
            <ContactInfo />
            <SocialLinks />
          </div>
          <div className="lg:sticky lg:top-8">
            <ContactForm />
          </div>
        </div>

        {/* Office Locations with Map */}
        <div className="animate-fade-in-up animation-delay-400">
          <OfficeLocations />
        </div>
      </div>

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />
    </div>
  );
}
