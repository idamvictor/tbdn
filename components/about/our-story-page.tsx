"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Heart,
  Users,
  Award,
  Target,
  Globe,
  Zap,
  ClipboardCheck,
  ScrollText,
} from "lucide-react";
import Image from "next/image";
import { heroImages } from "@/constants/images";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const foundationHistory = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Started as the '70-Man-Blood-Donor-Drive' project in Ibadan, Nigeria, with just 58 voluntary blood donors signed up for the cause.",
    details:
      "Started with just 5 volunteers and a simple website to connect donors with hospitals.",
    milestone: true,
  },
  {
    year: "2021",
    title: "Official Community Launch as TBDN",
    description:
      "Launched TBDN as a youth-led, community based organization committed to mobilizing youth participation in voluntary blood donation as a corporate social responsibility.",
    details:
      "Organized our first blood drive in the South-East and South-West concurrently, yielding 73 blood pints donated. Introduced our WhatsApp donor community and donor-recipient matching. Administrative Capacity building for Organizational volunteer team. Official Community Partnership with CHRISBO HB Club for onwards blood supply for critical sickle cell champions",
    milestone: true,
  },
  {
    year: "2022",
    title: "Official Community Launch as TBDN",
    description:
      "Launched TBDN as a youth-led, community based organization committed to mobilizing youth participation in voluntary blood donation as a corporate social responsibility.",
    details:
      "Organized our first blood drive in the South-East and South-West concurrently, yielding 73 blood pints donated. Secured Partnership with the Nigerian National Blood Service Agency, South West Zonal centre. Introduced our WhatsApp donor community and donor-recipient matching. Administrative Capacity building for Organizational volunteer team. Official Community Partnership with CHRISBO HB and BOLAB Laboratories for FREE blood banking and supply for critical sickle cell champions",
    milestone: false,
  },
  {
    year: "2022",
    title: "Low-Tech Integration, Awards & Collaboration",
    description: "Introduced automated SMS notification system for donors",
    details:
      "List mapping of public blood bank service facilities available in over 30 states of Nigeria, for Donor ease. Received first community award for selfless contributions to blood availability by the University College Hospital, Ibadan, Nigeria Official CIVICUS Membership as a CSO Launch of E-Donor identification cards and Monthly Donor Educational Series. Large scale blood drive, youth advocacy and reproductive wellness event at Lead City University, Ibadan, Nigeria in collaboration with Rotary Club, State Agency for AIDS control and the Action Group on Adolescent Health covered by Galaxy TV News. National Tribune Newspaper  feature for blood drive event in South West Nigeria. Soft skills training for Organizational volunteer team. Data collation - First qualitative research on Barriers and Factors promoting voluntary blood donation amongst Nigerian undergraduates for blood policy advocacy and service reforms. 154 volunteer donors, 240 blood pints donated",
    milestone: true,
  },
  {
    year: "2023",
    title: "Expansion, Media project & International Recognition",
    description: "Expanded operations to 3 states in Nigeria",
    details:
      "Recognized by MOONSHOT Global Awards as Top 100 Innovative Social Impact Projects and Top 20 in the Emergency Response Category.Featured on News Arena - Social impact of Nigerian health NGOs. Meritorious Award by CHRISBO HB for sickle cell support via safe blood supply and donor matching. Multi-stakeholder Partnerships with APIN public Health Initiative, Junior Chambers International, Health Directorate - Students Union, Abia State University and the Polytechnic of Ibadan. Launch of Vein-to-Vein film documentary production in collaboration with the University College Hospital, Ibadan and the National Blood Service Agency, Nigeria. 580+ blood pints donated, 100+ registered donors, 200+ direct beneficiaries of blood pints donated, 1000+ youth and social networks engaged in advocacy for participation in voluntary blood donation",
    milestone: true,
  },
  {
    year: "2024",
    title:
      "International Recognition,  Grant Award and Implementing partnership",
    description:
      "Sealed Implementing partnership with Bone and Blood Foundation, Tanzania, extending to 5 regions in Tanzania. Multi stakeholder partnership with Lifestream, Millennium Campus Fellowship project. International media feature by Russian Dobro Missions Press on social impact and emergency health response service. Feature by the UIMSA Press on strategic inclusion of SRH wellness services in participatory advocacy approach",
    details:
      "Premier of CHAMPIONS - film documentary production in collaboration with CHRISBO HB, Bone and Blood Foundation (Tanzania) and Tomiwa Akinpelu Films, Nigeria telling the real life experiences of 4 out of the 100, 000 -150, 000 Sickle cell children born annually in Nigeria for SCD Awareness. Trauma-Preparedness Festive blood drive with the Coalition of Blood for Africa across Uganda, Kenya, Nigeria and Tanzania; including notable collaborations with Football clubs, religious institutions, Country Blood Service agencies and Ministry of Health via implementing partners.International Feature by the Nigeria Health Watch and Global Village Exhibition at the International AIDS Society Conference in Munich, Germany. Won 2024 International Prize and $10, 000 Grant Award of the #WeAreTogether Project, Russia in the Healthcare and Emergency Response Category for social impact initiatives globally. 4441+ blood pints donated, 1500+ direct beneficiaries of blood pints donated, 1600 + direct beneficiaries of sickle cell disease screening and advocacy efforts, 8500+ youth, social networks and CSR initiatives engaged in blood donation advocacy, SRH, SCD and youth wellness programs, 10+ new stakeholder partnerships",
    milestone: true,
  },
  {
    year: "2025",
    title: "Impact Scale",
    description:
      "Meritorious Award by CHRISBO HB for sickle cell support via safe blood supply and donor matching. 1st preview of Vein-to-Vein film documentary at the National Blood Service Agency, Abuja. Provision of free Hydroxyurea medication in Tanzania for 20 SCD patients via implementing partners - Bone and Blood Foundation. Nigerian CAC and TIN Registration as non-profit. Large scale inter-college blood drive with Bone and Blood Foundation, Tanzania ",
    details:
      "Multi-Stakeholder Partnership with the University of Medical Sciences Teaching Hospital, Akure;  Students Representative Council, University of Ibadan;  Maternal Health and Child Nutrition, Nigerian Medical Students Association and the Lagos Arts and Health Festival. Culture Excellence and Leadership workshop for Organizational volunteers by LearnLoft, North Carolina, USA. Official International Society of Blood Transfusion (ISBT) Membership as a CSO. 5900+ blood pints donated, 3000+ direct beneficiaries of blood pints donated, 210+ registered blood donors, 9600+ youth, social networks and CSR initiatives engaged in blood donation advocacy, SRH, SCD and youth wellness programs, 15+ new stakeholder partnerships",
    milestone: true,
  },
];

const milestones = [
  {
    number: "17,000+",
    title: "Lives Saved",
    description: "Through our blood donor network",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    number: "20",
    title: "sickle cell patients",
    description:
      "Receiving free hydroxyurea treatment in Tanzania via implementing partners - Bone and Blood Foundation",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    number: "2000+",
    title: "Sickle Cell Disease screenings",
    description:
      "From campaigns by implementing partners - Bone and Blood Foundation",
    icon: Award,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    number: "4000+",
    title: "donors",
    description:
      "From blood drives and advocacy campaigns in Nigeria and Tanzania",
    icon: Globe,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    number: "9600+",
    title: "youth, social networks and CSR initiatives",
    description:
      "Engaged in blood donation advocacy, SRH, SCD and youth wellness programs",
    icon: Globe,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    number: "10+",
    title: "partner hospitals",
    description: "Across Nigeria and Tanzania",
    icon: Globe,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    number: "25+",
    title: "Stakeholder partnerships",
    description: "Across Nigeria and Tanzania",
    icon: Globe,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
  },
  {
    number: "4 & 5",
    title: "Nigerian states & regions in Tanzania covered",
    description:
      "For blood requests, SCD screenings, blood drives, advocacy engagements, SRH wellness programs",
    icon: Globe,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },
  {
    number: "3",
    title: "International Recognitions",
    description:
      "SheLeadsAfrica. MOONSHOT Global Awards, USA WeAreTogether International Prize, Russia",
    icon: Globe,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    number: "1",
    title: "Grant Award",
    description:
      "WeAreTogether International Prize for Social impact in the Healthcare and Emergency Response Category",
    icon: Globe,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
];

const focusAreas = [
  {
    icon: Target,
    title: "Youth Engagement and Participation",
    description:
      "Targeting 18 - 35yrs age group through universities, youth social networks, and organizations",
    initiatives: [
      "TBDN Campus hubs and In-person donor sensitization",
      "Youth ambassador program",
      "Media Advocacy Campaigns",
    ],
  },
  {
    icon: Zap,
    title: "Technology Innovation",
    description:
      "Leveraging technology to improve donor experience and operational efficiency",
    initiatives: [
      "AI-powered matching",
      "Mobile app development",
      "Automated notifications",
    ],
  },
  {
    icon: Globe,
    title: "Rural Outreach",
    description:
      "Expanding blood donation services to underserved rural communities",
    initiatives: [
      "Mobile blood units",
      "Community health partnerships",
      "Local volunteer training",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description:
      "Maintaining highest standards in blood collection and testing",
    initiatives: [
      "Staff training programs",
      "Equipment upgrades",
      "Quality monitoring systems",
    ],
  },
  {
    icon: ScrollText,
    title: "Blood Policy advocacy and reforms engagement",
    description:
      "Targeting the National Blood Service Agency, Ministry of Health, Ministry of Education, National Universities Commission and University Management",
    initiatives: [
      "Policy research and analysis",
      "Position papers, Policy briefs",
      "Policy consultation and formulation",
      "Policy adoption and implementation",
      "Monitoring and evaluation",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function OurStoryPage() {
  const videoUrl =
    "https://drive.google.com/file/d/1iBSlfADNedqkDArE-svyecZtkbFjoAp_/view?usp=sharing";

  const handlePlayClick = () => {
    window.open(videoUrl, "_blank");
  };

  // section refs
  const founderRef = useRef(null);
  const founderInView = useInView(founderRef, { once: true, amount: 0.3 });

  const historyRef = useRef(null);
  const historyInView = useInView(historyRef, { once: true, amount: 0.3 });

  const milestonesRef = useRef(null);
  const milestonesInView = useInView(milestonesRef, {
    once: true,
    amount: 0.3,
  });

  const focusRef = useRef(null);
  const focusInView = useInView(focusRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.8 }}
      className="space-y-16 md:space-y-24"
    >
      {/* ---------------------------------------------------- */}
      {/*  HERO                                               */}
      {/* ---------------------------------------------------- */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white overflow-hidden mb-0">
        <Image
          src={
            "https://res.cloudinary.com/dyp8gtllq/image/upload/v1760638074/1718608330489_adnmqo.jpg"
          }
          alt="Our Story Hero Background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md"
          >
            From a simple idea to a life-saving network that spans across
            Nigeria
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 text-lg shadow-lg"
              onClick={handlePlayClick}
            >
              <Play className="h-6 w-6 mr-2" />
              Watch Our Story
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/*  FOUNDER'S MESSAGE                                  */}
      {/* ---------------------------------------------------- */}
      <section
        ref={founderRef}
        className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-pink-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <motion.div
              initial="hidden"
              animate={founderInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video shadow-xl">
                <Image
                  src={heroImages.slide1 || "/placeholder.svg"}
                  alt="Founder's video thumbnail"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 rounded-full w-20 h-20"
                    onClick={handlePlayClick}
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              </div>
              <Badge className="absolute -bottom-4 left-4 bg-white text-gray-900 shadow-lg">
                Message from our Founder
              </Badge>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              animate={founderInView ? "visible" : "hidden"}
              variants={fadeInRight}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                A Message from Our Founder
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  &quot;As a medical student in my clinical year at the
                  University College Hospital, Ibadan, Nigeria, I witnessed
                  patients die in the Emergency Room and wards from road traffic
                  accidents, sickle cell anemia, postpartum hemorrhage, and
                  other critical conditions requiring blood transfusions. A
                  friend&apos;s mum died shortly after she was born because she
                  couldn&apos;t access blood, having bled while giving birth. I
                  had had a hemorrhagic ovarian cyst rupture, bleeding
                  internally with a PCV of 16% (severe anemia) and requiring 4
                  pints of blood to stay alive. I experienced the difficulty
                  patients and relatives went through to access blood, I could
                  never forget. Unfortunately, 50 - 90% of sickle cell children
                  in Sub-Saharan Africa die from same, before their fifth
                  birthday - because blood is almost always unavailable,
                  stemming from constant shortage in hospitals and blood banks.
                  &quot;
                </p>
                <p>
                  &quot;With the mortality statistics from blood loss and
                  shortage, the need was even more glaring and that sparked the
                  vision for TBDN. We started with a simple belief: No one
                  should lose their life because blood wasn&apos;t available
                  when they needed it most. We wanted to create a community of
                  care and support for critical care patients in need of blood.
                  Today, TBDN has grown a network that has saved over 9000
                  lives, and our mission remains same - Saving humanity one pint
                  at a time! &quot;
                </p>
                <p>
                  &quot;Every blood pint is a chance at life, Every donor in our
                  network is a hero, Every volunteer on our team is a lifesaver,
                  Every partner is a ripple changemaker. Together, we&apos;re
                  building a future where blood is always available and
                  accessible for those who need it.&quot;
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-lg font-semibold text-gray-900">
                  Dr. Okoro Chidinma
                </p>
                <p className="text-red-600 font-medium">
                  Co-Founder & CEO, TBDN
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/*  FOUNDATION HISTORY                                 */}
      {/* ---------------------------------------------------- */}
      <section ref={historyRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial="hidden"
                animate={historyInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Our Journey
              </motion.h2>
              <motion.p
                initial="hidden"
                animate={historyInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-600"
              >
                From humble beginnings to an intra-continental network saving
                lives one pint at a time 🩸
              </motion.p>
            </div>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-red-200" />
              <div className="space-y-12">
                {foundationHistory.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial="hidden"
                    animate={historyInView ? "visible" : "hidden"}
                    variants={idx % 2 === 0 ? fadeInLeft : fadeInRight}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex items-center ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div
                      className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${
                        item.milestone ? "bg-red-600" : "bg-red-300"
                      } border-4 border-white shadow-lg z-10`}
                    />
                    {/* Card */}
                    <div
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge
                              variant={item.milestone ? "default" : "secondary"}
                              className="text-sm"
                            >
                              {item.year}
                            </Badge>
                            {item.milestone && (
                              <Award className="h-5 w-5 text-yellow-500" />
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 mb-3">
                            {item.description}
                          </p>
                          <p className="text-sm text-gray-600">
                            {item.details}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    {/* Illustration */}
                    <motion.div
                      initial="hidden"
                      animate={historyInView ? "visible" : "hidden"}
                      variants={idx % 2 === 0 ? fadeInRight : fadeInLeft}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      className={`hidden md:block w-5/12 ${
                        idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      }`}
                    >
                      <div className="aspect-video relative rounded-2xl overflow-hidden ">
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="text-center">
                            <div className="mb-4">
                              {idx === 0 && (
                                <Users className="h-16 w-16 mx-auto text-red-600" />
                              )}
                              {idx === 1 && (
                                <Heart className="h-16 w-16 mx-auto text-red-600" />
                              )}
                              {idx === 2 && (
                                <Zap className="h-16 w-16 mx-auto text-red-600" />
                              )}
                              {idx === 3 && (
                                <Globe className="h-16 w-16 mx-auto text-red-600" />
                              )}
                              {idx === 4 && (
                                <Award className="h-16 w-16 mx-auto text-red-600" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/*  MILESTONES                                         */}
      {/* ---------------------------------------------------- */}
      <section
        ref={milestonesRef}
        className="py-16 md:py-24 bg-gradient-to-br from-red-50 via-pink-50 to-red-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial="hidden"
                animate={milestonesInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Milestones Achieved
              </motion.h2>
              <motion.p
                initial="hidden"
                animate={milestonesInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Key achievements that mark our impact on communities
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((ms, idx) => {
                const Icon = ms.icon;
                return (
                  <motion.div
                    key={ms.title}
                    initial="hidden"
                    animate={milestonesInView ? "visible" : "hidden"}
                    variants={scaleIn}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-red-200 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                          <div
                            className={`w-20 h-20 ${ms.bgColor} rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center mx-auto mb-6 shadow-lg`}
                          >
                            <Icon
                              className={`h-10 w-10 ${ms.color} transform group-hover:scale-110 transition-transform duration-300`}
                            />
                          </div>
                          <div
                            className={`text-4xl font-bold ${ms.color} mb-4 text-center tracking-tight`}
                          >
                            {ms.number}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-red-600 transition-colors duration-300">
                            {ms.title}
                          </h3>
                          <p className="text-gray-600 text-center group-hover:text-gray-900 transition-colors duration-300">
                            {ms.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/*  FOCUS AREAS                                        */}
      {/* ---------------------------------------------------- */}
      <section ref={focusRef} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial="hidden"
                animate={focusInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Current Focus Areas
              </motion.h2>
              <motion.p
                initial="hidden"
                animate={focusInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-600"
              >
                Our strategic priorities for expanding impact and improving
                services
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {focusAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial="hidden"
                    animate={focusInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <Card className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                            <Icon className="h-6 w-6 text-red-600" />
                          </div>
                          <div className="flex-1 space-y-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {area.title}
                              </h3>
                              <p className="text-gray-700">
                                {area.description}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                Key Initiatives:
                              </h4>
                              <ul className="space-y-1">
                                {area.initiatives.map((i, iIdx) => (
                                  <li
                                    key={iIdx}
                                    className="text-sm text-gray-600 flex items-center"
                                  >
                                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2" />
                                    {i}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
