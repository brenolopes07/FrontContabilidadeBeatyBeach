import axios from "axios";

interface HoraExtraRequest {
   data: string;
   quantidadeHoras: number;
   tipo: number;
   userId: number;
}

interface User {
   id: number;
   username: string;
   salarioMensal: number;
   dataCadastro: string;
}

interface HoraExtraResponse {
   id: number;
   data: string;
   quantidadeHoras: number;
   tipo: number;
   userId: number;
   user: User;
}

export function useHoraExtra() {
   const addHoraExtra = async (data: string, quantidadeHoras: number, tipo = 0) => {
      const userId = localStorage.getItem("user");

      if (!userId) {
         throw new Error("Usuário não encontrado no localStorage");
      }

      const userIdNumber = JSON.parse(userId);
      const userIdValue = Number(userIdNumber.id);

      if(isNaN(userIdValue)) {
         throw new Error("ID do usuário inválido");
      }

      const body: HoraExtraRequest = {
         data: new Date(data).toISOString(),
         quantidadeHoras: Number(quantidadeHoras),
         tipo,
         userId: userIdValue,
      };
      console.log("Enviando dados:", body);

      const response = await axios.post<HoraExtraResponse>(
         "https://localhost:7229/HoraExtra", 
         body,
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      return response.data;
   };

   return { addHoraExtra };
}