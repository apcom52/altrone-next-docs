# CLAUDE.md — Custom Markdown Documentation Site

## Overview

The Altrone documentation site: a Next.js site (App Router, SSG/SSR) whose pages are written in a custom Markdown dialect. Content lives as `.md` files on the server, is parsed through the `unified`/`remark` stack, and rendered as React components.

## Stack

- Next.js (App Router, SSG via `generateStaticParams`)
- TypeScript
- `unified` + `remark` + `rehype` — content parsing and transformation
- `remark-directive` — foundation for the custom block syntax

## Structure

```
.
├── app/
│   └── [locale]/
│       └── docs/
│           └── [slug]/
│               └── page.tsx          # docs page
├── content/                      # .md content files
│   ├── en/
│   │   └── getting-started.md
│   └── ru/
│       └── getting-started.md
├── lib/
│   ├── content.ts                # reads .md files per locale
│   └── parser/
│       ├── index.ts              # entry point: parseDoc(markdown) → ReactNode
│       ├── plugins/              # remark/rehype plugins
│       │   ├── callout.ts        # :::note / :::warning blocks
│       │   └── code.ts           # code fence handling
│       └── components/           # renderer React components
│           ├── Callout.tsx
│           ├── CodeBlock.tsx
│           └── index.ts          # hast-tag → component mapping
├── i18n.ts                       # locale config (next-intl)
├── middleware.ts                 # locale detection from URL
└── package.json
```

## Commands

```bash
npm run dev        # local dev server
npm run build      # production build (SSG)
npm run start      # run production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Content

- Content lives in `content/` at the project root
- One file = one docs page
- File name = page slug (`getting-started.md` → `/docs/getting-started`)
- Encoding: UTF-8, line endings: LF

## Rules

@../.claude/rules/typescript.md
@../.claude/rules/comments.md
@../.claude/rules/communication.md
@../.claude/rules/altrone-ui-usage.md
@../.claude/rules/docs-dsl.md
@../.claude/rules/docs-i18n.md
