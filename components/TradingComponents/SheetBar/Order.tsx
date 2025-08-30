'use client';

import * as React from 'react';
import { useState } from 'react';
import { Hourglass } from 'lucide-react';
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
        <Button className="bg-transparent rounded-full py-0 pr-0 pl-2 dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent">
          <div className="flex items-center gap-4">
            <Hourglass className="size-6" />
          </div>
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
