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
import { useCadastrarUsuario } from "./hooks/useauth"
import { DollarSign, User } from "lucide-react"

export function SignUp (){

   const { onSubmit } = useCadastrarUsuario();
   return (
      <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
         <CardHeader className="space-y-1 pb-6">            
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Criar conta</CardTitle>
            <CardDescription className="text-center text-gray-600">
               Preencha os dados abaixo para se cadastrar
            </CardDescription>
         </CardHeader>

         <form>
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
                        onKeyDown={(e) => {
                           if (e.key === ' ') e.preventDefault(); 
                         }}
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
               >
                  Cadastrar
               </Button>
            </CardFooter>
         </form>
      </Card>
   )
}