import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Importe os componentes Tabs
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { login, cadastrarUsuario } from "../service"; // Seus serviços de API
import { useNavigate } from "react-router-dom";

export function AuthTabs() {
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();

   const handleLoginSubmit = async (username: string) => {
      setIsLoading(true);
      try {
         const response = await login(username);
         console.log("Usuário logado/encontrado:", response);
         localStorage.setItem("usuario", JSON.stringify(response));
         alert(`Bem-vindo, ${response.username}!`);
         navigate("/dashboard");
      } catch (error) {
         console.error("Erro no login:", error);
         alert("Erro ao fazer login. Verifique o username.");
      } finally {
         setIsLoading(false);
      }
   };

   const handleRegisterSubmit = async (username: string, salarioMensal: number) => {
      setIsLoading(true);
      try {
         const usuarioCriado = await cadastrarUsuario(username, salarioMensal);
         console.log("Usuário criado:", usuarioCriado);
         localStorage.setItem("usuario", JSON.stringify(usuarioCriado));
         alert("Cadastro realizado com sucesso!");
         navigate("/dashboard");
      } catch (error) {
         console.error("Erro no cadastro:", error);
         alert("Erro ao cadastrar. Tente novamente.");
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-8 max-w-md w-full text-gray-800 shadow-xl">
         <h1 className="text-3xl font-bold text-white mb-2 text-center">SalaryTracker</h1>
         <p className="text-white mb-6 text-center">Gerencie seu salário e comissões</p>

         <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Acesse sua conta</h2>
         <p className="text-gray-600 text-center mb-6">Entre ou crie uma nova conta para começar</p>


         <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
               <TabsTrigger value="login">Login</TabsTrigger>
               <TabsTrigger value="register">Cadastrar</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="pt-6"> 
               <LoginForm onSubmit={handleLoginSubmit} isLoading={isLoading} />
            </TabsContent>

            <TabsContent value="register" className="pt-6"> 
               <RegisterForm onSubmit={handleRegisterSubmit} isLoading={isLoading} />
            </TabsContent>
         </Tabs>
      </div>
   );
}