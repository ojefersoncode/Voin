'use client';

import { useState } from 'react';
import { FilterTournament } from '../TorneioComponents/FilterTournament';
import { Button } from '../ui/button';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import NavBottom from '../All/NavBottom';

export default function Tournament({ user }: { user: User }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const torneios = [
    {
      id: 1,
      name: 'Torneio Diário',
      premio: '1,000',
      description:
        'No torneio diário você pode participar gratuitamente e recebe uma banca inicial.',
      imageUrl: '/Batalhas/Diario.png'
    },
    {
      id: 2,
      name: 'Torneio Semanal',
      premio: '5,000',
      description:
        'No torneio semanal você pode participar pagando uma pequena taxa com a Voin Coin e recebe uma banca inicial.',
      imageUrl: '/Batalhas/Semanal.png'
    },
    {
      id: 3,
      name: 'Torneio Mensal',
      premio: '10,000',
      description:
        'No torneio mensal você pode participar gratuitamente e recebe uma banca inicial.',
      imageUrl: '/Batalhas/Mensal.png'
    },
    {
      id: 4,
      name: 'Batalha 1x1',
      premio: '500',
      description:
        'Nas batalhas de 1x1 você pode se inscrever usando Voin e recebe uma banca. Quem terminar com maior saldo ganha.',
      imageUrl: '/Batalhas/Solo.png'
    },
    {
      id: 5,
      name: 'Batalha 2x2',
      premio: '2,000',
      description:
        'Nas batalhas de 2x2 você pode se inscrever usando Voin, chame um amigo para sua equipe e ambos recebem uma banca. O duo que terminar com maior saldo ganha.',
      imageUrl: '/Batalhas/Duo.png'
    },
    {
      id: 6,
      name: 'Batalha 4x4',
      premio: '10,000',
      description:
        'Nas batalhas de 4x4 você pode se inscrever usando Voin, monte sua equipe para a batalha e todos recebem uma banca. O time que terminar com maior saldo ganha.',
      imageUrl: '/Batalhas/Grupo.png'
    }
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex flex-1 flex-col min-h-[calc(100vh_-_theme(spacing.16))]">
        <div className="py-4 px-4 sm:px-7">
          <img
            src="/Banner/Banner.png"
            alt="Logomarca"
            className="w-full sm:h-56 max-sm:h-36 rounded-lg object-cover hover:opacity-90 transition-all cursor-default select-none"
          />
        </div>

        <div className="flex w-full items-center content-center justify-between px-8 max-md:px-4 mt-4">
          <div className=" text-gray-50  ">
            <h1 className="text-2xl sm:text-4xl font-black mt-4">
              Torneios e batalhas
            </h1>
          </div>
          <div className="mt-4">
            <FilterTournament />
          </div>
        </div>

        <div className="px-8 max-md:px-4 mb-6">
          <p className="flex text-sm sm:text-lg font-thin text-gray-200 mt-4">
            Jogue torneios e batalhas para conseguir moedas VOIN <br />
            Essas moedas poderão ser trocadas por cripto ativos BNB
          </p>
          <div className="pt-4">
            <Button className="px-3 py-1 border  bg-btn hover:bg-btn/40 transition-colors">
              <span className="text-xs">Ver regulamento</span>
            </Button>
          </div>
        </div>

        <div className="mx-auto grid w-full px-8 max-md:px-4 gap-10 pb-4 mb-24 lg:gap-14 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {torneios.map((torneio) => (
            <div
              key={torneio.id}
              className="border border-opacity-40 rounded-xl bg-btn/40 shadow-md hover:shadow-lg transition-all"
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
