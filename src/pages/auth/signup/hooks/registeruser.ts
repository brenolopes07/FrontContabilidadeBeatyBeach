import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export interface RegisterUser{
   username: string;
   salarioMensal: number;
}
export interface User {
   id: number;
   username: string;
   salarioMensal: number;
   valorHora: number;
}

export  function useCadastrarUsuario(){
   const {mutate, isPending} = useMutation({
      mutationKey: ["cadastrarUsuario"],
      mutationFn: async ({username, salarioMensal}: RegisterUser) => {
         const {data} = await api.post<User>("/User", {
            username,
            salarioMensal,
         });
         console.log (data);
         return data;
         
      },
      onError: () => {
         toast.error("Erro ao cadastrar usuário. Por favor, tente novamente.", );
      },
      onSuccess: () => {  
         toast.success("Usuário cadastrado com sucesso! Agora você pode fazer login.", {
            duration: 5000,
            position: "top-right",
         });         
      }
   })
   return {
      onSubmit: mutate,
      isPending,
   }

   

}