"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GamesPage } from "@/components/fun-zone/games-page";
import { ArtCornerPage } from "@/components/fun-zone/art-corner-page";
import { AiCornerPage } from "@/components/fun-zone/ai-corner-page";

export default function FunZonePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Fun Zone</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn, create, and explore through interactive games, artistic
            expression, and cutting-edge AI technology. Making blood donation
            education engaging and fun for everyone.
          </p>
        </div>

        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="games" className="text-sm font-medium">
              🎮 Games
            </TabsTrigger>
            <TabsTrigger value="art" className="text-sm font-medium">
              🎨 Art Corner
            </TabsTrigger>
            <TabsTrigger value="ai" className="text-sm font-medium">
              🤖 AI Corner
            </TabsTrigger>
          </TabsList>

          <TabsContent value="games">
            <GamesPage />
          </TabsContent>

          <TabsContent value="art">
            <ArtCornerPage />
          </TabsContent>

          <TabsContent value="ai">
            <AiCornerPage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
