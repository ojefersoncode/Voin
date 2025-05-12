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
            <div className="flex w-full text-text justify-center items-center bg-btn p-2 rounded-xl">
              <Coins className="size-5 mr-1" />
              <h1 className="mr-1 font-titan text-sm">130.000.00</h1>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2 touch-pan-x touch-pan-y rounded-xl bg-background">
          <DropdownMenuItem className="mt-1 font-titan text-sm">
            <div className="flex items-center gap-4">
              <Coins className="size-5" />
              <span>130.000,00</span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={navigateToStore}
            className="mb-1 font-titan text-sm mt-4"
          >
            <div className="flex items-center gap-3">
              <Plus className="size-5" />
              <span>Comprar pontos</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
