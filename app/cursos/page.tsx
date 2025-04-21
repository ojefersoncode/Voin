import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import Cursos from '@/components/pages/Cursos';

export default async function cursos() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <Cursos user={user} />;
}
