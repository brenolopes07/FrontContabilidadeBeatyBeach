import { Card, CardContent } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

interface SalaryBaseCardProps {
   value: string // Ex: "R$ 5.000,00"
}

export function SalaryBaseCard({ value }: SalaryBaseCardProps) {
   return (
      <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
         <CardContent className="p-4">
            <div className="flex items-center justify-between">
               <div>
                  <p className="text-sm opacity-90 font-medium">Salário Base</p>
                  <p className="text-xl font-bold sm:text-2xl">{value}</p>
               </div>
               <DollarSign className="w-8 h-8 opacity-80" />
            </div>
         </CardContent>
      </Card>
   )
}