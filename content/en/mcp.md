# MCP

`@altrone/mcp` is a small, separate package that exposes Altrone's own documentation directly to MCP clients — Claude Desktop, Claude Code, and anything else that speaks the Model Context Protocol. Instead of an AI agent guessing at a component's props from training data (which may be outdated or simply wrong for this library), it can call a tool and read the real thing.

## What it exposes

Three tools, each backed by a plain Markdown file rather than a database or a generated schema:

| Tool | What it does |
| --- | --- |
| `list_components` | Lists every documented component |
| `get_component_docs` | Returns the full docs for one component, by name |
| `get_guidelines` | Returns the mandatory usage rules — which components to reach for instead of raw HTML, the import convention, layout/form/feedback patterns |

`list_components`'s own tool description is written to nudge the calling agent toward `get_guidelines` first — a deliberate instruction baked into the tool itself, not just something written in prose here, since an agent reads tool descriptions before it reads any article.

## Setting it up

```json
{
  "mcpServers": {
    "altrone": {
      "command": "node",
      "args": ["/absolute/path/to/altrone-mcp/dist/index.js"]
    }
  }
}
```

For local development, skip the build step and run the source directly:

```json
{
  "mcpServers": {
    "altrone": {
      "command": "npx",
      "args": ["tsx", "/absolute/path/to/altrone-mcp/src/index.ts"]
    }
  }
}
```

## How it stays in sync with the component library

Each component has exactly one Markdown file under `docs/`, named after the component (`Button.md`, `TextInput.md`, …) — the server lists whatever's actually in that folder at startup, so adding, renaming, or removing a component's doc file is the entire update; no code change needed on the server side.

