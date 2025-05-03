'use client';

import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import NavbarAll from '../All/Navbar';
import NavBottom from '../All/NavBottom';

interface Crypto {
  symbol: string;
  lastPrice: string;
  priceChangePercent: string;
  volume: string;
  quoteVolume: string;
}

export default function MarketPage({ user }: { user: User }) {
  const [data, setData] = useState<Crypto[]>([]);

  // Função para formatar o volume (10M, 2B, etc.)
  const formatVolume = (volume: string) => {
    const num = parseFloat(volume);
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(2)}B`;
    } else if (num >= 1000000) {
      return `${(num / 1000000).toFixed(2)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(2)}K`;
    }
    return num.toFixed(2);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.binance.com/api/v3/ticker/24hr');
      const json = await res.json();
      const filtered = json.filter((item: Crypto) =>
        [
          'BTCUSDT',
          'ETHUSDT',
          'USDTUSDT',
          'BNBUSDT',
          'USDCUSDT',
          'SOLUSDT',
          'XRPUSDT',
          'TRXUSDT',
          'ADAUSDT',
          'PEPEUSDT',
          'TONUSDT',
          'DOGEUSDT',
          'LINKUSDT',
          'LTCUSDT',
          'NEARUSDT'
        ].includes(item.symbol)
      );
      setData(filtered);
    };

    fetchData(); // primeira chamada imediata

    const interval = setInterval(() => {
      fetchData();
    }, 3000); // atualiza a cada 3 segundos

    return () => clearInterval(interval); // limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className="touch-pan-x touch-pan-y">
      <div>
        <NavbarAll />
      </div>

      <div className="p-6 mb-24">
        <h2 className="text-xl text-green-50 font-bold mb-4">Mercado Cripto</h2>
        <Table className="px-2 rounded-lg bg-[#181818]">
          <TableHeader>
            <TableRow>
              <TableHead>Moeda</TableHead>
              <TableHead className="text-right">Preço (USDT)</TableHead>
              <TableHead className="text-right">Variação 24h</TableHead>
              <TableHead className="text-right">Volume 24h</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((crypto) => (
              <TableRow key={crypto.symbol}>
                <TableCell className="text-gray-300">
                  {crypto.symbol.replace('USDT', '')}
                </TableCell>
                <TableCell className="text-right text-gray-300">
                  ${parseFloat(crypto.lastPrice).toFixed(2)}
                </TableCell>
                <TableCell
                  className={`text-right ${
                    parseFloat(crypto.priceChangePercent) >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {parseFloat(crypto.priceChangePercent).toFixed(2)}%
                </TableCell>
                <TableCell className="text-right text-gray-300">
                  {formatVolume(crypto.quoteVolume)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <NavBottom />
      </div>
    </div>
  );
}
