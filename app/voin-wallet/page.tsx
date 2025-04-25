import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import VoinWallet from '@/components/pages/voin-wallet';

export default async function VoinWalletPage() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <VoinWallet user={user} />;
}
