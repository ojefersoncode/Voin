'use client';

import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import { Footer } from '../landing/Footer';
import SearchContent from '../BlogComponent/SearchContent';
import CardBlog from '../BlogComponent/CardBlog';
import TaskCard from './TaskCard';

export default function TaskPage({ user }: { user: User }) {
  return (
    <>
      <main className="touch-pan-x touch-pan-y">
        <header>
          <NavbarAll />
        </header>
        <section>
          <SearchContent />
        </section>

        <section>
          <TaskCard />
        </section>

        <div className="pt-2">
          <Footer />
        </div>
      </main>
    </>
  );
}
