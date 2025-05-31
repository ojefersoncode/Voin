'use client';

import Image from 'next/image';
import { Card } from '../ui/card';

export default function CardBlog() {
  const CardItems = [
    { id: 1, title: 'Notícia sobre BTC', description: 'Descrição 1' },
    { id: 2, title: 'Notícia sobre USDT', description: 'Descrição 2' },
    { id: 3, title: 'Notícia sobre DOGE', description: 'Descrição 3' },
    { id: 4, title: 'Notícia sobre ETH', description: 'Descrição 4' },
    { id: 5, title: 'Notícia sobre BNB', description: 'Descrição 5' },
    { id: 6, title: 'Notícia sobre SOL', description: 'Descrição 6' }
  ];

  return (
    <div className="touch-pan-x touch-pan-y">
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CardItems.map((item) => (
          <Card key={item.id} className=" bg-subbackground rounded-xl">
            <Image
              className="w-full h-auto rounded-lg"
              src="/banner.png"
              alt="card image"
              height={1200}
              width={900}
            />
            <div className="p-4">
              <h1 className="text-lg font-titan">{item.title}</h1>
              <p className="text-sm text-text/70 font-inter pt-3">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </main>
    </div>
  );
}
