"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Users,
  Calendar,
  Heart,
  Megaphone,
  GraduationCap,
  Clock,
  MapPin,
  Award,
} from "lucide-react";
import { heroImages } from "@/constants/images";

export function VolunteerPage() {
  const opportunities = [
    {
      icon: Calendar,
      title: "Event Coordination",
      description: "Help organize and manage blood drive events",
      commitment: "4-8 hours per event",
      skills: ["Organization", "Communication", "Time Management"],
    },
    {
      icon: Users,
      title: "Registration Assistant",
      description: "Assist donors with registration and check-in process",
      commitment: "3-6 hours per drive",
      skills: ["Customer Service", "Data Entry", "Patience"],
    },
    {
      icon: Heart,
      title: "Donor Care",
      description: "Provide comfort and support to donors during donation",
      commitment: "4-6 hours per drive",
      skills: ["Empathy", "First Aid", "Communication"],
    },
    {
      icon: Megaphone,
      title: "Awareness Campaigns",
      description: "Promote blood donation through community outreach",
      commitment: "Flexible hours",
      skills: ["Public Speaking", "Social Media", "Marketing"],
    },
  ];

  const trainingSchedule = [
    {
      date: "January 15, 2024",
      title: "Volunteer Orientation",
      duration: "2 hours",
      location: "Lagos Main Center",
      type: "In-person",
    },
    {
      date: "January 22, 2024",
      title: "Donor Care Training",
      duration: "3 hours",
      location: "Online",
      type: "Virtual",
    },
    {
      date: "February 5, 2024",
      title: "Event Management Workshop",
      duration: "4 hours",
      location: "Abuja Center",
      type: "In-person",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
          <div className="space-y-6">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-white/30"
            >
              Make a Difference
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Volunteer with TBDN
            </h2>
            <p className="text-xl text-blue-100">
              Join our team of dedicated volunteers and help save lives in your
              community. Every hour you contribute makes a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Users className="h-5 w-5 mr-2" />
                Join Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={heroImages.slide1}
              alt="Volunteers at work"
              width={500}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Volunteer Opportunities</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from various volunteer roles that match your skills and
            availability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <opportunity.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">
                      {opportunity.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {opportunity.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{opportunity.commitment}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Skills needed:</p>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Apply for This Role
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Volunteer Registration Form */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Volunteer Registration</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out this form to join our volunteer team.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Join Our Volunteer Team</CardTitle>
            <CardDescription>
              We&apos;ll contact you within 48 hours to discuss volunteer
              opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vol-firstName">First Name *</Label>
                <Input id="vol-firstName" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vol-lastName">Last Name *</Label>
                <Input id="vol-lastName" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vol-email">Email Address *</Label>
                <Input
                  id="vol-email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vol-phone">Phone Number *</Label>
                <Input id="vol-phone" placeholder="Enter your phone number" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="vol-location">Preferred Location</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your preferred location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="abuja">Abuja</SelectItem>
                  <SelectItem value="kano">Kano</SelectItem>
                  <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Areas of Interest</Label>
              <div className="grid grid-cols-2 gap-2">
                {opportunities.map((opp, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`interest-${index}`} />
                    <Label htmlFor={`interest-${index}`} className="text-sm">
                      {opp.title}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="vol-availability">Availability</Label>
              <Textarea
                id="vol-availability"
                placeholder="Tell us about your availability (days, times, frequency)"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vol-experience">Relevant Experience</Label>
              <Textarea
                id="vol-experience"
                placeholder="Any relevant volunteer or professional experience (optional)"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vol-motivation">
                Why do you want to volunteer?
              </Label>
              <Textarea
                id="vol-motivation"
                placeholder="Tell us what motivates you to volunteer with TBDN"
                rows={3}
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Submit Application
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Training Schedule */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Training Schedule</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            All volunteers receive comprehensive training before starting their
            roles.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {trainingSchedule.map((training, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <Badge
                    variant={
                      training.type === "Virtual" ? "secondary" : "default"
                    }
                  >
                    {training.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{training.title}</CardTitle>
                <CardDescription>{training.date}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{training.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{training.location}</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 bg-transparent"
                >
                  Register
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Volunteer Resources */}
      <section className="bg-blue-50 rounded-2xl p-8">
        <div className="text-center space-y-4 mb-8">
          <h3 className="text-3xl font-bold">Volunteer Resources</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access helpful resources and materials for volunteers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Volunteer Handbook</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Complete guide for all volunteer activities and procedures.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Download PDF
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <GraduationCap className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Training Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access training videos, presentations, and resources.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Access Portal
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Volunteer Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with other volunteers and share experiences.
              </p>
              <Button variant="outline" className="w-full bg-transparent">
                Join Forum
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
