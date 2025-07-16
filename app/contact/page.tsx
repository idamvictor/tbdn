import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { EmergencyContact } from "@/components/contact/emergency-contact";
import { OfficeLocations } from "@/components/contact/office-locations";
import { SocialLinks } from "@/components/contact/social-links";
import { WhatsAppChat } from "@/components/contact/whatsapp-chat";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <ContactHero />

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Emergency Contact - Priority Section */}
        <EmergencyContact />

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
          <ContactForm />
        </div>

        {/* Office Locations with Map */}
        <OfficeLocations />
      </div>

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />
    </div>
  );
}
