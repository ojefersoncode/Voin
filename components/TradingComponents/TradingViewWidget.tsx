'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChartNoAxesCombined, SquareKanban } from 'lucide-react';

interface Props {
  symbol: string;
}

export default function TradingViewWidget({ symbol }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hideToolbar, setHideToolbar] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // limpa o container antes de recriar
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;

    script.onload = () => {
      if ((window as any).TradingView) {
        new (window as any).TradingView.widget({
          symbol: symbol,
          interval: '1',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'br',
          container_id: 'tv_chart_container',
          width: '100%',
          height: '100%',
          hide_side_toolbar: hideToolbar,
          allow_symbol_change: false,
          autosize: true
        });
      }
    };

    containerRef.current.appendChild(script);
  }, [symbol, hideToolbar]); // recria quando mudar symbol ou hideToolbar

  return (
    <div className="relative w-full h-full">
      <div
        id="tv_chart_container"
        className="w-full h-full"
        ref={containerRef}
      />

      {/* Botão toggle */}
      <Button
        onClick={() => setHideToolbar((prev) => !prev)}
        className="text-center border-none absolute z-40 right-0.5 top-0 p-0 bg-transparent  rounded-sm"
      >
        <div className="bg-subbackground py-0 px-2">
          <SquareKanban className="size-5 max-md:size-5 text-text/80" />
        </div>
      </Button>
    </div>
  );
}
