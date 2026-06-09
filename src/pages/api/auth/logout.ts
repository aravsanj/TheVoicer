import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { sessions } from '../../../db/schema';
import { eq } from 'drizzle-orm';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const sessionId = cookies.get('session')?.value;
  if (sessionId) {
    await db.delete(sessions).where(eq(sessions.id, sessionId));
    cookies.delete('session', { path: '/' });
  }
  return redirect('/login');
};
