# AGENTS.md — Custom Markdown Documentation Site

## Workspace instructions

Explicitly read ../AGENTS.md before working here and follow its workspace-wide rules. A session launched in this independent Git repository may not automatically discover parent instructions or skills. Shared rules are in ../.agents/rules/ and shared skills in ../.agents/skills/. Read the relevant SKILL.md explicitly if the skill is unavailable in the selector.

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

Before work, explicitly read the applicable rule files below; these links are not automatic imports. For code changes always read typescript, comments, and communication. Paths are relative to this AGENTS.md.

- [typescript](../.agents/rules/typescript.md)
- [comments](../.agents/rules/comments.md)
- [communication](../.agents/rules/communication.md)
- [altrone-ui-usage](../.agents/rules/altrone-ui-usage.md)
- [docs-dsl](../.agents/rules/docs-dsl.md)
- [docs-i18n](../.agents/rules/docs-i18n.md)


<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
