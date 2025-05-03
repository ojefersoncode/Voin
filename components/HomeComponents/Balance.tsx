'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Plus, Send, Upload } from 'lucide-react';

export default function Balance() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-[#0e0e0e]">
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
