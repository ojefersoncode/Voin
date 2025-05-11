'use client';

import { DollarSign, PiggyBank, ShoppingCart } from 'lucide-react';

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
            <div className="flex w-full text-green-50 justify-center items-center border border-opacity-80 p-2 rounded-md">
              <img src="/Voin.png" alt="Coin" className="size-5 mr-1" />
              <h1 className="mr-1 font-titan text-xs">130.000.00</h1>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 touch-pan-x touch-pan-y bg-background border-opacity-40">
          <DropdownMenuItem className="mt-1 font-semibold text-sm">
            <div className="flex items-center gap-2">
              <PiggyBank className="size-4" />
              <span>Pontos 130.000,00</span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={navigateToStore}
            className="mb-1 font-semibold text-sm"
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="size-4" />
              <span>Comprar pontos</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
