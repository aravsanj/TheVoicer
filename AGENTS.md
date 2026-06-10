# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build locally
```

No lint or test scripts are configured.

## Architecture

TheVoicer is an Astro v6 static site for pronunciation learning, using the `@astrojs/mdx` integration.

### Content System

Lessons live in `src/content/lessons/` as `.md` or `.mdx` files. The collection is defined in `src/content.config.ts` using Astro's glob loader:

```ts
// Frontmatter schema
{
  slug: string;           // required — stable unique ID used for URLs and DB records
  title: string;          // required
  description?: string;
  order?: number;         // controls sort order on the lessons index
  tags?: string[];
}
```

### Routing

- `/` — home (`src/pages/index.astro`)
- `/lessons` — lesson listing (`src/pages/lessons/index.astro`), sorts by `order`
- `/lessons/[slug]` — individual lesson (`src/pages/lessons/[...slug].astro`), slug = `data.slug` from frontmatter

The slug page uses `getCollection('lessons')` and finds the lesson by `data.slug`, then renders it through `LessonLayout`.

### Layout

`src/layouts/LessonLayout.astro` is the only layout. It accepts `title`, `description`, `order`, and `tags` props, imports `src/styles/global.css`, and renders a `<slot />` for lesson content.

There is no `src/components/` directory yet.

## Lesson Content Rules

- Never say "next lesson", "previous lesson", or any relative positional reference. Lessons are standalone files and may be read in any order.
- When referencing another lesson, always link directly: `[Lesson Title](/lessons/lesson-slug)`.
