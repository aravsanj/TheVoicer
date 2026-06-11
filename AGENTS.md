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

### Data Layer — Single Source of Truth

`src/data/sounds.json` and `src/data/words.json` are the canonical data files. All pages derive their content from these two files at build time.

**`src/data/sounds.json`** — registry of every IPA sound:
```ts
{
  groupOrder: string[];   // display order for sound groups
  sounds: {
    id: string;           // stable key used in words.json references (e.g. "long-e", "sh")
    ipa: string;          // IPA symbol (e.g. "iː", "ʃ")
    key: string;          // respelling abbreviation — uppercase = stressed, lowercase = unstressed
    label: string;        // display name (e.g. "Long E", "/ʃ/")
    example: string;      // single example word
    group: string;        // one of the groupOrder values
    desc: string;         // prose description for the sound detail page
  }[]
}
```

`src/data/sounds.ts` re-exports two typed accessors consumed by pages:
- `SOUND_META: Record<string, SoundMeta>` — sound entries keyed by `id`
- `GROUP_ORDER: string[]` — group display order

**`src/data/words.json`** — array of common English words:
```ts
{
  word: string;       // the English word
  ipa: string;        // full IPA transcription
  arpabet: string;    // ARPAbet representation
  stress: string;     // "0" = unstressed, "1" = primary, "2" = secondary
  respelling: string; // human-readable respelling using sound keys
  sounds: string[];   // ordered list of sound IDs — must all exist in sounds.json
}[]
```

**Referential integrity rule:** every ID in a word's `sounds[]` array must correspond to an `id` in `sounds.json`. Never add a sound ID to `words.json` without first defining it in `sounds.json`. Never remove a sound from `sounds.json` without removing it from all `words.json` entries.

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
- `/sounds` — sound browser (`src/pages/sounds/index.astro`); imports both `sounds.ts` and `words.json` to compute per-sound word counts
- `/sounds/[sound]` — sound detail (`src/pages/sounds/[sound].astro`); static paths generated from unique sound IDs in `words.json`; lists all words that contain the sound
- `/words` — word browser (`src/pages/words/index.astro`); imports `words.json`, groups by first letter; letter nav links to `/words/start-with-[letter]`
- `/words/[word]` — word detail (`src/pages/words/[word].astro`); static paths from every entry in `words.json`
- `/words/start-with-[letter]` — filtered word list (`src/pages/words/start-with-[letter].astro`); static paths from first letters present in `words.json`

### Layout and Components

`src/layouts/LessonLayout.astro` is the only layout. It accepts `title`, `description`, `order`, and `tags` props, imports `src/styles/global.css`, and renders a `<slot />` for lesson content.

Shared components live in `src/components/`:
- `Navbar.astro` — site navigation
- `Word.astro` — single word display with IPA and sounds
- `WordCard.astro` — compact word card for grid layouts
- `WordSearch.astro` — client-side search over compact word data

## Component Rules

- Never duplicate component markup or styles across pages. Extract shared UI (cards, grids, etc.) into `src/components/` and import it everywhere it's needed.

## Lesson Content Rules

- Never say "next lesson", "previous lesson", or any relative positional reference. Lessons are standalone files and may be read in any order.
- When referencing another lesson, always link directly: `[Lesson Title](/lessons/lesson-slug)`.
