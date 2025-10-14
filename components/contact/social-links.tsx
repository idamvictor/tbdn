import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export function SocialLinks() {
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://linktr.ee/theblooddrivenetwork?utm_source=linktree_admin_share",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://linktr.ee/theblooddrivenetwork?utm_source=linktree_admin_share",
      color: "hover:bg-sky-500",
      bgColor: "bg-sky-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://linktr.ee/theblooddrivenetwork?utm_source=linktree_admin_share",
      color: "hover:bg-pink-600",
      bgColor: "bg-pink-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://linktr.ee/theblooddrivenetwork?utm_source=linktree_admin_share",
      color: "hover:bg-red-600",
      bgColor: "bg-red-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linktr.ee/theblooddrivenetwork?utm_source=linktree_admin_share",
      color: "hover:bg-blue-700",
      bgColor: "bg-blue-600",
    },
  ];

  return (
    <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-3xl font-bold text-slate-800">
          Follow Us
        </CardTitle>
        <p className="text-slate-600 mt-2">
          Stay connected with us on social media for the latest updates,
          campaigns, and inspiring donor stories.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {socialPlatforms.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              size="lg"
              className={`group flex items-center justify-start space-x-4 p-6 h-auto border-2 border-slate-200 hover:border-transparent ${platform.color} hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl`}
              asChild
            >
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                <div
                  className={`p-2 ${platform.bgColor} rounded-lg group-hover:bg-white/20 transition-colors duration-300`}
                >
                  <platform.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <span className="font-semibold block">{platform.name}</span>
                  <span className="text-sm opacity-70">Follow us</span>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
