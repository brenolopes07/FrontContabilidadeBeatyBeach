import { useEffect, useState } from "react";
import axios from "axios";
import useSearch from "@/hooks/use-search";
import { useQuery } from "@tanstack/react-query";

type ResumoMensal = {
   id: number;
   mes: string;
   totalHoras: number;
   totalExtra: number;
   totalComissoes: number;
   salarioTotal: number;
   userId: number;
   usuario: any;
};

export function useResumoMensal(userId: number | null) {
   const [resumo, setResumo] = useState<ResumoMensal | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   const {getAllSearchParams} = useSearch();
   const { anoMes : mesAno } = getAllSearchParams();
   
   const { data, isLoading, isError } = useQuery({
      queryKey: ["resumoMensal", userId, mesAno],
      queryFn: async () => {
         if (!userId || !mesAno) return null;
         const response = await axios.get<ResumoMensal>(
            "https://localhost:7229/ResumoMensal",
            {
               params: { userId, mesAno },
            }
         );
         return response.data;
      },
      enabled: !!userId && !!mesAno,
      refetchOnWindowFocus: false,
      retry: false,
   });

   useEffect(() => {
      setLoading(isLoading);
      if (isError) {
         setError("Erro ao buscar resumo do mês.");
         setResumo(null);
      } else {
         setError(null);
         setResumo(data ?? null);
      }
   }, [data, isLoading, isError]);

   return { resumo, loading, error };
}