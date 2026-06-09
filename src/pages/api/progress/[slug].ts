import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { lessonCompletions } from '../../../db/schema';
import { eq, and } from 'drizzle-orm';
import { randomUUID } from 'crypto';

export const POST: APIRoute = async ({ params, locals }) => {
  if (!locals.user) return new Response('Unauthorized', { status: 401 });
  const slug = params.slug!;
  const userId = locals.user.id;

  const [existing] = await db
    .select()
    .from(lessonCompletions)
    .where(and(eq(lessonCompletions.userId, userId), eq(lessonCompletions.lessonSlug, slug)));

  if (existing) {
    await db
      .delete(lessonCompletions)
      .where(and(eq(lessonCompletions.userId, userId), eq(lessonCompletions.lessonSlug, slug)));
    return new Response(JSON.stringify({ completed: false }), { headers: { 'Content-Type': 'application/json' } });
  }

  await db.insert(lessonCompletions).values({
    id: randomUUID(),
    userId,
    lessonSlug: slug,
    completedAt: new Date().toISOString(),
  });
  return new Response(JSON.stringify({ completed: true }), { headers: { 'Content-Type': 'application/json' } });
};
