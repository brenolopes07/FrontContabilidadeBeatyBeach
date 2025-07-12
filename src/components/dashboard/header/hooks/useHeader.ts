import { useEffect, useState } from "react"
import { formatMonthYear } from "@/utils/format-data/format-month-year"

type ResumoMensal = {
   id: number
   mesAno: string 
   totalHoras: number
   totalExtra: number
   totalComissoes: number
   salarioTotal: number
}

type UserData = {
   id: number
   username: string
   salarioMensal: number
   comissoes: any[]
   horaExtras: any[]
   resumoMensal: ResumoMensal[]
}

export function useHeaderData() {
   const [username, setUsername] = useState("Usuário")
   const [resumos, setResumos] = useState<ResumoMensal[]>([])
   const [mesSelecionado, setMesSelecionado] = useState("")

   useEffect(() => {
      const stored = localStorage.getItem("user")
      if (!stored) return

      try {
         const parsed: UserData = JSON.parse(stored)
         console.log("parsed:", parsed)

         setUsername(parsed.username || "Usuário")

         if (Array.isArray(parsed.resumoMensal) && parsed.resumoMensal.length > 0) {
            setResumos(parsed.resumoMensal)
            setMesSelecionado(parsed.resumoMensal[0].mesAno) 
         } else {
            console.warn("Resumo mensal está vazio.")
            setResumos([])
         }
      } catch (error) {
         console.error("Erro ao carregar dados do localStorage:", error)
      }
   }, [])

   const mesFormatado = mesSelecionado ? formatMonthYear(mesSelecionado) : ""

   return {
      username,
      mesSelecionado,
      mesFormatado,
      setMesSelecionado,
      mesesDisponiveis: resumos.map((r) => r.mesAno),
   }
}