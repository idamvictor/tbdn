import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export function SocialLinks() {
  const socialPlatforms = [
    { name: "Facebook", icon: Facebook, url: "#", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:bg-sky-500" },
    { name: "Instagram", icon: Instagram, url: "#", color: "hover:bg-pink-600" },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:bg-red-600" },
    { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:bg-blue-700" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-red-800">Follow Us</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">
          Stay connected with us on social media for the latest updates, campaigns, and donor stories.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {socialPlatforms.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              className={`flex items-center space-x-2 ${platform.color} hover:text-white transition-colors`}
              asChild
            >
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                <platform.icon className="h-4 w-4" />
                <span className="text-sm">{platform.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
