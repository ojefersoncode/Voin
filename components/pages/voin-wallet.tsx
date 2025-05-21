'use client';

import type React from 'react';
import { User } from '@supabase/supabase-js';
import Trasition from '../HomeComponents/Trasition';
import NavbarAll from '../All/Navbar';
import Balance from '../HomeComponents/Balance';
import Pageback from '../All/Pageback';

export default function VoinWallet({ user }: { user: User }) {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col touch-pan-x touch-pan-y">
      <div>
        <NavbarAll />
      </div>

      <div>
        <Pageback />
      </div>
      <div>
        <Balance />
      </div>

      <div>
        <Trasition />
      </div>
    </div>
  );
}
