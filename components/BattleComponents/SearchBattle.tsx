'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Swords } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { useRouter } from 'next/navigation'; // ou 'next/router' se estiver usando versão antiga

export function SerachBattle() {
  const [seconds, setSeconds] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          const newTime = prev + 1;
          if (newTime === 7) {
            router.push('/trade'); // Substitua pela rota desejada
          }
          return newTime;
        });
      }, 1000);
    } else {
      setSeconds(1); // Reset ao fechar
    }

    return () => clearInterval(timer);
  }, [isOpen, router]);

  const formatTime = (sec: number) => {
    const minutes = String(Math.floor(sec / 60)).padStart(2, '0');
    const seconds = String(sec % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent">
          <div className="flex flex-col justify-center items-center">
            <div
              title="Batalhar"
              className="flex flex-col items-center justify-center z-20 bottom-0 ml-4 text-btn relative"
            >
              <Swords className="size-5" />
              <span className="text-xs font-titan mt-1 sm:mt-2">Batalha</span>
            </div>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background border-t rounded-lg p-1">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex flex-col w-full justify-center items-center text-white pt-7">
            <DrawerTitle>
              <span className="text-2xl font-titan">Buscando Batalha</span>
            </DrawerTitle>
            <DrawerDescription className="pt-4">
              <span className="text-2xl font-inter text-btn">
                {formatTime(seconds)}
              </span>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="pb-7">
            <DrawerClose asChild>
              <Button className="px-2 py-6 text-base border bg-btn hover:bg-btn/40 transition-colors">
                Cancelar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
