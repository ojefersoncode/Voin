import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import HistoryPage from '@/components/pages/HistoryPage';
import Chat from '@/components/ChatComponents/Chat';

export default async function chat() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <Chat user={user} />;
}
