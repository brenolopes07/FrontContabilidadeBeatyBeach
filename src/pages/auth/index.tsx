import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/ui/tabs"
import { SignIn } from "./signin"
import { SignUp } from "./signup"

export function Auth() {
   return (
      <div className="w-screen h-screen bg-gradient-to-r from-purple-300 to-purple-700">
         <div className="flex justify-center items-center pt-15">
         <Tabs className="flex w-[400px]" defaultValue="signin">
            <TabsList className="w-full justify-center">
               <TabsTrigger value="signin">Login</TabsTrigger>
               <TabsTrigger value="signup">Cadastro</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
            <SignIn/>
            </TabsContent>
            <TabsContent value="signup">
               <SignUp/>
            </TabsContent>
         </Tabs>
         </div>
      </div>
   )
}
