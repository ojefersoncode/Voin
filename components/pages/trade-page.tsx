'use client';
import type { User } from '@supabase/supabase-js';
import TradingAll from '../TradingComponents/Trading';

export default function TradePage({ user }: { user: User }) {
  return (
    <>
      <main className="bg-blackground touch-pan-x touch-pan-y h-screen">
        <TradingAll />
      </main>
    </>
  );
}
