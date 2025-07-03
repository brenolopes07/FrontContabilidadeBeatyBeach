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

import { User} from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { useLoginUser } from "./hooks/userlogin"

export function SignIn(){
   const [user, setUser] = useState({
      username: "",
   });
   const { onSubmit, isPending } = useLoginUser();

   function handleSubmit(e: React.FormEvent) {
      e.preventDefault();

      if (!user.username) {
         toast.error("Por favor, preencha o campo de username.", {
            duration: 2000,       
         } 
         )};

      onSubmit({
         username: user.username,
      });
   }
   return (
      <div className="w-full max-w-md">
         <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-8">                             
               <CardTitle className="text-2xl font-bold text-center text-gray-900">
                  Fazer Login
               </CardTitle>
               <CardDescription className="text-center text-gray-600">
                  Use seu username para realizar o login!
               </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
               <CardContent className="space-y-4">
                  <div className="space-y-2">
                     <Label htmlFor="username" className="text-sm font-medium text-gray-900">
                        Username
                     </Label>
                     <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                           id="username"
                           type="text"
                           placeholder="Digite seu username"                           
                           className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                           value={user.username}
                           onKeyDown={(e) => {
                              if (e.key === ' ') e.preventDefault(); 
                           }}
                           onChange={(e) => setUser({ ...user, username: e.target.value })}
                           required
                        />
                     </div>
                  </div>                                                 
               </CardContent>

               <CardFooter className="flex flex-col space-y-4 pt-6">
                  <Button
                     type="submit"
                     className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]" 
                     disabled={isPending}                                        
                  >
                     {isPending ? "Entrando..." : "Entrar"}                                         
                  </Button>
                 
               </CardFooter>
            </form>
         </Card>
      </div>
   )
}