import { Button } from "@/components/ui/button"
import { Calculator, LogOut, User } from "lucide-react"
import { useHeaderData } from "./hooks/useHeader"
import { formatMonthYear } from "@/utils/format-data/format-month-year"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DashboardHeader() {
   const {
      username,
      mesSelecionado,
      setMesSelecionado,
      mesesDisponiveis
   } = useHeaderData()

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
                  <div className="flex items-center space-x-2">
                     {/* Seletor de mês */}
                     <Select
                        value={mesSelecionado}
                        onValueChange={(value) => setMesSelecionado(value)}
                     >
                        <SelectTrigger className="w-[120px]">
                           <SelectValue placeholder="Selecione o mês" />
                        </SelectTrigger>
                        <SelectContent>
                           {mesesDisponiveis.map((mes) => (
                              <SelectItem key={mes} value={mes}>
                                 {formatMonthYear(mes)}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                  </div>
               </div>
            </div>

            {/* Usuário + botão logout */}
            <div className="flex items-center space-x-2">
               <div className="hidden sm:flex items-center space-x-2 mr-2">
                  <User className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">{username}</span>
               </div>
               <Button variant="ghost" size="sm" className="p-2">
                  <LogOut className="w-4 h-4" />
               </Button>
            </div>
         </div>
      </div>
   )
}