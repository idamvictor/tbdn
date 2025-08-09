"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-emerald-50 to-teal-50">
        <CardContent className="p-6 sm:p-8 md:p-12 text-center">
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-75"></div>
            <CheckCircle className="relative h-16 w-16 sm:h-20 sm:w-20 text-emerald-600 mx-auto" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-3 sm:mb-4">
            Thank You!
          </h3>
          <p className="text-slate-600 mb-6 text-base sm:text-lg leading-relaxed">
            Your message has been sent successfully. We&apos;ll get back to you
            within 24 hours with the information you need.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            size="lg"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 h-10 sm:h-12 text-sm sm:text-base"
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="p-6 sm:p-8 pb-4 sm:pb-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-800">
          Send us a Message
        </CardTitle>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          We&apos;d love to hear from you. Send us a message and we&apos;ll
          respond as soon as possible.
        </p>
      </CardHeader>
      <CardContent className="p-6 sm:p-8 pt-4 sm:pt-6">
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label
                htmlFor="firstName"
                className="text-sm font-semibold text-slate-700"
              >
                First Name *
              </Label>
              <Input
                id="firstName"
                required
                className="h-10 sm:h-12 text-sm sm:text-base border-2 border-slate-200 focus:border-blue-500 transition-colors duration-200 rounded-xl"
              />
            </div>
            <div className="space-y-3">
              <Label
                htmlFor="lastName"
                className="text-xs sm:text-sm font-semibold text-slate-700"
              >
                Last Name *
              </Label>
              <Input
                id="lastName"
                required
                className="h-10 sm:h-12 text-sm sm:text-base border-2 border-slate-200 focus:border-blue-500 transition-colors duration-200 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="email"
              className="text-xs sm:text-sm font-semibold text-slate-700"
            >
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              required
              className="h-10 sm:h-12 text-sm sm:text-base border-2 border-slate-200 focus:border-blue-500 transition-colors duration-200 rounded-xl"
            />
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="phone"
              className="text-xs sm:text-sm font-semibold text-slate-700"
            >
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              className="h-10 sm:h-12 text-sm sm:text-base border-2 border-slate-200 focus:border-blue-500 transition-colors duration-200 rounded-xl"
            />
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="subject"
              className="text-xs sm:text-sm font-semibold text-slate-700"
            >
              Subject *
            </Label>
            <Select required>
              <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base border-2 border-slate-200 focus:border-blue-500 transition-colors duration-200 rounded-xl">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="donor">Donor Registration</SelectItem>
                <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="media">Media Inquiry</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="message"
              className="text-xs sm:text-sm font-semibold text-slate-700"
            >
              Message *
            </Label>
            <Textarea
              id="message"
              rows={6}
              placeholder="Tell us how we can help you..."
              required
              className="text-sm sm:text-base border-2 border-slate-200 focus:border-blue-500 transition-colors duration-200 rounded-xl resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold h-12 sm:h-14 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
