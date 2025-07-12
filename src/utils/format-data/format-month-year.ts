const meses = [
   "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
   "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
]

export function formatMonthYear(monthYear: string) {
   const [ano, mes] = monthYear.split("-")
   const index = Number(mes) - 1

   if (index < 0 || index > 11) return monthYear

   return `${meses[index]} ${ano}`
}