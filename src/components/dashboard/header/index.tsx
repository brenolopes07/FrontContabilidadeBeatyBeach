import { Button } from "@/components/ui/button";
import { Calculator, LogOut, User } from "lucide-react";

export function DashboardHeader (){
   return (
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b px-4 py-3 sm:px-6">
         <div className="flex items-center justify-between">
            {/* Logo + título */}
            <div className="flex items-center space-x-3">
               <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center sm:w-10 sm:h-10">
                  <Calculator className="w-4 h-4 text-white sm:w-5 sm:h-5" />
               </div>
               <div>
                  <h1 className="text-lg font-bold text-gray-900 sm:text-xl">Dashboard</h1>
                  <p className="text-xs text-gray-600 sm:text-sm">Janeiro 2024</p>
               </div>
            </div>

            {/* Nome do usuário + logout */}
            <div className="flex items-center space-x-2">
               <div className="hidden sm:flex items-center space-x-2 mr-2">
                  <User className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Breno Lopes</span>
               </div>
               <Button variant="ghost" size="sm" className="p-2">
                  <LogOut className="w-4 h-4" />
               </Button>
            </div>
         </div>
      </div>
   )
}
