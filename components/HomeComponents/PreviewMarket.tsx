'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUp, ArrowDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// Tipo para os dados da API da Binance
interface CryptoData {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  lastPrice: string;
  volume: string;
  quoteVolume: string;
  highPrice: string;
  lowPrice: string;
}

// Tipo para os dados formatados das criptomoedas
interface FormattedCrypto {
  symbol: string;
  name: string;
  price: number;
  priceChangePercent: number;
  volume: number;
  logo: string;
  isUpdating?: boolean;
}

// Mapeamento de símbolos para nomes completos e logos
const cryptoInfo: Record<string, { name: string; logo: string }> = {
  BTCUSDT: { name: 'Bitcoin', logo: '₿' },
  ETHUSDT: { name: 'Ethereum', logo: 'Ξ' },
  BNBUSDT: { name: 'Binance Coin', logo: 'BNB' },
  USDTUSDT: { name: 'Tether', logo: '₮' },
  USDCUSDT: { name: 'USD Coin', logo: 'USDC' },
  SOLUSDT: { name: 'Solana', logo: 'SOL' },
  XRPUSDT: { name: 'Ripple', logo: 'XRP' },
  ADAUSDT: { name: 'Cardano', logo: 'ADA' },
  TONUSDT: { name: 'Toncoin', logo: 'TON' },
  LTCUSDT: { name: 'Litecoin', logo: 'LTC' },
  NEARUSDT: { name: 'NEAR Protocol', logo: 'NEAR' }
};

// Lista de símbolos que queremos exibir
const targetSymbols = [
  'BTCUSDT',
  'ETHUSDT',
  'USDTUSDT',
  'BNBUSDT',
  'USDCUSDT',
  'SOLUSDT',
  'XRPUSDT',
  'TRXUSDT',
  'ADAUSDT',
  'TONUSDT',
  'LTCUSDT',
  'NEARUSDT'
];

export default function PreviewMarket() {
  const [activeTab, setActiveTab] = useState('market');
  const [marketTab, setMarketTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('volume');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [cryptoData, setCryptoData] = useState<FormattedCrypto[]>([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const navigateToMarket = () => {
    router.push('/market');
  };

  // Buscar dados da API da Binance
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        // Se for a primeira carga, não temos dados para mostrar ainda
        if (isFirstLoad) {
          // Não precisamos marcar como atualizando
        } else {
          // Marcar criptomoedas como "atualizando"
          setCryptoData((prev) =>
            prev.map((crypto) => ({ ...crypto, isUpdating: true }))
          );
          setIsRefreshing(true);
        }

        const response = await fetch(
          'https://api.binance.com/api/v3/ticker/24hr'
        );
        const data: CryptoData[] = await response.json();

        // Filtrar apenas as criptomoedas que queremos exibir
        const filteredData = data.filter((item) =>
          targetSymbols.includes(item.symbol)
        );

        // Formatar os dados
        const formattedData: FormattedCrypto[] = filteredData.map((item) => {
          const info = cryptoInfo[item.symbol] || {
            name: item.symbol,
            logo: item.symbol.substring(0, 1)
          };

          const price = Number.parseFloat(item.lastPrice);
          const volume = Number.parseFloat(item.quoteVolume);

          return {
            symbol: item.symbol.replace('USDT', ''),
            name: info.name,
            price: price,
            priceChangePercent: Number.parseFloat(item.priceChangePercent),
            volume: volume,
            logo: info.logo,
            isUpdating: false
          };
        });

        setCryptoData(formattedData);
        setIsFirstLoad(false);

        // Reset do indicador de atualização após um pequeno atraso
        if (timer.current) {
          clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
          setIsRefreshing(false);
        }, 500);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        // Dados de fallback em caso de erro na API
        if (isFirstLoad) {
          const fallbackData: FormattedCrypto[] = targetSymbols.map(
            (symbol) => {
              const info = cryptoInfo[symbol] || {
                name: symbol,
                logo: symbol.substring(0, 1)
              };
              const randomPrice = Math.random() * 10000;
              const randomChange = Math.random() * 10 - 5;

              return {
                symbol: symbol.replace('USDT', ''),
                name: info.name,
                price: randomPrice,
                priceChangePercent: randomChange,
                volume: randomPrice * 1000000,
                logo: info.logo,
                isUpdating: false
              };
            }
          );

          setCryptoData(fallbackData);
          setIsFirstLoad(false);
        }

        setIsRefreshing(false);
      }
    };

    // Carregar dados iniciais
    fetchCryptoData();

    // Atualizar dados a cada 5 segundos
    const interval = setInterval(fetchCryptoData, 3000);
    return () => {
      clearInterval(interval);
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [isFirstLoad]);

  // Filtrar e ordenar os dados
  const filteredAndSortedData = cryptoData
    .filter((crypto) => {
      if (
        searchQuery &&
        !crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'priceChangePercent':
          comparison = a.priceChangePercent - b.priceChangePercent;
          break;
        case 'volume':
          comparison = a.volume - b.volume;
          break;
        default:
          comparison = a.volume - b.volume;
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });

  // Função para formatar o volume
  const formatVolume = (value: number) => {
    if (value >= 1_000_000_000) {
      return `${(value / 1_000_000_000).toFixed(2)}B`;
    } else if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(2)}M`;
    } else if (value >= 1_000) {
      return `${(value / 1_000).toFixed(2)}K`;
    } else {
      return `${value.toFixed(2)}`;
    }
  };

  return (
    <div className="min-h-screen bg-background text-white flex flex-col touch-pan-x touch-pan-y">
      <div className="flex-1 p-4 pb-14">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-titan">Mercado</h2>
          {isRefreshing && <span className="text-xs text-gray-400"></span>}
        </div>

        {/* Cabeçalho da tabela com opções de ordenação */}
        <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-btn border border-opacity-20 rounded-t-xl text-sm text-gray-400">
          <div
            className="col-span-5 flex items-center gap-1 cursor-pointer"
            onClick={() => {
              setSortBy('name');
              setSortDirection(
                sortBy === 'name' && sortDirection === 'desc' ? 'asc' : 'desc'
              );
            }}
          >
            Criptomoeda
            {sortBy === 'name' &&
              (sortDirection === 'desc' ? (
                <ArrowDown className="h-3 w-3" />
              ) : (
                <ArrowUp className="h-3 w-3" />
              ))}
          </div>
          <div
            className="col-span-3 text-right cursor-pointer"
            onClick={() => {
              setSortBy('price');
              setSortDirection(
                sortBy === 'price' && sortDirection === 'desc' ? 'asc' : 'desc'
              );
            }}
          >
            Preço
            {sortBy === 'price' &&
              (sortDirection === 'desc' ? (
                <ArrowDown className="h-3 w-3 inline" />
              ) : (
                <ArrowUp className="h-3 w-3 inline" />
              ))}
          </div>
          <div
            className="col-span-2 text-right cursor-pointer"
            onClick={() => {
              setSortBy('priceChangePercent');
              setSortDirection(
                sortBy === 'priceChangePercent' && sortDirection === 'desc'
                  ? 'asc'
                  : 'desc'
              );
            }}
          >
            24h
            {sortBy === 'priceChangePercent' &&
              (sortDirection === 'desc' ? (
                <ArrowDown className="h-3 w-3 inline" />
              ) : (
                <ArrowUp className="h-3 w-3 inline" />
              ))}
          </div>
          <div
            className="col-span-2 text-right cursor-pointer"
            onClick={() => {
              setSortBy('volume');
              setSortDirection(
                sortBy === 'volume' && sortDirection === 'desc' ? 'asc' : 'desc'
              );
            }}
          >
            Volume
            {sortBy === 'volume' &&
              (sortDirection === 'desc' ? (
                <ArrowDown className="h-3 w-3 inline" />
              ) : (
                <ArrowUp className="h-3 w-3 inline" />
              ))}
          </div>
        </div>

        {/* Lista de criptomoedas */}
        <div className="rounded-b-xl overflow-hidden border border-opacity-20">
          {isFirstLoad ? (
            <div className="bg-btn p-8 text-center text-gray-400 rounded-b-xl">
              Carregando dados...
            </div>
          ) : filteredAndSortedData.length > 0 ? (
            filteredAndSortedData.map((crypto) => (
              <div
                key={crypto.symbol}
                className={`grid grid-cols-12 gap-2 px-4 py-4 bg-btn border-t border-opacity-20 hover:bg-btn/60 cursor-pointer transition-colors ${crypto.isUpdating ? 'opacity-100' : 'opacity-100'}`}
                onClick={() => router.push(`/crypto/${crypto.symbol}`)}
              >
                <div className="col-span-5 flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-xs font-bold">
                      {crypto.logo}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">{crypto.symbol}</div>
                    <div className="text-xs text-gray-400">{crypto.name}</div>
                  </div>
                </div>
                <div className="col-span-3 flex flex-col items-end justify-center">
                  <div
                    className={`font-medium ${crypto.isUpdating ? 'animate-pulse' : ''}`}
                  >
                    $
                    {crypto.price < 1
                      ? crypto.price.toFixed(4)
                      : crypto.price.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                  <span
                    className={`${
                      crypto.priceChangePercent >= 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    } ${crypto.isUpdating ? 'animate-pulse' : ''}`}
                  >
                    {crypto.priceChangePercent >= 0 ? '+' : ''}
                    {crypto.priceChangePercent.toFixed(2)}%
                  </span>
                </div>
                <div
                  className={`col-span-2 flex items-center justify-end text-gray-300 ${crypto.isUpdating ? 'animate-pulse' : ''}`}
                >
                  {formatVolume(crypto.volume)}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-background p-8 text-center text-gray-400 rounded-b-xl">
              Nenhuma criptomoeda encontrada.
            </div>
          )}
        </div>

        {/* Botão para ver mais */}
        <div className="mt-6 flex justify-center">
          <Button
            onClick={navigateToMarket}
            className="border font-inter text-white bg-background hover:bg-background hover:text-white/70"
          >
            Ver mais criptomoedas
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
