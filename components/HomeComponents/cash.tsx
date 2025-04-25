'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Eye, Plus, Send, Target, Trophy, Upload } from 'lucide-react';

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
    <div className="flex flex-col lg:flex-row gap-6 p-4 bg-[#0e0e0e]">
      {/* Card do Saldo */}
      <Card className="w-full lg:w-[500px] border-green-500 border-2 rounded-3xl bg-[#0e0e0e]">
        <CardHeader className="flex flex-row justify-between items-start text-green-100">
          <div className="flex items-center gap-2 mt-4">
            <CardTitle className="text-lg text-green-100">
              Saldo disponível
            </CardTitle>
            <Eye
              className="h-5 w-5 cursor-pointer"
              onClick={() => setShowBalance(!showBalance)}
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white font-bold">V</span>
          </div>
        </CardHeader>

        <CardContent className="text-green-100">
          <h1 className="text-4xl font-bold mb-6">
            {showBalance ? 'R$ 130.000,00' : '••••••••'}{' '}
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
                <div className="flex items-center gap-1">
                  <img
                    src="/patente/Bronze.png"
                    alt="patente"
                    className="size-10 select-none touch-pan-down"
                  />
                  <span className="mt-1">Bronze nível 5</span>
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[Target, Trophy, Clock].map((Icon, i) => (
                <div
                  key={i}
                  className="border-2 border-green-500 rounded-2xl p-4 flex items-center justify-center"
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
              ))}

              {/* Ícone especial em SVG */}
              <div className="border-2 border-green-500 rounded-2xl p-4 flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.36 12.76L14.5 8.9M14.5 8.9L10.64 12.76M14.5 8.9V19M22 8.27V4.64C22 3.74 21.26 3 20.36 3H16.73M2 15.73V19.36C2 20.26 2.74 21 3.64 21H7.27"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
