"use client";

// import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  Users,
  CheckCircle,
  Smartphone,
  Download,
  QrCode,
  ArrowRight,
  Clock,
  Phone,
} from "lucide-react";
import { EligibilityChecker } from "./eligibility-checker";
import { DonorRegistrationForm } from "./donor-registration-form";
import { FAQSection } from "./faq-section";
import { heroImages } from "@/constants/images";

export function BecomeDonorPage() {
  //   const [currentStep, setCurrentStep] = useState(0);

  const benefits = [
    {
      icon: Heart,
      title: "Save Lives",
      description: "One donation can save up to 3 lives",
    },
    {
      icon: Shield,
      title: "Health Benefits",
      description: "Regular health checkups and iron level monitoring",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Be part of a life-saving community",
    },
  ];

  const donationSteps = [
    {
      step: 1,
      title: "Register Online",
      description: "Complete your donor profile and health screening",
      icon: Smartphone,
    },
    {
      step: 2,
      title: "Health Screening",
      description: "Quick health check and eligibility verification",
      icon: Shield,
    },
    {
      step: 3,
      title: "Donation Process",
      description: "Safe and comfortable donation experience",
      icon: Heart,
    },
    {
      step: 4,
      title: "Post-Donation Care",
      description: "Rest, refreshments, and recovery monitoring",
      icon: Clock,
    },
    {
      step: 5,
      title: "Follow-up & Recognition",
      description: "Health updates and donor appreciation",
      icon: CheckCircle,
    },
  ];

  const preparationTips = {
    before: [
      "Get a good night's sleep",
      "Eat a healthy meal",
      "Drink plenty of water",
      "Bring a valid ID",
      "Avoid alcohol for 24 hours",
    ],
    during: [
      "Relax and stay calm",
      "Inform staff of any discomfort",
      "Keep your arm straight",
      "Squeeze the stress ball regularly",
    ],
    after: [
      "Rest for 10-15 minutes",
      "Drink fluids and eat snacks",
      "Avoid heavy lifting for 24 hours",
      "Keep the bandage on for 4 hours",
    ],
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
          <div className="space-y-6">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-white/30"
            >
              Join the Life-Saving Movement
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Your Blood Can Save Lives
            </h2>
            <p className="text-xl text-red-100">
              Every 2 seconds, someone needs blood. Your donation can be the
              difference between life and death for patients in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50"
              >
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Check Eligibility
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={heroImages.slide3}
              alt="Blood donation hero"
              width={500}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Why Donate Blood?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Blood donation is not just about helping others - it comes with
            personal benefits too.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Donation Process</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures a safe and comfortable experience
            for every donor.
          </p>
        </div>
        <div className="space-y-6">
          {donationSteps.map((step, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant="outline"
                        className="text-red-600 border-red-600"
                      >
                        Step {step.step}
                      </Badge>
                      <h4 className="text-xl font-semibold">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < donationSteps.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Eligibility Checker */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Check Your Eligibility</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take our quick assessment to see if you&apos;re eligible to donate
            blood.
          </p>
        </div>
        <EligibilityChecker />
      </section>

      {/* Registration Form */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Register as a Donor</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete your registration to join our community of life-savers.
          </p>
        </div>
        <DonorRegistrationForm />
      </section>

      {/* LifeBlood App Integration */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-red-600 text-white">
              Mobile App
            </Badge>
            <h3 className="text-3xl font-bold">Download LifeBlood App</h3>
            <p className="text-muted-foreground text-lg">
              Manage your donations, find nearby drives, and track your impact
              with our mobile app.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Schedule donation appointments</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Find nearby blood drives</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Track your donation history</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Receive donation reminders</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                <Download className="h-5 w-5 mr-2" />
                Download for iOS
              </Button>
              <Button variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Download for Android
              </Button>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
              <QrCode className="h-32 w-32 text-red-600 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                Scan QR code to download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Preparation Tips</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these guidelines to ensure a smooth donation experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-red-600" />
                Before Donation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {preparationTips.before.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                During Donation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {preparationTips.during.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                After Donation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {preparationTips.after.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Emergency Contact */}
      <section className="bg-red-600 text-white rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Need Blood Urgently?</h3>
        <p className="text-red-100 mb-6">
          For emergency blood requests, contact us immediately.
        </p>
        <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
          <Phone className="h-5 w-5 mr-2" />
          Emergency Contact
        </Button>
      </section>
    </div>
  );
}
