"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function DonorRegistrationForm() {
  const handleRegisterClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeYjeAD7IqqxS3su4Ft-4ZTUZ_Ab3LwZqK6F1Mpfke4THXYEw/viewform",
      "_blank"
    );
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-red-600" />
          <div>
            <CardTitle>Become a Blood Donor</CardTitle>
            <CardDescription className="mt-2">
              Join our community of life-savers by registering as a blood donor.
              Your contribution can help save lives.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose">
          <p>By becoming a blood donor, you:</p>
          <ul>
            <li>Help save lives in your community</li>
            <li>Contribute to emergency medical care</li>
            <li>Support patients undergoing treatments</li>
            <li>Make a real difference in people&apos;s lives</li>
          </ul>
        </div>
        <Button
          onClick={handleRegisterClick}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          Register as a Donor
        </Button>
      </CardContent>
    </Card>
  );
}
