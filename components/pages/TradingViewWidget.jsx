import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "colorTheme": "dark",
          "dateRange": "12M",
          "locale": "br",
          "largeChartUrl": "",
          "isTransparent": false,
          "showFloatingTooltip": false,
          "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
          "plotLineColorFalling": "rgba(41, 98, 255, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "scaleFontColor": "#DBDBDB",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
          "tabs": [
            {
              "title": "Futures",
              "symbols": [
                {
                  "s": "BINANCE:BTCUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCBTC",
                  "currency-logoid": "crypto/XTVCUSDT"
                },
                {
                  "s": "BINANCE:ETHUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCETH",
                  "currency-logoid": "crypto/XTVCUSDT"
                },
                {
                  "s": "BINANCE:SOLUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCSOL",
                  "currency-logoid": "crypto/XTVCUSDT"
                },
                {
                  "s": "BINANCE:XRPUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCXRP",
                  "currency-logoid": "crypto/XTVCUSDT"
                },
                {
                  "s": "BINANCE:DOGEUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCDOGE",
                  "currency-logoid": "crypto/XTVCUSDT"
                },
                {
                  "s": "BINANCE:ADAUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCADA",
                  "currency-logoid": "crypto/XTVCUSDT"
                },
                {
                  "s": "BINANCE:PEPEUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCPEPE",
                  "currency-logoid": "crypto/XTVCUSDT"
                },
                {
                  "s": "BINANCE:LINKUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCLINK",
                  "currency-logoid": "crypto/XTVCUSDT"
                },
                {
                  "s": "BINANCE:AVAXUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCAVAX",
                  "currency-logoid": "crypto/XTVCUSDT"
                },
                {
                  "s": "BINANCE:BNBUSDT",
                  "d": "",
                  "base-currency-logoid": "crypto/XTVCBNB",
                  "currency-logoid": "crypto/XTVCUSDT"
                }
              ],
              "originalTitle": "Futures"
            }
          ],
          "support_host": "https://www.tradingview.com",
          "backgroundColor": "#0e0e0e",
          "width": "100%",
          "height": "600",
          "showSymbolLogo": true,
          "showChart": false
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="flex w-full justify-center items-center p-4">
       <div className="tradingview-widget-container" ref={container}>
         <div className="tradingview-widget-container__widget"></div>
       </div>
    </div>
  );
}

export default memo(TradingViewWidget);
