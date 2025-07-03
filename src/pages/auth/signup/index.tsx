import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCadastrarUsuario } from "./hooks/registeruser"
import { DollarSign, User } from "lucide-react"
import { useState } from "react"

export function SignUp (){
   const [user, setUser] = useState({
      username: "",
      salarioMensal: "",
   })
   const { onSubmit, isPending } = useCadastrarUsuario();

   function handleSubmit(e: React.FormEvent) {
      e.preventDefault();   
      
   const salarioConvertido = parseFloat(user.salarioMensal.replace(",","."))   

   if(!user.username ||  isNaN(salarioConvertido)) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
   }
   console.log("Dados do usuário:", {
      username: user.username,
      salarioMensal: salarioConvertido,
   });

   onSubmit({
      username: user.username,
      salarioMensal: salarioConvertido,
   });
   }

   return (
      <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
         <CardHeader className="space-y-1 pb-6">            
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Criar conta</CardTitle>
            <CardDescription className="text-center text-gray-600">
               Preencha os dados abaixo para se cadastrar
            </CardDescription>
         </CardHeader>

         <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
               <div className="space-y-2">
                  <Label htmlFor="new-username" className="text-sm font-medium text-gray-700">
                     Username
                  </Label>
                  <div className="relative">
                     <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                     <Input
                        id="new-username"
                        type="text"
                        placeholder="Escolha um username"
                        className="pl-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        value={user.username}
                        onKeyDown={(e) => {
                           if (e.key === ' ') e.preventDefault(); 
                         }}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        required
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <Label htmlFor="salary" className="text-sm font-medium text-gray-700">
                     Salário Mensal
                  </Label>
                  <div className="relative">
                     <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                     <Input
                        id="salary"
                        type="text"
                        placeholder="R$ 0,00"
                        className="pl-10 h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        value={user.salarioMensal}
                        onChange={(e) => setUser({ ...user, salarioMensal: e.target.value })}
                        required
                     />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                     Digite apenas números. O formato será aplicado automaticamente.
                  </p>
               </div>
            </CardContent>

            <CardFooter className="pt-6">
               <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                  disabled={isPending}                              
                  >
                  {isPending ? "Cadastrando..." : "Cadastrar"}                 
               </Button>
            </CardFooter>
         </form>
      </Card>
   )
}