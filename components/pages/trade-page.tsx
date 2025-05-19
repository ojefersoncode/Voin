'use client';
import type { User } from '@supabase/supabase-js';
import TradingAll from '../TradingComponents/Trading';
import { Toaster } from '../ui/toaster';

export default function TradePage({ user }: { user: User }) {
  return (
    <>
      <main className="bg-background">
        <TradingAll />
      </main>
    </>
  );
}
