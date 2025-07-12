import { SalaryBaseCard } from "@/components/dashboard/cards/salary-base";
import { TotalSalaryCard } from "@/components/dashboard/cards/total-salary";
import { ComissoesModal } from "@/components/dashboard/comissao-modal";
import { DashboardHeader } from "@/components/dashboard/header";
import { HoraExtraModal } from "@/components/dashboard/hora-extra-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, DollarSign } from "lucide-react";

export function Dashboard(){
   return (
      <div className = "min-h-screen" >
      <DashboardHeader />
      <div className="px-4 py-6 space-y-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SalaryBaseCard value="R$ 5.000,00" />
          <TotalSalaryCard value="R$ 5.000,00" />
        </div>
         <Tabs defaultValue="extras" className="w-full">
           <TabsList className="grid w-full grid-cols-2 h-12">
             <TabsTrigger value="extras" className="flex items-center space-x-2">
               <Clock className="w-4 h-4" />
               <span>Hora Extra</span>
             </TabsTrigger>
             <TabsTrigger value="commissions" className="flex items-center space-x-2">
               <DollarSign className="w-4 h-4" />
               <span>Comissão</span>
             </TabsTrigger>
           </TabsList>

           <TabsContent value="extras" className="mt-6">
             <HoraExtraModal />
           </TabsContent>

           <TabsContent value="commissions" className="mt-6">
             <ComissoesModal />
           </TabsContent>
         </Tabs>
      </div>
    </div >
   )
}
