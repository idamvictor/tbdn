"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "+2348123456789"
  const defaultMessage = "Hi! I need help with blood donation information."

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80">
          <Card className="shadow-xl border-green-200">
            <div className="bg-green-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold">TBDN Support</h3>
                  <p className="text-sm text-green-100">Typically replies instantly</p>
                </div>
              </div>
            </div>

            <CardContent className="p-4 space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">👋 Hi there! How can we help you today?</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-600">Quick options:</p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left h-auto p-2 bg-transparent"
                    onClick={openWhatsApp}
                  >
                    🩸 Blood donation information
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left h-auto p-2 bg-transparent"
                    onClick={openWhatsApp}
                  >
                    📅 Schedule appointment
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left h-auto p-2 bg-transparent"
                    onClick={openWhatsApp}
                  >
                    🚨 Emergency blood request
                  </Button>
                </div>
              </div>

              <Button onClick={openWhatsApp} className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Send className="h-4 w-4 mr-2" />
                Start Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
