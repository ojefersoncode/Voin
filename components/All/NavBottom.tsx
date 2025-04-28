'use client';

import { Home, BarChart2, Repeat, History, Trophy } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NavBottom() {
  const router = useRouter();

  const navigateToHome = () => router.push('/');
  const navigateToWallet = () => router.push('/voin-wallet');
  const navigateToHistory = () => router.push('/History');
  const navigateToMarket = () => router.push('/market');
  const navigateToTrade = () => router.push('/trade');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0e0e0e] border-t border-green-500/30 z-50">
      <div className="flex justify-around items-center h-16">
        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-400 hover:text-green-500"
          onClick={navigateToHome}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Início</span>
        </button>
        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-400 hover:text-green-500"
          onClick={navigateToMarket}
        >
          <BarChart2 className="h-5 w-5" />
          <span className="text-xs mt-1">Mercado</span>
        </button>
        <button
          onClick={navigateToTrade}
          className="flex flex-col items-center justify-center w-1/5 py-1 text-green-500 relative"
        >
          <Repeat className="h-5 w-5" />
          <span className="text-xs mt-1">Negociar</span>
          <div className="absolute bottom-0 w-6 h-1 bg-green-500 rounded-t-full"></div>
        </button>
        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-400 hover:text-green-500"
          onClick={navigateToHistory}
        >
          <History className="h-5 w-5" />
          <span className="text-xs mt-1">Historico</span>
        </button>
        <button
          className="flex flex-col items-center justify-center w-1/5 py-1 text-gray-400 hover:text-green-500"
          onClick={navigateToWallet}
        >
          <Trophy className="h-5 w-5" />
          <span className="text-xs mt-1">Torneios</span>
        </button>
      </div>
    </div>
  );
}
