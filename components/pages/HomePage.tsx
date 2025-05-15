'use client';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import PreviewMarket from '../HomeComponents/PreviewMarket';
import SubMenu from '../HomeComponents/SubMenu';
import Balance from '../HomeComponents/Balance';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex flex-1 flex-col">
        <div className="pb-2">
          <Balance />
        </div>

        <div className="py-6">
          <SubMenu />
        </div>

        <div className="sm:px-2">
          <PreviewMarket />
        </div>
      </main>
    </div>
  );
}
