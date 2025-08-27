'use client';

import type React from 'react';
import { useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Trasition() {
  const [timeRange, setTimeRange] = useState('7d');

  // Dados de exemplo para o histórico de transações
  const transactions = [
    {
      id: 'tx1',
      date: '22/04/2025',
      time: '14:32',
      type: 'entrada',
      amount: 5000.0,
      status: 'concluída'
    },
    {
      id: 'tx2',
      date: '20/04/2025',
      time: '09:15',
      type: 'saída',
      amount: 1200.0,
      status: 'concluída'
    },
    {
      id: 'tx3',
      date: '18/04/2025',
      time: '16:45',
      type: 'entrada',
      amount: 8500.0,
      status: 'concluída'
    },
    {
      id: 'tx4',
      date: '15/04/2025',
      time: '11:20',
      type: 'saída',
      amount: 3200.0,
      status: 'concluída'
    },
    {
      id: 'tx5',
      date: '12/04/2025',
      time: '08:05',
      type: 'saída',
      amount: 750.0,
      status: 'pendente'
    }
  ];

  return (
    <>
      <div className="p-4 bg-background">
        <div className="py-4 mt-2 mb-4 rounded-xl">
          <div className="px-1">
            <h2 className="text-2xl font-bold mt-2">Histórico de Transações</h2>
          </div>

          <div className="py-4 mt-4">
            <div className=" overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <Tabs
                  defaultValue="7d"
                  value={timeRange}
                  onValueChange={setTimeRange}
                  className="w-auto"
                >
                  <TabsList className="bg-subbackground">
                    <TabsTrigger value="7d">7 dias</TabsTrigger>
                    <TabsTrigger value="30d">30 dias</TabsTrigger>
                    <TabsTrigger value="90d">90 dias</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-subbackground rounded-md p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <ArrowUpRight className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Total de entradas</p>
                      <p className="text-xl font-bold">13.500,00 NEX</p>
                    </div>
                  </div>
                  <div className="text-green-500 text-sm font-medium">
                    +10.5%
                  </div>
                </div>

                <div className="bg-subbackground rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center">
                      <ArrowDownRight className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Total de saídas</p>
                      <p className="text-xl font-bold">5.150,00 NEX</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-sm font-medium">-3.2%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-4 mt-4 overflow-hidden border border-subbackground rounded-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-subbackground text-btn">
                    <th className="text-left py-3 px-4">Data/Hora</th>
                    <th className="text-right py-3 px-4">Valor</th>
                    <th className="text-right py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="border-b border-subbackground hover:bg-btn/5 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex flex-col">
                          <span>{transaction.date}</span>
                          <span className="text-xs text-gray-400">
                            {transaction.time}
                          </span>
                        </div>
                      </td>
                      <td
                        className={`py-4 px-4 text-right ${
                          transaction.type === 'entrada'
                            ? 'text-green-500'
                            : 'text-white'
                        }`}
                      >
                        {transaction.type === 'entrada' ? '+' : '-'}{' '}
                        {transaction.amount.toLocaleString('pt-BR')} NEX
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            transaction.status === 'concluída'
                              ? 'bg-green-500/20 text-green-500'
                              : 'bg-yellow-500/20 text-yellow-500'
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="pt-6 flex justify-center">
            <Button
              variant="outline"
              className="border border-btn bg-subbackground text-text hover:bg-yellow-100/10 transition-colors duration-300 hover:text-white font-inter"
            >
              Ver todas as transações
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
