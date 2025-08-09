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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Truck,
  Building,
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
  const [expandedDrive, setExpandedDrive] = useState<string | null>(null);

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
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
      {/* Header Section */}
      <section className="text-center space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Blood Drives</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Find and register for blood drives in your area. Join us in saving
          lives through regular blood donation events across Nigeria.
        </p>
      </section>

      {/* Drives List */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <h3 className="text-lg sm:text-xl font-semibold">
            Blood Drives ({bloodDrives.length}{" "}
            {bloodDrives.length === 1 ? "drive" : "drives"})
          </h3>
          <Select defaultValue="date">
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Sort by Date</SelectItem>
              <SelectItem value="location">Sort by Location</SelectItem>
              <SelectItem value="capacity">Sort by Capacity</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {bloodDrives.map((drive) => {
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
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-2">
                      <div className="space-y-2 w-full">
                        <div className="flex items-start sm:items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <TypeIcon className="h-5 w-5 text-red-600" />
                          </div>
                          <div className="space-y-1 sm:space-y-0">
                            <CardTitle className="text-base sm:text-lg leading-tight">
                              {drive.title}
                            </CardTitle>
                            <CardDescription className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-1">
                              <span className="flex items-center gap-1 text-sm">
                                <CalendarIcon className="h-4 w-4 flex-shrink-0" />
                                {new Date(drive.date).toLocaleDateString()} •{" "}
                                {drive.time}
                              </span>
                              <span className="flex items-center gap-1 text-sm">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                {drive.location}
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
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
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm whitespace-nowrap">
                          {drive.registeredDonors}/{drive.expectedDonors}{" "}
                          registered
                        </span>
                      </div>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {drive.type} Drive
                      </Badge>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {drive.targetAudience}
                      </Badge>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 px-4 sm:px-6">
                    <Separator className="mb-6" />
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-6 sm:space-y-4">
                        <div>
                          <h4 className="font-semibold mb-3 sm:mb-2">
                            Drive Details
                          </h4>
                          <div className="space-y-3 sm:space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                              <div>
                                <p className="font-medium leading-tight">
                                  {drive.location}
                                </p>
                                <p className="text-muted-foreground mt-1">
                                  {drive.address}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span>{drive.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span>Target: {drive.expectedDonors} donors</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 sm:mb-2">
                            Contact Information
                          </h4>
                          <div className="space-y-2 text-sm">
                            <p className="font-medium">{drive.contactPerson}</p>
                            <a
                              href={`tel:${drive.contactPhone}`}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                            >
                              <Phone className="h-4 w-4 flex-shrink-0" />
                              <span>{drive.contactPhone}</span>
                            </a>
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
                                {drive.registeredDonors}/{drive.expectedDonors}
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
                        {/* <Button
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
                        </Button> */}
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
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-red-600">24</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">
              Drives This Month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              1,247
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">
              Total Registrations
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-green-600">
              89%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">
              Average Attendance
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-purple-600">
              15
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">
              Partner Locations
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
