'use client';

import type React from 'react';

import { useEffect, useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import {
  ArrowUp,
  ArrowDown,
  Plus,
  Minus,
  Minimize,
  Maximize
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import BottomTrading from './BottomTrading';
import BalanceButton from '../All/BalanceButton';

const availablePairs = [
  { value: 'BTCUSDT', label: 'BTC/USDT' },
  { value: 'ETHUSDT', label: 'ETH/USDT' },
  { value: 'BNBUSDT', label: 'BNB/USDT' },
  { value: 'USDCUSDT', label: 'USDC/USDT' },
  { value: 'SOLUSDT', label: 'SOL/USDT' },
  { value: 'XRPUSDT', label: 'XRP/USDT' },
  { value: 'TRXUSDT', label: 'TRX/USDT' },
  { value: 'ADAUSDT', label: 'ADA/USDT' },
  { value: 'PEPEUSDT', label: 'PEPE/USDT' },
  { value: 'TONUSDT', label: 'TON/USDT' },
  { value: 'DOGEUSDT', label: 'DOGE/USDT' },
  { value: 'LINKUSDT', label: 'LINK/USDT' },
  { value: 'LTCUSDT', label: 'LTC/USDT' },
  { value: 'NEARUSDT', label: 'NEAR/USDT' }
];

const availableTimes = [
  { value: '30s', label: 'Entrada de 30s' },
  { value: '1min', label: 'Entrada de 1m' },
  { value: '5min', label: 'Entrada de 5m' },
  { value: '10min', label: 'Entrada de 10 min' },
  { value: '30min', label: 'Entrada de 30m' },
  { value: '1h', label: 'Entrada de 1h' }
];

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function TradingAll() {
  const [selectedPair, setSelectedPair] = useState('BTCUSDT');
  const [selectedTime, setSelectedTime] = useState('30s');
  const [currentPrice, setCurrentPrice] = useState(0.0);
  const [amount, setAmount] = useState(25000);
  const [inputValue, setInputValue] = useState<number>(0);
  const [isChartFullscreen, setIsChartFullscreen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          symbol: `BINANCE:${selectedPair}`,
          interval: '1',
          container_id: 'tv_chart_container',
          locale: 'br',
          theme: 'Dark',
          width: '100%',
          height: '100%',
          style: '1',
          hide_top_toolbar: false,
          hide_legend: false,
          withdateranges: true,
          allow_symbol_change: true,
          save_image: false,
          toolbar_bg: '#0e0e0e',
          border: '#0e0e0e',
          enabled_features: [
            'use_localstorage_for_settings',
            'hide_left_toolbar_by_default',
            'side_toolbar_in_fullscreen_mode',
            'chart_property_page_scales',
            'chart_property_page_style',
            'chart_property_page_timezone'
          ],
          disabled_features: ['header_compare', 'header_symbol_search'],
          charts_storage_url: 'https://saveload.tradingview.com',
          client_id: 'tradingview.com',
          user_id: 'public_user',
          charts_storage_api_version: '1.1',
          timezone: 'America/Sao_Paulo'
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      const container = document.getElementById('tv_chart_container');
      if (container) container.innerHTML = '';
      document.body.removeChild(script);
    };
  }, [selectedPair]);

  const handleIncrement = () => {
    setInputValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setInputValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setInputValue(Number(value));
  };

  const toggleChartFullscreen = () => {
    setIsChartFullscreen(!isChartFullscreen);
  };

  return (
    <div className="bg-background h-screen text-white flex flex-col">
      {/* Header */}
      <header className="bg-background sticky top-0 z-30">
        <nav className="flex items-center justify-between p-2">
          <div className="flex items-center gap-4">
            <img src="/Nexbattle.png" alt="Logo" className="h-8 w-8" />
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-xl text-green-50 cursor-pointer">
              <BalanceButton />
            </div>
            <div>
              <Select value={selectedPair} onValueChange={setSelectedPair}>
                <SelectTrigger className="bg-btn text-black py-1.5 px-3 font-titan rounded-lg border-none h-9 ">
                  <SelectValue placeholder="Selecione um par" />
                </SelectTrigger>
                <SelectContent className="bg-btn text-black border border-gray-700">
                  {availablePairs.map((pair) => (
                    <SelectItem
                      className="font-inter hover:bg-background hover:text-black focus:bg-background focus:text-text"
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
        </nav>
      </header>

      {/* Main Content */}
      <div
        className={`flex flex-col lg:flex-row w-full flex-1 ${isChartFullscreen ? 'lg:flex-col' : ''}`}
      >
        {/* Chart Container */}
        <div
          className={`w-full lg:flex-1 relative ${
            isChartFullscreen
              ? 'h-[calc(100vh-120px)]'
              : 'h-[500px] sm:h-[550px] md:h-[600px] lg:h-[calc(100vh-180px)] '
          }`}
        >
          <div
            id="tv_chart_container"
            className="w-full h-full max-lg:min-h-[500px] max-sm:h-[500px]"
          />
          <button
            onClick={toggleChartFullscreen}
            className="absolute top-2 right-2 bg-btn text-black p-1 rounded-md z-20"
          >
            {isChartFullscreen ? (
              <Minimize size={18} />
            ) : (
              <Maximize size={18} />
            )}
          </button>
        </div>

        {/* Trading Panel */}
        <div
          className={`${isChartFullscreen ? 'hidden' : ''} lg:w-[350px] w-full flex flex-col bg-background border-l border-gray-800`}
        >
          {/* Price Info */}
          <div className="p-4 border-b border-btn/20">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-md font-titan">
                  {selectedPair.replace('USDT', '')}/USDT
                </h2>
                <p className="text-green-500 text-sm font-inter">$29,876.54</p>
              </div>
              <div className="text-right">
                <p className="text-green-500">+2.34%</p>
                <p className="text-xs text-gray-400">24h Change</p>
              </div>
            </div>
          </div>

          {/* Trading Controls */}
          <div className="p-4">
            <h3 className="text-sm text-gray-400 mb-2">Tipo de Entrada</h3>

            {/* Time Selection */}
            <div className="mb-6">
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="w-full border-none bg-subbackground text-text mb-4 font-bold">
                  <SelectValue placeholder="Selecione um tempo" />
                </SelectTrigger>
                <SelectContent className="bg-btn text-white border border-gray-700">
                  {availableTimes.map((time) => (
                    <SelectItem
                      className="hover:bg-background text-black hover:text-black focus:bg-background font-inter"
                      key={time.value}
                      value={time.value}
                    >
                      {time.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
              <h3 className="text-sm text-gray-400 mb-2">Valor da Entrada</h3>
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

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-4 gap-2 mt-3">
                {[25, 50, 75, 100].map((value) => (
                  <button
                    key={value}
                    onClick={() => setInputValue(value)}
                    className="bg-subbackground font-bold py-1 px-2 rounded text-sm transition-all duration-300 hover:bg-purple-900/80"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button className="bg-[#f6465d] hover:bg-[#e0414d] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-between">
                <span>Para baixo</span>
                <ArrowDown className="h-5 w-5" />
              </button>
              <button className="bg-[#0ecb81] hover:bg-[#0bb974] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-between">
                <span>Para cima</span>
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trading Component */}
      <div className={`${isChartFullscreen ? 'hidden' : ''}`}>
        <BottomTrading />
      </div>
    </div>
  );
}
