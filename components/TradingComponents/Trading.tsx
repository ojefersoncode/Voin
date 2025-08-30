'use client';

import * as React from 'react';
import { useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { ArrowUp, ArrowDown, Plus, Minus, Wallet, Menu } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import TradingViewWidget from './TradingViewWidget';
import { Order } from './SheetBar/Order';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';

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

  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const tempoOptions = [
    { label: '1 min', value: 1 },
    { label: '5 min', value: 5 },
    { label: '10 min', value: 10 },
    { label: '15 min', value: 15 },
    { label: '30 min', value: 30 },
    { label: '1 hora', value: 60 },
    { label: '12 horas', value: 720 },
    { label: '24 horas', value: 1440 }
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
    <div className="bg-blackground h-dvh text-white flex flex-col touch-pan-x touch-pan-y">
      {/* Header */}
      <header className="bg-blackground top-0 z-30 touch-pan-x touch-pan-y border-b border-zinc-700 mb-3">
        <nav className="flex items-center justify-between px-2 py-2">
          <div className="flex gap-4 items-center touch-pan-x touch-pan-y">
            <img
              className="h-8 w-8 max-md:h-7 max-md:w-7"
              src="/Bronk.png"
              alt="logo"
            />
            <div className="flex items-center">
              <Select value={selectedPair} onValueChange={setSelectedPair}>
                <SelectTrigger className="bg-subbackground text-text py-1.5 font-inter rounded-sm border border-zinc-600  dark:border-gray-600 max-md:text-xs h-10 max-md:h-8">
                  <SelectValue placeholder="Selecione um par" />
                </SelectTrigger>
                <SelectContent className="bg-black max-md:text-xs text-white border border-gray-700">
                  {availablePairs.map((pair) => (
                    <SelectItem
                      className="font-inter hover:bg-subbackground hover:text-black focus:bg-background focus:text-text max-md:text-xs"
                      key={pair.value}
                      value={pair.value}
                    >
                      {pair.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2 items-center rounded-lg touch-pan-x touch-pan-y">
              <div className="flex items-center rounded-sm bg-btn">
                <div className="flex flex-col items-start rounded-l-sm bg-black/30 py-1 px-2 justify-center">
                  <div className="flex w-full items-center m-0 p-0 text-text">
                    <span className="text-xs font-semibold">Seus coins</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-text font-inter m-0 p-0">
                    1200.00
                  </div>
                </div>
                <Button className="bg-btn px-2 py-0 dark:bg-btn hover:bg-btn dark:hover:bg-btn">
                  <Wallet className="size-5" />
                </Button>
              </div>
            </div>

            <Button className="p-0 text-text dark:text-text">
              <Menu className="size-6" />
            </Button>
          </div>
        </nav>
      </header>

      <div className="flex w-full items-center gap-4 pb-3 px-2 md:hidden">
        <div className="flex flex-col flex-1">
          <h1 className="text-sm mt-1">Termina em 30s</h1>
          <Progress
            value={progress}
            className="h-2"
            indicatorClassName={progress > 50 ? 'bg-green-500' : 'bg-red-500'}
          />
        </div>

        <div className="shrink-0 mt-1">
          <Order />
        </div>
      </div>

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
        <div className="lg:w-[350px] w-full flex flex-col bg-blackground">
          {/* Trading Controls */}
          <div className="max-md:pt-4 touch-pan-x touch-pan-y">
            <div className="flex md:flex-col flex-1 px-2 w-full items-center justify-between gap-4">
              <div className="flex w-full items-center  max-md:hidden">
                <div className="flex flex-col flex-1">
                  <h1 className="text-sm mt-1">Termina em 30s</h1>
                  <Progress
                    value={progress}
                    className="h-2"
                    indicatorClassName={
                      progress > 50 ? 'bg-green-500' : 'bg-red-500'
                    }
                  />
                </div>

                <div className="shrink-0 mt-4">
                  <Order />
                </div>
              </div>
              {/* Input de Tempo */}
              <div className="flex flex-col flex-1 w-full items-center justify-center bg-subbackground border border-zinc-600 dark:border-zinc-600 rounded-sm px-2 py-2 md:py-4 text-white">
                <Select
                  value={inputTempo.toString()}
                  onValueChange={(value) => setInputTempo(Number(value))}
                >
                  <SelectTrigger className="bg-subbackground text-base text-white border-none rounded-sm w-26 h-6 px-2">
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
              <div className="flex flex-col w-full justify-center px-2 flex-1 bg-subbackground border border-zinc-600 dark:border-zinc-600 rounded-sm py-2 md:py-6 items-center text-center">
                <div className="flex flex-1 items-center gap-3 justify-between w-full">
                  <button
                    onClick={() =>
                      setInputSaldo((prev) => Math.max(1, prev - 1))
                    }
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
            <div className="flex md:flex-col w-full items-center justify-center px-2 gap-4 mt-4 mb-2 touch-pan-x touch-pan-y">
              <button
                onClick={handleUpOperation}
                className="bg-btn w-full flex-1 hover:bg-umber-800 transition-colors duration-200 text-text hover:text-text/80 py-3 px-4 md:py-4 rounded-sm font-medium flex items-center justify-between"
              >
                <span>Comprar</span>
                <ArrowUp className="h-5 w-5" />
              </button>

              <button
                onClick={handleDownOperation}
                className="bg-red-600 w-full flex-1 hover:bg-red-700 transition-colors duration-200 text-text hover:text-text/80 py-3 px-4 md:py-4 rounded-sm font-medium flex items-center justify-between"
              >
                <span>Vender</span>
                <ArrowDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
