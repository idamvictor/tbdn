"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  FileText,
  Palette,
  BookOpenCheck,
  ShieldCheck,
  FileArchive,
} from "lucide-react";

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  type:
    | "Logo"
    | "Guideline"
    | "Palette"
    | "Template"
    | "Policy"
    | "Infographic"
    | "Document";
  size: string;
  url: string;
  category: "Branding" | "Educational" | "Policy";
}

const downloads: DownloadItem[] = [
  {
    id: "logo-svg",
    title: "TBDN Logo (SVG)",
    description: "Scalable vector logo in SVG format",
    type: "Logo",
    size: "48 KB",
    url: "/downloads/brand/logo-tbdn.svg",
    category: "Branding",
  },
  {
    id: "logo-png",
    title: "TBDN Logo (PNG)",
    description: "High-resolution transparent PNG logo",
    type: "Logo",
    size: "120 KB",
    url: "/downloads/brand/logo-tbdn.png",
    category: "Branding",
  },
  {
    id: "brand-guidelines",
    title: "Brand Guidelines",
    description: "Comprehensive brand usage guide (PDF)",
    type: "Guideline",
    size: "1.2 MB",
    url: "/downloads/brand/tbdn-brand-guidelines.pdf",
    category: "Branding",
  },
  {
    id: "color-palette",
    title: "Color Palette",
    description: "Official TBDN color palette (ASE)",
    type: "Palette",
    size: "8 KB",
    url: "/downloads/brand/tbdn-colors.ase",
    category: "Branding",
  },
  {
    id: "donor-brochure",
    title: "Donor Brochure",
    description: "Informational brochure for potential donors",
    type: "Infographic",
    size: "2.4 MB",
    url: "/downloads/edu/donor-brochure.pdf",
    category: "Educational",
  },
  {
    id: "poster-pack",
    title: "Flyers & Posters Pack",
    description: "Print-ready flyers and posters (ZIP)",
    type: "Template",
    size: "14 MB",
    url: "/downloads/edu/flyer-poster-pack.zip",
    category: "Educational",
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    description: "Latest TBDN privacy policy document",
    type: "Policy",
    size: "320 KB",
    url: "/downloads/policy/privacy-policy.pdf",
    category: "Policy",
  },
  {
    id: "terms-of-service",
    title: "Terms of Service",
    description: "TBDN website terms of service",
    type: "Policy",
    size: "280 KB",
    url: "/downloads/policy/terms-of-service.pdf",
    category: "Policy",
  },
  {
    id: "volunteer-handbook",
    title: "Volunteer Handbook",
    description: "Complete guide for TBDN volunteers",
    type: "Document",
    size: "2 MB",
    url: "/downloads/policy/volunteer-handbook.pdf",
    category: "Policy",
  },
];

export function DownloadsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-6">
      {/* Header */}
      <section className="text-center space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Downloads</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Access official branding materials, educational resources, and policy
          documents. All files are free to use for media, partners, and the
          community.
        </p>
      </section>

      {/* Tabs by Category */}
      <Tabs defaultValue="Branding" className="w-full">
        <div className="relative w-full">
          <TabsList className="flex w-full overflow-x-auto scrollbar-none space-x-2 sm:space-x-4">
            <TabsTrigger
              value="Branding"
              className="flex-shrink-0 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <Palette className="h-3 w-3 sm:h-4 sm:w-4" />
              Branding
            </TabsTrigger>
            <TabsTrigger
              value="Educational"
              className="flex-shrink-0 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm whitespace-nowrap"
            >
              <BookOpenCheck className="h-3 w-3 sm:h-4 sm:w-4" />
              Educational Materials
            </TabsTrigger>
            <TabsTrigger
              value="Policy"
              className="flex-shrink-0 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4" />
              Policy Documents
            </TabsTrigger>
          </TabsList>
        </div>

        {["Branding", "Educational", "Policy"].map((cat) => (
          <TabsContent
            key={cat}
            value={cat}
            className="mt-4 sm:mt-6 space-y-4 sm:space-y-6"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {downloads
                .filter((d) => d.category === cat)
                .map((item) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-base sm:text-lg flex items-center gap-1.5 sm:gap-2">
                        {item.type === "Logo" && (
                          <Palette className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-600" />
                        )}
                        {item.type === "Guideline" && (
                          <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600" />
                        )}
                        {item.type === "Palette" && (
                          <Palette className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-600" />
                        )}
                        {item.type === "Template" && (
                          <FileArchive className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-600" />
                        )}
                        {item.type === "Policy" && (
                          <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-600" />
                        )}
                        {item.type === "Infographic" && (
                          <BookOpenCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-600" />
                        )}
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm mt-1">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span>{item.type}</span>•<span>{item.size}</span>
                      </div>
                      <Button
                        asChild
                        className="w-full h-8 sm:h-9 text-xs sm:text-sm"
                      >
                        <a href={item.url} download>
                          <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                          Download
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
            {downloads.filter((d) => d.category === cat).length === 0 && (
              <p className="text-center text-muted-foreground">
                No files available yet.
              </p>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
