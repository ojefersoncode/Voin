'use client';

import * as React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { History, ArrowUp, ArrowDown } from 'lucide-react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';

const mockTrades = [
  {
    id: '1',
    symbol: 'EUR/USD',
    direction: 'up',
    entryPrice: 1.100123,
    exitPrice: 1.102345,
    entryTime: Date.now() - 60000,
    selectedTime: 5,
    amount: 100,
    result: 'win',
    profit: 90
  },
  {
    id: '2',
    symbol: 'BTC/USD',
    direction: 'down',
    entryPrice: 30000.123456,
    exitPrice: 29900.654321,
    entryTime: Date.now() - 360000,
    selectedTime: 5,
    amount: 50,
    result: 'loss',
    profit: 0
  },
  {
    id: '3',
    symbol: 'USD/JPY',
    direction: 'up',
    entryPrice: 110.123456,
    exitPrice: 110.123456,
    entryTime: Date.now() - 90000,
    selectedTime: 5,
    amount: 100,
    result: 'draw',
    profit: 50
  },
  {
    id: '4',
    symbol: 'EUR/USD',
    direction: 'up',
    entryPrice: 1.100123,
    exitPrice: 1.102345,
    entryTime: Date.now() - 60000,
    selectedTime: 5,
    amount: 100,
    result: 'win',
    profit: 90
  },
  {
    id: '5',
    symbol: 'EUR/USD',
    direction: 'up',
    entryPrice: 1.100123,
    exitPrice: 1.102345,
    entryTime: Date.now() - 60000,
    selectedTime: 5,
    amount: 100,
    result: 'win',
    profit: 90
  },
  {
    id: '6',
    symbol: 'EUR/USD',
    direction: 'up',
    entryPrice: 1.100123,
    exitPrice: 1.102345,
    entryTime: Date.now() - 60000,
    selectedTime: 5,
    amount: 100,
    result: 'win',
    profit: 90
  },
  {
    id: '7',
    symbol: 'BTC/USD',
    direction: 'down',
    entryPrice: 30000.123456,
    exitPrice: 29900.654321,
    entryTime: Date.now() - 360000,
    selectedTime: 5,
    amount: 100,
    result: 'loss',
    profit: 0
  },
  {
    id: '8',
    symbol: 'EUR/USD',
    direction: 'up',
    entryPrice: 1.100123,
    exitPrice: 1.102345,
    entryTime: Date.now() - 60000,
    selectedTime: 5,
    amount: 100,
    result: 'win',
    profit: 90
  },
  {
    id: '9',
    symbol: 'BTC/USD',
    direction: 'down',
    entryPrice: 30000.123456,
    exitPrice: 29900.654321,
    entryTime: Date.now() - 360000,
    selectedTime: 5,
    amount: 100,
    result: 'loss',
    profit: 0
  }
];

export function Order() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent pr-2">
          <div className="flex flex-col justify-center items-center">
            <History className="size-5 text-text" />
          </div>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="w-full bg-background border-t border-zinc-700 rounded-lg p-1">
        <div className="mx-auto w-full max-w-xl h-[80vh] flex flex-col">
          <DrawerHeader className="flex flex-col w-full justify-center items-center text-white pt-4">
            <DrawerTitle className="text-xl font-inter">
              Historico de Trading
            </DrawerTitle>
          </DrawerHeader>

          <ScrollArea className="flex-1 pb-4">
            {mockTrades.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <p className="mb-2">Nenhuma operação realizada ainda</p>
                <p className="text-sm">Suas operações aparecerão aqui</p>
              </div>
            ) : (
              <div className="space-y-2 py-2">
                {mockTrades.map((trade) => {
                  const isExpanded = expandedId === trade.id;
                  return (
                    <div
                      key={trade.id}
                      className={`rounded-md p-3 cursor-pointer transition-colors ${
                        trade.result === 'win'
                          ? 'bg-green-900/20'
                          : trade.result === 'loss'
                            ? 'bg-red-700/20'
                            : 'bg-gray-700/20'
                      }`}
                      onClick={() => toggleItem(trade.id)}
                    >
                      {/* Cabeçalho */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-white font-medium">
                          {trade.symbol}
                          {trade.direction === 'up' ? (
                            <ArrowUp className="h-4 w-4 text-umber-500" />
                          ) : (
                            <ArrowDown className="h-4 w-4 text-red-500" />
                          )}
                        </div>

                        <div className="flex items-center gap-1">
                          <span
                            className={`font-bold ${
                              trade.result === 'win'
                                ? 'text-umber-500'
                                : trade.result === 'loss'
                                  ? 'text-red-500'
                                  : 'text-gray-400'
                            }`}
                          >
                            {trade.profit}
                          </span>
                        </div>
                      </div>

                      {/* Detalhes expandidos */}
                      {isExpanded && (
                        <div className="mt-2 text-sm text-gray-200 space-y-1">
                          <div>Entrada: {trade.entryPrice}</div>
                          <div>Saída: {trade.exitPrice}</div>
                          <div>Tempo: {trade.selectedTime} min</div>
                          <div>Valor: {trade.amount}</div>
                          <div>
                            Data: {new Date(trade.entryTime).toLocaleString()}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </ScrollArea>

          <DrawerFooter className="pb-4 px-2">
            <DrawerClose asChild>
              <Button className="p-2 text-base bg-subbackground hover:bg-subbackground/90 transition-colors">
                Fechar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
