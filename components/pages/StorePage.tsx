'use client';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import NavBottom from '../All/NavBottom';
import Products from '../StoreComponents/Products';

export default function StorePage({ user }: { user: User }) {
  return (
    <div className="relative flex flex-col h-screen w-full bg-background touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex w-full justify-center items-center mb-4 sm:mb-24">
        <Products />
      </main>
      <div>
        <NavBottom />
      </div>
    </div>
  );
}
