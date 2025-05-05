import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import HistoryPage from '@/components/pages/HistoryPage';
import ScreenHome from '@/components/BattleComponents/ScreenHome';
import BattlePage from '@/components/pages/BattlePage';

export default async function Battle() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <BattlePage user={user} />;
}
