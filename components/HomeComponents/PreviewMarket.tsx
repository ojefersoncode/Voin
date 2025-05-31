'use client';

import { useEffect, useState } from 'react';
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

export default function PreviewMarket() {
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
    <div className="bg-none touch-pan-x touch-pan-y pb-4">
      <div className="sm:px-6 px-4 my-4 bg-background">
        <Table className="px-2 bg-background border-btn">
          <TableHeader>
            <TableRow className="font-titan bg-btn hover:bg-btn/80 border border-background">
              <TableHead className="text-background">Moeda</TableHead>
              <TableHead className="text-right text-background">
                Preço
              </TableHead>
              <TableHead className="text-right text-background">24h</TableHead>
              <TableHead className="text-right text-background">
                Volume
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-subbackground hover:bg-btn border border-background/20">
            {data.map((crypto) => (
              <TableRow
                className="bg-subbackground font-titan border border-background/20"
                key={crypto.symbol}
              >
                <TableCell className=" text-text ">
                  {crypto.symbol.replace('USDT', '')}
                </TableCell>
                <TableCell className="text-right  text-text ">
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
                <TableCell className="text-right  text-text">
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
