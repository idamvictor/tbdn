import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: [
        "123 Life Avenue, Victoria Island",
        "Lagos State, Nigeria",
        "Postal Code: 101241",
      ],
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main: +234-1-234-5678",
        "Donor Services: +234-1-234-5679",
        "Partnerships: +234-1-234-5680",
      ],
      color: "bg-teal-500",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@tbdn.org", "donors@tbdn.org", "partnerships@tbdn.org"],
      color: "bg-indigo-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Emergency only",
      ],
      color: "bg-slate-500",
    },
  ];

  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-3xl font-bold text-slate-800">
          Contact Information
        </CardTitle>
        <p className="text-slate-600 mt-2">
          Multiple ways to reach us for your convenience
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="group flex space-x-6 p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-100 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <div
              className={`${item.color} p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
            >
              <item.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 mb-3 text-lg">
                {item.title}
              </h3>
              <div className="space-y-1">
                {item.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-slate-600 hover:text-slate-800 transition-colors duration-200"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
