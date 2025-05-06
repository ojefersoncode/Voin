'use client';
import { User } from '@supabase/supabase-js';
import ScreenHome from '../BattleComponents/ScreenHome';

export default function BattlePage({ user }: { user: User }) {
  return (
    <div className="flex flex-col bg-[0e0e0e] w-full touch-pan-x touch-pan-y">
      <ScreenHome />
    </div>
  );
}
