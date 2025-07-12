"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Twitter,
  MapPin,
  Users,
  Award,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import { avatarImage } from "@/constants/images";

const leadershipTeam = [
  {
    name: "Dr. Adebayo Ogundimu",
    role: "Founder & CEO",
    image: avatarImage.image1,
    bio: "Dr. Ogundimu is a medical doctor with over 15 years of experience in public health. He founded TBDN after losing his brother due to blood shortage during an emergency.",
    education: "MBBS, MPH - University of Lagos",
    experience: "15+ years in Public Health",
    achievements: [
      "WHO Young Leader Award 2023",
      "Nigeria Health Innovation Prize 2022",
    ],
    email: "adebayo@tbdn.org",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Operating Officer",
    image: avatarImage.image2,
    bio: "Sarah brings 12 years of operations management experience from leading healthcare organizations. She oversees all operational aspects of TBDN's blood donation network.",
    education: "MBA - Lagos Business School",
    experience: "12+ years in Healthcare Operations",
    achievements: [
      "Operations Excellence Award 2023",
      "Healthcare Leadership Certificate",
    ],
    email: "sarah@tbdn.org",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Adebayo",
    role: "Chief Technology Officer",
    image: avatarImage.image3,
    bio: "Michael is a software engineer passionate about using technology for social good. He leads the development of TBDN's digital platforms and AI systems.",
    education: "BSc Computer Science - University of Ibadan",
    experience: "10+ years in Software Development",
    achievements: ["Tech for Good Award 2023", "AI Innovation Recognition"],
    email: "michael@tbdn.org",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Amina Hassan",
    role: "Chief Medical Officer",
    image: avatarImage.image4,
    bio: "Dr. Hassan is a hematologist with extensive experience in blood banking and transfusion medicine. She ensures all medical protocols meet international standards.",
    education: "MBBS, Hematology Specialty - Ahmadu Bello University",
    experience: "18+ years in Hematology",
    achievements: [
      "Medical Excellence Award 2022",
      "Blood Safety Certification",
    ],
    email: "amina@tbdn.org",
    linkedin: "#",
    twitter: "#",
  },
];

const advisoryBoard = [
  {
    name: "Prof. Olumide Adeyemi",
    role: "Medical Advisor",
    organization: "University of Lagos Teaching Hospital",
    expertise: "Transfusion Medicine",
    image: avatarImage.image1,
  },
  {
    name: "Mrs. Funmi Ogbonna",
    role: "Strategic Advisor",
    organization: "Former Director, Federal Ministry of Health",
    expertise: "Public Health Policy",
    image: avatarImage.image2,
  },
  {
    name: "Dr. James Okafor",
    role: "Technology Advisor",
    organization: "Microsoft Nigeria",
    expertise: "Healthcare Technology",
    image: avatarImage.image3,
  },
  {
    name: "Aisha Abdullahi",
    role: "Community Engagement Advisor",
    organization: "Civil Society Coalition",
    expertise: "Community Mobilization",
    image: avatarImage.image4,
  },
];

const keyStaff = [
  {
    department: "Medical & Quality Assurance",
    staff: [
      {
        name: "Dr. Kemi Adebisi",
        role: "Quality Assurance Manager",
        experience: "8 years",
      },
      {
        name: "Nurse Grace Okafor",
        role: "Blood Collection Supervisor",
        experience: "12 years",
      },
      {
        name: "Lab Tech John Emeka",
        role: "Laboratory Manager",
        experience: "10 years",
      },
    ],
  },
  {
    department: "Operations & Logistics",
    staff: [
      {
        name: "Ibrahim Musa",
        role: "Operations Manager",
        experience: "7 years",
      },
      {
        name: "Chioma Nwankwo",
        role: "Logistics Coordinator",
        experience: "5 years",
      },
      { name: "Ahmed Bello", role: "Fleet Manager", experience: "9 years" },
    ],
  },
  {
    department: "Technology & Innovation",
    staff: [
      {
        name: "Tunde Adeyemi",
        role: "Senior Software Developer",
        experience: "6 years",
      },
      { name: "Fatima Aliyu", role: "Data Analyst", experience: "4 years" },
      {
        name: "David Okonkwo",
        role: "Mobile App Developer",
        experience: "5 years",
      },
    ],
  },
  {
    department: "Community Engagement",
    staff: [
      {
        name: "Blessing Okoro",
        role: "Community Outreach Manager",
        experience: "6 years",
      },
      {
        name: "Yusuf Garba",
        role: "Youth Engagement Coordinator",
        experience: "3 years",
      },
      {
        name: "Mary Adeola",
        role: "Volunteer Coordinator",
        experience: "4 years",
      },
    ],
  },
];

const volunteerCoordinators = [
  {
    name: "Emeka Okafor",
    region: "Lagos State",
    volunteers: 150,
    drives: 24,
    image: avatarImage.image1,
    contact: "emeka.lagos@tbdn.org",
  },
  {
    name: "Aisha Mohammed",
    region: "Kano State",
    volunteers: 89,
    drives: 18,
    image: avatarImage.image2,
    contact: "aisha.kano@tbdn.org",
  },
  {
    name: "Chidi Nnamdi",
    region: "Rivers State",
    volunteers: 76,
    drives: 15,
    image: avatarImage.image3,
    contact: "chidi.rivers@tbdn.org",
  },
  {
    name: "Fatima Bello",
    region: "FCT Abuja",
    volunteers: 112,
    drives: 21,
    image: avatarImage.image4,
    contact: "fatima.abuja@tbdn.org",
  },
  {
    name: "Tunde Adebayo",
    region: "Oyo State",
    volunteers: 94,
    drives: 19,
    image: avatarImage.image1,
    contact: "tunde.oyo@tbdn.org",
  },
  {
    name: "Grace Effiong",
    region: "Cross River State",
    volunteers: 67,
    drives: 12,
    image: avatarImage.image2,
    contact: "grace.crossriver@tbdn.org",
  },
];

export function TeamPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The dedicated professionals, advisors, and volunteers who make
              TBDN&apos;s life-saving mission possible
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Active Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15</div>
                <div className="text-sm text-gray-600">
                  Regional Coordinators
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced leaders driving TBDN&apos;s vision and strategic
                direction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadershipTeam.map((leader) => (
                <Card
                  key={leader.name}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="sm:w-32 sm:h-32 w-24 h-24 mx-auto sm:mx-0 flex-shrink-0">
                        <Image
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          width={128}
                          height={128}
                          className="w-full h-full rounded-full object-cover"
                          priority
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="text-center sm:text-left">
                          <h3 className="text-xl font-bold text-gray-900">
                            {leader.name}
                          </h3>
                          <p className="text-red-600 font-medium">
                            {leader.role}
                          </p>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {leader.bio}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Award className="h-4 w-4 mr-2 text-blue-500" />
                            {leader.education}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2 text-green-500" />
                            {leader.experience}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 text-sm">
                            Key Achievements:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.achievements.map((achievement, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs"
                              >
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-3 pt-2">
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Twitter className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advisory Board
              </h2>
              <p className="text-xl text-gray-600">
                Distinguished experts providing strategic guidance and industry
                insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisoryBoard.map((advisor) => (
                <Card
                  key={advisor.name}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-20 h-20 mx-auto">
                      <Image
                        src={advisor.image || "/placeholder.svg"}
                        alt={advisor.name}
                        width={80}
                        height={80}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {advisor.name}
                      </h3>
                      <p className="text-red-600 font-medium text-sm">
                        {advisor.role}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{advisor.organization}</p>
                      <p>Expertise: {advisor.expertise}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Staff */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Staff
              </h2>
              <p className="text-xl text-gray-600">
                Department heads and senior staff members driving daily
                operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {keyStaff.map((department) => (
                <Card
                  key={department.department}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b">
                      {department.department}
                    </h3>
                    <div className="space-y-4">
                      {department.staff.map((member) => (
                        <div
                          key={member.name}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {member.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {member.role}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {member.experience}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Coordinators */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Regional Volunteer Coordinators
              </h2>
              <p className="text-xl text-gray-600">
                Local leaders managing volunteer networks and blood drives
                across Nigeria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerCoordinators.map((coordinator) => (
                <Card
                  key={coordinator.name}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-20 h-20 mx-auto">
                      <Image
                        src={coordinator.image || "/placeholder.svg"}
                        alt={coordinator.name}
                        width={80}
                        height={80}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {coordinator.name}
                      </h3>
                      <div className="flex items-center justify-center text-red-600 font-medium text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {coordinator.region}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="flex items-center justify-center text-blue-600 mb-1">
                          <Users className="h-4 w-4 mr-1" />
                        </div>
                        <div className="font-bold text-lg">
                          {coordinator.volunteers}
                        </div>
                        <div className="text-gray-600">Volunteers</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center text-green-600 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                        </div>
                        <div className="font-bold text-lg">
                          {coordinator.drives}
                        </div>
                        <div className="text-gray-600">Drives/Year</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Join Our Team
                </h2>
                <p className="text-xl opacity-90 leading-relaxed">
                  We&apos;re always looking for passionate individuals who want
                  to make a difference in healthcare and save lives. Whether
                  you&apos;re interested in full-time positions or volunteer
                  opportunities, we&apos;d love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
                    View Open Positions
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3"
                  >
                    Volunteer With Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
