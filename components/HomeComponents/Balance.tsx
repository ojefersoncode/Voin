'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Wallet2 } from 'lucide-react';

export default function Balance() {
  const [showBalance, setShowBalance] = useState(true);
  const router = useRouter();
  const navigateToStore = () => router.push('/store');

  return (
    <div className="w-full">
      <Card className="rounded-xl pt-7 px-4 border-none bg-background">
        {/* Card do Saldo */}
        <div className="w-full flex justify-between md:items-center md:gap-12">
          <div className="flex flex-col items-start text-text">
            <div className="flex items-center gap-2 font-titan">
              <span className="text-lg max-md:text-sm font-inter text-text">
                Saldo disponível
              </span>
              <Eye
                className="h-5 w-5 cursor-pointer text-text"
                onClick={() => setShowBalance(!showBalance)}
              />
            </div>
            <h1 className="text-4xl max-md:text-2xl font-titan">
              {showBalance ? '130.000,00' : '••••••••'}
              <span className="text-sm max-md:text-xs font-inter ml-1">
                NEX
              </span>
            </h1>
          </div>

          <div className="flex items-center bg-transparent border-none text-text">
            <div className="flex w-full justify-around items-center space-x-3">
              <button className="flex items-center gap-2 p-3 rounded-lg text-text bg-btn hover:text-text/80 transition-all duration-200">
                <Wallet2 className="size-6 max-md:size-5" />
                <span className="font-inter text-base max-sm:text-sm">
                  Conectado
                </span>
              </button>
            </div>
          </div>
        </div>
      </Card>

      
      <Card 
        onClick={navigateToStore}
        className="p-4 flex gap-4 justify-between items-center border-none bg-background">
         <Button className="flex-1 bg-subbackground border border-zinc-700">
            Adicionar
          </Button>
          <Button className="flex-1 bg-subbackground border border-zinc-700">
            Retirar
          </Button>
          <Button className="flex-1 bg-subbackground border border-zinc-700">
            Transferir
          </Button>
       </Card>
    </div>
  );
}
