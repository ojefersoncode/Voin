import { useEffect, useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../ui/select';
import { ArrowUp, ArrowDown, Plus, Minus } from 'lucide-react';
import { Input } from '../ui/input';
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
          theme: 'Dark',
          width: '100%',
          height: '500',
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
            'side_toolbar_in_fullscreen_mode'
          ],
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

  return (
    <div className="bg-[#0e0e0e] h-screen text-white flex flex-col touch-pan-x touch-pan-y">
      <header className="bg-background">
        <nav className="flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <img src="/Nexbattle.png" alt="Logo" className="size-8" />
          </div>

          <div className="flex py-4 px-2 gap-4">
            <div className="flex items-center justify-center gap-1 px-2 rounded-xl text-green-50 cursor-pointer bg-background">
              <BalanceButton />
            </div>
            <div>
              <div className="flex w-full justify-center items-center">
                <Select value={selectedPair} onValueChange={setSelectedPair}>
                  <SelectTrigger className="bg-btn/90 shadow-orange-400 drop-shadow-sm text-background py-2 px-2 font-titan rounded-xl border border-gray-500/30 flex w-full justify-center items-center">
                    <SelectValue placeholder="Selecione um par" />
                  </SelectTrigger>
                  <SelectContent className="bg-background font-titan text-white border border-opacity-40">
                    {availablePairs.map((pair) => (
                      <SelectItem
                        className="hover:bg-btn hover:text-background"
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
          </div>
        </nav>
      </header>

      <div className="flex max-xl:flex-col w-full sm:flex-1 bg-[#0e0e0e]">
        {/* Gráfico */}
        <div className="flex-1 max-sm:pb-4">
          <div
            id="tv_chart_container"
            className="w-full sm:h-[600px] max-sm:h-[400px]"
          />
        </div>

        {/* Info + Select + Botões */}
        <div className="sm:w-[350px] w-full flex flex-col">
          <div className="flex flex-row w-full items-center justify-center gap-4 max-sm:pt-28 sm:px-6 pt-4 px-3">
            <button className="bg-red-600 shadow-red-800 drop-shadow-md w-1/2 px-4 py-3 flex items-center justify-center rounded-xl">
              <div className="flex w-full items-center justify-between">
                <h1 className="font-inter">Para baixo</h1>
                <ArrowDown className="size-5" />
              </div>
            </button>
            <button className="bg-green-600 shadow-green-800 drop-shadow-md w-1/2 px-4 py-3 flex items-center justify-center rounded-xl">
              <div className="flex w-full items-center justify-between">
                <h1 className="font-inter">Para cima</h1>
                <ArrowUp className="size-5" />
              </div>
            </button>
          </div>

          <div className="sm:px-4 px-1">
            <div className="grid grid-cols-2 gap-2 mt-4">
              {/* Informações */}
              <div className="flex w-full rounded-xl bg-btn border max-md:pb-1 drop-shadow-md shadow-orange-700  border-orange-400">
                <div className="flex flex-col w-full justify-center">
                  <span className="text-sm px-2 text-background font-inter">
                    Tempo
                  </span>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="bg-btn text-sm font-inter text-background mt-1 py-2 rounded border border-none w-full">
                      <SelectValue placeholder="Selecione um par" />
                    </SelectTrigger>
                    <SelectContent className="bg-background text-xs font-inter text-white border border-opacity-40">
                      {availableTimes.map((time) => (
                        <SelectItem
                          className="bg-background"
                          key={time.value}
                          value={time.value}
                        >
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="px-3 py-1 rounded-xl border border-orange-400 drop-shadow-md shadow-orange-700  bg-btn flex flex-col w-full gap-2">
                <span className="text-sm font-inter text-background">
                  Valor
                </span>
                <div className="flex w-full justify-center items-center gap-2">
                  <button
                    onClick={handleDecrement}
                    className="py-1 max-sm:px-1 w-full bg-btn text-background rounded"
                  >
                    <Minus />
                  </button>
                  <Input
                    placeholder="Valor"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className="bg-transparent w-20 text-background px-1 text-xl border-none text-center"
                  />
                  <button
                    onClick={handleIncrement}
                    className="py-1 w-full bg-btn text-background rounded"
                  >
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomTrading />
    </div>
  );
}
