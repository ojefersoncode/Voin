'use client';

import {
  Home,
  BarChart2,
  Repeat,
  History,
  Trophy,
  MessageCircleMore,
  SwordIcon,
  Calendar1Icon
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NavBattle() {
  const router = useRouter();

  const navigateToHomePage = () => router.push('/Home');
  const navigateToHistory = () => router.push('/History');
  const navigateToChat = () => router.push('/chat');
  const navigateToTrade = () => router.push('/trade');
  const navigateToTournament = () => router.push('/tournament');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0e0e0e] border-t border-green-900/40 z-50">
      <div className="flex justify-center gap-16 items-center h-16">
        <button
          className="flex flex-col items-center justify-center py-1 text-gray-300 "
          onClick={navigateToHomePage}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Início</span>
        </button>

        <div className="flex flex-col justify-center items-center ">
          <button
            onClick={navigateToTrade}
            className="flex flex-col items-center justify-center z-20 bottom-4 py-4 px-7 rounded-lg border border-green-600 bg-[#181818] text-gray-100 relative"
          >
            <SwordIcon className="h-5 w-5" />
            <span className="text-xs mt-1 text-white">Batalha</span>
          </button>
        </div>

        <button
          className="flex flex-col items-center justify-center  py-1 text-gray-300"
          onClick={navigateToHistory}
        >
          <History className="h-5 w-5" />
          <span className="text-xs mt-1">Historico</span>
        </button>
      </div>
    </div>
  );
}
