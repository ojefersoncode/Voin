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
import { ArrowUp, ArrowDown, Plus, Minus, Wallet, UserRound, RefreshCw } from 'lucide-react';
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
  const [isChartFullscreen] = useState(false);

  // Estados separados
const [inputTempo, setInputTempo] = useState<number>(1);
const [inputSaldo, setInputSaldo] = useState<number>(10);

const handleChangeTempo = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.replace(/\D/g, '');
  const numericValue = Number(value);
  setInputTempo(numericValue < 1 ? 1 : numericValue > 10 ? 10 : numericValue);
};

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
                <SelectTrigger className="bg-subbackground text-text py-1.5 px-3 font-titan rounded-lg border-none h-10">
                  <SelectValue placeholder="Selecione um par" />
                </SelectTrigger>
                <SelectContent className="bg-background text-white border border-gray-700">
                  {availablePairs.map((pair) => (
                    <SelectItem
                      className="font-inter hover:bg-subbackground hover:text-black focus:bg-subbackground focus:text-text"
                      key={pair.value}
                      value={pair.value}
                    >
                      {pair.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>


          <div className="flex gap-4 items-center touch-pan-x touch-pan-y">
            <div className="p-2 rounded-lg border border-zinc-400 dark:border-border/80">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-sm font-semibold">Saldo</h1>
              <h2 className="text-base font-medium">R$ 1200,00</h2>
            </div>
            <div className="bg-btn p-2 text-white rounded-lg">
              <Wallet className="w-5 h-5" />
            </div>
            <div className="p-2 rounded-full text-black bg-white">
           <UserRound className="w-5 h-5" />
          </div>
          </div>
        </nav>
      </header>

      {/* Main */}
      <div
        className={`flex flex-col lg:flex-row w-full flex-1 sm:mb-2 touch-pan-x touch-pan-y ${isChartFullscreen ? 'lg:flex-col' : ''}`}
      >
        {/* Chart */}
        <div
          className={`w-full lg:flex-1 relative max-sm:h-full max-sm:px-0 md:px-2 px-4`}
        >
          <TradingViewWidget symbol={selectedPair} />
        </div>

        {/* Trading Panel */}
   <div className={`lg:w-[350px] w-full flex flex-col bg-background`}>
    
{/* Trading Controls */}
 <div className=" max-md:pt-4 touch-pan-x touch-pan-y">
    <div className="flex items-center gap-3">
      {/* Input de Tempo */}
        <div className="touch-pan-x touch-pan-y">
         <div className="flex items-center bg-subbackground rounded-md p-1">
          <button
        onClick={() => setInputTempo((prev) => Math.max(1, prev - 1))}
        disabled={inputTempo <= 1}
        className={`p-2 text-btn ${inputTempo <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-btn/80'}`}
      >
        <Minus size={18} />
      </button>

      <Input
        type="text"
        value={inputTempo}
        onChange={handleChangeTempo}
        className="bg-transparent border-none text-center text-lg font-inter flex-1 text-white"
      />

      <button
        onClick={() => setInputTempo((prev) => Math.min(10, prev + 1))}
        disabled={inputTempo >= 10}
        className={`p-2 text-btn hover:text-btn/80 ${inputTempo >= 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Plus size={18} />
      </button>
    </div>
  </div>

  {/* Input de Saldo */}
  <div className="touch-pan-x touch-pan-y">
<div className="bg-subbackground rounded-xl px-6 py-3 w-full flex flex-col items-center text-center">
  <span className="text-sm text-text/60 mb-1">Valor</span>
  <div className="flex items-center justify-between w-full">
    <button
      onClick={() => setInputSaldo((prev) => Math.max(1, prev - 1))}
      className="text-btn hover:text-btn/80 transition-colors"
    >
      <Minus size={20} />
    </button>
    <span className="text-xl font-bold text-white">R${inputSaldo}</span>
    <button
      onClick={() => setInputSaldo((prev) => prev + 1)}
      className="text-btn hover:text-btn/80 transition-colors"
    >
      <Plus size={20} />
    </button>
  </div>
</div>
  </div>
 </div>
              
            {/* Action Buttons */}
            <div className="flex w-full items-center justify-between  gap-2 mt-4 mb-2 touch-pan-x touch-pan-y">
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
