import type { APIRoute } from 'astro';
import { db } from '../../../db/client';
import { bookmarks } from '../../../db/schema';
import { eq, and } from 'drizzle-orm';
import { randomUUID } from 'crypto';

export const POST: APIRoute = async ({ params, locals }) => {
  if (!locals.user) return new Response('Unauthorized', { status: 401 });
  const slug = params.slug!;
  const userId = locals.user.id;

  const [existing] = await db
    .select()
    .from(bookmarks)
    .where(and(eq(bookmarks.userId, userId), eq(bookmarks.lessonSlug, slug)));

  if (existing) {
    await db
      .delete(bookmarks)
      .where(and(eq(bookmarks.userId, userId), eq(bookmarks.lessonSlug, slug)));
    return new Response(JSON.stringify({ bookmarked: false }), { headers: { 'Content-Type': 'application/json' } });
  }

  await db.insert(bookmarks).values({
    id: randomUUID(),
    userId,
    lessonSlug: slug,
    createdAt: new Date().toISOString(),
  });
  return new Response(JSON.stringify({ bookmarked: true }), { headers: { 'Content-Type': 'application/json' } });
};
