# Dark theme

Dark mode in Altrone isn't a separate stylesheet you swap in. It's the same components, the same CSS, reading the same tokens — the tokens themselves redefine what they resolve to under a theme attribute. If you build a component correctly (using [Color](color) role tokens instead of hardcoded values), dark mode is something it gets for free, not something you implement.

## How theme switching actually works

Altrone tracks theme as explicit state, not by relying solely on the OS-level `prefers-color-scheme` media query. This matches the convention used by libraries like next-themes and Radix Themes: the current theme is `'light'`, `'dark'`, or `'auto'`, held in React state and exposed through `data-altrone-theme` — an attribute, not a class — set on the app root.

```tsx
import { useAltroneTheme } from "altrone-ui";

function ThemeSwitcher() {
  const { theme, setTheme } = useAltroneTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Current: {theme}
    </button>
  );
}
```

::playground{src=ThemeToggleDemo caption="Toggle the theme and watch the card below follow — no per-component code involved"}

`'auto'` resolves against `window.matchMedia('(prefers-color-scheme: dark)')` — so a consumer who never calls `setTheme` still gets a theme that follows the OS, they just aren't locked into it if they want an explicit toggle later. `theme` from `useAltroneTheme()` is always the resolved `'light'` or `'dark'`; the chosen value, `'auto'` included, is `themePreference`, and `setTheme('auto')` goes back to following the OS.

Every color, shadow, and border token in the library is defined twice: once at the top level, once again scoped under `[data-altrone-theme='dark']`. Nothing about a component's own CSS changes between themes — only which value each token currently resolves to.

```scss
/* Simplified shape of how a token file actually looks */
:root {
  --background-1: white;
}

[data-altrone-theme="dark"] {
  --background-1: #0d0d0f;
}
```

## Where the attribute lives

`data-altrone-theme` is set in two places, for two different reasons:

- On the **component root** (the element carrying `data-altrone-root="true"`, rendered by `<Application>`) — this is what every Altrone component's own CSS actually scopes its dark-mode overrides to.
- On **`<html>`** — for styles that apply outside `data-altrone-root` entirely: global, non-component-scoped rules like `::selection`, and anything rendered through a portal that happens to land outside the root element.

You won't normally need to read or set this attribute directly — `useAltroneTheme()` is the supported way to read the current theme and change it.

:::note
An older approach used a `.AltroneDark` class instead of the attribute. That's gone entirely — if you see it referenced anywhere (a fork, an old snippet), it's dead code from before this convention landed.
:::

## Avoiding a flash of the wrong theme

Since React state doesn't exist until hydration, a page whose system preference is dark would otherwise render light for a moment, then snap to dark — a flash of unstyled/wrong theme (FOUC). `Application` renders a small blocking script as the very first thing in its own output, which sets `data-altrone-theme` on `<html>` before the rest of the tree paints:

```tsx
import { getThemeInitScript } from "altrone-ui";

// what <Application> does internally, roughly:
<script
  dangerouslySetInnerHTML={{ __html: getThemeInitScript(initialTheme) }}
/>;
```

This is best-effort — reasonable for a component library that isn't tied to one specific SSR framework. If you need a hard guarantee under streaming SSR (the script must run before any byte of your dark-themed page reaches the paint step), render `getThemeInitScript()` directly in your own document `<head>` instead of relying on `Application`'s copy:

```tsx
// app/layout.tsx (Next.js App Router, for example)
import { getThemeInitScript } from "altrone-ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: getThemeInitScript("auto") }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Persisting the user's choice

Pass `persistTheme` to remember an explicit toggle — `'auto'` included — in `localStorage` and restore it on the next visit:

```tsx
<Application persistTheme>{children}</Application>
```

:::note
Persistence only kicks in **after** the user has actually toggled the theme once. Until then, `theme`/the system preference keeps deciding — so `persistTheme` never overrides a consumer's explicit `theme` prop out of nowhere on first load.
:::

## Using these tokens in your own components

A handful of tokens exist specifically so a surface reads correctly in both themes — reach for these instead of reinventing them:

- **`--glass-background-color`** / **`--glass-border-color`** — the fill and edge for any translucent/frosted surface (a modal, a drawer, a dropdown, a card meant to look "elevated" over blurred content).
- **`--color-overlay-scrim`** — the dimming layer behind a modal or drawer's backdrop.
- **`--tooltip-background-color`** — a tooltip's fill. Tooltips deliberately carry no border or shadow (the arrow is a separate SVG a border can't wrap around correctly), so this one token has to carry the whole surface in dark mode on its own.

With those in hand, the rules for your own components are the same ones the library follows internally:

1. **Never write a component-specific dark-mode override unless the token itself is wrong.** If you find yourself writing `[data-altrone-theme='dark'] .myComponent { color: ... }`, stop — that almost always means a role token was skipped, not that this component is a genuine exception.
2. **Test in both themes before calling something done.** A color that "happens to work" in light mode can be invisible or barely-there in dark mode — the token system prevents most of this, but a raw color value you added yourself won't get the same protection.
3. **If a value truly needs a different look in dark mode** (rare — most of the library never needed this), scope your override to `[data-altrone-theme='dark']` on your own token, the same way the library's own `_glass.scss`/`_shadow.scss` do it — don't reach for `prefers-color-scheme` directly inside component CSS, since that ignores an explicit `theme` override a consumer has set.

:::warning
A hardcoded hex value is the single fastest way to make a component invisible in one of the two themes. See [Color](color) for why role tokens exist and how to pick the right one.
:::

## Related topics

- [Color](color) — the token system whose values this article explains how to switch between
- [Materials](materials) — `Box`'s `glass`/`plate` fills, the ones that needed a deliberate dark-mode value
- [Accessibility](accessibility) — contrast requirements that apply in both themes equally
