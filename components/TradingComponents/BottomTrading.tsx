'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, BarChart2, History } from 'lucide-react';

export default function BottomTrading() {
  return (
    <div className="bg-background w-full touch-pan-x touch-pan-y">
      <Tabs defaultValue="orders" className="w-full">
        <div className="border-b border-btn/40">
          <TabsList className="bg-transparent w-full flex justify-start px-2">
            <TabsTrigger
              value="orders"
              className="data-[state=active]:bg-transparent data-[state=active]:text-[#f0b90b] data-[state=active]:border-b-2 data-[state=active]:border-[#f0b90b] rounded-none py-3 px-4"
            >
              <Clock className="h-4 w-4 mr-2" />
              Ordens Abertas
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-transparent data-[state=active]:text-[#f0b90b] data-[state=active]:border-b-2 data-[state=active]:border-[#f0b90b] rounded-none py-3 px-4"
            >
              <History className="h-4 w-4 mr-2" />
              Histórico
            </TabsTrigger>
            <TabsTrigger
              value="positions"
              className="data-[state=active]:bg-transparent data-[state=active]:text-[#f0b90b] data-[state=active]:border-b-2 data-[state=active]:border-[#f0b90b] rounded-none py-3 px-4"
            >
              <BarChart2 className="h-4 w-4 mr-2" />
              Posições
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="orders" className="p-4">
          <div className="text-center py-8 text-gray-400">
            <p>Nenhuma ordem aberta no momento</p>
          </div>
        </TabsContent>

        <TabsContent value="history" className="p-4">
          <div className="text-center py-8 text-gray-400">
            <p>Nenhum histórico de ordem disponível</p>
          </div>
        </TabsContent>

        <TabsContent value="positions" className="p-4">
          <div className="text-center py-8 text-gray-400">
            <p>Nenhuma posição aberta no momento</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
