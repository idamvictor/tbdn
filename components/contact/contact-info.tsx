import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["123 Life Avenue, Victoria Island", "Lagos State, Nigeria", "Postal Code: 101241"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Main: +234-1-234-5678", "Donor Services: +234-1-234-5679", "Partnerships: +234-1-234-5680"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@tbdn.org", "donors@tbdn.org", "partnerships@tbdn.org"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency only"],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-red-800">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex space-x-4">
            <div className="bg-red-100 p-2 rounded-lg">
              <item.icon className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
