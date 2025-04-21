'use client';
import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';
import { useState } from 'react';
import { SelectAula } from '../TorneioComponents/SelectAula';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

export default function HomePage({ user }: { user: User }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const torneios = [
    {
      id: 1,
      name: 'Torneio Diario',
      premio: '1,000',
      description:
        'No torneio diario voçe pode participar gratuitamente, e recebe uma banca inicial.',
      imageUrl: '/cooderfy.png'
    },
    {
      id: 2,
      name: 'Torneio Semanal',
      premio: '5,000',
      description:
        'No torneio semanal voçe pode participar pagando uma pequena taxa com a Voin coin, e recebe uma banca inicial',
      imageUrl: '/cooderfy.png'
    },
    {
      id: 3,
      name: 'Torneio Mensal',
      premio: '10,000',

      description:
        'No torneio diario voçe pode participar gratuitamente, e recebe uma banca inicial.',
      imageUrl: '/cooderfy.png'
    },
    {
      id: 4,
      name: 'Batalha 1x1',
      description:
        'Nas batalhas de x1 voçe pode se inscrever usando Voin, e recebe uma banca e quem terminar com maior saldo ganha.',
      premio: '500',

      imageUrl: '/cooderfy.png'
    },
    {
      id: 5,
      name: 'Batalhar 2x2',
      description:
        'Nas batalhas de 2x2 voçe pode se inscrever usando Voin, chame um amigo para sua equipe, ambos recebe uma banca e o duo que terminar com maior saldo ganha.',
      premio: '2,000',

      imageUrl: '/cooderfy.png'
    },
    {
      id: 6,
      name: 'Batalha 4x4',
      description:
        'Nas batalhas de 4x4 voçe pode se inscrever usando Voin, monte sua equipe para a batalha, ambos recebe uma banca e o duo que terminar com maior saldo ganha.',
      premio: '10,000',

      imageUrl: '/cooderfy.png'
    }
  ];

  return (
    <div className="relative flex min-h-screen w-full">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-[#01070f] border-b border-[#071830]">
          <div className="flex gap-1 text-xl font-bold items-center">
            <img className="size-8" src="/Voin.png" alt="logo" />
            <div className="flex">
              <h1 className="text-gray-900 dark:text-gray-100 text-base">
                Voin
              </h1>
            </div>
          </div>

          <div className="flex gap-4">
            <Navbar />
          </div>
        </nav>

        <div className="flex w-full justify-start items-center px-8 max-md:px-4 mb-1 mt-6">
          <SelectAula />
        </div>

        <div className="mx-auto grid w-full px-8 max-md:px-4 gap-10 pb-7 lg:gap-14 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {torneios.map((torneios) => (
            <div
              key={torneios.id}
              className="border bg-[#010307] rounded-lg shadow-md hover:shadow-lg transition-all"
              onMouseEnter={() => setHoveredId(torneios.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="dark:bg-[301070f] bg-[#01070f]">
                <img
                  src={torneios.imageUrl}
                  alt={torneios.name}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <h1>{torneios.name}</h1>
                  <h2>🏆</h2>
                </div>
              </div>

              <div className="flex w-full justify-between gap-3 p-4">
                <span>Premiação total:</span>
                <div className="flex gap-2">
                  <p>{torneios.premio}</p>
                  <img src="/Voin.png" alt="" className="size-6" />
                </div>
              </div>

              <div className="px-4 py-3">
                <h2 className="line-clamp-2">{torneios.description}</h2>
              </div>
              <footer className="p-4 pb-6">
                <Button
                  variant={'ghost'}
                  className="w-full bg-green-600 hover:bg-green-700 transition-all text-white"
                >
                  <span className="font-bold">Entrar</span>
                </Button>
              </footer>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
