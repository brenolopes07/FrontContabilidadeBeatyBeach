import { useEffect, useState } from "react"

type SalarioMensal = {
   salarioMensal : number
}



export function salaryBaseData(){
   const [salarioMensal , setSalarioMensal] = useState<number | null>(null)

   useEffect (() =>{
      const stored = localStorage.getItem("user")
      if(!stored) return 

      try{
         const parsed: SalarioMensal =JSON.parse(stored)

         setSalarioMensal(parsed.salarioMensal);
      } catch(error){
         console.error("Erro ao parsear salario", error)
      }
   }, []);

   return salarioMensal;
}