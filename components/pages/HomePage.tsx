'use client';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import NavBottom from '../All/NavBottom';
import Cash from '../HomeComponents/cash';
import PreviewMarket from '../HomeComponents/PreviewMarket';
import SubMenu from '../HomeComponents/SubMenu';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex flex-1 flex-col mb-20">
        <Cash />

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
