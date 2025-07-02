'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function BalanceButton() {
  const router = useRouter();

  const navigateToStore = () => router.push('/store');

  return (
    <>
       <Button 
         onClick={navigateToStore}
         className="p-0 border-none outline-none rounded-lg bg-background hover:bg-background/80">
            <div className="flex w-full text-text justify-center items-center gap-2 p-2 rounded-xl">
              <img className="size-6" src="/Coin/Nexcoin.png" alt="logo" />
              <h1 className="mr-1 font-inter text-text/90 text-base">
                130.000.00
              </h1>
            </div>
          </Button>
        
    </>
  );
}
