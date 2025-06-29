'use client';

import * as React from 'react';
import { useState } from 'react';
import { History } from 'lucide-react';
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
        <Button 
          className="border border-zinc-700 dark:border-zinc-700 bg-transparent hover:bg-transparent py-5 p-3">
          <History className="w-5 h-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background rounded-lg">
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
