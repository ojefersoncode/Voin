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
import Pageback from '../All/Pageback';

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
    <div className="bg-background touch-pan-x touch-pan-y">
      <div>
        <NavbarAll />
      </div>
      <div>
        <Pageback />
      </div>
      <div className="p-6 mb-4 bg-background">
        <h2 className="text-xl text-text font-titan pb-6">Mercado Cripto</h2>
        <Table className="px-2 bg-background rounded-xl">
          <TableHeader>
            <TableRow className="font-titan rounded-xl bg-btn hover:bg-btn/80 border border-background/20">
              <TableHead className="text-background">Moeda</TableHead>
              <TableHead className="text-right text-background">
                Preço (USDT)
              </TableHead>
              <TableHead className="text-right text-background">
                Variação 24h
              </TableHead>
              <TableHead className="text-right text-background">
                Volume
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white hover:bg-btn border border-background/20 rounded-xl">
            {data.map((crypto) => (
              <TableRow
                className="bg-white hover:bg-btn font-titan border border-background/20"
                key={crypto.symbol}
              >
                <TableCell className=" text-background ">
                  {crypto.symbol.replace('USDT', '')}
                </TableCell>
                <TableCell className="text-right  text-background ">
                  ${parseFloat(crypto.lastPrice).toFixed(2)}
                </TableCell>
                <TableCell
                  className={`text-right shadow-black drop-shadow-xs ${
                    parseFloat(crypto.priceChangePercent) >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  } `}
                >
                  {parseFloat(crypto.priceChangePercent).toFixed(2)}%
                </TableCell>
                <TableCell className="text-right  text-background">
                  {formatVolume(crypto.quoteVolume)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
