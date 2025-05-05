import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import Tournament from '@/components/pages/Tournament';
import StorePage from '@/components/pages/StorePage';

export default async function TournamentPage() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <StorePage user={user} />;
}
