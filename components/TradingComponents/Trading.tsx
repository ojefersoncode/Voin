'use client';

import { useEffect, useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../ui/select';
import { User } from '@supabase/supabase-js';
import { ArrowUp, ArrowDown } from 'lucide-react';
import NavBottom from '../All/NavBottom';
import NavbarAll from '../All/Navbar';

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

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function TradingAll() {
  const [selectedPair, setSelectedPair] = useState('BTCUSDT');
  const [currentPrice, setCurrentPrice] = useState(0.0);
  const [amount] = useState(25000);

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
          theme: 'dark',
          width: '100%',
          height: '500',
          style: '1',
          hide_top_toolbar: false,
          hide_legend: false,
          withdateranges: true,
          allow_symbol_change: true
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      const container = document.getElementById('tv_chart_container');
      if (container) container.innerHTML = '';
    };
  }, [selectedPair]);

  return (
    <div className=" bg-[#0e0e0e] text-white flex flex-col">
      <NavbarAll />
      {/* DESKTOP */}
      <div className="md:flex w-full h-screen flex-1">
        {/* Gráfico */}
        <div className="flex-1 h-auto px-4 sm:pt-4 pb-4">
          <div
            id="tv_chart_container"
            className="w-full sm:h-[500px] max-sm:h-[400px]"
          />
        </div>

        {/* Info + Select + Botões */}
        <div className="md:w-[350px] flex flex-col">
          <div className="flex md:hidden flex-row w-full items-center justify-center gap-4 max-sm:pt-28 pb-4 px-6">
            <button className="bg-red-500 w-1/2 px-4 py-3 flex items-center justify-center rounded">
              <ArrowDown className="h-6 w-6" />
            </button>
            <button className="bg-green-500 w-1/2 px-4 py-3 flex items-center justify-center rounded">
              <ArrowUp className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 md:pt-4">
            <div className="grid grid-cols-2 bg-[#0e0e0e] border-t border-gray-500/30">
              {/* Informações */}
              <div className="flex w-full justify-center items-center border max-md:pb-1 border-gray-500/30">
                <div className="flex w-full justify-center items-center h-full">
                  <Select value={selectedPair} onValueChange={setSelectedPair}>
                    <SelectTrigger className="bg-[#0e0e0e] text-white py-10 rounded border border-gray-500/30 w-full">
                      <SelectValue placeholder="Selecione um par" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#181818] text-white border border-green-500/30">
                      {availablePairs.map((pair) => (
                        <SelectItem key={pair.value} value={pair.value}>
                          {pair.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="p-3 border border-gray-500/30">
                <div className="text-xs text-gray-400">Hora</div>
                <div className="font-bold">
                  {new Date().toLocaleTimeString().substring(0, 5)}
                </div>
              </div>
              <div className="p-3 border border-gray-500/30">
                <div className="text-xs text-gray-400">Montante</div>
                <div className="font-bold">R$ {amount.toLocaleString()}</div>
              </div>
              <div className="p-3 border border-gray-500/30">
                <div className="text-xs text-gray-400">Preço atual</div>
                <div className="font-bold">
                  {currentPrice.toFixed(currentPrice < 1 ? 6 : 2)}
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center gap-4 pt-4 pb-20 px-4">
            {/* BOTÕES */}
            <div className="flex max-md:hidden flex-row w-full items-center justify-center gap-4 pt-2 px-2">
              <button className="bg-red-500 w-1/2 px-4 py-3 flex items-center justify-center rounded">
                <ArrowDown className="h-6 w-6" />
              </button>
              <button className="bg-green-500 w-1/2 px-4 py-3 flex items-center justify-center rounded">
                <ArrowUp className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <NavBottom />
    </div>
  );
}
