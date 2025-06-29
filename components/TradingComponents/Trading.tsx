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
import { ArrowUp, ArrowDown, Plus, Minus, Wallet } from 'lucide-react';
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

  const handleIncrement = () => {
    setInputValue((prev) => {
      if (prev < 10) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const handleDecrement = () => {
    setInputValue((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const numericValue = Number(value);
    if (numericValue >= 1 && numericValue <= 10) {
      setInputValue(numericValue);
    } else if (numericValue < 1) {
      setInputValue(1);
    }
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
          <div className="flex items-center">
            <Image src="/Rank/Rank1.svg" alt="Logo" width={30} height={30} />
          </div>

          <div className="flex justify-center items-center pr-2 touch-pan-x touch-pan-y">
            <div className="bg-btn p-2 text-white rounded-lg">
              <Wallet className="w-5 h-5" />
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
          <div className="px-4 max-md:pt-2 touch-pan-x touch-pan-y">
            <h3 className="text-sm text-gray-400 mb-3">Par de moedas</h3>

            {/* Time Selection */}
            <div className="flex w-full justify-between items-center mb-4 touch-pan-x touch-pan-y">
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



            <div className="flex items-center gap-3">
            
            
            <div className="mb-4 touch-pan-x touch-pan-y">
              <div className="flex justify-start items-center">
                <h3 className="text-sm text-gray-400 mb-2">Tempo</h3>
              </div>

              <div className="flex items-center bg-subbackground rounded-md p-1">
                <button
                  onClick={handleDecrement}
                  disabled={inputValue <= 1}
                  className={`p-2 text-btn ${inputValue <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-btn/80'}`}
                >
                  <Minus size={18} />
                </button>

                <Input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  className="bg-transparent border-none text-center text-lg font-inter flex-1 text-white"
                />
                <button
                  onClick={handleIncrement}
                  disabled={inputValue >= 10}
                  className={`p-2 text-btn hover:text-btn/80 ${inputValue >= 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
            
            <div className="mb-4 touch-pan-x touch-pan-y">
              <div className="flex justify-end items-center">
                <h3 className="text-sm text-gray-400 mb-2">Ordens</h3>
                
              </div>

              <div className="flex items-center bg-subbackground rounded-md p-1">
                <button
                  onClick={handleDecrement}
                  disabled={inputValue <= 1}
                  className={`p-2 text-btn ${inputValue <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-btn/80'}`}
                >
                  <Minus size={18} />
                </button>

                <Input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  className="bg-transparent border-none text-center text-lg font-inter flex-1 text-white"
                />
                <button
                  onClick={handleIncrement}
                  disabled={inputValue >= 10}
                  className={`p-2 text-btn hover:text-btn/80 ${inputValue >= 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
            </div>

              
            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-4 mt-6 mb-2 touch-pan-x touch-pan-y">
              <button
                onClick={handleDownOperation}
                className="bg-[#dd3240] hover:bg-[#af2732] transition-colors duration-200 text-text hover:text-text/80 py-3 px-4 rounded-lg font-medium flex items-center justify-between"
              >
                <span>Para baixo</span>
                <ArrowDown className="h-5 w-5" />
              </button>

              
            <Order />

              
              <button
                onClick={handleUpOperation}
                className="bg-[#097261] hover:bg-[#135a4e] transition-colors duration-200 text-text hover:text-text/80 py-3 px-4 rounded-lg font-medium flex items-center justify-between"
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
