import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RegisterFormProps {
   onSubmit: (username: string, salarioMensal: number) => void;
   isLoading?: boolean; 
}

export function RegisterForm({ onSubmit, isLoading = false }: RegisterFormProps) {
   const [username, setUsername] = useState("");
   const [salarioMensal, setSalarioMensal] = useState("");

   const handleSubmit = () => {
      const salarioNum = parseFloat(salarioMensal);
      if (!username || isNaN(salarioNum)) {
         alert("Por favor, preencha todos os campos corretamente.");
         return;
      }
      onSubmit(username, salarioNum);
   };

   return (
      <div className="space-y-4">
         <label className="block mb-1 text-gray-700 font-semibold">Username</label>
         <Input
            placeholder="Digite seu username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
         />
         <label className="block mb-1 text-gray-700 font-semibold">Salário Mensal</label>
         <Input
            type="number"
            placeholder="Digite seu salário mensal"
            value={salarioMensal}
            onChange={(e) => setSalarioMensal(e.target.value)}
         />
         <Button className="w-full" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Cadastrando..." : "Cadastrar"}
         </Button>
      </div>
   );
}