'use client';

import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import Products from '../StoreComponents/Products';
import { useRouter } from 'next/navigation';

export default function StorePage({ user }: { user: User }) {
  const router = useRouter();

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex w-full justify-center items-center">
        <Products />
      </main>
    </div>
  );
}
