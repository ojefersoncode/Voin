'use client';

import { User } from '@supabase/supabase-js';
import NavbarAll from '../All/Navbar';
import CardBlog from './CardBlog';
import { Footer } from '../landing/Footer';
import SearchContent from './SearchContent';

export default function Blog({ user }: { user: User }) {
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
          <CardBlog />
        </section>

        <div className="pt-2">
          <Footer />
        </div>
      </main>
    </>
  );
}
