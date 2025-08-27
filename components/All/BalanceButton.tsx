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
          className="border-none outline-none rounded-lg bg-subbackground hover:bg-subbackground">
            <div className="flex w-full text-text justify-center items-center gap-2 p-2">
              <img className="size-5" src="/Coin/Nexcoin.png" alt="logo" />
              <h1 className="font-inter text-text/90 text-sm">
                130.000.00
              </h1>
            </div>
          </Button>
        
    </>
  );
}
