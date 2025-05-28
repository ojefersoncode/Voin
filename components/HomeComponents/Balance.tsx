'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Plus, Send, Upload } from 'lucide-react';
import { Button } from '../ui/button';
export default function Balance() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Card className="rounded-xl mt-4 p-4 mx-4 border-2 border-subbackground bg-background">
      {/* Card do Saldo */}
      <div className="w-full flex max-md:flex-col justify-between md:items-center md:gap-12 my-2">
        <div className="flex flex-col items-start text-text max-md:mb-2">
          <div className="flex items-center gap-2 font-titan">
            <span className="text-lg max-md:text-sm font-inter text-text">
              Saldo disponível
            </span>
            <Eye
              className="h-5 w-5 cursor-pointer text-text"
              onClick={() => setShowBalance(!showBalance)}
            />
          </div>
          <h1 className="text-4xl max-md:text-2xl font-titan py-3">
            {showBalance ? '130.000,00' : '••••••••'}{' '}
            <span className="text-sm max-md:text-xs font-inter">pontos</span>
          </h1>
        </div>

        <Card className="flex items-center bg-transparent border-none text-text">
          <div className="flex w-full justify-around items-center gap-6">
            {[
              { label: 'Adicionar' },
              { label: 'Enviar' },
              { label: 'Receber' }
            ].map((item, i) => (
              <button
                key={i}
                className="p-4 items-center justify-center border-transparent bg-subbackground select-none text-btn font-titan rounded-lg flex flex-co hover:bg-subbackground/80 transition-all duration-200 cursor-pointer"
              >
                <span className=" text-sm max-sm:text-xs text-btn font-inter">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </Card>
  );
}
