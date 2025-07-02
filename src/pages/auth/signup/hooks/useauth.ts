import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

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
         const response = await api.post<User>("/User", {
            Username: username,
            SalarioMensal: salarioMensal,
         });
         return response.data;
      },
      onError: (error) => {
         console.error("Erro ao cadastrar usuário:", error);
         alert("Erro ao cadastrar usuário. Tente novamente.");
      }
   })
   return {
      onSubmit: mutate,
      isPending,
   }

   

}