'use client';

import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Navbar } from '../HomeComponents/NavBar';
import { Footer } from '../landing/Footer';

export default function Cursos({ user }: { user: User }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const curso = [
    { id: 1, name: 'Supabase', imageUrl: '/cooderfy.png' },
    { id: 2, name: 'Vercel deploy', imageUrl: '/cooderfy.png' },
    { id: 3, name: 'Market para dev', imageUrl: '/cooderfy.png' },
    { id: 4, name: 'Dominios e SEO', imageUrl: '/cooderfy.png' },
    { id: 5, name: 'Trafego pago para SaaS', imageUrl: '/cooderfy.png' },
    { id: 6, name: 'Programar com Ai', imageUrl: '/cooderfy.png' }
  ];

  return (
    <div className="relative flex min-h-screen w-full">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <nav className="flex w-full justify-between py-2 max-md:px-3 md:px-8 bg-[#01070f]">
          <div className="flex gap-1 text-xl font-bold items-center">
            <img className="size-8" src="/logo.webp" alt="logo" />
            <h1 className="dark:text-gray-100 text-base">Voin</h1>
          </div>

          <div className="flex gap-4">
            <Navbar />
          </div>
        </nav>

        <div className="mx-auto grid w-full max-w-7xl gap-10 py-10 lg:gap-14 max-md:p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {curso.map((curso) => (
            <div
              key={curso.id}
              className="border bg-black rounded-lg shadow-md hover:shadow-lg transition-all"
              onMouseEnter={() => setHoveredId(curso.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <img
                  src={curso.imageUrl}
                  alt={curso.name}
                  className={`w-full object-cover rounded-t-lg rounded-b-sm transition-all ${
                    hoveredId !== null && hoveredId !== curso.id
                      ? 'blur-sm opacity-100'
                      : 'blur-none opacity-100'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
