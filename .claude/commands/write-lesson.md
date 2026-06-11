# Write Lesson

Write a new lesson for TheVoicer at the slug and topic provided.

## Source of truth

All IPA symbols, phoneme keys, labels, and word examples come from `src/data/soundMeta.ts`. Never invent phonetic data or use symbols not in that file. The keys in `SOUND_META` (e.g. `long-e`, `short-a`, `schwa`) are the canonical names used across the codebase.

## File

Create `src/content/lessons/<order>-<slug>.md` with frontmatter:

```
---
slug: "<slug>"
title: "<Title>"
description: "<one sentence, plain — no em dashes>"
order: <number>
tags: [...]
---
```

Check existing lessons to pick the right `order` number.

## Voice and style

Write like a good teacher talking to an adult learner, not like a textbook and not like an AI assistant.

**Banned patterns — never use these:**

- Em dash `—` anywhere: in prose, in tables, in headings, in descriptions, anywhere. Replace with a period, comma, colon, semicolon, or parentheses depending on the meaning.
- "It's worth noting that", "It's important to understand", "Keep in mind that", "One of the key"
- "Natural" as a standalone judgment ("this sounds natural", "for natural speech")
- "Essentially", "fundamentally", "ultimately", "overall"
- Trailing summary sections titled "Putting It Together" or "Key Takeaways"
- Horizontal rules `---` used as section separators between every section (use them only if genuinely needed as a visual break, not as a reflex)
- Sentences that start with "This is because", "This is why", "This is what"
- Stacked bullet lists of features or facts that could be a plain sentence

**What good writing looks like here:**

- Short, direct sentences. One idea per sentence.
- Name the thing, show it, explain why it works. In that order.
- If you need an example table, put it right after the claim it supports.
- Numbered lists only for steps or ranked items. Bullet lists only when order genuinely does not matter.
- Avoid meta-commentary ("In this lesson we will..." or "Now that you understand X...").
- Contractions are fine. "Don't" not "do not", "you're" not "you are".

## Content rules

- Every IPA symbol used in the lesson body must appear in `phonemes.json`. No improvised symbols.
- Word examples in tables should match or extend the `examples` arrays in `phonemes.json`.
- Do not reference other lessons by position ("the previous lesson", "next lesson"). Link by title and slug if needed.
- Tables are for comparison, not decoration. If a table has one column of data, it should be prose.
- Lesson length: cover one idea well. Stop when the idea is covered.
