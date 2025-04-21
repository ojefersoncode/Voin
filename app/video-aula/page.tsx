import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from '../../utils/supabase/queries';
import VideoAulas from '@/components/pages/VideoAula';

export default async function VideoAula() {
  const supabase = await createClient();

  const user = await getUser(supabase);
  if (!user) {
    return redirect('/auth/signin');
  }

  return <VideoAulas user={user} />;
}
