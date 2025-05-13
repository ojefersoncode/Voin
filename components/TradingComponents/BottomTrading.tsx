'use client';

import { Home, History, Swords } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Gameview } from './Gameview';

export default function BottomTrading() {
  const router = useRouter();

  const navigateToHomePage = () => router.push('/Home');
  const navigateToHistory = () => router.push('/History');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-btn rounded-xl z-50">
      <div className="flex justify-center gap-14 items-center h-20">
        <button
          title="Início"
          className="flex flex-col items-center justify-center py-1 text-btn hover:text-btn/80"
          onClick={navigateToHomePage}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs font-titan mt-1">Inicio</span>
        </button>

        <Gameview />

        <button
          title="Histórico"
          className="flex flex-col items-center justify-center py-1 text-btn hover:text-btn/80"
          onClick={navigateToHistory}
        >
          <History className="h-6 w-6" />
          <span className="text-xs font-titan mt-1">Historico</span>
        </button>
      </div>
    </div>
  );
}
