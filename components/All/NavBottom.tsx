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
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-btn rounded-xl z-50">
      <div className="flex w-full justify-around items-center h-20">
        <button
          className="flex flex-col items-center justify-center py-2 font-titan text-btn hover:text-btn/80"
          onClick={navigateToHomePage}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs font-inter mt-1">Início</span>
        </button>
        <button
          className="flex flex-col items-center justify-center  py-2 font-titan text-btn hover:text-btn/80"
          onClick={navigateToTournament}
        >
          <Trophy className="h-5 w-5" />
          <span className="text-xs font-inter mt-1">Torneios</span>
        </button>
        <div className="flex flex-col justify-center items-center ">
          <button
            onClick={navigateToTrade}
            className="flex flex-col items-center justify-center z-20 py-3 px-2 rounded-x font-titan text-btn hover:text-btn/80 relative"
          >
            <Repeat className="h-5 w-5" />
            <span className="text-xs mt-1">Negociar</span>
          </button>
        </div>

        <button
          className="flex flex-col items-center justify-center py-2 font-titan text-btn hover:text-btn/80"
          onClick={navigateToHistory}
        >
          <History className="h-5 w-5" />
          <span className="text-xs font-inter mt-1">Historico</span>
        </button>

        <button
          className="flex flex-col items-center justify-center py-2 font-titan text-btn hover:text-btn/80"
          onClick={navigateToChat}
        >
          <User2 className="h-5 w-5" />
          <span className="text-xs font-inter mt-1">Perfil</span>
        </button>
      </div>
    </div>
  );
}
