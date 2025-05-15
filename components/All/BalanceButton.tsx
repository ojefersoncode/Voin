'use client';

import { Coins, DollarSign, PiggyBank, Plus, ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export default function BalanceButton() {
  const router = useRouter();

  const navigateToStore = () => router.push('/store');

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="touch-pan-x touch-pan-y" asChild>
          <Button
            variant="ghost"
            className="px-0 border-none outline-none bg-none"
          >
            <div className="flex w-full text-text justify-center items-center gap-2 p-2 rounded-xl">
              <img className="size-6" src="/Coin/Nexcoin.png" alt="logo" />
              <h1 className="mr-1 font-titan text-sm">130.000.00</h1>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="touch-pan-x touch-pan-y rounded-xl transition-all duration-300 active:border-none active:scale-95 border-b-4 border-yellow-700 p-0">
          <DropdownMenuItem
            onClick={navigateToStore}
            className="p-1 font-titan text-sm border-yellow-400 bg-btn"
          >
            <div className="flex w-full justify-center items-center text-background">
              <Plus className="size-6" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
