'use client';

import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import Products from '../StoreComponents/Products';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Pageback from '../All/Pageback';

export default function StorePage({ user }: { user: User }) {
  const router = useRouter();

  return (
    <div className="relative flex flex-col h-dvh w-full bg-background touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <div>
        <Pageback />
      </div>

      <main className="flex w-full justify-center items-center py-4">
        <Products />
      </main>
    </div>
  );
}
