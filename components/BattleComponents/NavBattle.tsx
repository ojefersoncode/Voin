'use client';

import { Home, History, Swords } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SerachBattle } from './SearchBattle';

export default function NavBattle() {
  const router = useRouter();

  const navigateToHomePage = () => router.push('/Home');
  const navigateToHistory = () => router.push('/History');
  const navigateToTrade = () => router.push('/trade');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0e0e0e] border-t border-green-900/40 z-50">
      <div className="flex justify-center gap-16 items-center h-16">
        <button
          title="Início"
          className="flex flex-col items-center justify-center py-1 text-gray-300"
          onClick={navigateToHomePage}
        >
          <Home className="h-5 w-5" />
        </button>

        <SerachBattle />

        <button
          title="Histórico"
          className="flex flex-col items-center justify-center py-1 text-gray-300"
          onClick={navigateToHistory}
        >
          <History className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
