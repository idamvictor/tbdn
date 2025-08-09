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
  Handshake,
  Building,
  DollarSign,
  Users,
  Award,
  CheckCircle,
  FileText,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { heroImages } from "@/constants/images";

export function PartnerPage() {
  const partnershipTypes = [
    {
      icon: Building,
      title: "Strategic Partnership",
      description: "Long-term collaboration for sustainable impact",
      benefits: [
        "Joint program development",
        "Shared resources and expertise",
        "Co-branded initiatives",
        "Regular impact reporting",
      ],
    },
    {
      icon: Users,
      title: "Implementation Partnership",
      description: "Direct involvement in blood drive execution",
      benefits: [
        "Host blood drives at your location",
        "Employee volunteer programs",
        "Awareness campaigns",
        "Community engagement",
      ],
    },
    {
      icon: DollarSign,
      title: "Funding Partnership",
      description: "Financial support for our life-saving mission",
      benefits: [
        "Tax-deductible donations",
        "Recognition and branding",
        "Impact measurement reports",
        "CSR documentation",
      ],
    },
  ];

  const partnerBenefits = [
    "Enhanced corporate social responsibility profile",
    "Employee engagement and team building opportunities",
    "Community impact and brand visibility",
    "Tax benefits and CSR compliance",
    "Access to health and wellness programs",
    "Networking with other partner organizations",
  ];

  const currentPartners = [
    {
      name: "Lagos State Hospital",
      type: "Healthcare",
      logo: heroImages.slide3,
    },
    {
      name: "University of Lagos",
      type: "Educational",
      logo: heroImages.slide4,
    },
    {
      name: "MTN Nigeria",
      type: "Corporate",
      logo: heroImages.slide5,
    },
    {
      name: "Red Cross Nigeria",
      type: "NGO",
      logo: heroImages.slide1,
    },
    {
      name: "Dangote Foundation",
      type: "Foundation",
      logo: heroImages.slide2,
    },
    {
      name: "First Bank Nigeria",
      type: "Financial",
      logo: heroImages.slide3,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
          <div className="space-y-6">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-white/30"
            >
              Partnership Opportunities
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Partner with TBDN
            </h2>
            <p className="text-xl text-green-100">
              Join forces with us to create lasting impact in healthcare and
              save lives through strategic partnerships and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50"
              >
                <Handshake className="h-5 w-5 mr-2" />
                Become a Partner
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Download Partnership Guide
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={heroImages.slide2}
              alt="Partnership collaboration"
              width={500}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Partnership Types</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the partnership model that best aligns with your
            organization&apos;s goals and capabilities.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Benefits:</p>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits of Partnership */}
      <section className="bg-green-50 rounded-2xl p-8">
        <div className="text-center space-y-4 mb-8">
          <h3 className="text-3xl font-bold">Why Partner with TBDN?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partnering with us offers numerous benefits for your organization
            and community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {partnerBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-lg"
            >
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Current Partners */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Our Partners</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re proud to work with leading organizations across various
            sectors.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {currentPartners.map((partner, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="mx-auto mb-3 object-contain"
                />
                <h4 className="font-medium text-sm">{partner.name}</h4>
                <Badge variant="secondary" className="mt-2 text-xs">
                  {partner.type}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partnership Application Form */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Partnership Application</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to partner with us? Fill out this form and we&apos;ll get back
            to you within 48 hours.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Apply for Partnership</CardTitle>
            <CardDescription>
              Tell us about your organization and how you&apos;d like to
              collaborate with TBDN.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="org-name">Organization Name *</Label>
                <Input id="org-name" placeholder="Enter organization name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-type">Organization Type *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select organization type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporate">Corporate</SelectItem>
                    <SelectItem value="ngo">NGO/Non-profit</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="educational">Educational</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="foundation">Foundation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Contact Person *</Label>
                <Input id="contact-name" placeholder="Full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-title">Job Title *</Label>
                <Input id="contact-title" placeholder="Job title" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email Address *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Phone Number *</Label>
                <Input id="contact-phone" placeholder="Phone number" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="org-address">Organization Address</Label>
              <Textarea
                id="org-address"
                placeholder="Complete address"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label>Partnership Interest *</Label>
              <div className="grid md:grid-cols-3 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="strategic" />
                  <Label htmlFor="strategic" className="text-sm">
                    Strategic Partnership
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="implementation" />
                  <Label htmlFor="implementation" className="text-sm">
                    Implementation Partnership
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="funding" />
                  <Label htmlFor="funding" className="text-sm">
                    Funding Partnership
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="org-description">
                Organization Description *
              </Label>
              <Textarea
                id="org-description"
                placeholder="Brief description of your organization, mission, and activities"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="partnership-goals">Partnership Goals *</Label>
              <Textarea
                id="partnership-goals"
                placeholder="What do you hope to achieve through this partnership?"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resources">Available Resources</Label>
              <Textarea
                id="resources"
                placeholder="What resources can your organization contribute? (funding, venues, volunteers, expertise, etc.)"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Preferred Timeline</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="When would you like to start?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediately</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="3-months">Within 3 months</SelectItem>
                  <SelectItem value="6-months">Within 6 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional-info">Additional Information</Label>
              <Textarea
                id="additional-info"
                placeholder="Any additional information you'd like to share"
                rows={3}
              />
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">
              Submit Partnership Application
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Partnership Guidelines */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <div className="text-center space-y-4 mb-8">
          <h3 className="text-3xl font-bold">Partnership Guidelines</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Important information for potential partners.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Partnership Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span className="text-sm">
                  Alignment with TBDN&apos;s mission and values
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span className="text-sm">Commitment to ethical practices</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span className="text-sm">Clear partnership objectives</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <span className="text-sm">Measurable impact goals</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Partnership Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">
                  1
                </span>
                <span className="text-sm">
                  Application review (5-7 business days)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">
                  2
                </span>
                <span className="text-sm">Initial consultation meeting</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">
                  3
                </span>
                <span className="text-sm">
                  Partnership proposal development
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5">
                  4
                </span>
                <span className="text-sm">Agreement signing and launch</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-green-600 text-white rounded-2xl p-8">
        <div className="text-center space-y-4 mb-8">
          <h3 className="text-2xl font-bold">Ready to Partner?</h3>
          <p className="text-green-100">
            Get in touch with our partnership team to discuss opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <Mail className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-semibold">Email Us</h4>
            <p className="text-green-100 text-sm">partnerships@tbdn.org</p>
          </div>
          <div className="space-y-2">
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-semibold">Call Us</h4>
            <p className="text-green-100 text-sm">+234 800 TBDN HELP</p>
          </div>
          <div className="space-y-2">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-semibold">Visit Us</h4>
            <p className="text-green-100 text-sm">Lagos, Nigeria</p>
          </div>
        </div>
      </section>
    </div>
  );
}
