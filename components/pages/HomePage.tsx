'use client';
import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import PreviewMarket from '../HomeComponents/PreviewMarket';
import SubMenu from '../HomeComponents/SubMenu';
import Balance from '../HomeComponents/Balance';
import { Footer } from '../landing/Footer';
import CardBlog from '../BlogComponent/CardBlog';
import { CalendarDays } from 'lucide-react';
import PreviewNews from '../HomeComponents/PreviewNews';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background touch-pan-x touch-pan-y">
      <header>
        <NavbarAll />
      </header>

      <main className="flex flex-1 flex-col">
        <div className="px-1">
          <Balance />
        </div>

        <div className="pb-4">
          <SubMenu />
        </div>

        <div className="sm:px-2">
          <PreviewMarket />
        </div>

        <hr className="border-subbackground opacity-70 my-2" />

        <div className="mb-4">
          <PreviewNews />
        </div>
      </main>

      <Footer />
    </div>
  );
}
