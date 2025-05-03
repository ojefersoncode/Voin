'use client';

import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import Mensagems from './Mensagems';

export default function Chat({ user }: { user: User }) {
  return (
    <>
      <div className="touch-pan-x touch-pan-y">
        <header>
          <NavbarAll />
        </header>

        <main>
          <Mensagems />
        </main>
      </div>
    </>
  );
}
