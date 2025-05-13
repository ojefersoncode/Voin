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
              <img className="size-7" src="/Coin/Nexcoin.png" alt="logo" />
              <h1 className="mr-1 font-titan text-base">130.000.00</h1>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2 touch-pan-x touch-pan-y rounded-xl border-btn bg-btn">
          <DropdownMenuItem
            onClick={navigateToStore}
            className="mb-1 font-titan text-sm"
          >
            <div className="flex w-full justify-center items-center text-background">
              <Plus className="size-5" />
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
