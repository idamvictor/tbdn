"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bot,
  Brain,
  MessageSquare,
  Zap,
  Heart,
  Calendar,
  Send,
  Sparkles,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  Building,
  Globe,
  Award,
  TrendingUp,
} from "lucide-react"

interface AIPartner {
  id: string
  name: string
  logo: string
  description: string
  category: "Healthcare AI" | "Matching AI" | "Analytics AI" | "Communication AI"
  established: string
  employees: string
  headquarters: string
  website: string
  specialties: string[]
  useCases: string[]
  achievements: string[]
  featured: boolean
}

interface ChatMessage {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: string
}

interface EligibilityQuestion {
  id: string
  question: string
  type: "boolean" | "select" | "number"
  options?: string[]
  required: boolean
}

const aiPartners: AIPartner[] = [
  {
    id: "1",
    name: "HealthTech AI Solutions",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Leading AI company specializing in healthcare optimization and patient matching systems",
    category: "Healthcare AI",
    established: "2019",
    employees: "500+",
    headquarters: "Lagos, Nigeria",
    website: "healthtech-ai.com",
    specialties: ["Machine Learning", "Healthcare Analytics", "Patient Matching", "Predictive Modeling"],
    useCases: [
      "Blood type compatibility prediction",
      "Donor-recipient matching optimization",
      "Emergency blood request prioritization",
      "Inventory management automation",
    ],
    achievements: [
      "Reduced blood wastage by 35% across partner hospitals",
      "Improved donor-recipient matching accuracy by 92%",
      "Processed over 1M blood compatibility checks",
    ],
    featured: true,
  },
  {
    id: "2",
    name: "MedConnect AI",
    logo: "/placeholder.svg?height=80&width=80",
    description: "AI-powered communication platform connecting healthcare providers and patients",
    category: "Communication AI",
    established: "2020",
    employees: "200+",
    headquarters: "Abuja, Nigeria",
    website: "medconnect-ai.com",
    specialties: ["Natural Language Processing", "Chatbot Development", "Voice Recognition", "Multilingual AI"],
    useCases: [
      "Automated donor screening questionnaires",
      "Multi-language support for diverse communities",
      "Real-time translation for medical consultations",
      "Intelligent appointment scheduling",
    ],
    achievements: [
      "Supports 12 Nigerian languages",
      "Handles 50,000+ conversations daily",
      "99.2% accuracy in medical terminology translation",
    ],
    featured: false,
  },
  {
    id: "3",
    name: "DataMed Analytics",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Advanced analytics platform for healthcare data insights and predictive modeling",
    category: "Analytics AI",
    established: "2018",
    employees: "300+",
    headquarters: "Port Harcourt, Nigeria",
    website: "datamed-analytics.com",
    specialties: ["Big Data Analytics", "Predictive Modeling", "Real-time Monitoring", "Business Intelligence"],
    useCases: [
      "Blood demand forecasting",
      "Donor behavior pattern analysis",
      "Supply chain optimization",
      "Risk assessment modeling",
    ],
    achievements: [
      "Improved blood supply forecasting accuracy by 87%",
      "Reduced emergency shortages by 45%",
      "Analyzed 10M+ healthcare data points",
    ],
    featured: false,
  },
]

const eligibilityQuestions: EligibilityQuestion[] = [
  {
    id: "age",
    question: "What is your age?",
    type: "number",
    required: true,
  },
  {
    id: "weight",
    question: "What is your weight (in kg)?",
    type: "number",
    required: true,
  },
  {
    id: "health",
    question: "Are you currently feeling well and healthy?",
    type: "boolean",
    required: true,
  },
  {
    id: "medication",
    question: "Are you currently taking any medication?",
    type: "select",
    options: ["No medication", "Vitamins/Supplements only", "Prescription medication", "Blood thinners"],
    required: true,
  },
  {
    id: "travel",
    question: "Have you traveled outside Nigeria in the last 6 months?",
    type: "boolean",
    required: true,
  },
]

export function AiCornerPage() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! I'm your AI assistant for blood donation queries. How can I help you today?",
      timestamp: new Date().toISOString(),
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [eligibilityAnswers, setEligibilityAnswers] = useState<Record<string, any>>({})
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null)
  const [selectedPartner, setSelectedPartner] = useState<AIPartner | null>(null)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: newMessage,
      timestamp: new Date().toISOString(),
    }

    setChatMessages((prev) => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: generateAIResponse(newMessage),
        timestamp: new Date().toISOString(),
      }
      setChatMessages((prev) => [...prev, botResponse])
    }, 1000)

    setNewMessage("")
  }

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("eligib") || message.includes("can i donate")) {
      return "To check your eligibility for blood donation, I'll need to ask you a few questions. You must be between 18-65 years old, weigh at least 50kg, and be in good health. Would you like me to guide you through a quick eligibility check?"
    } else if (message.includes("blood type") || message.includes("compatible")) {
      return "Blood type compatibility is crucial for safe transfusions. O-negative is the universal donor, while AB-positive is the universal recipient. Would you like to know more about specific blood type compatibilities?"
    } else if (message.includes("process") || message.includes("how to donate")) {
      return "The blood donation process is simple and safe: 1) Registration and health screening, 2) Brief medical examination, 3) The actual donation (8-10 minutes), 4) Rest and refreshments. The entire process takes about 45-60 minutes."
    } else if (message.includes("appointment") || message.includes("schedule")) {
      return "I can help you find nearby blood drives and schedule appointments. Would you like me to show you upcoming blood drives in your area?"
    } else {
      return "Thank you for your question! I'm here to help with blood donation information, eligibility checks, appointment scheduling, and general health queries. What specific information would you like to know?"
    }
  }

  const handleEligibilityCheck = () => {
    const age = Number.parseInt(eligibilityAnswers.age)
    const weight = Number.parseInt(eligibilityAnswers.weight)
    const health = eligibilityAnswers.health
    const medication = eligibilityAnswers.medication
    const travel = eligibilityAnswers.travel

    let result = "eligible"
    const reasons = []

    if (age < 18 || age > 65) {
      result = "ineligible"
      reasons.push("Age must be between 18-65 years")
    }
    if (weight < 50) {
      result = "ineligible"
      reasons.push("Weight must be at least 50kg")
    }
    if (!health) {
      result = "ineligible"
      reasons.push("Must be feeling well and healthy")
    }
    if (medication === "Blood thinners") {
      result = "ineligible"
      reasons.push("Blood thinners may affect eligibility")
    }

    if (result === "eligible") {
      setEligibilityResult(
        "You appear to be eligible for blood donation! Please note this is a preliminary check, and a final health screening will be conducted before donation.",
      )
    } else {
      setEligibilityResult(
        `Based on your responses, you may not be eligible to donate at this time. Reasons: ${reasons.join(", ")}. Please consult with our medical team for specific guidance.`,
      )
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Healthcare AI":
        return Heart
      case "Communication AI":
        return MessageSquare
      case "Analytics AI":
        return TrendingUp
      case "Matching AI":
        return Target
      default:
        return Bot
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Healthcare AI":
        return "bg-red-100 text-red-800"
      case "Communication AI":
        return "bg-blue-100 text-blue-800"
      case "Analytics AI":
        return "bg-green-100 text-green-800"
      case "Matching AI":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">AI Corner</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore cutting-edge AI technology in healthcare, interact with intelligent tools, and discover how artificial
          intelligence is revolutionizing blood donation and medical services.
        </p>
      </section>

      {/* AI Tabs */}
      <section>
        <Tabs defaultValue="partners" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="partners" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              AI Partners
            </TabsTrigger>
            <TabsTrigger value="chatbot" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              AI Tools
            </TabsTrigger>
          </TabsList>

          {/* AI Partners Tab */}
          <TabsContent value="partners" className="space-y-6">
            {/* Featured Partner */}
            {aiPartners.find((p) => p.featured) && (
              <section className="space-y-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Featured AI Partner</h3>
                  <p className="text-muted-foreground">Leading innovation in healthcare AI</p>
                </div>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  {(() => {
                    const partner = aiPartners.find((p) => p.featured)!
                    const CategoryIcon = getCategoryIcon(partner.category)
                    return (
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="p-8 flex flex-col justify-center">
                          <div className="space-y-6">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Bot className="h-8 w-8 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="text-2xl font-bold">{partner.name}</h4>
                                <Badge className={getCategoryColor(partner.category)}>
                                  <CategoryIcon className="h-3 w-3 mr-1" />
                                  {partner.category}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-muted-foreground">{partner.description}</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Established:</span>
                                <div className="font-medium">{partner.established}</div>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Employees:</span>
                                <div className="font-medium">{partner.employees}</div>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Headquarters:</span>
                                <div className="font-medium">{partner.headquarters}</div>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Website:</span>
                                <div className="font-medium text-blue-600">{partner.website}</div>
                              </div>
                            </div>
                            <Button
                              onClick={() => setSelectedPartner(partner)}
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex flex-col justify-center">
                          <div className="space-y-4">
                            <h5 className="font-semibold">Key Achievements</h5>
                            <ul className="space-y-2">
                              {partner.achievements.slice(0, 3).map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  })()}
                </Card>
              </section>
            )}

            {/* All Partners */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiPartners
                .filter((p) => !p.featured)
                .map((partner) => {
                  const CategoryIcon = getCategoryIcon(partner.category)
                  return (
                    <Card key={partner.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                              <Bot className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{partner.name}</CardTitle>
                              <Badge className={getCategoryColor(partner.category)} variant="secondary">
                                <CategoryIcon className="h-3 w-3 mr-1" />
                                {partner.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">{partner.description}</p>
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Specialties</h5>
                          <div className="flex flex-wrap gap-1">
                            {partner.specialties.slice(0, 2).map((specialty, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                            {partner.specialties.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{partner.specialties.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                          onClick={() => setSelectedPartner(partner)}
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </TabsContent>

          {/* AI Chatbot Tab */}
          <TabsContent value="chatbot" className="space-y-6">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  AI Blood Donation Assistant
                </CardTitle>
                <CardDescription>
                  Ask questions about blood donation, eligibility, processes, and more. Our AI assistant is here to
                  help!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-96 border rounded-lg p-4 overflow-y-auto bg-gray-50">
                  <div className="space-y-4">
                    {chatMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.type === "user" ? "bg-blue-600 text-white" : "bg-white border shadow-sm"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${message.type === "user" ? "text-blue-100" : "text-gray-500"}`}>
                            {new Date(message.timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about blood donation..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setNewMessage("Am I eligible to donate blood?")}
                    className="bg-transparent"
                  >
                    Check Eligibility
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setNewMessage("What is the donation process?")}
                    className="bg-transparent"
                  >
                    Donation Process
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setNewMessage("Find blood drives near me")}
                    className="bg-transparent"
                  >
                    Find Blood Drives
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* AI Eligibility Checker */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-green-600" />
                    AI-Powered Eligibility Checker
                  </CardTitle>
                  <CardDescription>Advanced AI assessment to determine your blood donation eligibility</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {eligibilityQuestions.map((question) => (
                    <div key={question.id} className="space-y-2">
                      <label className="text-sm font-medium">{question.question}</label>
                      {question.type === "boolean" ? (
                        <Select
                          value={eligibilityAnswers[question.id]}
                          onValueChange={(value) =>
                            setEligibilityAnswers((prev) => ({ ...prev, [question.id]: value === "true" }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="true">Yes</SelectItem>
                            <SelectItem value="false">No</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : question.type === "select" ? (
                        <Select
                          value={eligibilityAnswers[question.id]}
                          onValueChange={(value) =>
                            setEligibilityAnswers((prev) => ({ ...prev, [question.id]: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            {question.options?.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          type="number"
                          placeholder="Enter a number"
                          value={eligibilityAnswers[question.id] || ""}
                          onChange={(e) =>
                            setEligibilityAnswers((prev) => ({ ...prev, [question.id]: e.target.value }))
                          }
                        />
                      )}
                    </div>
                  ))}
                  <Button onClick={handleEligibilityCheck} className="w-full bg-green-600 hover:bg-green-700">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Check Eligibility with AI
                  </Button>
                  {eligibilityResult && (
                    <div
                      className={`p-4 rounded-lg border ${
                        eligibilityResult.includes("eligible") && !eligibilityResult.includes("not eligible")
                          ? "bg-green-50 border-green-200"
                          : "bg-red-50 border-red-200"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {eligibilityResult.includes("eligible") && !eligibilityResult.includes("not eligible") ? (
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                        )}
                        <p className="text-sm">{eligibilityResult}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Smart Matching System */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    Smart Emergency Matching
                  </CardTitle>
                  <CardDescription>AI-powered system for emergency blood request matching</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">Patient Blood Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Units Needed</label>
                      <Input type="number" placeholder="Number of units" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Urgency Level</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="critical">Critical (0-2 hours)</SelectItem>
                          <SelectItem value="urgent">Urgent (2-6 hours)</SelectItem>
                          <SelectItem value="routine">Routine (6-24 hours)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Hospital Location</label>
                      <Input placeholder="Enter hospital or location" />
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Zap className="h-4 w-4 mr-2" />
                    Find Compatible Donors
                  </Button>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-sm mb-2">AI Matching Features:</h5>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Real-time donor availability checking</li>
                      <li>• Geographic proximity optimization</li>
                      <li>• Compatibility verification</li>
                      <li>• Automated notification system</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Personalized Donation Reminders */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  Personalized AI Donation Reminders
                </CardTitle>
                <CardDescription>
                  Set up intelligent reminders based on your donation history and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Last Donation Date</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Preferred Reminder Frequency</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8weeks">Every 8 weeks (Standard)</SelectItem>
                          <SelectItem value="10weeks">Every 10 weeks</SelectItem>
                          <SelectItem value="12weeks">Every 12 weeks</SelectItem>
                          <SelectItem value="custom">Custom schedule</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Preferred Contact Method</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                          <SelectItem value="push">Push Notification</SelectItem>
                          <SelectItem value="all">All Methods</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Clock className="h-4 w-4 mr-2" />
                      Set Up AI Reminders
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-medium">AI Reminder Features:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm">
                        <Sparkles className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Personalized timing based on your donation history</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Sparkles className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Weather and seasonal considerations</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Sparkles className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Local blood drive notifications</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Sparkles className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Emergency request alerts for your blood type</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Sparkles className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>Health tips and preparation reminders</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Bot className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{selectedPartner.name}</CardTitle>
                    <Badge className={getCategoryColor(selectedPartner.category)}>{selectedPartner.category}</Badge>
                  </div>
                </div>
                <Button variant="outline" onClick={() => setSelectedPartner(null)} className="bg-transparent">
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{selectedPartner.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Company Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Established:</span>
                      <span>{selectedPartner.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Employees:</span>
                      <span>{selectedPartner.employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Headquarters:</span>
                      <span>{selectedPartner.headquarters}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Website:</span>
                      <span className="text-blue-600">{selectedPartner.website}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPartner.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Healthcare Use Cases</h4>
                <ul className="space-y-2">
                  {selectedPartner.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {selectedPartner.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Award className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Globe className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
                <Button variant="outline" className="bg-transparent">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Partner
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
