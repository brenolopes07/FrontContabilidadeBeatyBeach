import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useHoraExtra } from "./hooks/usecase-horaextra";

export function HoraExtraModal() {
   const [date, setDate] = useState("");
   const [hours, setHours] = useState<number>(0);
   const { addHoraExtra } = useHoraExtra();

   const handleSubmit = async () => {
      try {
         const result = await addHoraExtra(date, hours);
         console.log("Registro criado:", result);
         alert("Hora extra adicionada com sucesso!");
         setDate("");
         setHours(0);
      } catch (error) {
         console.error(error);
         alert("Erro ao adicionar hora extra");
      }
   };

   return (
      <div className="space-y-4">
         <div className="space-y-2">
            <Label htmlFor="extra-date">Data</Label>
            <Input
               id="extra-date"
               type="date"
               className="h-12"
               value={date}
               onChange={(e) => setDate(e.target.value)}
            />
         </div>

         <div className="space-y-2">
            <Label htmlFor="extra-hours">Horas Trabalhadas</Label>
            <Input
               id="extra-hours"
               type="number"
               step="0.5"
               placeholder="Ex: 2.5"
               className="h-12"
               value={hours}
               onChange={(e) => setHours(Number(e.target.value))}
            />
         </div>

         <Button
            onClick={handleSubmit}
            className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-base"
         >
            <Plus className="w-5 h-5 mr-2" />
            Adicionar Hora Extra
         </Button>
      </div>
   );
}
