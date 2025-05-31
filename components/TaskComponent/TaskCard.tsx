'use client';

import Image from 'next/image';
import { Card } from '../ui/card';

export default function TaskCard() {
  const CardItems = [
    {
      id: 1,
      title: 'Tarefa 1',
      description: 'Complete a terefa e receba 1,000 Nex Coin'
    },
    {
      id: 2,
      title: 'Tarefa 2',
      description: 'Complete a terefa e receba 1,000 Nex Coin'
    },
    {
      id: 3,
      title: 'Tarefa 3',
      description: 'Complete a terefa e receba 1,000 Nex Coin'
    },
    {
      id: 4,
      title: 'Tarefa 4',
      description: 'Complete a terefa e receba 1,000 Nex Coin'
    },
    {
      id: 5,
      title: 'Tarefa 5',
      description: 'Complete a terefa e receba 1,000 Nex Coin'
    },
    {
      id: 6,
      title: 'Tarefa 6',
      description: 'Complete a terefa e receba 1,000 Nex Coin'
    }
  ];

  return (
    <div className="touch-pan-x touch-pan-y">
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CardItems.map((item) => (
          <Card key={item.id} className=" bg-subbackground rounded-xl">
            <Image
              className="w-full h-auto rounded-lg bg-slate-950 opacity-95"
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
