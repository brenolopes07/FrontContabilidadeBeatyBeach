import { SalaryBaseCard } from "@/components/dashboard/cards/salary-base";
import { TotalSalaryCard } from "@/components/dashboard/cards/total-salary";
import { DashboardHeader } from "@/components/dashboard/header";

export function Dashboard(){
   return (
      <div className = "min-h-screen" >
      <DashboardHeader />
      <div className="px-4 py-6 space-y-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SalaryBaseCard value="R$ 5.000,00" />
          <TotalSalaryCard value="R$ 5.000,00" />
        </div>
       
      </div>
    </div >
   )
}
