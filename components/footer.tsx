import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white ">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600">
                <Heart className="h-5 w-5 text-white fill-current" />
              </div>
              <span className="text-xl font-bold text-red-600">TBDN</span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              The Blood Donation Network is dedicated to saving lives through
              voluntary blood donation. Every drop counts, every donor matters.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/become-donor"
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  Become a Donor
                </Link>
              </li>
              <li>
                <Link
                  href="/eligibility"
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  Donation Eligibility
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/drives"
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  Find Blood Drive
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/faq"
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>123 Health Street</p>
                  <p>Medical District</p>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>+234 800 BLOOD (25663)</p>
                  <p className="text-xs text-slate-400">24/7 Emergency Line</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-500 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>info@tbdn.org</p>
                  <p>emergency@tbdn.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-slate-300">
              Subscribe to our newsletter for blood drive updates and health
              tips.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Subscribe
              </Button>
            </div>
            <div className="pt-4 border-t border-slate-700">
              <h4 className="font-medium text-sm mb-2">
                Emergency Blood Request
              </h4>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-transparent border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © 2024 The Blood Donation Network (TBDN). All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <Link
                href="/privacy"
                className="hover:text-red-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-red-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-red-400 transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-red-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
