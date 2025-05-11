'use client';

import {
  Home,
  BarChart2,
  Repeat,
  History,
  Trophy,
  MessageCircleMore,
  User2
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
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t rounded-lg z-50">
      <div className="flex w-full justify-around items-center h-20">
        <button
          className="flex flex-col items-center justify-center py-2 text-text"
          onClick={navigateToHomePage}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs font-inter mt-1 text-white">Início</span>
        </button>
        <button
          className="flex flex-col items-center justify-center  py-2 text-text "
          onClick={navigateToTournament}
        >
          <Trophy className="h-5 w-5" />
          <span className="text-xs font-inter mt-1 text-white">Torneios</span>
        </button>
        <div className="flex flex-col justify-center items-center ">
          <button
            onClick={navigateToTrade}
            className="flex flex-col items-center justify-center z-20 bottom-8  p-4 rounded-lg border  bg-background text-text relative"
          >
            <Repeat className="h-5 w-5" />
            <span className="text-xs font-inter mt-1 text-white">Negociar</span>
          </button>
        </div>

        <button
          className="flex flex-col items-center justify-center py-2 text-text"
          onClick={navigateToHistory}
        >
          <History className="h-5 w-5" />
          <span className="text-xs font-inter mt-1 text-white">Historico</span>
        </button>

        <button
          className="flex flex-col items-center justify-center py-2 text-text"
          onClick={navigateToChat}
        >
          <User2 className="h-5 w-5" />
          <span className="text-xs font-inter mt-1 text-white">Perfil</span>
        </button>
      </div>
    </div>
  );
}
