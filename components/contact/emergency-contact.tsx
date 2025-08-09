import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, Clock, Zap } from "lucide-react";

export function EmergencyContact() {
  return (
    <Card className="border-0 bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-2xl overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <CardContent className="p-6 sm:p-8 md:p-10 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 mb-6 sm:mb-8">
          <div className="relative mb-4 sm:mb-0">
            <div className="bg-white p-3 sm:p-4 rounded-full shadow-lg">
              <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-rose-600" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Emergency Blood Request
            </h2>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
              <p className="text-rose-100 text-base sm:text-lg">
                24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="p-2 bg-white/20 rounded-lg">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-base sm:text-lg">
                  Emergency Hotline
                </p>
                <p className="text-xl sm:text-2xl font-bold text-yellow-300">
                  +234-800-BLOOD-1
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="p-2 bg-white/20 rounded-lg">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-base sm:text-lg">
                  Response Time
                </p>
                <p className="text-yellow-300 text-lg sm:text-xl font-semibold">
                  Within 30 minutes
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-4">
            <Button
              size="lg"
              className="bg-white text-rose-600 hover:bg-rose-50 font-semibold text-base sm:text-lg h-12 sm:h-14 md:h-16 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
              Call Emergency Line
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-rose-600 font-semibold text-base sm:text-lg h-12 sm:h-14 md:h-16 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request Blood Online
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
