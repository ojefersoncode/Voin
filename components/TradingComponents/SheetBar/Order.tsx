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
        <Button className="bg-transparent hover:bg-transparent p-2">
          <History className="w-4 h-4" />
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
