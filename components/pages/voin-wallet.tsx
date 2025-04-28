'use client';

import type React from 'react';
import { User } from '@supabase/supabase-js';
import Cash from '../HomeComponents/cash';
import NavBottom from '../All/NavBottom';
import Trasition from '../HomeComponents/Trasition';
import NavbarAll from '../All/Navbar';

export default function VoinWallet({ user }: { user: User }) {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col touch-pan-x touch-pan-y">
      <div>
        <NavbarAll />
      </div>

      <div>
        <Cash />
      </div>

      <div>
        <Trasition />
      </div>

      <div>
        <NavBottom />
      </div>
    </div>
  );
}
