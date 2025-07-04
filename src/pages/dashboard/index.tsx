import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock, DollarSign, Calculator, TrendingUp, Plus, User, LogOut,} from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Dashboard(){
   return (
      <div className="min-h-screen">
         {/* Mobile Header */}
         <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b px-4 py-3 sm:px-6">
            <div className="flex items-center justify-between">
               <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center sm:w-10 sm:h-10">
                     <Calculator className="w-4 h-4 text-white sm:w-5 sm:h-5" />
                  </div>
                  <div>
                     <h1 className="text-lg font-bold text-gray-900 sm:text-xl">Dashboard</h1>
                     <p className="text-xs text-gray-600 sm:text-sm">Janeiro 2024</p>
                  </div>
               </div>
               <div className="flex items-center space-x-2">
                  <div className="hidden sm:flex items-center space-x-2 mr-2">
                     <User className="w-4 h-4 text-purple-600" />
                     <span className="text-sm font-medium text-gray-700">Pedro Duarte</span>
                  </div>
                  <Button variant="ghost" size="sm" className="p-2">
                     <LogOut className="w-4 h-4" />
                  </Button>
               </div>
            </div>
         </div>

         <div className="px-4 py-6 space-y-6 sm:px-6 lg:px-8">
            {/* Resumo Mensal - Mobile First */}
            <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-4">
               <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-sm opacity-90 font-medium">Salário Base</p>
                           <p className="text-xl font-bold sm:text-2xl">R$ 5.000,00</p>
                        </div>
                        <DollarSign className="w-8 h-8 opacity-80" />
                     </div>
                  </CardContent>
               </Card>

               <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-sm opacity-90 font-medium">Horas Extras</p>
                           <p className="text-xl font-bold sm:text-2xl">R$ 0,00</p>
                           <p className="text-xs opacity-75">0 registros</p>
                        </div>
                        <Clock className="w-8 h-8 opacity-80" />
                     </div>
                  </CardContent>
               </Card>

               <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-sm opacity-90 font-medium">Comissões</p>
                           <p className="text-xl font-bold sm:text-2xl">R$ 0,00</p>
                           <p className="text-xs opacity-75">0 registros</p>
                        </div>
                        <TrendingUp className="w-8 h-8 opacity-80" />
                     </div>
                  </CardContent>
               </Card>

               <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardContent className="p-4">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-sm opacity-90 font-medium">Total Mensal</p>
                           <p className="text-xl font-bold sm:text-2xl">R$ 5.000,00</p>
                           <p className="text-xs opacity-75">Calculado</p>
                        </div>
                        <Calculator className="w-8 h-8 opacity-80" />
                     </div>
                  </CardContent>
               </Card>
            </div>

            {/* Botão de Cálculo - Posicionado no topo para mobile */}
            <Card className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
               <CardContent className="p-4">
                  <Button className="w-full h-14 bg-white/20 hover:bg-white/30 text-white font-medium text-lg backdrop-blur-sm border-0">
                     <Calculator className="w-5 h-5 mr-2" />
                     Calcular Total
                  </Button>
               </CardContent>
            </Card>

            {/* Tabs para Horas Extras e Comissões - Mobile First */}
            <Tabs defaultValue="hours" className="w-full">
               <TabsList className="grid w-full grid-cols-2 h-12">
                  <TabsTrigger value="hours" className="flex items-center space-x-2">
                     <Clock className="w-4 h-4" />
                     <span className="hidden sm:inline">Horas Extras</span>
                     <span className="sm:hidden">Horas</span>
                  </TabsTrigger>
                  <TabsTrigger value="commissions" className="flex items-center space-x-2">
                     <DollarSign className="w-4 h-4" />
                     <span className="hidden sm:inline">Comissões</span>
                     <span className="sm:hidden">Comissões</span>
                  </TabsTrigger>
               </TabsList>

               {/* Horas Extras Tab */}
               <TabsContent value="hours" className="mt-6">
                  <Card>
                     <CardHeader className="pb-4">
                        <CardTitle className="text-lg flex items-center space-x-2">
                           <Clock className="w-5 h-5 text-purple-600" />
                           <span>Registrar Horas Extras</span>
                        </CardTitle>
                        <CardDescription>Adicione suas horas extras trabalhadas</CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-4">
                        <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                           <div className="space-y-2">
                              <Label htmlFor="extra-date" className="text-sm font-medium">
                                 Data
                              </Label>
                              <Input id="extra-date" type="date" className="h-12" />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="extra-hours" className="text-sm font-medium">
                                 Horas Trabalhadas
                              </Label>
                              <Input id="extra-hours" type="number" step="0.5" placeholder="Ex: 2.5" className="h-12" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="hourly-rate" className="text-sm font-medium">
                              Valor por Hora (R$)
                           </Label>
                           <Input id="hourly-rate" type="number" step="0.01" placeholder="Ex: 25.00" className="h-12" />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="extra-description" className="text-sm font-medium">
                              Descrição (opcional)
                           </Label>
                           <Textarea
                              id="extra-description"
                              placeholder="Descreva o trabalho realizado..."
                              className="min-h-[80px]"
                           />
                        </div>
                        <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-base">
                           <Plus className="w-5 h-5 mr-2" />
                           Adicionar Hora Extra
                        </Button>

                        <Separator className="my-6" />
                        <div className="space-y-3">
                           <h4 className="font-medium text-gray-900">Horas Registradas (0)</h4>
                           <div className="text-center py-8 text-gray-500">
                              <Clock className="w-12 h-12 mx-auto mb-2 opacity-50" />
                              <p>Nenhuma hora extra registrada ainda</p>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </TabsContent>

               {/* Comissões Tab */}
               <TabsContent value="commissions" className="mt-6">
                  <Card>
                     <CardHeader className="pb-4">
                        <CardTitle className="text-lg flex items-center space-x-2">
                           <DollarSign className="w-5 h-5 text-green-600" />
                           <span>Registrar Comissões</span>
                        </CardTitle>
                        <CardDescription>Adicione suas comissões e bonificações</CardDescription>
                     </CardHeader>
                     <CardContent className="space-y-4">
                        <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                           <div className="space-y-2">
                              <Label htmlFor="commission-date" className="text-sm font-medium">
                                 Data
                              </Label>
                              <Input id="commission-date" type="date" className="h-12" />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="commission-amount" className="text-sm font-medium">
                                 Valor (R$)
                              </Label>
                              <Input id="commission-amount" type="number" step="0.01" placeholder="Ex: 500.00" className="h-12" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="commission-type" className="text-sm font-medium">
                              Tipo
                           </Label>
                           <Input id="commission-type" placeholder="Ex: Comissão de vendas, Bônus..." className="h-12" />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="commission-description" className="text-sm font-medium">
                              Descrição (opcional)
                           </Label>
                           <Textarea
                              id="commission-description"
                              placeholder="Descreva a origem da comissão..."
                              className="min-h-[80px]"
                           />
                        </div>
                        <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-base">
                           <Plus className="w-5 h-5 mr-2" />
                           Adicionar Comissão
                        </Button>

                        <Separator className="my-6" />
                        <div className="space-y-3">
                           <h4 className="font-medium text-gray-900">Comissões Registradas (0)</h4>
                           <div className="text-center py-8 text-gray-500">
                              <DollarSign className="w-12 h-12 mx-auto mb-2 opacity-50" />
                              <p>Nenhuma comissão registrada ainda</p>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </TabsContent>
            </Tabs>
         </div>
      </div>
   )
}
