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

  if (!email || !password || password.length < 8) {
    return new Response('Invalid input', { status: 400 });
  }

  const [existing] = await db.select().from(users).where(eq(users.email, email));
  if (existing) {
    return new Response('Email already registered', { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const userId = randomUUID();
  await db.insert(users).values({
    id: userId,
    email,
    passwordHash,
    createdAt: new Date().toISOString(),
  });

  const sessionId = randomUUID();
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  await db.insert(sessions).values({ id: sessionId, userId, expiresAt });

  cookies.set('session', sessionId, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    expires: new Date(expiresAt),
  });

  return redirect('/lessons');
};
