'use client';

import { Home, History, Swords } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SerachBattle } from './SearchBattle';

export default function NavBattle() {
  const router = useRouter();

  const navigateToHomePage = () => router.push('/Home');
  const navigateToHistory = () => router.push('/History');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-opacity-40 z-50">
      <div className="flex justify-center gap-14 items-center h-16">
        <button
          title="Início"
          className="flex flex-col items-center justify-center py-1 text-text"
          onClick={navigateToHomePage}
        >
          <Home className="h-6 w-6" />
        </button>

        <SerachBattle />

        <button
          title="Histórico"
          className="flex flex-col items-center justify-center py-1 text-text"
          onClick={navigateToHistory}
        >
          <History className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
