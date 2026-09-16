# Color

Every color in Altrone comes from a token, never a hex code typed by hand. That's not a style preference — it's what makes dark mode, wide-gamut displays, and WCAG-AA contrast all work automatically for a component you didn't have to think about any of that while building. This article walks through the palette itself, the semantic layers built on top of it, and how to use the same layers when you build your own components on top of Altrone.

## The base palette

Each hue in Altrone is a 12-step scale, plus a matching alpha variant (`--red-a9` next to `--red-9`), defined in `display-p3` for wider-gamut displays and with dedicated light/dark values — not a single scale darkened algorithmically. Ten hues are available as a switchable **accent**, plus gray and black, which aren't switchable:

::playground{src=ColorAccentHuesDemo caption="All ten selectable accent hues, 12 steps each"}

Components never reach for a raw hue directly (no component's SCSS says `var(--red-9)`). Instead they read `--accent-N`, and `<Application accent="...">` repoints which hue that resolves to:

```tsx
<Application accent="indigo">{/* --accent-9 now resolves to --indigo-9 everywhere */}</Application>
```

Gray and black complete the base palette — gray for every neutral background/border/text role, black strictly as an alpha scale (`--black-a1`…`--black-a12`, there is no solid `--black-9`) for scrims and shadows that need to darken whatever's underneath rather than paint a fixed color:

::playground{src=ColorNeutralScaleDemo caption="Gray's solid scale, and black's alpha-only scale shown over a tinted background"}

## Status colors

`danger`, `success`, and `warning` are **fixed hues** (red, green, amber) — independent of whatever `accent` is currently selected. That's deliberate: if a consumer picks `accent="red"` for their brand, danger states still need to read as "danger," not disappear into the rest of the UI now sharing its hue.

`info` is the one exception — it deliberately follows `--accent` instead of a fixed hue, because it's about drawing attention within the primary flow, not signaling a universal state the other three need to stay recognizable regardless of branding:

::playground{src=ColorStatusRolesDemo caption="danger / success / warning / info, each as a solid swatch plus its five role tokens"}

## The role scale

Every status (and the gray scale it's modeled on) maps its 12 steps to five purpose-named roles. Once you know this mapping, you can read any status's CSS without memorizing which raw step means what:

| Role | Steps | Use for |
| --- | --- | --- |
| `background` | 1–2 | Page/panel fill for a status area |
| `interactive` | 3–5 | Component background (rest / hover / active) |
| `border` | 6–8 | Subtle border → UI border → hover border |
| `solid` | 9–10 | Solid fill (e.g. a filled danger button) |
| `text` | 11–12 | Low- / high-contrast text |

In practice, that's what a component's own CSS looks like — it names the role, never a raw step:

```scss
.errorMessage {
  color: var(--danger-text-1);
  background: var(--danger-background-1);
  border: 1px solid var(--danger-border-1);
}
```

:::tip
The same five roles back the neutral gray scale too (`--background-1`, `--border-1`, `--text-1`, …) — learning the role scale once teaches you how to read every color file in the codebase, not just the status ones.
:::

## Disabled state

Disabled elements use dedicated solid tokens — `--disabled-background`, `--disabled-border`, `--disabled-text-color` — instead of `opacity`. Opacity is unpredictable layered over a translucent/glass material: alpha channels stack, so the same `opacity: 0.5` renders differently depending on what happens to be behind it. A dedicated color is the same regardless of what's underneath.

```scss
/* Wrong — looks different over a solid card vs. a glass surface */
.disabled {
  opacity: 0.5;
}

/* Correct — a single, predictable rendering everywhere */
.disabled {
  background: var(--disabled-background);
  border-color: var(--disabled-border);
  color: var(--disabled-text-color);
}
```

## Categorical colors

A separate 10-color set for telling same-shaped items apart by **identity** — an avatar per person, a tag per label — rather than conveying meaning the way status colors do. Each entry is a different hue's solid step, not a shade of one hue, so neighbors stay visually distinguishable:

::playground{src=ColorCategoricalDemo caption="The ten categorical colors, --category-1 through --category-10"}

Nothing picks one of these explicitly — the same identity string always resolves to the same entry via `ColorUtils.getCategoricalColorIndex(seed)`, a deterministic hash from string to index. `Avatar` already uses this: pass no explicit `backgroundColor` and it falls back to a categorical color keyed by the person's full name, so "Ada Lovelace" is always the same color everywhere she appears, without any component tracking an assignment.

```tsx
import { ColorUtils } from "altrone-ui";

const index = ColorUtils.getCategoricalColorIndex("Ada Lovelace");
// same input, same index, every time — no shared assignment table needed
```

## Point tokens

A handful of one-off colors that don't belong to any scale above:

- **`--color-overlay-scrim`** — the dimming layer behind `Modal`/`Drawer`. Shared by both instead of each defining its own copy of the same value.
- **`--color-header-backdrop`** — the blurred bar behind `Screen.Header`. Deliberately accent-tinted, not neutral gray — a considered choice, not an oversight.
- **`--color-selection`** — the `::selection` background for selected text, wired globally.

## Using color in your own components

If you're building a component on top of Altrone — a custom card, a status pill, a domain-specific widget — the same rules apply to your CSS as to the library's own:

1. **Never hardcode a hex value.** Reach for a role token (`--danger-text-1`, `--background-2`, `--accent-9`) before anything else. If nothing existing fits, that's worth raising rather than inventing a one-off color.
2. **Pick the role by purpose, not by how it happens to look today.** `--danger-text-1` and `--text-1` might render similarly in some theme, but they mean different things — a future palette tweak or dark-theme change can separate them again.
3. **Never communicate state through color alone.** Pair a status color with text or an icon — this is a hard requirement, not a style nicety; see the [Accessibility](accessibility) article for why.
4. **Check contrast, don't assume it.** The built-in role tokens are already tuned to WCAG AA, but a custom combination (e.g. `--warning-solid-1` text on a light background) might not be — verify before shipping.

:::warning
A raw hex value in your component's CSS is one of the fastest ways to break dark mode for that component specifically — it won't repaint when the theme, accent, or a future palette revision changes, while everything token-based around it will.
:::

## Related topics

- [Accessibility](accessibility) — why state can never be color alone, and the WCAG AA contrast ratios every role token is tuned to
- [Dark theme](darkTheme) — how these same tokens redefine themselves under `[data-altrone-theme='dark']`
- [Materials](materials) — how `Box`'s `tone`/`color` props draw on these same role tokens
- [Typography](typography) — the text-color roles that pair with this scale
- [Feedback](feedback) — the status roles behind every toast/message/result severity value
