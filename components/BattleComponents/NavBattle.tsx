'use client';

import { Home, History, Swords } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SerachBattle } from './SearchBattle';

export default function NavBattle() {
  const router = useRouter();

  const navigateToHomePage = () => router.push('/Home');
  const navigateToHistory = () => router.push('/History');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-btn rounded-t-xl z-50">
      <div className="flex justify-around items-center h-20">
        <button
          title="Início"
          className="flex flex-col items-center justify-center py-1 text-btn"
          onClick={navigateToHomePage}
        >
          <Home className="size-5" />
          <span className="text-xs font-titan mt-1">Inicio</span>
        </button>

        <SerachBattle />

        <button
          title="Histórico"
          className="flex flex-col items-center justify-center py-1 text-btn"
          onClick={navigateToHistory}
        >
          <History className="size-5" />
          <span className="text-xs font-titan mt-1">Historico</span>
        </button>
      </div>
    </div>
  );
}
