import { Card, CardContent } from "@/components/ui/card"
import { Calculator } from "lucide-react"

interface TotalSalaryCardProps {
   value: string // Ex: "R$ 5.250,00"
}

export function TotalSalaryCard({ value }: TotalSalaryCardProps) {
   return (
      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
         <CardContent className="p-4">
            <div className="flex items-center justify-between">
               <div>
                  <p className="text-sm opacity-90 font-medium">Total Mensal</p>
                  <p className="text-xl font-bold sm:text-2xl">{value}</p>
                  <p className="text-xs opacity-75">Calculado</p>
               </div>
               <Calculator className="w-8 h-8 opacity-80" />
            </div>
         </CardContent>
      </Card>
   )
}