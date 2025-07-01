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

export default function NexWallet({ user }: { user: User }) {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col touch-pan-x touch-pan-y">
      <div className="px-1">
        <NavbarAll />
      </div>

      <div className="pt-2">
        <Balance />
      </div>

      <div>
        <Trasition />
      </div>

      <Footer />
    </div>
  );
}
