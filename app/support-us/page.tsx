"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  DollarSign,
  Users,
  Building,
  GraduationCap,
  Shield,
  Stethoscope,
  CreditCard,
  Smartphone,
  Building2,
  FileText,
  Award,
  Star,
  Trophy,
  Crown,
} from "lucide-react";

export default function SupportUsPage() {
  const [activeTab, setActiveTab] = useState("donate");

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your support helps us save lives through blood donation advocacy,
            education, and community outreach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-red-600">
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="donate">Donate</TabsTrigger>
            <TabsTrigger value="transparency">Transparency</TabsTrigger>
            <TabsTrigger value="recognition">Recognition</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="corporate">Corporate</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          {/* Donation Tab */}
          <TabsContent value="donate" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Donation Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-600" />
                    Make a Donation
                  </CardTitle>
                  <CardDescription>
                    Choose your donation amount and frequency
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Donation Type */}
                  <div className="space-y-3">
                    <Label>Donation Type</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        className="h-auto p-4 flex flex-col bg-transparent"
                      >
                        <DollarSign className="h-6 w-6 mb-2" />
                        One-time
                      </Button>
                      <Button
                        variant="outline"
                        className="h-auto p-4 flex flex-col bg-transparent"
                      >
                        <Heart className="h-6 w-6 mb-2" />
                        Monthly
                      </Button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-3">
                    <Label>Amount (USD)</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {[25, 50, 100, 250, 500, 1000].map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          className="h-12 bg-transparent"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <Input placeholder="Custom amount" type="number" />
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message of support..."
                    />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Proceed to Payment
                  </Button>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <CreditCard className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Credit/Debit Card</p>
                        <p className="text-sm text-gray-600">
                          Visa, Mastercard, American Express
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Building2 className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Bank Transfer</p>
                        <p className="text-sm text-gray-600">
                          Direct bank transfer
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Smartphone className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Mobile Money</p>
                        <p className="text-sm text-gray-600">
                          MTN, Airtel, Vodafone
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Bank Transfer Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bank Name:</span>
                      <span className="font-medium">Ghana Commercial Bank</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Name:</span>
                      <span className="font-medium">TBDN Foundation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Number:</span>
                      <span className="font-medium">1234567890</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Swift Code:</span>
                      <span className="font-medium">GHCBGHAC</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Transparency Tab */}
          <TabsContent value="transparency" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Financial Transparency
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe in complete transparency about how your donations are
                used to save lives and strengthen our communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Fund Allocation */}
              <Card>
                <CardHeader>
                  <CardTitle>How Your Funds Are Used</CardTitle>
                  <CardDescription>
                    Breakdown of our 2024 expenditure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Program Services</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-3" />
                      <p className="text-sm text-gray-600 mt-1">
                        Direct blood donation programs and education
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Administrative Costs</span>
                        <span className="font-medium">15%</span>
                      </div>
                      <Progress value={15} className="h-3" />
                      <p className="text-sm text-gray-600 mt-1">
                        Operations, staff, and infrastructure
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Fundraising</span>
                        <span className="font-medium">10%</span>
                      </div>
                      <Progress value={10} className="h-3" />
                      <p className="text-sm text-gray-600 mt-1">
                        Marketing and donor engagement
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full bg-transparent">
                      <FileText className="h-4 w-4 mr-2" />
                      Download Annual Report
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Impact Numbers */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Impact in 2024</CardTitle>
                  <CardDescription>
                    What your support has achieved
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        15,000+
                      </div>
                      <p className="text-sm text-gray-600">Lives Saved</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        500+
                      </div>
                      <p className="text-sm text-gray-600">Blood Drives</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        50,000+
                      </div>
                      <p className="text-sm text-gray-600">People Educated</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        200+
                      </div>
                      <p className="text-sm text-gray-600">
                        Partner Organizations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why We Need Support */}
            <Card>
              <CardHeader>
                <CardTitle>Why We Need Your Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Stethoscope className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Medical Equipment</h3>
                    <p className="text-sm text-gray-600">
                      Mobile blood collection units, testing equipment, and
                      storage facilities
                    </p>
                  </div>
                  <div className="text-center">
                    <GraduationCap className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Education Programs</h3>
                    <p className="text-sm text-gray-600">
                      Community outreach, school programs, and awareness
                      campaigns
                    </p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Staff & Training</h3>
                    <p className="text-sm text-gray-600">
                      Qualified medical staff, volunteers, and ongoing training
                      programs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recognition Tab */}
          <TabsContent value="recognition" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Donor Recognition</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We honor and celebrate our generous donors who make our
                life-saving work possible.
              </p>
            </div>

            {/* Recognition Levels */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Life Supporter</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">$25+</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Thank you email</li>
                    <li>Tax receipt</li>
                    <li>Newsletter updates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Life Guardian</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">$100+</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>All previous benefits</li>
                    <li>Donor wall recognition</li>
                    <li>Annual impact report</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Life Champion</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">$500+</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>All previous benefits</li>
                    <li>Invitation to events</li>
                    <li>Personal thank you call</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-red-600">
                <CardContent className="pt-6">
                  <Crown className="h-12 w-12 text-red-700 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Life Hero</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">$1000+</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>All previous benefits</li>
                    <li>VIP event access</li>
                    <li>Program naming rights</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Donor Wall */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-red-600" />
                  Donor Wall of Honor
                </CardTitle>
                <CardDescription>
                  Recognizing our generous supporters who make our mission
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Life Heroes */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Crown className="h-4 w-4 text-red-700" />
                      Life Heroes ($1000+)
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        "Dr. Sarah Johnson",
                        "Michael & Patricia Chen",
                        "Ghana Health Foundation",
                        "Anonymous Donor",
                        "Robert Williams",
                        "Community Health Partners",
                      ].map((name, index) => (
                        <div
                          key={index}
                          className="p-3 bg-red-50 rounded-lg text-center"
                        >
                          <p className="font-medium">{name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Life Champions */}
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4 text-red-600" />
                      Life Champions ($500+)
                    </h3>
                    <div className="grid md:grid-cols-4 gap-3">
                      {[
                        "Jennifer Adams",
                        "David Thompson",
                        "Lisa Rodriguez",
                        "James Wilson",
                        "Maria Garcia",
                        "Anonymous",
                        "Kevin Brown",
                        "Susan Davis",
                      ].map((name, index) => (
                        <div
                          key={index}
                          className="p-2 bg-gray-50 rounded text-center text-sm"
                        >
                          {name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Tax Benefits Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Tax Deductibility</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • TBDN is a registered 501(c)(3) nonprofit organization
                      </li>
                      <li>
                        • All donations are tax-deductible to the full extent
                        allowed by law
                      </li>
                      <li>• Tax receipts are provided for all donations</li>
                      <li>
                        • Consult your tax advisor for specific deduction
                        amounts
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Documentation</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Electronic receipts sent immediately</li>
                      <li>• Annual giving statements provided</li>
                      <li>• EIN: 12-3456789</li>
                      <li>• IRS determination letter available upon request</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Working together with organizations across sectors to strengthen
                blood donation systems and save lives.
              </p>
            </div>

            {/* Healthcare Partners */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-red-600" />
                  Healthcare Partners
                </CardTitle>
                <CardDescription>
                  Hospitals, blood banks, and medical institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Korle-Bu Teaching Hospital",
                      type: "Major Teaching Hospital",
                      location: "Accra, Ghana",
                      partnership: "Blood collection and distribution",
                    },
                    {
                      name: "National Blood Service Ghana",
                      type: "National Blood Bank",
                      location: "Nationwide",
                      partnership: "Policy development and coordination",
                    },
                    {
                      name: "Komfo Anokye Teaching Hospital",
                      type: "Regional Hospital",
                      location: "Kumasi, Ghana",
                      partnership: "Regional blood drive coordination",
                    },
                    {
                      name: "Ridge Hospital",
                      type: "Private Hospital",
                      location: "Accra, Ghana",
                      partnership: "Emergency blood supply",
                    },
                    {
                      name: "Tamale Teaching Hospital",
                      type: "Regional Hospital",
                      location: "Tamale, Ghana",
                      partnership: "Northern region outreach",
                    },
                    {
                      name: "Cape Coast Teaching Hospital",
                      type: "Regional Hospital",
                      location: "Cape Coast, Ghana",
                      partnership: "Central region programs",
                    },
                  ].map((partner, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">{partner.name}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {partner.type}
                      </Badge>
                      <p className="text-sm text-gray-600 mb-1">
                        {partner.location}
                      </p>
                      <p className="text-sm">{partner.partnership}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Educational Partners */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-red-600" />
                  Educational Partners
                </CardTitle>
                <CardDescription>
                  Schools, universities, and educational institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "University of Ghana",
                      type: "Public University",
                      programs: "Student blood drives, research collaboration",
                    },
                    {
                      name: "Kwame Nkrumah University of Science and Technology",
                      type: "Public University",
                      programs: "Medical student training, awareness campaigns",
                    },
                    {
                      name: "Ghana Education Service",
                      type: "Government Agency",
                      programs: "School health education programs",
                    },
                    {
                      name: "Achimota School",
                      type: "Secondary School",
                      programs: "Youth blood donation education",
                    },
                    {
                      name: "Presbyterian Boys Secondary School",
                      type: "Secondary School",
                      programs: "Student volunteer programs",
                    },
                    {
                      name: "Wesley Girls High School",
                      type: "Secondary School",
                      programs: "Health awareness initiatives",
                    },
                  ].map((partner, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">{partner.name}</h3>
                      <Badge variant="outline" className="mb-2">
                        {partner.type}
                      </Badge>
                      <p className="text-sm text-gray-600">
                        {partner.programs}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Corporate Partners */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-red-600" />
                  Corporate Partners
                </CardTitle>
                <CardDescription>
                  Companies supporting our mission through sponsorship and
                  collaboration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "MTN Ghana",
                      industry: "Telecommunications",
                      support: "Mobile money integration, SMS campaigns",
                      level: "Platinum Sponsor",
                    },
                    {
                      name: "Vodafone Ghana",
                      industry: "Telecommunications",
                      support:
                        "Communication infrastructure, marketing support",
                      level: "Gold Sponsor",
                    },
                    {
                      name: "Ghana Commercial Bank",
                      industry: "Banking",
                      support: "Financial services, employee blood drives",
                      level: "Silver Sponsor",
                    },
                    {
                      name: "Unilever Ghana",
                      industry: "Consumer Goods",
                      support: "Product donations, employee engagement",
                      level: "Bronze Sponsor",
                    },
                  ].map((partner, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{partner.name}</h3>
                        <Badge className="bg-red-100 text-red-800">
                          {partner.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {partner.industry}
                      </p>
                      <p className="text-sm">{partner.support}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Government Partners */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  Government Partners
                </CardTitle>
                <CardDescription>
                  Government agencies and departments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Ministry of Health",
                      role: "Policy oversight and coordination",
                      collaboration: "National blood policy development",
                    },
                    {
                      name: "Ghana Health Service",
                      role: "Implementation and monitoring",
                      collaboration: "Regional health programs",
                    },
                    {
                      name: "Food and Drugs Authority",
                      role: "Regulatory oversight",
                      collaboration: "Blood safety standards",
                    },
                    {
                      name: "National Disaster Management Organisation",
                      role: "Emergency response coordination",
                      collaboration: "Emergency blood supply planning",
                    },
                  ].map((partner, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">{partner.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {partner.role}
                      </p>
                      <p className="text-sm">{partner.collaboration}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Corporate Tab */}
          <TabsContent value="corporate" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Corporate Partnership</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Partner with us to make a meaningful impact while enhancing your
                corporate social responsibility initiatives.
              </p>
            </div>

            {/* Partnership Levels */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Bronze Partner</CardTitle>
                  <CardDescription className="text-center">
                    $5,000 - $14,999
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Logo on website and materials</li>
                    <li>• Social media recognition</li>
                    <li>• Employee blood drive coordination</li>
                    <li>• Quarterly impact reports</li>
                    <li>• Tax deduction certificate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-600">
                <CardHeader>
                  <CardTitle className="text-center">Silver Partner</CardTitle>
                  <CardDescription className="text-center">
                    $15,000 - $49,999
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• All Bronze benefits</li>
                    <li>• Event naming opportunities</li>
                    <li>• Speaking opportunities at events</li>
                    <li>• Custom employee engagement programs</li>
                    <li>• Dedicated account manager</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Gold Partner</CardTitle>
                  <CardDescription className="text-center">
                    $50,000+
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• All Silver benefits</li>
                    <li>• Program naming rights</li>
                    <li>• Board advisory opportunities</li>
                    <li>• Custom CSR program development</li>
                    <li>• Executive recognition events</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Corporate Donation Form */}
            <Card>
              <CardHeader>
                <CardTitle>Corporate Partnership Inquiry</CardTitle>
                <CardDescription>
                  Let&apos;s discuss how we can work together to save lives and
                  strengthen communities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" placeholder="Your Company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input id="contactName" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partnershipLevel">Partnership Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select partnership level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bronze">
                        Bronze Partner ($5,000 - $14,999)
                      </SelectItem>
                      <SelectItem value="silver">
                        Silver Partner ($15,000 - $49,999)
                      </SelectItem>
                      <SelectItem value="gold">
                        Gold Partner ($50,000+)
                      </SelectItem>
                      <SelectItem value="custom">Custom Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your CSR goals and how you'd like to partner with us..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Submit Partnership Inquiry
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Your Impact</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how your support translates into real-world impact and lives
                saved.
              </p>
            </div>

            {/* Impact Calculator */}
            <Card>
              <CardHeader>
                <CardTitle>Donation Impact Calculator</CardTitle>
                <CardDescription>
                  See what your donation can accomplish
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="donationAmount">Donation Amount ($)</Label>
                    <Input
                      id="donationAmount"
                      type="number"
                      placeholder="100"
                      defaultValue="100"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        4
                      </div>
                      <p className="text-sm text-gray-600">
                        Lives potentially saved
                      </p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        20
                      </div>
                      <p className="text-sm text-gray-600">
                        People educated about blood donation
                      </p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-600 mb-2">
                        2
                      </div>
                      <p className="text-sm text-gray-600">
                        Blood drive events supported
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle>Success Stories</CardTitle>
                <CardDescription>
                  Real stories of lives saved through donor support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-semibold mb-2">
                      Emergency Surgery Success
                    </h3>
                    <p className="text-gray-600 mb-2">
                      &quot;Thanks to the blood donated through TBDN&apos;s
                      programs, we were able to perform emergency surgery on a
                      7-year-old accident victim. The child made a full recovery
                      and is now back in school.&quot;
                    </p>
                    <p className="text-sm text-gray-500">
                      - Dr. Kwame Asante, Korle-Bu Teaching Hospital
                    </p>
                  </div>

                  <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-semibold mb-2">
                      Maternal Health Impact
                    </h3>
                    <p className="text-gray-600 mb-2">
                      &quot;The blood bank established through TBDN&apos;s
                      support has helped us save over 200 mothers during
                      childbirth complications this year alone.&quot;
                    </p>
                    <p className="text-sm text-gray-500">
                      - Nurse Mary Osei, Tamale Teaching Hospital
                    </p>
                  </div>

                  <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="font-semibold mb-2">
                      Cancer Treatment Support
                    </h3>
                    <p className="text-gray-600 mb-2">
                      &quot;Regular blood transfusions made possible by TBDN
                      donors have allowed me to continue my cancer treatment.
                      I&apos;m now in remission and grateful for this second
                      chance at life.&quot;
                    </p>
                    <p className="text-sm text-gray-500">
                      - Patient testimonial
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Annual Impact Report */}
            <Card>
              <CardHeader>
                <CardTitle>2024 Annual Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      $2.5M
                    </div>
                    <p className="text-sm text-gray-600">Total funds raised</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      15,000+
                    </div>
                    <p className="text-sm text-gray-600">Lives saved</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      500+
                    </div>
                    <p className="text-sm text-gray-600">
                      Blood drives organized
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      50,000+
                    </div>
                    <p className="text-sm text-gray-600">People educated</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
