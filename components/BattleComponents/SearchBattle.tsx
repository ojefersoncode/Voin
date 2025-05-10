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

export function SerachBattle() {
  const [seconds, setSeconds] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setSeconds(1); // Reset ao fechar
    }

    return () => clearInterval(timer);
  }, [isOpen]);

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
              className="flex flex-col items-center justify-center z-20 bottom-4 py-4 px-7 rounded-lg border bg-background text-text relative"
            >
              <Swords className="h-7 w-7" />
            </div>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background border-none p-1">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex flex-col w-full justify-center items-center text-white pt-10">
            <DrawerTitle>
              <span className="text-2xl">Buscando Batalha</span>
            </DrawerTitle>
            <DrawerDescription className="pt-6">
              <span className="text-xl font-semibold text-green-100">
                {formatTime(seconds)}
              </span>
            </DrawerDescription>
          </DrawerHeader>
          <div className="pb-2"></div>
          <DrawerFooter className="pb-7">
            <DrawerClose asChild>
              <Button className="px-2 py-6 text-base border bg-transparent hover:bg-green-950/20 transition-colors">
                Cancelar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
