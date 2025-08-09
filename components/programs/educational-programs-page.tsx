"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  Users,
  Stethoscope,
  BookOpen,
  Award,
  Download,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export function EducationalProgramsPage() {
  const schoolPrograms = [
    {
      title: "Blood Heroes Academy",
      description:
        "Comprehensive blood donation awareness program for secondary schools",
      targetAge: "14-18 years",
      duration: "3 months",
      participants: "2,500+ students",
      schools: 45,
      features: [
        "Interactive workshops on blood donation importance",
        "Age-appropriate educational materials",
        "Student ambassador training program",
        "School competition and recognition",
        "Parent and teacher engagement sessions",
      ],
    },
    {
      title: "University Blood Champions",
      description:
        "Campus-based program targeting university students and staff",
      targetAge: "18+ years",
      duration: "Ongoing",
      participants: "8,000+ students",
      schools: 12,
      features: [
        "Regular blood drives on campus",
        "Peer-to-peer education programs",
        "Student volunteer training",
        "Research collaboration opportunities",
        "Career guidance in healthcare",
      ],
    },
  ];

  const communityPrograms = [
    {
      title: "Community Health Ambassadors",
      description:
        "Training community leaders to promote blood donation awareness",
      reach: "50,000+ people",
      locations: 25,
      features: [
        "Community leader training workshops",
        "Door-to-door awareness campaigns",
        "Local language educational materials",
        "Community event organization",
        "Myth-busting sessions",
      ],
    },
    {
      title: "Workplace Wellness Program",
      description: "Corporate partnerships for employee health education",
      companies: 35,
      employees: "15,000+",
      features: [
        "Lunch-and-learn sessions",
        "Health screening programs",
        "Corporate blood drives",
        "Employee wellness newsletters",
        "Health insurance partnerships",
      ],
    },
  ];

  const healthcarePrograms = [
    {
      title: "Medical Professional Certification",
      description: "Advanced training for healthcare workers in blood banking",
      participants: "500+ professionals",
      duration: "6 months",
      certification: "TBDN Certified",
      features: [
        "Blood banking best practices",
        "Quality assurance protocols",
        "Patient counseling techniques",
        "Emergency response procedures",
        "Continuing education credits",
      ],
    },
    {
      title: "Nursing Excellence Program",
      description:
        "Specialized training for nurses in blood collection and care",
      participants: "300+ nurses",
      duration: "3 months",
      certification: "Specialized Certification",
      features: [
        "Advanced phlebotomy techniques",
        "Donor care and comfort",
        "Adverse reaction management",
        "Equipment maintenance",
        "Professional development",
      ],
    },
  ];

  const upcomingTraining = [
    {
      title: "Blood Banking Fundamentals",
      date: "2024-02-15",
      time: "09:00 - 17:00",
      location: "Lagos Training Center",
      type: "Healthcare Professional",
      spots: 25,
      registered: 18,
    },
    {
      title: "Community Outreach Workshop",
      date: "2024-02-20",
      time: "10:00 - 15:00",
      location: "Abuja Community Center",
      type: "Community Education",
      spots: 50,
      registered: 32,
    },
    {
      title: "School Ambassador Training",
      date: "2024-02-25",
      time: "14:00 - 16:00",
      location: "Virtual Session",
      type: "School Program",
      spots: 100,
      registered: 67,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-4 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold">Educational Programs</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Comprehensive education initiatives designed to build awareness,
          knowledge, and capacity across all levels of society for sustainable
          blood donation culture.
        </p>
      </section>

      {/* Program Categories */}
      <section>
        <Tabs defaultValue="school" className="w-full">
          <TabsList className="flex w-full overflow-x-auto no-scrollbar gap-2 pb-1">
            <TabsTrigger
              value="school"
              className="flex items-center gap-2 text-xs whitespace-nowrap px-3 py-1.5"
            >
              <GraduationCap className="h-4 w-4" />
              School Programs
            </TabsTrigger>
            <TabsTrigger
              value="community"
              className="flex items-center gap-2 text-xs whitespace-nowrap px-3 py-1.5"
            >
              <Users className="h-4 w-4" />
              Community Education
            </TabsTrigger>
            <TabsTrigger
              value="healthcare"
              className="flex items-center gap-2 text-xs whitespace-nowrap px-3 py-1.5"
            >
              <Stethoscope className="h-4 w-4" />
              Healthcare Training
            </TabsTrigger>
          </TabsList>

          <TabsContent value="school" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6">
              {schoolPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:justify-between">
                      <div>
                        <CardTitle className="text-lg sm:text-xl">
                          {program.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm">
                          {program.description}
                        </CardDescription>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center self-start">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">
                          Target Age:
                        </span>
                        <div className="font-medium">{program.targetAge}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration:</span>
                        <div className="font-medium">{program.duration}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Participants:
                        </span>
                        <div className="font-medium">
                          {program.participants}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Schools:</span>
                        <div className="font-medium">{program.schools}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Program Features</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-2">
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto">
                        <Download className="h-4 w-4 mr-2" />
                        Download Materials
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Educational Materials */}
            <Card className="mx-4 sm:mx-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <BookOpen className="h-5 w-5" />
                  Educational Materials for Teachers
                </CardTitle>
                <CardDescription className="text-sm">
                  Comprehensive resources to support educators in teaching blood
                  donation awareness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Teacher's Guide",
                      type: "PDF",
                      size: "2.5 MB",
                      downloads: 1250,
                    },
                    {
                      title: "Student Workbook",
                      type: "PDF",
                      size: "1.8 MB",
                      downloads: 3400,
                    },
                    {
                      title: "Interactive Presentations",
                      type: "PPT",
                      size: "15 MB",
                      downloads: 890,
                    },
                    {
                      title: "Activity Worksheets",
                      type: "PDF",
                      size: "3.2 MB",
                      downloads: 2100,
                    },
                    {
                      title: "Assessment Tools",
                      type: "PDF",
                      size: "1.1 MB",
                      downloads: 670,
                    },
                    {
                      title: "Video Resources",
                      type: "MP4",
                      size: "120 MB",
                      downloads: 450,
                    },
                  ].map((material, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium">{material.title}</h5>
                        <Badge variant="outline">{material.type}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        <div>Size: {material.size}</div>
                        <div>
                          Downloads: {material.downloads.toLocaleString()}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6">
              {communityPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:justify-between">
                      <div>
                        <CardTitle className="text-lg sm:text-xl">
                          {program.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm">
                          {program.description}
                        </CardDescription>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex-shrink-0 flex items-center justify-center self-start">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Reach:</span>
                        <div className="font-medium">
                          {program.reach || `${program.employees} employees`}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Locations:
                        </span>
                        <div className="font-medium">
                          {program.locations ||
                            `${program.companies} companies`}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Program Features</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-2">
                      <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                        <Users className="h-4 w-4 mr-2" />
                        Join Program
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto">
                        <Download className="h-4 w-4 mr-2" />
                        Get Resources
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Community Impact Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      65,000+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      People Reached
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">150</div>
                    <div className="text-sm text-muted-foreground">
                      Community Leaders Trained
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      85%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Awareness Increase
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">25</div>
                    <div className="text-sm text-muted-foreground">
                      Active Communities
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="healthcare" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6">
              {healthcarePrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {program.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {program.description}
                        </CardDescription>
                      </div>
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Stethoscope className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">
                          Participants:
                        </span>
                        <div className="font-medium">
                          {program.participants}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration:</span>
                        <div className="font-medium">{program.duration}</div>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">
                          Certification:
                        </span>
                        <div className="font-medium flex items-center gap-2">
                          <Award className="h-4 w-4 text-yellow-600" />
                          {program.certification}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Training Modules</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-2">
                      <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto">
                        <Award className="h-4 w-4 mr-2" />
                        Enroll Now
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto">
                        <BookOpen className="h-4 w-4 mr-2" />
                        View Curriculum
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certification Requirements */}
            <Card className="mx-4 sm:mx-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Award className="h-5 w-5" />
                  Certification Requirements
                </CardTitle>
                <CardDescription className="text-sm">
                  Professional development pathways for healthcare workers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="basic">
                    <AccordionTrigger>
                      Basic Blood Banking Certification
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Prerequisites</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Healthcare professional license</li>
                            <li>• Minimum 2 years experience</li>
                            <li>• Basic medical knowledge</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Requirements</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• 40 hours of training</li>
                            <li>• Written examination (80% pass)</li>
                            <li>• Practical assessment</li>
                            <li>• Continuing education (20 hours/year)</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="advanced">
                    <AccordionTrigger>
                      Advanced Specialist Certification
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Prerequisites</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Basic certification completed</li>
                            <li>• 5+ years experience</li>
                            <li>• Leadership role preferred</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Requirements</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• 80 hours of advanced training</li>
                            <li>• Comprehensive examination</li>
                            <li>• Case study presentation</li>
                            <li>• Annual recertification</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="trainer">
                    <AccordionTrigger>
                      Master Trainer Certification
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Prerequisites</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Advanced certification</li>
                            <li>• 10+ years experience</li>
                            <li>• Training experience</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Requirements</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• 120 hours specialized training</li>
                            <li>• Teaching methodology course</li>
                            <li>• Supervised training sessions</li>
                            <li>• Research project completion</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Upcoming Training Sessions */}
      <section className="space-y-6">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Upcoming Training Sessions</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Register for our upcoming educational programs and training
            sessions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {upcomingTraining.map((training, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{training.title}</CardTitle>
                  <Badge variant="outline">{training.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{new Date(training.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{training.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{training.location}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Registration</span>
                    <span>
                      {training.registered}/{training.spots}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${
                          (training.registered / training.spots) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <Button
                  className="w-full"
                  disabled={training.registered >= training.spots}
                >
                  {training.registered >= training.spots
                    ? "Fully Booked"
                    : "Register Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Program Impact */}
      <section className="bg-muted/50 rounded-2xl p-8">
        <div className="text-center space-y-4 mb-8">
          <h3 className="text-2xl font-bold">Educational Impact</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our educational programs have reached thousands of people across
            Nigeria, creating lasting change in blood donation awareness and
            practices.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">12,500+</div>
              <div className="text-sm text-muted-foreground">
                Students Educated
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600">65,000+</div>
              <div className="text-sm text-muted-foreground">
                Community Members Reached
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-600">800+</div>
              <div className="text-sm text-muted-foreground">
                Healthcare Professionals Trained
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-sm text-muted-foreground">
                Program Satisfaction Rate
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
