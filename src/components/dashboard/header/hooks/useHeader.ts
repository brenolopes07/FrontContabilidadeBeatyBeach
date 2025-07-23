import { useEffect, useState } from "react";
import { formatMonthYear } from "@/utils/format-data/format-month-year";

type ResumoMensal = {
   id: number;
   mesAno: string;
   totalHoras: number;
   totalExtra: number;
   totalComissoes: number;
   salarioTotal: number;
};

type UserData = {
   id: number;
   username: string;
   salarioMensal: number;
   comissoes: any[];
   horaExtras: any[];
   resumoMensal: ResumoMensal[];
};

type UseHeaderDataReturn = {
   username: string;
   userId: number | null;
   mesSelecionado: string;
   mesFormatado: string;
   setMesSelecionado: React.Dispatch<React.SetStateAction<string>>;
   mesesDisponiveis: string[];
   salarioTotal: number | null;
};

const mesesFixos = [
   "2025-01", "2025-02", "2025-03", "2025-04",
   "2025-05", "2025-06", "2025-07", "2025-08",
   "2025-09", "2025-10", "2025-11", "2025-12",
];

export function useHeaderData(): UseHeaderDataReturn {
   const [username, setUsername] = useState("Usuário");
   const [userId, setUserId] = useState<number | null>(null);
   const [mesSelecionado, setMesSelecionado] = useState(mesesFixos[0]);
   const [resumos, setResumos] = useState<ResumoMensal[]>([]);

   useEffect(() => {
      const stored = localStorage.getItem("user");
      if (!stored) return;

      try {
         const parsed: UserData = JSON.parse(stored);
         setUsername(parsed.username || "Usuário");
         setUserId(parsed.id);

         
         if (Array.isArray(parsed.resumoMensal)) {
            setResumos(parsed.resumoMensal);
         }
      } catch (error) {
         console.error("Erro ao carregar dados do localStorage:", error);
      }
   }, []);


   const resumoSelecionado = resumos.find((r) => r.mesAno === mesSelecionado);
   const mesFormatado = mesSelecionado ? formatMonthYear(mesSelecionado) : "";

   return {
      username,
      userId,
      mesSelecionado,
      mesFormatado,
      setMesSelecionado,
      mesesDisponiveis: mesesFixos,
      salarioTotal: resumoSelecionado?.salarioTotal ?? null,
   };
}