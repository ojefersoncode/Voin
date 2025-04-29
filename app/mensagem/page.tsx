import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import MarketPage from '@/components/pages/market-page';
import Mensagem from '@/components/ChatComponents/Mensagem';

export default async function mensagem() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <Mensagem user={user} />;
}
