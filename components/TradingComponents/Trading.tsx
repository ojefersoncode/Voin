'use client';

import type React from 'react';
import { useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { ArrowUp, ArrowDown, Plus, Minus, UserRound, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '../ui/use-toast';
import TradingViewWidget from './TradingViewWidget';
import { Order } from './SheetBar/Order';
import Image from 'next/image';

const availablePairs = [
  { value: 'BTCUSDT', label: 'BTC/USDT' },
  { value: 'ETHUSDT', label: 'ETH/USDT' },
  { value: 'BNBUSDT', label: 'BNB/USDT' }
];

export default function TradingAll() {
  // Hooks
  const { toast } = useToast();
  const [selectedPair, setSelectedPair] = useState('BTCUSDT');
  const [inputValue, setInputValue] = useState<number>(0);
  const [inputTempo, setInputTempo] = useState<number>(1); // Linha adicionada
  const [inputSaldo, setInputSaldo] = useState<number>(10);
  const [isChartFullscreen] = useState(false);

  const tempoOptions = [
    { label: '1 min', value: 1 },
    { label: '5 min', value: 5 },
    { label: '10 min', value: 10 },
    { label: '15 min', value: 15 },
    { label: '30 min', value: 30 },
    { label: '1 hora', value: 60 },
    { label: '12 horas', value: 720 },
    { label: '24 horas', value: 1440 },
  ];

  const handleChangeSaldo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const numericValue = Number(value);
    setInputSaldo(numericValue < 1 ? 1 : numericValue);
  };

  const handleUpOperation = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    toast({
      title: 'Operação: Para cima',
      description: `${formattedDate}`,
      variant: 'success'
    });
  };

  const handleDownOperation = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    toast({
      title: 'Operação: Para baixo',
      description: `${formattedDate}`,
      variant: 'destructive'
    });
  };

  return (
    <div className="bg-background h-dvh text-white flex flex-col touch-pan-x touch-pan-y">
      {/* Header */}
      <header className="bg-background top-0 z-30 touch-pan-x touch-pan-y">
        <nav className="flex items-center justify-between px-2 py-4">
          <div className="flex justify-between items-center touch-pan-x touch-pan-y">
            <Select value={selectedPair} onValueChange={setSelectedPair}>
              <SelectTrigger className="bg-subbackground text-text py-1.5 px-3 font-inter rounded-lg border border-zinc-600  dark:border-gray-600 h-10">
                <SelectValue placeholder="Selecione um par" />
              </SelectTrigger>
              <SelectContent className="bg-background text-white border border-gray-700">
                {availablePairs.map((pair) => (
                  <SelectItem
                    className="font-inter hover:bg-subbackground hover:text-black focus:bg-background focus:text-text"
                    key={pair.value}
                    value={pair.value}
                  >
                    {pair.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 px-2 py-1 items-center rounded-lg border border-zinc-700 touch-pan-x touch-pan-y">
            <div className="p-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div className="flex p-0 flex-col items-start justify-start">
              <h1 className="text-xs text-zinc-400 p-0 m-0 font-semibold">Saldo</h1>
              <h2 className="text-xs font-inter p-0">R$ 1200,00</h2>
            </div>
          </div>

          <div className="rounded-full p-2 text-black bg-white">
              <UserRound className="w-5 h-5" />
            </div>
        </nav>
      </header>

      {/* Main */}
      <div
        className={`flex flex-col lg:flex-row w-full flex-1 sm:mb-2 touch-pan-x touch-pan-y ${
          isChartFullscreen ? 'lg:flex-col' : ''
        }`}
      >
        {/* Chart */}
        <div className="w-full lg:flex-1 relative max-sm:h-full max-sm:px-0 md:px-2 px-4">
          <TradingViewWidget symbol={selectedPair} />
        </div>

        {/* Trading Panel */}
        <div className="lg:w-[350px] w-full flex flex-col bg-background">
          {/* Trading Controls */}
          <div className="max-md:pt-4 touch-pan-x touch-pan-y">
            <div className="flex flex-1 w-full items-center justify-between gap-4">
              {/* Input de Tempo */}
                <div className="flex flex-col flex-1 items-center justify-center bg-subbackground border border-zinc-600 dark:border-zinc-600 rounded-xl px-4 py-2 text-white">
                  <span className="text-sm text-text/60">Tempo</span>
                  <Select
                    value={inputTempo.toString()}
                    onValueChange={(value) => setInputTempo(Number(value))}
                  >
                    <SelectTrigger className="bg-subbackground text-base text-white border-none rounded-md w-20 h-6 px-3">
                      <SelectValue placeholder="Selecione o tempo" />
                    </SelectTrigger>
                    <SelectContent className="bg-subbackground text-white border border-zinc-600">
                      {tempoOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value.toString()}
                          className="hover:bg-background hover:text-white cursor-pointer"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
              </div>

              {/* Input de Saldo */}
                <div className="flex flex-col w-full flex-1 bg-subbackground border border-zinc-600 dark:border-zinc-600 rounded-xl px-4 py-2 items-center text-center">
                  <span className="text-sm text-text/60">Valor</span>
                  <div className="flex flex-1 items-center gap-4 justify-between w-full">
                    <button
                      onClick={() => setInputSaldo((prev) => Math.max(1, prev - 1))}
                      className="text-btn hover:text-btn/80 transition-colors"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="text-base text-white">R${inputSaldo}</span>
                    <button
                      onClick={() => setInputSaldo((prev) => prev + 1)}
                      className="text-btn hover:text-btn/80 transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full items-center justify-between gap-2 mt-4 mb-2 touch-pan-x touch-pan-y">
              <button
                onClick={handleDownOperation}
                className="bg-[#dd3240] flex-1 hover:bg-[#af2732] transition-colors duration-200 text-text hover:text-text/80 py-3 px-4 rounded-lg font-medium flex items-center justify-between"
              >
                <span>Para baixo</span>
                <ArrowDown className="h-5 w-5" />
              </button>

              <div className="">
                <Order />
              </div>

              <button
                onClick={handleUpOperation}
                className="bg-[#097261] flex-1 hover:bg-[#135a4e] transition-colors duration-200 text-text hover:text-text/80 py-3 px-4 rounded-lg font-medium flex items-center justify-between"
              >
                <span>Para cima</span>
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
