"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BloodDrivesPage } from "@/components/programs/blood-drives-page";
import { CampaignsPage } from "@/components/programs/campaigns-page";
import { EducationalProgramsPage } from "@/components/programs/educational-programs-page";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Our Programs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive programs designed to save lives, educate
            communities, and build a sustainable blood donation ecosystem across
            Nigeria.
          </p>
        </div>

        <Tabs defaultValue="drives" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="drives" className="text-sm font-medium">
              Blood Drives
            </TabsTrigger>
            <TabsTrigger value="campaigns" className="text-sm font-medium">
              Campaigns
            </TabsTrigger>
            <TabsTrigger value="education" className="text-sm font-medium">
              Educational Programs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drives">
            <BloodDrivesPage />
          </TabsContent>

          <TabsContent value="campaigns">
            <CampaignsPage />
          </TabsContent>

          <TabsContent value="education">
            <EducationalProgramsPage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
