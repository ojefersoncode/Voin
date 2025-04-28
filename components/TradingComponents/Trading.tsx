import { useEffect, useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../ui/select';
import { ArrowUp, ArrowDown } from 'lucide-react';
import NavBottom from '../All/NavBottom';
import Image from 'next/image';
import ButtonMenu from '../All/ButtonMenu';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

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
  { value: '5min', label: 'Entrada de  5m' },
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

  const handleIncrement = () => {
    setInputValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setInputValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    setInputValue(Number(value));
  };

  return (
    <div className=" bg-[#0e0e0e] text-white flex flex-col touch-pan-x touch-pan-y">
      <header className=" bg-[#0e0e0e] border-b border-green-500/20 mb-2">
        <nav className="flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <img src="/Logomarca.png" alt="Logo" className="size-8" />
            <div className="flex items-center gap-1 px-2">
              <Select value={selectedPair} onValueChange={setSelectedPair}>
                <SelectTrigger className="bg-[#0e0e0e] text-white py-2 px-2 rounded border border-gray-500/30 w-full">
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

          <div className="flex gap-2 p-4">
            <div className="flex items-center justify-center gap-1 px-4 rounded-md text-green-50 border border-green-50 border-opacity-20 cursor-pointer bg-[#181818]">
              <img src="/Voin.png" alt="Logo" className="size-5" />
              <h1 className="mr-1 text-xs">130.000.00</h1>
            </div>
            <div>
              <ButtonMenu />
            </div>
          </div>
        </nav>
      </header>

      {/* DESKTOP */}
      <div className="md:flex w-full h-screen flex-1">
        {/* Gráfico */}
        <div className="flex-1 h-auto px-4 sm:pt-4 pb-4">
          <div
            id="tv_chart_container"
            className="w-full sm:h-[600px] max-sm:h-[400px]"
          />
        </div>

        {/* Info + Select + Botões */}
        <div className="md:w-[350px] flex flex-col">
          <div className="flex md:hidden flex-row w-full items-center justify-center gap-4 max-sm:pt-28 pb-4 px-6">
            <button className="bg-red-500 w-1/2 px-4 py-3 flex items-center justify-center rounded">
              <div className="flex w-full items-center justify-between">
                <h1>Para baixo</h1>
                <ArrowDown className="h-6 w-6" />
              </div>
            </button>
            <button className="bg-green-500 w-1/2 px-4 py-3 flex items-center justify-center rounded">
              <div className="flex w-full items-center justify-between">
                <h1>Para cima</h1>
                <ArrowUp className="h-6 w-6" />
              </div>
            </button>
          </div>

          <div className="px-4 md:pt-4">
            <div className="grid grid-cols-2 bg-[#0e0e0e] border-t border-gray-500/30">
              {/* Informações */}
              <div className="flex w-full justify-center items-center border max-md:pb-1 border-gray-500/30">
                <div className="flex flex-col w-full justify-center px-2 h-full">
                  <Label className="text-xs text-gray-400">Tempo</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="bg-[#0e0e0e] text-white py-4 rounded border border-none w-full">
                      <SelectValue placeholder="Selecione um par" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#181818] text-white border border-green-500/30">
                      {availableTimes.map((time) => (
                        <SelectItem key={time.value} value={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="px-3 py-2 border border-gray-500/30 flex flex-col gap-2">
                <Label className="text-xs text-gray-400">Valor</Label>
                <div className="flex w-full justify-center items-center gap-2">
                  <button
                    onClick={handleDecrement}
                    className="px-2 py-1 bg-[#212121] text-white rounded"
                  >
                    -
                  </button>
                  <Input
                    placeholder="Valor"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className="bg-transparent w-20 text-green-50 px-1 border-[#494949] text-center"
                  />
                  <button
                    onClick={handleIncrement}
                    className="px-2 py-1 bg-[#212121] text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center gap-4 pt-4 pb-20 px-4">
            {/* BOTÕES */}
            <div className="flex max-md:hidden flex-row w-full items-center justify-center gap-4 pt-2 px-2">
              <button className="bg-red-500 w-1/2 px-4 py-3 flex items-center justify-center rounded">
                <div className="flex w-full items-center justify-between">
                  <h1>Para baixo</h1>
                  <ArrowDown className="h-6 w-6" />
                </div>
              </button>
              <button className="bg-green-500 w-1/2 px-4 py-3 flex items-center justify-center rounded">
                <div className="flex w-full items-center justify-between">
                  <h1>Para cima</h1>
                  <ArrowUp className="h-6 w-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <NavBottom />
    </div>
  );
}
