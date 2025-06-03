'use client';

import Image from 'next/image';
import { Card } from '../ui/card';
import { CalendarDays } from 'lucide-react';

export default function CardBlog() {
  const CardItems = [
    {
      id: 1,
      title: 'Notícia sobre BTC',
      description:
        'Esta notícia fala sobre o BTC subiu muito nos ultimos 6 meses, e seu impacto no mercado de cripto'
    },
    {
      id: 2,
      title: 'Notícia sobre USDT',
      description:
        'Esta notícia fala sobre o USDT subiu muito nos ultimos 6 meses.'
    },
    {
      id: 3,
      title: 'Notícia sobre DOGE',
      description:
        'Esta notícia fala sobre a DOGE subiu muito nos ultimos 6 meses.'
    },
    {
      id: 4,
      title: 'Notícia sobre ETH',
      description:
        'Esta notícia fala sobre o ETH subiu muito nos ultimos 6 meses.'
    },
    {
      id: 5,
      title: 'Notícia sobre BNB',
      description:
        'Esta notícia fala sobre a BNB subiu muito nos ultimos 6 meses.'
    },
    {
      id: 6,
      title: 'Notícia sobre SOL',
      description:
        'Esta notícia fala sobre a SOL subiu muito nos ultimos 6 meses.'
    }
  ];

  return (
    <div className="touch-pan-x touch-pan-y">
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {CardItems.map((item) => (
          <Card key={item.id} className="bg-background rounded-lg border-none">
            <Image
              className="w-full h-auto rounded-lg"
              src="/banner.png"
              alt="card image"
              height={1200}
              width={900}
            />
            <div className="py-4 px-1">
              <div className="flex w-full justify-between items-center mt-1">
                <h1 className="text-xs text-text/70 font-inter">
                  {item.title}
                </h1>
                <div className="flex justify-center items-center gap-1 text-xs font-inter text-text/70">
                  <CalendarDays className="size-3" /> <span> 03/05/2025 </span>
                </div>
              </div>

              <p className="text-lg sm:text-xl text-text font-inter pt-3">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </main>
    </div>
  );
}
