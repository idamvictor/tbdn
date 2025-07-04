"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImpactStoriesPage } from "@/components/resources/impact-stories-page";
import { BlogPage } from "@/components/resources/blog-page";
import { MediaCenterPage } from "@/components/resources/media-center-page";
import { DownloadsPage } from "@/components/resources/downloads-page";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore inspiring stories, stay updated with our latest news, access
            media resources, and download educational materials to support our
            mission.
          </p>
        </div>

        <Tabs defaultValue="stories" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="stories" className="text-sm font-medium">
              Impact Stories
            </TabsTrigger>
            <TabsTrigger value="blog" className="text-sm font-medium">
              Blog
            </TabsTrigger>
            <TabsTrigger value="media" className="text-sm font-medium">
              Media Center
            </TabsTrigger>
            <TabsTrigger value="downloads" className="text-sm font-medium">
              Downloads
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stories">
            <ImpactStoriesPage />
          </TabsContent>

          <TabsContent value="blog">
            <BlogPage />
          </TabsContent>

          <TabsContent value="media">
            <MediaCenterPage />
          </TabsContent>

          <TabsContent value="downloads">
            <DownloadsPage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
