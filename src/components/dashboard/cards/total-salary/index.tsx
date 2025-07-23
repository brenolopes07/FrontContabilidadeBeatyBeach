import { Card, CardContent } from "@/components/ui/card"
import { Calculator } from "lucide-react"
import { useHeaderData } from "../../header/hooks/useHeader";
import { useResumoMensal } from "./hooks/useResumoMensal";
import { salaryBaseData } from "../salary-base/hooks/salary-base.usecase";

export function TotalSalaryCard() {
   const { userId, mesSelecionado,  } = useHeaderData(); 
   const salariomMensal = salaryBaseData();

   const { resumo, loading, error } = useResumoMensal(userId, mesSelecionado);

   const salarioTotal = resumo?.salarioTotal ?? 0;


   return (
      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
         <CardContent className="p-4">
            <div className="flex items-center justify-between">
               <div>
                  <p className="text-sm opacity-90 font-medium">Total Mensal</p>

                  {loading ? (
                     <p className="text-xl font-bold sm:text-2xl">Carregando...</p>
                  ) : error ? (
                     <p className="text-xl font-bold sm:text-2xl">R$ {salariomMensal?.toFixed(2)}</p>
                  ) : (
                     <p className="text-xl font-bold sm:text-2xl">
                        R$ {salarioTotal.toFixed(2)}
                     </p>
                  )}

                  <p className="text-xs opacity-75">Calculado</p>
               </div>
               <Calculator className="w-8 h-8 opacity-80" />
            </div>
         </CardContent>
      </Card>
   )
}