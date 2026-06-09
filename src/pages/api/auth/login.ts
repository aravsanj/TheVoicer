import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { users, sessions } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const email = form.get('email')?.toString().trim().toLowerCase();
  const password = form.get('password')?.toString();

  if (!email || !password) {
    return new Response('Invalid input', { status: 400 });
  }

  const [user] = await db.select().from(users).where(eq(users.email, email));
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return new Response('Invalid email or password', { status: 401 });
  }

  const sessionId = randomUUID();
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  await db.insert(sessions).values({ id: sessionId, userId: user.id, expiresAt });

  cookies.set('session', sessionId, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    expires: new Date(expiresAt),
  });

  return redirect('/lessons');
};
