import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import ConfigPageWrapper from '../../components/ConfigPage/ConfigPageWrapper';

export default async function createProject() {
  const supabase = await createClient();
  const user = await getUser(supabase);

  if (!user) {
    return redirect('/auth/signin');
  }

  return <ConfigPageWrapper user={user} />;
}
