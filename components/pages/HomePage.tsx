'use client';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import NavBottom from '../All/NavBottom';
import Torneios from './Torneios';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="relative flex min-h-screen w-full touch-pan-x touch-pan-y">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col mb-20">
        <div>
          <NavbarAll />
        </div>

        <Torneios />
      </main>
      <div>
        <NavBottom />
      </div>
    </div>
  );
}
