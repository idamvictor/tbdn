"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Question {
  id: string
  question: string
  options: { value: string; label: string; eligible: boolean }[]
}

const eligibilityQuestions: Question[] = [
  {
    id: "age",
    question: "What is your age?",
    options: [
      { value: "under-18", label: "Under 18", eligible: false },
      { value: "18-65", label: "18-65 years", eligible: true },
      { value: "over-65", label: "Over 65", eligible: false },
    ],
  },
  {
    id: "weight",
    question: "What is your weight?",
    options: [
      { value: "under-50", label: "Under 50kg", eligible: false },
      { value: "50-plus", label: "50kg or more", eligible: true },
    ],
  },
  {
    id: "health",
    question: "Are you currently feeling well?",
    options: [
      { value: "yes", label: "Yes, I feel well", eligible: true },
      { value: "no", label: "No, I'm not feeling well", eligible: false },
    ],
  },
  {
    id: "medication",
    question: "Are you currently taking any medication?",
    options: [
      { value: "none", label: "No medication", eligible: true },
      { value: "some", label: "Some medication", eligible: true },
      { value: "blood-thinners", label: "Blood thinners", eligible: false },
    ],
  },
  {
    id: "travel",
    question: "Have you traveled outside the country in the last 3 months?",
    options: [
      { value: "no", label: "No", eligible: true },
      { value: "yes-safe", label: "Yes, to low-risk areas", eligible: true },
      { value: "yes-risk", label: "Yes, to high-risk areas", eligible: false },
    ],
  },
]

export function EligibilityChecker() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [isEligible, setIsEligible] = useState(false)

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const nextQuestion = () => {
    if (currentQuestion < eligibilityQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      checkEligibility()
    }
  }

  const checkEligibility = () => {
    const eligible = eligibilityQuestions.every((question) => {
      const answer = answers[question.id]
      const selectedOption = question.options.find((opt) => opt.value === answer)
      return selectedOption?.eligible === true
    })

    setIsEligible(eligible)
    setShowResult(true)
  }

  const resetChecker = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setIsEligible(false)
  }

  const progress = ((currentQuestion + 1) / eligibilityQuestions.length) * 100

  if (showResult) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
            {isEligible ? (
              <CheckCircle className="h-16 w-16 text-green-600" />
            ) : (
              <XCircle className="h-16 w-16 text-red-600" />
            )}
          </div>
          <CardTitle className="text-2xl">{isEligible ? "You're Eligible!" : "Not Eligible at This Time"}</CardTitle>
          <CardDescription>
            {isEligible
              ? "Great news! You meet the basic requirements for blood donation."
              : "Based on your responses, you may not be eligible to donate at this time."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isEligible ? (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                This is a preliminary check. A final health screening will be conducted before donation.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Please consult with our medical team for specific questions about your eligibility.
              </AlertDescription>
            </Alert>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isEligible && (
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Register to Donate
              </Button>
            )}
            <Button variant="outline" onClick={resetChecker}>
              Take Quiz Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = eligibilityQuestions[currentQuestion]
  const currentAnswer = answers[question.id]

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <CardTitle>Eligibility Check</CardTitle>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {eligibilityQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
          <RadioGroup value={currentAnswer} onValueChange={(value) => handleAnswer(question.id, value)}>
            {question.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button onClick={nextQuestion} disabled={!currentAnswer} className="bg-red-600 hover:bg-red-700">
            {currentQuestion === eligibilityQuestions.length - 1 ? "Check Eligibility" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
