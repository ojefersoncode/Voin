'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { BarChart2 } from 'lucide-react';
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

export function Status() {
  const [seconds, setSeconds] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent">
          <div className="flex flex-col justify-center items-center">
            <div
              title="Batalhar"
              className="flex items-center justify-center py-2 gap-2 rounded-lg hover:text-background/90 text-background relative"
            >
              <BarChart2 className="size-5" />
              <span className="text-md font-titan">Status</span>
            </div>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background border-t border-purple-500 rounded-lg p-1">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex flex-col w-full justify-center items-center text-white pt-7">
            <DrawerTitle>
              <span className="text-xl font-inter">Status Batalha</span>
            </DrawerTitle>
            <DrawerDescription className="pt-4"></DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="pb-4 px-2">
            <DrawerClose asChild>
              <Button className="p-2 text-base border-b-2 border-purple-900 bg-subbackground hover:bg-subbackground/90 transition-colors">
                Fechar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
