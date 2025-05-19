'use client';

import * as React from 'react';
import { useState } from 'react';
import { ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';

export function Order() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent">
          <div className="flex flex-col justify-center items-center">
            <div
              title="Ordens"
              className="flex items-center justify-center py-2 gap-2 rounded-lg hover:text-background/90 text-background relative"
            >
              <ScrollText className="size-5" />
              <span className="text-md font-titan">Ordens</span>
            </div>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background border-t border-purple-500 rounded-lg p-1">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex flex-col w-full justify-center items-center text-white pt-7">
            <DrawerTitle>
              <span className="text-xl font-inter">Ordens abertas</span>
            </DrawerTitle>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
