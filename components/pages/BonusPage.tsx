'use client';

import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import Products from '../StoreComponents/Products';
import { useRouter } from 'next/navigation';
import Pageback from '../All/Pageback';
import HomeBonus from '../BonusComponents';

export default function BonusPage({ user }: { user: User }) {
  const router = useRouter();

  return (
    <div className="relative flex flex-col h-dvh w-full bg-background touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <div className="px-2">
        <Pageback />
      </div>

      <main className="flex w-full justify-center items-center py-4">
        <HomeBonus />
      </main>
    </div>
  );
}
