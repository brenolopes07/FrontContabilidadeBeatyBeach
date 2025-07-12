import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function HoraExtraModal() {
   return (        
      <div className="space-y-4">
         <div className="space-y-2">
            <Label htmlFor="extra-date">Data</Label>
            <Input id="extra-date" type="date" className="h-12" />
         </div>

         <div className="space-y-2">
            <Label htmlFor="extra-hours">Horas Trabalhadas</Label>
            <Input id="extra-hours" type="number" step="0.5" placeholder="Ex: 2.5" className="h-12" />
         </div>
         <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-base">
            <Plus className="w-5 h-5 mr-2" />
            Adicionar Hora Extra
         </Button>
      </div>
   )
}