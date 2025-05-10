'use client';

import type React from 'react';
import { User } from '@supabase/supabase-js';
import TradingAll from '../TradingComponents/Trading';

export default function TradePage({ user }: { user: User }) {
  return (
    <>
      <main className="bg-background touch-pan-x touch-pan-y">
        <TradingAll />
      </main>
    </>
  );
}
