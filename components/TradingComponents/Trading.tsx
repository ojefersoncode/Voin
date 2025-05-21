'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { ArrowUp, ArrowDown, Plus, Minus, Swords } from 'lucide-react';
import { Input } from '@/components/ui/input';
import BottomTrading from './BottomTrading';
import { useToast } from '../ui/use-toast';
import TradingViewWidget from './TradingViewWidget';

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
    setInputValue((prev) => prev + 5);
  };

  const handleDecrement = () => {
    setInputValue((prev) => (prev >= 5 ? prev - 5 : 0));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setInputValue(Number(value));
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
    <div className="bg-background h-screen text-white flex flex-col touch-pan-x touch-pan-y">
      {/* Header */}

      <header className="bg-background top-0 z-30 touch-pan-x touch-pan-y">
        <nav className="flex items-center justify-between px-3 py-3">
          <div className="flex items-center gap-4">
            <img src="/Nexbattle.png" alt="Logo" className="h-8 w-8" />
          </div>

          <div className="flex items-center gap-3 font-titan text-xl bg-subbackground rounded-lg py-1 px-3">
            <span className="text-yellow-600">1</span>
            <div>
              <Swords className="size-5" />
            </div>
            <span className="text-red-600">0</span>
          </div>

          <div className="flex items-center touch-pan-x touch-pan-y">
            <div className="font-titan text-sm bg-subbackground rounded-lg py-2 px-3">
              <span>10:00</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Main */}
      <div
        className={`flex flex-col lg:flex-row w-full flex-1 touch-pan-x touch-pan-y ${isChartFullscreen ? 'lg:flex-col' : ''}`}
      >
        {/* Chart */}
        <div className={`w-full lg:flex-1 relative max-sm:px-0 md:px-2 px-4`}>
          <TradingViewWidget symbol={selectedPair} />
        </div>

        {/* Trading Panel */}
        <div
          className={`lg:w-[350px] w-full flex flex-col max-lg:mb-20 bg-background`}
        >
          {/* Trading Controls */}
          <div className="p-4 touch-pan-x touch-pan-y">
            <h3 className="text-sm text-gray-400 mb-3">Par de moedas</h3>

            {/* Time Selection */}
            <div className="flex w-full justify-between items-center mb-6 touch-pan-x touch-pan-y">
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

            {/* Amount Input */}
            <div className="mb-6 touch-pan-x touch-pan-y">
              <h3 className="text-sm text-gray-400 mb-2">Ordens</h3>
              <div className="flex items-center bg-subbackground rounded-md p-1">
                <button
                  onClick={handleDecrement}
                  className="p-2 text-btn hover:text-btn/80"
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
                  className="p-2 text-btn hover:text-btn/80"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6 touch-pan-x touch-pan-y">
              <button
                onClick={handleDownOperation}
                className="bg-red-600 hover:bg-red-700 transition-colors duration-200 text-text hover:text-text/80 py-3 px-4 rounded-lg font-medium flex items-center justify-between"
              >
                <span>Para baixo</span>
                <ArrowDown className="h-5 w-5" />
              </button>

              <button
                onClick={handleUpOperation}
                className="bg-green-600 hover:bg-green-700 transition-colors duration-200 text-text hover:text-text/80 py-3 px-4 rounded-lg font-medium flex items-center justify-between"
              >
                <span>Para cima</span>
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Component */}
      <div className="touch-pan-x touch-pan-y">
        <BottomTrading />
      </div>
    </div>
  );
}
