import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main: +234 704 672 7740",
        "Main: +234 810 487 0657",
        "Donor Services: +234 810 719 5079",
        "Donor Services: +234 812 197 6850",
        "Partnerships: +234 704 672 7740",
      ],
      color: "bg-teal-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["theblooddrivenetwork@gmail.com"],
      color: "bg-indigo-500",
    },
    {
      icon: Clock,
      title: "Operation Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday & Sunday: Open to Emergency requests",
      ],
      color: "bg-slate-500",
    },
    {
      icon: Clock,
      title: "Office Notes",
      details: [
        "Team primarily domiciled in Ibadan, Oyo State",
        "No physical headquarters yet",
      ],
      color: "bg-slate-400",
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
