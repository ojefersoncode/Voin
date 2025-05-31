'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Eye, Wallet2 } from 'lucide-react';
import { Button } from '../ui/button';
export default function Balance() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Card className="rounded-xl mt-4 p-4 mx-4 border border-[#363636] bg-background">
      {/* Card do Saldo */}
      <div className="w-full flex max-md:flex-col justify-between md:items-center md:gap-12 py-3">
        <div className="flex flex-col items-start px-2 text-text max-md:mb-2">
          <div className="flex items-center gap-2 font-titan">
            <span className="text-lg max-md:text-sm font-inter text-text">
              Saldo disponível
            </span>
            <Eye
              className="h-5 w-5 cursor-pointer text-text"
              onClick={() => setShowBalance(!showBalance)}
            />
          </div>
          <h1 className="text-4xl max-md:text-2xl font-titan ">
            {showBalance ? '130.000,00' : '••••••••'}{' '}
            <span className="text-sm max-md:text-xs font-inter">pontos</span>
          </h1>
        </div>

        <div className="flex items-center bg-transparent border-none text-text max-md:mt-5">
          <div className="flex w-full justify-around items-center space-x-3">
            {[{ label: 'Adicionar' }, { label: 'Enviar' }].map((item, i) => (
              <button
                key={i}
                className="p-4 items-center justify-center bg-subbackground text-btn font-titan rounded-lg flex hover:bg-subbackground/80 transition-all duration-200"
              >
                <span className="text-sm max-sm:text-xs text-text font-inter">
                  {item.label}
                </span>
              </button>
            ))}

            <button className="flex items-center gap-2 p-4 rounded-lg text-btn bg-subbackground hover:bg-subbackground/80 transition-all duration-200">
              <Wallet2 className="size-4" />
              <span className="font-inter text-sm max-sm:text-xs">
                Conectar
              </span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
