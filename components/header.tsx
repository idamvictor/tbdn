"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Heart, ChevronRight } from "lucide-react";

const aboutLinks = [
  { title: "Our Story", href: "/about/story" },
  { title: "Team", href: "/about/team" },
  { title: "Vision & Mission", href: "/about/mission" },
  { title: "Awards & Recognition", href: "/about/awards" },
];

const getInvolvedLinks = [
  { title: "Become a Donor", href: "/get-involved/become-donor" },
  { title: "Volunteer", href: "/get-involved/volunteer" },
  { title: "Partner with Us", href: "/get-involved/partners" },
];

const programsLinks = [
  { title: "Blood Drives", href: "/programs/drives" },
  { title: "Campaigns", href: "/programs/campaigns" },
  // { title: "Educational Programs", href: "/programs/education" },
];

const resourcesLinks = [
  { title: "Impact Stories", href: "/resources/stories" },
  { title: "Blog", href: "/resources/blog" },
  { title: "Media Center", href: "/resources/media" },
  { title: "Downloads", href: "/resources/downloads" },
];

// const funZoneLinks = [
//   { title: "Games", href: "/fun-zone/games" },
//   { title: "Art Corner", href: "/fun-zone/art" },
//   { title: "AI Corner", href: "/fun-zone/ai" },
// ];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-red-600">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-white fill-current" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-red-600">
            TBDN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[280px] gap-3 p-4 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {aboutLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {link.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {getInvolvedLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {link.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {programsLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {link.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resourcesLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {link.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Fun Zone</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {funZoneLinks.map((link) => (
                    <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {link.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                <Link href="/ai-partners">AI Partners</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                <Link href="/support">Support Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          {/* <Button
            variant="outline"
            size="sm"
            className="bg-white text-red-600 border-red-600 hover:bg-red-50 whitespace-nowrap"
          >
            <Phone className="h-4 w-4 mr-2" />
            Emergency
          </Button> */}
          <Link href="/contact">
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 whitespace-nowrap"
            >
              Donate Blood
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-1 lg:hidden">
          {/* <Button
            variant="outline"
            size="sm"
            className="bg-white text-red-600 border-red-600 hover:bg-red-50"
          >
            <Phone className="h-4 w-4" />
            <span className="sr-only">Emergency</span>
          </Button> */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[360px] p-0 bg-gradient-to-b from-white to-slate-50"
            >
              <nav className="flex flex-col h-full">
                <div className="p-4 sm:p-6 border-b bg-white/80 backdrop-blur-sm">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                      <Heart className="h-5 sm:h-6 w-5 sm:w-6 text-white fill-current" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                      TBDN
                    </span>
                  </Link>
                </div>

                <motion.div
                  className="flex-1 overflow-y-auto py-4 sm:py-6 px-4 space-y-4 sm:space-y-6"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/"
                      className="flex items-center justify-between py-2 text-base sm:text-lg font-medium hover:text-red-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>Home</span>
                      <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5 opacity-50" />
                    </Link>
                  </motion.div>

                  {[
                    { title: "About", links: aboutLinks },
                    { title: "Get Involved", links: getInvolvedLinks },
                    { title: "Programs", links: programsLinks },
                    { title: "Resources", links: resourcesLinks },
                    // { title: "Fun Zone", links: funZoneLinks },
                  ].map((section) => (
                    <motion.div
                      key={section.title}
                      variants={itemVariants}
                      className="space-y-3"
                    >
                      <button
                        onClick={() =>
                          setActiveSection(
                            activeSection === section.title ? "" : section.title
                          )
                        }
                        className="flex items-center justify-between w-full group"
                      >
                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide group-hover:text-red-600 transition-colors">
                          {section.title}
                        </h3>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeSection === section.title ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeSection === section.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 pl-4 pt-2">
                              {section.links.map((link) => (
                                <motion.div
                                  key={link.href}
                                  variants={menuVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                >
                                  <Link
                                    href={link.href}
                                    className="block py-2 text-sm hover:text-red-600 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {link.title}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}

                  <motion.div variants={itemVariants} className="space-y-2">
                    {["/contact"].map((path) => (
                      <Link
                        key={path}
                        href={path}
                        className="flex items-center justify-between py-2 text-lg font-medium hover:text-red-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>
                          {path === "/support" ? "Support Us" : "Contact"}
                        </span>
                        <ChevronRight className="h-5 w-5 opacity-50" />
                      </Link>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="p-4 sm:p-6 border-t bg-gradient-to-b from-slate-50 to-white"
                  variants={itemVariants}
                >
                  <div className="space-y-2 sm:space-y-3">
                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-white/80 backdrop-blur-sm text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-300 shadow-sm text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency Contact
                    </Button> */}
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Donate Blood Now
                    </Button>
                  </div>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
