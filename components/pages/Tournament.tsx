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
    }
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex flex-1 flex-col min-h-[calc(100vh_-_theme(spacing.16))]">
        <div className="pt-8 pb-2 px-4 sm:px-7">
          <img
            src="/Banner/Banner.png"
            alt="Logomarca"
            className="w-full sm:h-56 max-sm:h-36 rounded-2xl object-cover border-2 border-btn hover:opacity-80 hover:border- hover:border-btn/80 transition-all duration-400 cursor-default select-none"
          />
        </div>

        <div className="flex w-full items-center content-center justify-between px-8 max-md:px-4 mt-4">
          <div className=" text-gray-50  ">
            <h1 className="text-2xl sm:text-4xl font-titan mt-4">
              Torneios e batalhas
            </h1>
          </div>
          <div className="mt-4">
            <FilterTournament />
          </div>
        </div>

        <div className="px-8 max-md:px-4 mb-6">
          <p className="flex text-sm sm:text-lg font-inter text-gray-200 mt-4">
            Jogue torneios e batalhas para conseguir moedas NEX <br />
            Essas moedas poderão ser trocadas por cripto ativos BNB
          </p>
          <div className="pt-4">
            <Button className="px-3 py-1 shadow-md drop-shadow-lg shadow-orange-400 border border-btn bg-btn hover:bg-btn/80 transition-colors">
              <span className="text-base font-inter text-background hover:text-balance/80">
                Ver regulamento
              </span>
            </Button>
          </div>
        </div>

        <div className="mx-auto grid w-full px-8 max-md:px-4 gap-10 pb-4 mb-24 lg:gap-14 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {torneios.map((torneio) => (
            <div
              key={torneio.id}
              className="text-text shadow-md drop-shadow-xl shadow-orange-400 border border-btn rounded-xl bg-background hover:scale-105 transition-all duration-500"
              onMouseEnter={() => setHoveredId(torneio.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className=" rounded-xl overflow-hidden">
                <img
                  src={torneio.imageUrl}
                  alt={torneio.name}
                  className="w-full object-cover"
                />
              </div>

              <div className="p-4 ">
                <div className="flex items-center gap-2 font-titan">
                  <h1>{torneio.name}</h1>
                  <span>🏆</span>
                </div>

                <div className="flex w-full justify-between gap-3 mt-3 font-inter">
                  <span>Premiação total:</span>
                  <div className="flex gap-1 items-center">
                    <img
                      src="/Coin/Nexcoin.png"
                      alt="Voin Coin"
                      className="size-5"
                    />
                    <p>{torneio.premio}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h2 className="line-clamp-2 font-inter">
                    {torneio.description}
                  </h2>
                </div>
              </div>

              <footer className="p-4">
                <Button className="w-full bg-btn hover:bg-btn/90 border text-background transition-colors">
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
