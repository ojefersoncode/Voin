'use client';

import * as React from 'react';
import { useState } from 'react';
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  CheckCircle,
  XCircle
} from 'lucide-react';
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
    profit: -50
  },
  {
    id: '3',
    symbol: 'USD/JPY',
    direction: 'up',
    entryPrice: 110.123456,
    exitPrice: 110.123456,
    entryTime: Date.now() - 90000,
    selectedTime: 5,
    amount: 75,
    result: 'draw',
    profit: 0
  }
];

export function Status() {
  function formatCurrency(profit: number) {
    return profit.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  }

  return (
    <div className="mx-auto w-full">
      <ScrollArea className="flex-1 pb-4">
        {mockTrades.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <p className="mb-2">Nenhuma operação realizada ainda</p>
            <p className="text-sm">Suas operações aparecerão aqui</p>
          </div>
        ) : (
          <div className="space-y-3 py-2">
            {mockTrades.map((trade) => (
              <div
                key={trade.id}
                className={`p-4 rounded-md ${
                  trade.result === 'win'
                    ? 'bg-green-900/30'
                    : trade.result === 'loss'
                      ? 'bg-red-700/30'
                      : 'bg-gray-700/30'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium flex items-center text-white">
                      {trade.symbol} •
                      {trade.direction === 'up' ? (
                        <span className="flex items-center ml-1 text-green-500">
                          <ArrowUp className="h-4 w-4 mr-1" /> ACIMA
                        </span>
                      ) : (
                        <span className="flex items-center ml-1 text-red-500">
                          <ArrowDown className="h-4 w-4 mr-1" /> ABAIXO
                        </span>
                      )}
                    </div>

                    <div className="text-sm text-gray-200 mt-1">
                      {new Date(trade.entryTime).toLocaleString()} •{' '}
                      {trade.selectedTime}min
                    </div>

                    <div className="text-sm mt-1 text-gray-200">
                      <span className="text-gray-200">Entrada:</span>{' '}
                      {trade.entryPrice.toFixed(6)}
                      {trade.exitPrice && (
                        <>
                          <span className="text-gray-200 ml-2">Saída:</span>{' '}
                          {trade.exitPrice.toFixed(6)}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-0.5 mt-5 items-end">
                    <div className="font-bold">
                      <span
                        className={`${
                          trade.result === 'win'
                            ? 'text-green-500'
                            : trade.result === 'loss'
                              ? 'text-red-500'
                              : 'text-gray-400'
                        }`}
                      >
                        {trade.profit !== undefined
                          ? formatCurrency(trade.profit)
                          : '-'}
                      </span>
                    </div>

                    <div className="mt-1">
                      {trade.result === 'win' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : trade.result === 'loss' ? (
                        <XCircle className="h-5 w-5 text-red-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
