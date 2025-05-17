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
    <div className="w-full h-full flex items-center justify-center bg-[#311652] text-white">
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

  // Simulando dados para o gráfico — você pode trocar para dados reais via API
  useEffect(() => {
    // Mapear o valor de selectedTime para o intervalo da API da Binance
    const getInterval = () => {
      switch (selectedTime) {
        case '1min':
          return '1m';
        case '5min':
          return '5m';
        case '10min':
          return '15m'; // Binance não tem 10m, usando 15m
        case '30min':
          return '30m';
        case '1h':
          return '1h';
        default:
          return '1m'; // Para 30s, usamos 1m como mais próximo
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
          x: new Date(candle[0]), // Usar objeto Date diretamente em vez de string
          y: [
            Number.parseFloat(candle[1]), // Open
            Number.parseFloat(candle[2]), // High
            Number.parseFloat(candle[3]), // Low
            Number.parseFloat(candle[4]) // Close
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
    setOptions({
      chart: {
        type: 'candlestick',
        height: '100%',
        background: '#311652', // Cor de fundo do gráfico
        foreColor: '#fff', // Cor do texto
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: false,
            zoom: true,
            zoomin: false,
            zoomout: false,
            reset: true
          }
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
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: (value: string | number | Date) => {
            // Simplifica o formato de hora para mostrar apenas horas e minutos
            const time = new Date(value);
            return (
              time.getHours().toString().padStart(2, '0') +
              ':' +
              time.getMinutes().toString().padStart(2, '0')
            );
          },
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: false,
          style: {
            colors: '#f0f0f0',
            fontSize: '12px'
          },
          offsetY: 2
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        axisTicks: {
          show: true,
          color: '#fff'
        },
        tickAmount: 8 // Reduz o número de rótulos exibidos
      },
      yaxis: {
        tooltip: {
          enabled: true
        },
        labels: {
          style: { colors: '#f0f0f0' }
        }
      },
      grid: {
        borderColor: '#2d2d2d'
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
  }, [selectedPair]);

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
    <div className="bg-background h-screen text-white flex flex-col touch-pan-x touch-pan-y">
      {/* Header */}
      <header className="bg-background  top-0 z-30 touch-pan-x touch-pan-y">
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
              : 'h-[500px] sm:h-[550px] md:h-[600px] lg:h-[calc(100vh-180px)] px-4'
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
                <SelectContent className="bg-btn text-white border border-gray-700">
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
            <div className="mb-6 touch-pan-x touch-pan-y">
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
      <div className="pt-4">
        <BottomTrading />
      </div>
    </div>
  );
}
