import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, AlertTriangle, Clock } from "lucide-react"

export function EmergencyContact() {
  return (
    <Card className="border-red-200 bg-red-50">
      <CardContent className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-red-600 p-3 rounded-full">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-red-800">Emergency Blood Request</h2>
            <p className="text-red-600">24/7 Emergency Support Available</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold text-red-800">Emergency Hotline</p>
                <p className="text-lg font-bold text-red-600">+234-800-BLOOD-1</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold text-red-800">Response Time</p>
                <p className="text-red-600">Within 30 minutes</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              Call Emergency Line
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
              Request Blood Online
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
