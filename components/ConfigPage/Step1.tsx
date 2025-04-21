'use client';

import { Check, Upload } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface Step1Props {
  favicon: string;
  onChangeFavicon: (favicon: string) => void;
}

export function Step1({ favicon, onChangeFavicon }: Step1Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          onChangeFavicon(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full px-4 mt-4">
      <label className="block mb-3 text-black dark:text-gray-300 font-medium">
        Nome do seu projeto
      </label>
      <div className="flex w-full gap-4 px-7 justify-center items-center">
        <Input
          type="text"
          placeholder="Digite o nome do seu projeto"
          className="text-black dark:text-white border-opacity-10"
        ></Input>
        <Button className="px-2 py-1">
          <Check />
        </Button>
      </div>

      <div className="flex flex-col w-full mt-4">
        <label className="block mt-2 mb-3 text-black dark:text-gray-300 font-medium">
          Favicon
        </label>
      </div>

      <label className="cursor-pointer flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-opacity-10 rounded-lg bg-gray-200 dark:bg-black hover:bg-muted transition px-1">
        <input
          type="file"
          accept="image/png, image/svg+xml, image/webp"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex flex-col w-full items-center justify-center">
          <Upload className="w-6 h-6 text-black dark:text-gray-400" />
          <span className="text-black dark:text-gray-400 text-xs sm:text-sm text-center mt-2">
            Selecione uma imagem
          </span>
        </div>
      </label>

      {favicon && (
        <img
          src={favicon}
          alt="Favicon Preview"
          className="mt-7 border max-w-[6rem] h-auto rounded-lg mx-auto"
        />
      )}
    </div>
  );
}
