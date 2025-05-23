'use client';

import * as React from 'react';
import { useState } from 'react';
import { Swords } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { Status } from './Status';

export function Order() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent">
          <div className="flex flex-col justify-center items-center">
            <div title="Ordens" className="flex items-center justify-center">
              <div className="flex items-center gap-3 font-titan text-3xl sm:text-4xl bg-none rounded-lg">
                <span className="text-yellow-600">1</span>
                <div>
                  <Swords className="size-5 sm:size-7 text-text" />
                </div>
                <span className="text-red-600">0</span>
              </div>
            </div>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background border-t border-btn rounded-lg p-1">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex flex-col w-full justify-center items-center text-white pt-7">
            <DrawerTitle>
              <span className="text-xl font-inter">Ordens abertas</span>
            </DrawerTitle>
            <div>
              <Status />
            </div>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
