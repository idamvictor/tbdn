"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BecomeDonorPage } from "@/components/get-involved/become-donor-page";
import { VolunteerPage } from "@/components/get-involved/volunteer-page";
import { PartnerPage } from "@/components/get-involved/partner-page";

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Get Involved</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our mission to save lives through blood donation. Whether you
            want to donate, volunteer, or partner with us, there&apos;s a place
            for you in our community.
          </p>
        </div>

        <Tabs defaultValue="donor" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="donor" className="text-sm font-medium">
              Become a Donor
            </TabsTrigger>
            <TabsTrigger value="volunteer" className="text-sm font-medium">
              Volunteer
            </TabsTrigger>
            <TabsTrigger value="partner" className="text-sm font-medium">
              Partner with Us
            </TabsTrigger>
          </TabsList>

          <TabsContent value="donor">
            <BecomeDonorPage />
          </TabsContent>

          <TabsContent value="volunteer">
            <VolunteerPage />
          </TabsContent>

          <TabsContent value="partner">
            <PartnerPage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
