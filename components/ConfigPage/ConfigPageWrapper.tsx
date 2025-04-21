'use client';
import ConfigPage from '@/components/pages/ConfigPage';
import { User } from '@supabase/supabase-js';

interface ConfigPageWrapperProps {
  user: User;
}

export default function ConfigPageWrapper({ user }: ConfigPageWrapperProps) {
  return (
    <ConfigPage
      user={user}
      template=""
      favicon=""
      onClose={() => console.log('Fechar modal')}
    />
  );
}
