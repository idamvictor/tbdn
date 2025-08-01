"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-16 w-16 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? (
            <X className="h-8 w-8 text-white" />
          ) : (
            <MessageCircle className="h-8 w-8 text-white" />
          )}
        </Button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 animate-fade-in-up">
          <div className="bg-emerald-500 text-white p-4 rounded-t-2xl">
            <h3 className="font-semibold">Chat with us on WhatsApp</h3>
            <p className="text-emerald-100 text-sm">We&apos;re here to help!</p>
          </div>
          <div className="p-6">
            <p className="text-slate-600 mb-4">
              Get instant support for blood donation inquiries, emergency
              requests, or general questions.
            </p>
            <Button
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
              asChild
            >
              <a
                href="https://wa.me/2348001234567?text=Hello! I need help with blood donation."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Chat
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
