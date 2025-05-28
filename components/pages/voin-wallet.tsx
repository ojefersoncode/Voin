'use client';

import type React from 'react';
import { User } from '@supabase/supabase-js';
import Trasition from '../HomeComponents/Trasition';
import NavbarAll from '../All/Navbar';
import Balance from '../HomeComponents/Balance';
import Pageback from '../All/Pageback';
import { Button } from '../ui/button';
import { Wallet2 } from 'lucide-react';
import { Footer } from '../landing/Footer';

export default function VoinWallet({ user }: { user: User }) {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col touch-pan-x touch-pan-y">
      <div>
        <NavbarAll />
      </div>

      <div className="flex w-full items-center justify-between px-2 pt-2">
        <Pageback />

        <div className="px-4">
          <Button className="flex items-center gap-2 px-2 border border-btn rounded-lg bg-subbackground hover:bg-subbackground/80">
            <Wallet2 className="size-4" />
            <span className="text-text font-inter text-xs">Conectar</span>
          </Button>
        </div>
      </div>
      <div>
        <Balance />
      </div>

      <div>
        <Trasition />
      </div>

      <Footer />
    </div>
  );
}
