import { getURL } from '../../../utils/helpers';
import { createClient } from '../../../utils/supabase/server';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // The `/api/reset_password` route is required for the server-side auth flow implemented
  // by the `@supabase/ssr` package. It exchanges an auth code for the user's session.
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const errorMessage = requestUrl.searchParams.get('error_description');

  try {
    if (code) {
      const supabase = await createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) throw error;
    } else if (errorMessage) {
      throw new Error(errorMessage);
    }
  } catch (e) {
    if (!(e instanceof Error)) throw e;
    return NextResponse.redirect(
      getURL(
        `/auth/signin?toast_title=Error&toast_description=${e.message}&toast_variant=destructive`
      )
    );
  }

  return NextResponse.redirect(
    getURL(
      `/auth/update_password?toast_title=You are now signed in.&toast_description=Please enter a new password for your account`
    )
  );
}
