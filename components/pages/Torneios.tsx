'use client';

import { useState } from 'react';
import { SelectAula } from '../TorneioComponents/SelectAula';
import { Button } from '../ui/button';
import NavbarAll from '../All/Navbar';
import NavBottom from '../All/NavBottom';

export default function Torneios() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const torneios = [
    {
      id: 1,
      name: 'Torneio Diário',
      premio: '1,000',
      description:
        'No torneio diário você pode participar gratuitamente e recebe uma banca inicial.',
      imageUrl: '/cooderfy.png'
    },
    {
      id: 2,
      name: 'Torneio Semanal',
      premio: '5,000',
      description:
        'No torneio semanal você pode participar pagando uma pequena taxa com a Voin Coin e recebe uma banca inicial.',
      imageUrl: '/cooderfy.png'
    },
    {
      id: 3,
      name: 'Torneio Mensal',
      premio: '10,000',
      description:
        'No torneio mensal você pode participar gratuitamente e recebe uma banca inicial.',
      imageUrl: '/cooderfy.png'
    },
    {
      id: 4,
      name: 'Batalha 1x1',
      premio: '500',
      description:
        'Nas batalhas de 1x1 você pode se inscrever usando Voin e recebe uma banca. Quem terminar com maior saldo ganha.',
      imageUrl: '/cooderfy.png'
    },
    {
      id: 5,
      name: 'Batalha 2x2',
      premio: '2,000',
      description:
        'Nas batalhas de 2x2 você pode se inscrever usando Voin, chame um amigo para sua equipe e ambos recebem uma banca. O duo que terminar com maior saldo ganha.',
      imageUrl: '/cooderfy.png'
    },
    {
      id: 6,
      name: 'Batalha 4x4',
      premio: '10,000',
      description:
        'Nas batalhas de 4x4 você pode se inscrever usando Voin, monte sua equipe para a batalha e todos recebem uma banca. O time que terminar com maior saldo ganha.',
      imageUrl: '/cooderfy.png'
    }
  ];

  return (
    <div className="relative flex min-h-screen w-full touch-pan-x touch-pan-y">
      <main className="flex flex-1 flex-col min-h-[calc(100vh_-_theme(spacing.16))]">
        <div className="flex w-full justify-start items-center px-8 max-md:px-4 mt-6 mb-1">
          <SelectAula />
        </div>

        <div className="mx-auto grid w-full px-8 max-md:px-4 gap-10 pb-7 lg:gap-14 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {torneios.map((torneio) => (
            <div
              key={torneio.id}
              className="border border-green-600 rounded-xl bg-[#0e0e0e] shadow-md hover:shadow-lg transition-all"
              onMouseEnter={() => setHoveredId(torneio.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="bg-[#181818] m-3 rounded-xl overflow-hidden">
                <img
                  src={torneio.imageUrl}
                  alt={torneio.name}
                  className="w-full object-cover"
                />
              </div>

              <div className="p-4 text-green-50">
                <div className="flex items-center gap-2">
                  <h1>{torneio.name}</h1>
                  <span>🏆</span>
                </div>

                <div className="flex w-full justify-between gap-3 mt-3">
                  <span>Premiação total:</span>
                  <div className="flex gap-2 items-center">
                    <p>{torneio.premio}</p>
                    <img src="/Voin.png" alt="Voin Coin" className="size-6" />
                  </div>
                </div>

                <div className="mt-3">
                  <h2 className="line-clamp-2">{torneio.description}</h2>
                </div>
              </div>

              <footer className="p-4">
                <Button
                  variant="ghost"
                  className="w-full bg-green-600 hover:bg-green-700 transition-all text-white"
                >
                  <span className="font-bold">Entrar</span>
                </Button>
              </footer>
            </div>
          ))}
        </div>
      </main>

      <NavBottom />
    </div>
  );
}
