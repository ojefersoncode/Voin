'use client';

import React, { useEffect, useRef } from 'react';

interface Props {
  symbol: string;
}

export default function TradingViewWidget({ symbol }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
          hide_side_toolbar: true,
          allow_symbol_change: false,
          autosize: true
        });
      }
    };

    containerRef.current?.appendChild(script);
  }, [symbol]);

  return (
    <div id="tv_chart_container" className="w-full h-auto" ref={containerRef} />
  );
}
