import { defineMiddleware } from 'astro:middleware';
import { db, initDb } from './db/client';
import { sessions, users } from './db/schema';
import { eq, and, gt } from 'drizzle-orm';

export const onRequest = defineMiddleware(async (context, next) => {
  await initDb();

  const sessionId = context.cookies.get('session')?.value;
  if (sessionId) {
    const now = new Date().toISOString();
    const [row] = await db
      .select({ userId: sessions.userId, expiresAt: sessions.expiresAt })
      .from(sessions)
      .where(and(eq(sessions.id, sessionId), gt(sessions.expiresAt, now)));

    if (row) {
      const [user] = await db
        .select({ id: users.id, email: users.email })
        .from(users)
        .where(eq(users.id, row.userId));
      if (user) context.locals.user = user;
    }
  }

  return next();
});
