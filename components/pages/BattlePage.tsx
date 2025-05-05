'use client';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import NavBottom from '../All/NavBottom';
import Products from '../StoreComponents/Products';
import ScreenHome from '../BattleComponents/ScreenHome';

export default function BattlePage({ user }: { user: User }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-[0e0e0e] w-full touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex w-full justify-center items-center">
        <ScreenHome />
      </main>
      <div>
        <NavBottom />
      </div>
    </div>
  );
}
