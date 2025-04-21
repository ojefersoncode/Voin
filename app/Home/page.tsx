import HomePage from '../../components/pages/HomePage';
import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';

export default async function Home() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <HomePage user={user} />;
}
