'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Plus, Send, Upload } from 'lucide-react';

export default function Balance() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-background">
      {/* Card do Saldo */}
      <Card className="w-full lg:w-[600px] px-0 shadow-none border-none bg-background">
        <CardHeader className="flex flex-row justify-between pb-2 items-start text-text">
          <div className="flex items-center gap-2 font-titan">
            <CardTitle className="text-lg font-inter text-text">
              Saldo disponível
            </CardTitle>
            <Eye
              className="h-5 w-5 cursor-pointer text-text"
              onClick={() => setShowBalance(!showBalance)}
            />
          </div>
        </CardHeader>

        <CardContent className="text-text">
          <h1 className="text-4xl font-titan p-0 mb-4">
            {showBalance ? '130.000,00' : '••••••••'}{' '}
            <span className="text-sm font-inter">pontos</span>
          </h1>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { icon: Plus, label: 'ADICIONAR' },
              { icon: Send, label: 'ENVIAR' },
              { icon: Upload, label: 'TRANSFERIR' }
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center drop-shadow-md shadow-btn bg-yellow-950 active:scale-90 active:bg-btn rounded-xl pb-1 transition-all duration-300"
              >
                <div
                  className="button py-6 w-full bg-btn select-none text-background
                  border-b border-yellow-400 transition-colors duration-300 font-titan rounded-xl flex flex-col items-center justify-center cursor-pointer"
                >
                  <item.icon className="size-8 sm:size-10 py-2" />
                  <span className="text-xs sm:text-base font-titan">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
