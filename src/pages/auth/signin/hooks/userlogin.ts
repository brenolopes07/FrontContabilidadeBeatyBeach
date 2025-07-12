import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export interface UserLogin{
   username: string;
}
export interface User {
   id: number;
   username: string;
   salarioMensal: number;
   dataCadastro: Date;
   horaExtras: [];
   resumoMensal: [];
   comissoes: [];
}

export function useLoginUser(){
   const navigate = useNavigate();
   const {mutate, isPending} = useMutation({
      mutationKey: ["loginUser"],
      mutationFn: async ({username}: UserLogin) => {
         const usuario = await api.get<User>("/User", {
            params: { username },
         });

         return usuario.data;
      },     
      onError:() => {
         toast.error("Erro ao fazer login. Por favor, verifique seu usuário e tente novamente.", {
            duration: 5000,
            position: "top-right",
         });
      },
      onSuccess:(data) => {
         localStorage.setItem("user", JSON.stringify(data));
         toast.success("Login realizado com sucesso!", {
            duration: 2000,
            position: "top-right",
         });
         navigate("/dashboard");
      }
   })
   return {
      onSubmit: mutate,
      isPending,
   }
}