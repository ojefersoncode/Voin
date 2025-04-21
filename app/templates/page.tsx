import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import TemplatesWeb from '@/components/pages/Templates';

export default async function Templates() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <TemplatesWeb user={user} />;
}
