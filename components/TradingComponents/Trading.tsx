'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import { ArrowUp, ArrowDown, Plus, Minus, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import BottomTrading from './BottomTrading';
import BalanceButton from '../All/BalanceButton';

// Importação dinâmica do Chart para evitar o erro "window is not defined"
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false, // Não renderiza no servidor
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-background text-white">
      <img
        src="/Nexbattle.png"
        alt="Logo"
        className="h-48 w-48 animate-pulse"
      />
    </div>
  )
});

const availablePairs = [
  { value: 'BTCUSDT', label: 'BTC/USDT' },
  { value: 'ETHUSDT', label: 'ETH/USDT' },
  { value: 'BNBUSDT', label: 'BNB/USDT' }
];

const availableTimes = [
  { value: '30s', label: 'Entrada de 30s' },
  { value: '1min', label: 'Entrada de 1m' },
  { value: '5min', label: 'Entrada de 5m' },
  { value: '10min', label: 'Entrada de 10 min' },
  { value: '30min', label: 'Entrada de 30m' },
  { value: '1h', label: 'Entrada de 1h' }
];

export default function TradingAll() {
  const [selectedPair, setSelectedPair] = useState('BTCUSDT');
  const [selectedTime, setSelectedTime] = useState('30s');
  const [inputValue, setInputValue] = useState<number>(0);
  const [isChartFullscreen, setIsChartFullscreen] = useState(false);
  const [series, setSeries] = useState<any[]>([]);
  const [options, setOptions] = useState<any>({});
  const [currentPrice, setCurrentPrice] = useState<string>('0');
  const [priceChange, setPriceChange] = useState<string>('0');
  const [priceChangePercent, setPriceChangePercent] = useState<string>('0');

  const [zoomLevel, setZoomLevel] = useState(100); // percentual de dados visíveis (100% = todos)

  // Enviado dados para o gráfico via API
  useEffect(() => {
    // Mapear o valor de selectedTime para o intervalo da API
    const getInterval = () => {
      switch (selectedTime) {
        case '1min':
          return '1m';
        case '5min':
          return '5m';
        case '10min':
          return '15m';
        case '30min':
          return '30m';
        case '1h':
          return '1h';
        default:
          return '1m';
      }
    };

    const fetchCandlestickData = async () => {
      try {
        const interval = getInterval();
        const limit = 100; // Número de candles a serem retornados

        // Usando a API pública da Binance
        const response = await fetch(
          `https://api.binance.com/api/v3/klines?symbol=${selectedPair}&interval=${interval}&limit=${limit}`
        );

        if (!response.ok) {
          throw new Error('Falha ao buscar dados da API da Binance');
        }

        const data = await response.json();

        // Transformar os dados para o formato esperado pelo ApexCharts
        const formattedData = data.map((candle: string[]) => ({
          x: new Date(candle[0]),
          y: [
            Number.parseFloat(candle[1]), // Abertura
            Number.parseFloat(candle[2]), // Maxima
            Number.parseFloat(candle[3]), // Minima
            Number.parseFloat(candle[4]) // Fechamento
          ]
        }));

        setSeries([{ data: formattedData }]);

        // Atualizar o preço atual e a variação percentual
        if (formattedData.length > 0) {
          const lastCandle = formattedData[formattedData.length - 1];
          const closePrice = lastCandle.y[3];
          const openPrice = formattedData[0].y[0];
          const priceChange = closePrice - openPrice;
          const priceChangePercent = (priceChange / openPrice) * 100;

          setCurrentPrice(closePrice.toFixed(2));
          setPriceChange(priceChange.toFixed(2));
          setPriceChangePercent(priceChangePercent.toFixed(2));
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        // Fallback para dados simulados em caso de erro
        const now = Date.now();
        const fallbackData = Array.from({ length: 30 }).map((_, i) => ({
          x: new Date(now - (29 - i) * 60000).toLocaleTimeString(),
          y: [
            Math.random() * 30000 + 20000,
            Math.random() * 30000 + 20000,
            Math.random() * 30000 + 20000,
            Math.random() * 30000 + 20000
          ].map((v) => Number(v.toFixed(2)))
        }));

        setSeries([{ data: fallbackData }]);
      }
    };

    fetchCandlestickData();

    // Configurar um intervalo para atualizar os dados a cada 3 segundos
    const intervalId = setInterval(fetchCandlestickData, 3000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [selectedPair, selectedTime]);

  useEffect(() => {
    const allData = series[0]?.data || [];

    let xaxisOptions: any = {
      type: 'datetime',
      labels: {
        formatter: (value: string | number | Date) => {
          const time = new Date(value);
          return (
            time.getHours().toString().padStart(2, '0') +
            ':' +
            time.getMinutes().toString().padStart(2, '0')
          );
        },
        style: {
          colors: '#f0f0f0',
          fontSize: '11px'
        },
        offsetY: 2
      },
      tickAmount: 8
    };

    // Aplicar range com base no zoom
    if (allData.length > 0 && zoomLevel < 100) {
      const total = allData.length;
      const visible = Math.floor((zoomLevel / 100) * total);
      const start = total - visible;
      const min = allData[start]?.x;
      const max = allData[total - 1]?.x;

      xaxisOptions = {
        ...xaxisOptions,
        min,
        max
      };
    }

    setOptions({
      chart: {
        type: 'candlestick',
        background: '#210F37',
        foreColor: '#311652',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      title: {
        text: `${selectedPair.replace('USDT', '')}/USDT`,
        align: 'left',
        style: { color: '#fff' }
      },
      xaxis: xaxisOptions,
      yaxis: {
        tooltip: {
          enabled: true
        },
        labels: {
          style: { colors: '#f0f0f0' }
        }
      },
      grid: {
        borderColor: '#311652'
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#20b476',
            downward: '#f6465d'
          }
        }
      },
      theme: {
        mode: 'dark',
        palette: 'palette1'
      },
      tooltip: {
        enabled: true,
        shared: true,
        followCursor: true,
        theme: 'dark'
      }
    });
  }, [selectedPair, zoomLevel, series]);

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

  return (
    <div className="bg-background h-full text-white flex flex-col touch-pan-x touch-pan-y">
      {/* Header */}
      <header className="bg-background top-0 z-30 touch-pan-x touch-pan-y">
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img src="/Nexbattle.png" alt="Logo" className="h-8 w-8" />
          </div>

          <div className="flex items-center">
            <div>
              <Select value={selectedPair} onValueChange={setSelectedPair}>
                <SelectTrigger className="bg-subbackground text-text py-1.5 px-3 font-titan rounded-lg border-none h-9 ">
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
          </div>
        </nav>
      </header>

      {/* Main */}
      <div
        className={`flex flex-col lg:flex-row w-full flex-1 ${isChartFullscreen ? 'lg:flex-col' : ''}`}
      >
        {/* Chart */}
        <div
          className={`w-full lg:flex-1 relative px-2 ${
            isChartFullscreen
              ? 'h-[calc(100vh-120px)]'
              : 'h-[400px] sm:h-[400px] md:h-[500px] lg:h-[calc(100vh-180px)]'
          }`}
        >
          <Chart
            options={options}
            series={series}
            type="candlestick"
            height="100%"
            width="100%"
          />
        </div>

        {/* Trading Panel */}
        <div className={`lg:w-[350px] w-full flex flex-col bg-background`}>
          {/* Trading Controls */}
          <div className="p-4 touch-pan-x touch-pan-y">
            <h3 className="text-sm text-gray-400 mb-2">Tempo</h3>

            {/* Time Selection */}
            <div className="mb-6">
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="w-full border-none bg-subbackground text-text mb-4 font-semibold">
                  <SelectValue placeholder="Selecione um tempo" />
                </SelectTrigger>
                <SelectContent className="bg-btn text-white border border-gray-700 touch-pan-x touch-pan-y">
                  {availableTimes.map((time) => (
                    <SelectItem
                      className="hover:bg-background text-black hover:text-black focus:bg-background font-bold"
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
              <h3 className="text-sm text-gray-400 mb-2">Valor</h3>
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
              <button className="bg-[#f6465d] hover:bg-[#e0414d] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-between">
                <span>Para baixo</span>
                <ArrowDown className="h-5 w-5" />
              </button>
              <button className="bg-[#20b476] hover:bg-[#1e9f6d] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-between">
                <span>Para cima</span>
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Component */}
      <div>
        <BottomTrading />
      </div>
    </div>
  );
}
