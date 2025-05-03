'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Plus, Send, Upload } from 'lucide-react';

const Progress = ({
  value,
  className,
  children
}: {
  value: number;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-full ${className}`}
    >
      <div className="w-full h-full bg-white/80" />
      <div
        className="absolute top-0 left-0 h-full bg-green-500 transition-all"
        style={{ width: `${value}%` }}
      />
      {children}
    </div>
  );
};

export default function Cash() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-[#0e0e0e]">
      {/* Card da Progresso e Ações */}
      <div className="flex-1">
        <Card className="border-none bg-transparent">
          <CardHeader>
            <CardTitle className="text-2xl text-green-100">
              Bem vindo, sr Jeferson!
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="mb-6">
              <div className="flex justify-between mb-2 text-green-100">
                <div className="flex items-center gap-1 mb-1">
                  <img
                    src="/Level/bronze.svg"
                    alt="patente"
                    className="size-7 select-none touch-pan-down"
                  />
                  <span>Bronze nível 5</span>
                </div>
                <span>Nível 6</span>
              </div>

              <Progress value={28} className="h-4 bg-white/80">
                <div className="absolute -bottom-6 left-[28%] transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-green-500" />
                </div>
              </Progress>

              <div className="mt-4 flex justify-center">
                <div className="bg-green-100 rounded-md p-2 font-bold text-xs text-blue-950">
                  Falta 72% para nível 6
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Card do Saldo */}
      <Card className="w-full lg:w-[600px] px-0 shadow-none border-none bg-[#0e0e0e]">
        <CardHeader className="flex flex-row justify-between pb-2 items-start text-green-100">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg text-green-100">
              Saldo disponível
            </CardTitle>
            <Eye
              className="h-5 w-5 cursor-pointer"
              onClick={() => setShowBalance(!showBalance)}
            />
          </div>
        </CardHeader>

        <CardContent className="text-green-50">
          <h1 className="text-4xl font-bold p-0 mb-4">
            {showBalance ? '130.000,00' : '••••••••'}{' '}
            <span className="text-sm font-normal">voin</span>
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              { icon: Plus, label: 'ADICIONAR' },
              { icon: Send, label: 'ENVIAR' },
              { icon: Upload, label: 'TRANSFERIR' }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-green-500 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer"
              >
                <item.icon className="h-8 w-8 mb-2" />
                <span className="text-xs font-bold text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
