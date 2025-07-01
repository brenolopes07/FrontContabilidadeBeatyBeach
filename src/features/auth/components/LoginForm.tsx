import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginFormProps {
   onSubmit: (username: string) => void;
   isLoading?: boolean; // Para mostrar feedback de carregamento
}

export function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
   const [username, setUsername] = useState("");

   const handleSubmit = () => {
      if (!username) {
         alert("Por favor, preencha o username.");
         return;
      }
      onSubmit(username);
   };

   return (
      <div className="space-y-4">
         <label className="block mb-1 text-gray-700 font-semibold">Username</label>
         <Input
            placeholder="Digite seu username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
         />
         <Button className="w-full" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
         </Button>
      </div>
   );
}