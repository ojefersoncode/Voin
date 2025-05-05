'use client';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import NavBottom from '../All/NavBottom';
import Products from '../StoreComponents/Products';

export default function StorePage({ user }: { user: User }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex flex-1 flex-col max-lg:mb-24">
        <div className="py-3">
          <Products />
        </div>
      </main>
      <div>
        <NavBottom />
      </div>
    </div>
  );
}
