'use client';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Step2Props {
  config: any;
  setConfig: React.Dispatch<React.SetStateAction<any>>;
}

export function Step2({ config, setConfig }: Step2Props) {
  // Cores de texto
  const textColors = ['textPrimary', 'textSecondary', 'textNeutral'];
  // Cores de fundo
  const bgColors = ['bgPrimary', 'bgSecondary', 'bgNeutral'];

  return (
    <>
      <label className="block text-xl text-black dark:text-gray-300 font-medium">
        Paleta de Cores
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20">
        {/* Coluna 1: Cores de Texto */}
        <div className="space-y-2">
          {textColors.map((key) => (
            <div key={key}>
              <label className="block text-black dark:text-gray-200 py-2 text-sm font-medium">
                {key}
              </label>
              <div className="flex items-center gap-3">
                <Input
                  className="text-sm w-80 max-lg:w-72 text-black dark:text-white"
                  placeholder="Cole seu hex aqui"
                  type="text"
                  id=""
                />
                <Button className="px-2 py-1">
                  <Check />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Coluna 2: Cores de Fundo */}
        <div className="space-y-2 mb-4">
          {bgColors.map((key) => (
            <div key={key}>
              <label className="block text-black dark:text-gray-200 py-2 text-sm font-medium">
                {key}
              </label>
              <div className="flex items-center gap-3">
                <Input
                  className="text-sm w-80 max-lg:w-72 text-black dark:text-white"
                  placeholder="Cole seu hex aqui"
                  type="text"
                />
                <Button className="px-2 py-1">
                  <Check />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
