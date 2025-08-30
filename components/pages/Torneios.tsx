'use client';

import { User } from '@supabase/supabase-js';
import Tournament from '../Tournarmeint/Torneio';
import NavbarAll from '../All/Navbar';

export default function Torneios({ user }: { user: User }) {
  return (
    <div className="flex-1 overflow-hidden flex flex-col bg-background touch-pan-x touch-pan-y">
      <div>
        <NavbarAll />
      </div>
      <Tournament />
    </div>
  );
}
