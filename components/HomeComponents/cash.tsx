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
    <div className="flex w-full bg-background">
      {/* Card do Saldo */}
      <Card className="w-full lg:w-[600px] px-0 shadow-none border-none bg-background">
        <CardHeader className="flex flex-row justify-between pb-2 items-start">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg text-text font-inter">
              Saldo disponível
            </CardTitle>
            <Eye
              className="h-5 w-5 cursor-pointer"
              onClick={() => setShowBalance(!showBalance)}
            />
          </div>
        </CardHeader>

        <CardContent className="text-text">
          <h1 className="text-4xl font-titan p-0 mb-4">
            {showBalance ? '130.000,00' : '••••••••'}{' '}
            <span className="text-sm font-normal">pontos</span>
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              { icon: Plus, label: 'ADICIONAR' },
              { icon: Send, label: 'ENVIAR' },
              { icon: Upload, label: 'TRANSFERIR' }
            ].map((item, i) => (
              <div
                key={i}
                className="border bg-btn hover:bg-btn/60 hover:border-border/60 shadow-btn shadow-md drop-shadow-md hover:text-text/60 transition-colors rounded-xl py-4 flex flex-col items-center justify-center cursor-pointer"
              >
                <item.icon className="size-6 mb-4" />
                <span className="text-xs font-bold ">{item.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
