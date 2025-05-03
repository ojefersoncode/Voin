'use client';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import NavBottom from '../All/NavBottom';
import PreviewMarket from '../HomeComponents/PreviewMarket';
import SubMenu from '../HomeComponents/SubMenu';
import Balance from '../HomeComponents/Balance';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex flex-1 flex-col mb-20">
        <div className="pb-4 py-2">
          <Balance />
        </div>

        <SubMenu />

        <div className="sm:px-2">
          <PreviewMarket />
        </div>
      </main>
      <div>
        <NavBottom />
      </div>
    </div>
  );
}
