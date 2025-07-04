"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  MapPin,
  Users,
  Clock,
  Phone,
  ChevronDown,
  Search,
  Truck,
  Building,
  Heart,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface BloodDrive {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  state: string;
  city: string;
  type: "Mobile" | "Fixed";
  targetAudience: string;
  expectedDonors: number;
  registeredDonors: number;
  status: "Upcoming" | "Ongoing" | "Completed";
  contactPerson: string;
  contactPhone: string;
  specialRequirements: string[];
  description: string;
}

const bloodDrives: BloodDrive[] = [
  {
    id: "1",
    title: "University of Lagos Blood Drive",
    date: "2024-01-15",
    time: "09:00 - 16:00",
    location: "UNILAG Main Campus",
    address: "University Road, Akoka, Lagos",
    state: "Lagos",
    city: "Lagos",
    type: "Fixed",
    targetAudience: "Students & Staff",
    expectedDonors: 200,
    registeredDonors: 156,
    status: "Upcoming",
    contactPerson: "Dr. Sarah Adebayo",
    contactPhone: "+234 801 234 5678",
    specialRequirements: ["Student ID Required", "Age 18-25 Priority"],
    description:
      "Annual blood drive targeting university students and staff members.",
  },
  {
    id: "2",
    title: "Mobile Drive - Ikeja Market",
    date: "2024-01-18",
    time: "08:00 - 14:00",
    location: "Ikeja Computer Village",
    address: "Computer Village, Ikeja, Lagos",
    state: "Lagos",
    city: "Ikeja",
    type: "Mobile",
    targetAudience: "General Public",
    expectedDonors: 150,
    registeredDonors: 89,
    status: "Upcoming",
    contactPerson: "Nurse John Okafor",
    contactPhone: "+234 802 345 6789",
    specialRequirements: ["Bring Valid ID", "Fasting Not Required"],
    description:
      "Mobile blood drive serving the busy commercial area of Computer Village.",
  },
  {
    id: "3",
    title: "Corporate Drive - MTN Office",
    date: "2024-01-12",
    time: "10:00 - 15:00",
    location: "MTN Nigeria Headquarters",
    address: "Falomo, Ikoyi, Lagos",
    state: "Lagos",
    city: "Ikoyi",
    type: "Fixed",
    targetAudience: "Corporate Employees",
    expectedDonors: 100,
    registeredDonors: 100,
    status: "Completed",
    contactPerson: "Mrs. Funmi Adeyemi",
    contactPhone: "+234 803 456 7890",
    specialRequirements: ["Employee Badge Required"],
    description:
      "Corporate partnership blood drive for MTN employees and their families.",
  },
  {
    id: "4",
    title: "Community Drive - Abuja",
    date: "2024-01-20",
    time: "09:00 - 17:00",
    location: "National Hospital Abuja",
    address: "Central Business District, Abuja",
    state: "FCT",
    city: "Abuja",
    type: "Fixed",
    targetAudience: "General Public",
    expectedDonors: 300,
    registeredDonors: 45,
    status: "Upcoming",
    contactPerson: "Dr. Ahmed Musa",
    contactPhone: "+234 804 567 8901",
    specialRequirements: ["Health Screening Required", "Appointment Preferred"],
    description:
      "Large community blood drive in partnership with National Hospital Abuja.",
  },
];

export function BloodDrivesPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [viewMode, setViewMode] = useState<"month" | "week" | "day">("month");
  const [filters, setFilters] = useState({
    state: "Lagos",
    city: "Lagos",
    type: "Fixed",
    targetAudience: "Students",
    dateRange: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedDrive, setExpandedDrive] = useState<string | null>(null);

  const filteredDrives = bloodDrives.filter((drive) => {
    const matchesSearch =
      drive.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drive.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !filters.state || drive.state === filters.state;
    const matchesCity = !filters.city || drive.city === filters.city;
    const matchesType = !filters.type || drive.type === filters.type;
    const matchesAudience =
      !filters.targetAudience ||
      drive.targetAudience.includes(filters.targetAudience);

    return (
      matchesSearch &&
      matchesState &&
      matchesCity &&
      matchesType &&
      matchesAudience
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      case "Ongoing":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "Mobile" ? Truck : Building;
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Blood Drives</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find and register for blood drives in your area. Join us in saving
          lives through regular blood donation events across Nigeria.
        </p>
      </section>

      {/* Search and Filters */}
      <section className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blood drives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Select
              value={filters.state}
              onValueChange={(value) =>
                setFilters({ ...filters, state: value })
              }
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Lagos">Lagos</SelectItem>
                <SelectItem value="FCT">FCT Abuja</SelectItem>
                <SelectItem value="Kano">Kano</SelectItem>
                <SelectItem value="Rivers">Rivers</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filters.type}
              onValueChange={(value) => setFilters({ ...filters, type: value })}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mobile">Mobile</SelectItem>
                <SelectItem value="Fixed">Fixed</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={filters.targetAudience}
              onValueChange={(value) =>
                setFilters({ ...filters, targetAudience: value })
              }
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Students">Students</SelectItem>
                <SelectItem value="Corporate">Corporate</SelectItem>
                <SelectItem value="General">General Public</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Calendar and List View */}
      <section className="grid lg:grid-cols-3 gap-8">
        {/* Calendar View */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Calendar View
                </CardTitle>
                <Tabs
                  value={viewMode}
                  onValueChange={(value) =>
                    setViewMode(value as "month" | "week" | "day")
                  }
                >
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="month" className="text-xs">
                      Month
                    </TabsTrigger>
                    <TabsTrigger value="week" className="text-xs">
                      Week
                    </TabsTrigger>
                    <TabsTrigger value="day" className="text-xs">
                      Day
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
              <div className="mt-4 space-y-2">
                <h4 className="font-medium text-sm">Legend</h4>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Upcoming Drives</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Ongoing Drives</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Drives List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              Blood Drives ({filteredDrives.length}{" "}
              {filteredDrives.length === 1 ? "drive" : "drives"})
            </h3>
            <Select defaultValue="date">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Sort by Date</SelectItem>
                <SelectItem value="location">Sort by Location</SelectItem>
                <SelectItem value="capacity">Sort by Capacity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredDrives.map((drive) => {
            const TypeIcon = getTypeIcon(drive.type);
            const isExpanded = expandedDrive === drive.id;

            return (
              <Card key={drive.id} className="overflow-hidden">
                <Collapsible
                  open={isExpanded}
                  onOpenChange={() =>
                    setExpandedDrive(isExpanded ? null : drive.id)
                  }
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                              <TypeIcon className="h-5 w-5 text-red-600" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">
                                {drive.title}
                              </CardTitle>
                              <CardDescription className="flex items-center gap-4 mt-1">
                                <span className="flex items-center gap-1">
                                  <CalendarIcon className="h-4 w-4" />
                                  {new Date(
                                    drive.date
                                  ).toLocaleDateString()} • {drive.time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {drive.location}
                                </span>
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(drive.status)}>
                            {drive.status}
                          </Badge>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">
                            {drive.registeredDonors}/{drive.expectedDonors}{" "}
                            registered
                          </span>
                        </div>
                        <Badge variant="outline">{drive.type} Drive</Badge>
                        <Badge variant="outline">{drive.targetAudience}</Badge>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <Separator className="mb-6" />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              Drive Details
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                                <div>
                                  <p className="font-medium">
                                    {drive.location}
                                  </p>
                                  <p className="text-muted-foreground">
                                    {drive.address}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{drive.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  Target: {drive.expectedDonors} donors
                                </span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">
                              Contact Information
                            </h4>
                            <div className="space-y-1 text-sm">
                              <p className="font-medium">
                                {drive.contactPerson}
                              </p>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                <span>{drive.contactPhone}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              Registration Status
                            </h4>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Registered</span>
                                <span>
                                  {drive.registeredDonors}/
                                  {drive.expectedDonors}
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-red-600 h-2 rounded-full"
                                  style={{
                                    width: `${Math.min(
                                      (drive.registeredDonors /
                                        drive.expectedDonors) *
                                        100,
                                      100
                                    )}%`,
                                  }}
                                ></div>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                {drive.registeredDonors >=
                                drive.expectedDonors ? (
                                  <>
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-green-600">
                                      Fully Registered
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <AlertCircle className="h-4 w-4 text-orange-600" />
                                    <span className="text-orange-600">
                                      {drive.expectedDonors -
                                        drive.registeredDonors}{" "}
                                      spots available
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          {drive.specialRequirements.length > 0 && (
                            <div>
                              <h4 className="font-semibold mb-2">
                                Special Requirements
                              </h4>
                              <ul className="space-y-1">
                                {drive.specialRequirements.map((req, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-2 text-sm"
                                  >
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-sm text-muted-foreground mb-4">
                          {drive.description}
                        </p>
                        <div className="flex gap-3">
                          <Button
                            className="bg-red-600 hover:bg-red-700"
                            disabled={
                              drive.registeredDonors >= drive.expectedDonors ||
                              drive.status === "Completed"
                            }
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            {drive.status === "Completed"
                              ? "Drive Completed"
                              : "Register to Donate"}
                          </Button>
                          <Button variant="outline">
                            <Phone className="h-4 w-4 mr-2" />
                            Contact Organizer
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}

          {filteredDrives.length === 0 && (
            <Card>
              <CardContent className="text-center py-12">
                <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No Blood Drives Found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms to find blood
                  drives in your area.
                </p>
                <Button variant="outline">Clear Filters</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-red-600">24</div>
            <div className="text-sm text-muted-foreground">
              Drives This Month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <div className="text-sm text-muted-foreground">
              Total Registrations
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">89%</div>
            <div className="text-sm text-muted-foreground">
              Average Attendance
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">15</div>
            <div className="text-sm text-muted-foreground">
              Partner Locations
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
