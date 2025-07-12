import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

export function ComissoesModal(){
   return (
      <div className="space-y-4">
         <div className="space-y-2">
            <Label htmlFor="commission-date">Data</Label>
            <Input id="commission-date" type="date" className="h-12" />
         </div>

         <div className="space-y-2">
            <Label htmlFor="commission-amount">Valor (R$)</Label>
            <Input
               id="commission-amount"
               type="number"
               step="0.01"
               placeholder="Ex: 500.00"
               className="h-12"
            />
         </div>

         <div className="space-y-2">
            <Label htmlFor="commission-description">Descrição (opcional)</Label>
            <Textarea
               id="commission-description"
               placeholder="Descreva a origem da comissão..."
               className="min-h-[80px]"
            />
         </div>

         <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-base">
            <Plus className="w-5 h-5 mr-2" />
            Adicionar Comissão
         </Button>
      </div>
   )
}