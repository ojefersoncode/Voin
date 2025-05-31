'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Eye, Wallet2 } from 'lucide-react';

export default function Balance() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="w-full px-6 max-md:px-4">
      <Card className="rounded-xl mt-4 p-4 border border-[#363636] bg-background">
        {/* Card do Saldo */}
        <div className="w-full flex max-md:flex-col justify-between md:items-center md:gap-12 py-3">
          <div className="flex flex-col items-start px-4 text-text max-md:mb-2">
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

          <div className="flex items-center bg-transparent border-none text-text max-md:mt-5 sm:px-4">
            <div className="flex w-full justify-around items-center space-x-3">
              {[{ label: 'Adicionar' }, { label: 'Enviar' }].map((item, i) => (
                <button
                  key={i}
                  className="p-4 items-center justify-center bg-btn/60 text-btn rounded-lg flex hover:bg-btn/40  hover:text-text/40 transition-all duration-200"
                >
                  <span className="text-base max-sm:text-sm text-text hover:text-text/60 transition-all font-inter">
                    {item.label}
                  </span>
                </button>
              ))}

              <button className="flex items-center gap-2 p-4 rounded-lg text-text bg-btn/60 hover:bg-btn/40 hover:text-text/40 transition-all duration-200">
                <Wallet2 className="size-4" />
                <span className="font-inter text-base max-sm:text-sm">
                  Conectar
                </span>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
