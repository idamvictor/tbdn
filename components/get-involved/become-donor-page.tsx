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
  ArrowRight,
  Clock,
  Phone,
} from "lucide-react";
import { EligibilityChecker } from "./eligibility-checker";
import { DonorRegistrationForm } from "./donor-registration-form";
import { FAQSection } from "./faq-section";

export function BecomeDonorPage() {
  //   const [currentStep, setCurrentStep] = useState(0);

  const benefits = [
    {
      icon: Heart,
      title: "Save Lives",
      description:
        "• One donation can save up to 3 lives\n• Your blood is needed every 2 seconds by someone\n• Helps in emergency trauma cases\n• Supports complex medical procedures\n• Provides hope for chronic blood disorder patients\n• Essential for cancer treatment support",
    },
    {
      icon: Shield,
      title: "Health Benefits",
      description:
        '• Regular health checkups (BP, weight, blood levels, HIV/Hepatitis/Syphilis/Other blood infections screening test) for FREE\n• Improved Cardiovascular health - better blood flow, less heart diseases, production of new blood cells\n• Less risk of blood cancers\n• Strengthened immune system\n• Improved mental and emotional well-being (triggers the "feel-good" hormone)\n• Helps with weight control',
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "• Save lives of vulnerable populations and critical care patients (sickle cell anemia, postpartum bleeding, cancer, road traffic accidents, surgical procedures, immune deficiencies, bleeding disorders)\n• Be part of a Life-saving community making a difference\n• Get blood donation support when in need, for self or family",
    },
  ];

  const donationSteps = [
    {
      step: 1,
      title: "Indicate Donation Interest",
      description:
        "Connect with TBDN's Donor Support team to confirm location, eligibility, and intended donation date",
      icon: Smartphone,
      actions: [
        {
          label: "Donor Support 1",
          link: "https://wa.me/2348107195079",
          type: "whatsapp",
        },
        {
          label: "Donor Support 2",
          link: "https://wa.me/2348153146897",
          type: "whatsapp",
        },
      ],
    },
    {
      step: 2,
      title: "Select Nearest Donation Centre",
      description:
        "Choose your nearest blood donation center, hospital, or blood bank",
      icon: Shield,
      actions: [
        {
          label: "Nigeria",
          link: "https://bit.ly/3gksy5R",
          type: "link",
        },
        {
          label: "Tanzania",
          link: "https://zfrmz.com/tXsp4DEvMz9BESV3yQZv",
          type: "link",
        },
        {
          label: "Kenya",
          link: "https://zfrmz.com/tXsp4DEvMz9BESV3yQZv",
          type: "link",
        },
        {
          label: "Uganda",
          link: "https://zfrmz.com/tXsp4DEvMz9BESV3yQZv",
          type: "link",
        },
      ],
    },
    {
      step: 3,
      title: "Health Screening",
      description:
        "Health check and donor eligibility verification at the blood bank. TBDN support team is available if you need help with the process",
      icon: Heart,
    },
    {
      step: 4,
      title: "Donation Process",
      description:
        "Safe and comfortable donation experience. Don't forget to take pictures - you're our hero!",
      icon: Clock,
    },
    {
      step: 5,
      title: "Post-Donation Care",
      description:
        "15-20 mins rest required, no strenuous activity for the rest of the day. Recovery monitoring and essential refreshments/fluid hydration provided",
      icon: CheckCircle,
    },
    {
      step: 6,
      title: "Register Your Life-saving Moment",
      description:
        "Complete your donor profile and join our community of life-savers",
      icon: Users,
      actions: [
        {
          label: "Register Now",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSeYjeAD7IqqxS3su4Ft-4ZTUZ_Ab3LwZqK6F1Mpfke4THXYEw/viewform",
          type: "link",
        },
      ],
    },
    {
      step: 7,
      title: "Follow-up and Recognition",
      description:
        "Share your donation pictures, receive your donor badge and E-Donor card. Our team provides regular check-ins, quarterly donation reminders, health updates, and notifications about upcoming drives and wellness programs",
      icon: Shield,
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
      "If tensed, you can distract yourself by watching interesting video clips, streaming music on your phone or reading your favorite book",
      "Inform staff of any discomfort",
      "Keep your arm straight",
      "Squeeze the stress ball regularly",
    ],
    after: [
      "Rest for 15 - 20 mins before leaving the donation premises",
      "Drink fluids and eat some additional snacks/food",
      "Avoid heavy lifting or any stressful activity for the next 24 hours",
      "Report back to the donation center if any discomfort or abnormal feeling. You can also contact our donor support team",
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
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dyp8gtllq/image/upload/v1762313883/WhatsApp_Image_2025-10-20_at_01.39.14_af3108c2_gpq6sj.jpg"
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
                {benefit.description.includes("•") ? (
                  <ul className="text-left text-muted-foreground space-y-2">
                    {benefit.description.split("\n").map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="flex-shrink-0">
                          {item.slice(0, 1)}
                        </span>
                        <span>{item.slice(2)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{benefit.description}</p>
                )}
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
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    {step.actions && (
                      <div className="flex flex-wrap gap-3 mt-2">
                        {step.actions.map((action, actionIndex) => (
                          <a
                            key={actionIndex}
                            href={action.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              className={
                                action.type === "whatsapp"
                                  ? "bg-green-500 text-white hover:bg-green-600 border-0"
                                  : "bg-red-100 text-red-600 hover:bg-red-200"
                              }
                            >
                              {action.type === "whatsapp" && (
                                <Phone className="h-4 w-4 mr-2" />
                              )}
                              {action.label}
                            </Button>
                          </a>
                        ))}
                      </div>
                    )}
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
          For emergency blood requests, contact us immediately through WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/2347046727740"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 w-full sm:w-auto"
            >
              <Phone className="h-5 w-5 mr-2" />
              Emergency Contact 1
            </Button>
          </a>
          <a
            href="https://wa.me/2348107195079"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 w-full sm:w-auto"
            >
              <Phone className="h-5 w-5 mr-2" />
              Emergency Contact 2
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
