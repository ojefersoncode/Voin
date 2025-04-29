'use client';

import {
  Home,
  BarChart2,
  Repeat,
  History,
  Trophy,
  MessageCircleMore
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NavBottom() {
  const router = useRouter();

  const navigateToHomePage = () => router.push('/Home');
  const navigateToHistory = () => router.push('/History');
  const navigateToChat = () => router.push('/chat');
  const navigateToTrade = () => router.push('/trade');
  const navigateToTournament = () => router.push('/tournament');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0e0e0e] border-t border-green-500/30 z-50">
      <div className="flex justify-around items-center h-16">
        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-300 "
          onClick={navigateToHomePage}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Início</span>
        </button>
        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-300 "
          onClick={navigateToTournament}
        >
          <Trophy className="h-5 w-5" />
          <span className="text-xs mt-1">Torneios</span>
        </button>
        <div className="flex flex-col justify-center items-center ">
          <button
            onClick={navigateToTrade}
            className="flex flex-col items-center justify-center z-20 bottom-4 p-4 py-5 rounded-full border border-green-600 bg-[#181818] text-gray-100 relative"
          >
            <Repeat className="h-5 w-5" />
            <span className="text-xs mt-1 text-white">Negociar</span>
          </button>
        </div>

        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-300"
          onClick={navigateToHistory}
        >
          <History className="h-5 w-5" />
          <span className="text-xs mt-1">Historico</span>
        </button>

        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-300"
          onClick={navigateToTournament}
        >
          <MessageCircleMore className="h-5 w-5" />
          <span className="text-xs mt-1">Menssagem</span>
        </button>
      </div>
    </div>
  );
}
