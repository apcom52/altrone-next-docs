# Materials

Almost every styled surface in Altrone — buttons, cards, chips, placeholder stubs — is a `Box` underneath, configured rather than restyled. Materials are the small, shared vocabulary that makes that possible: a fill/blur/border treatment (`material`), a color role (`tone` or `color`), and one interaction model (`pressable`/`focusable`/`editable`) that behaves the same way regardless of which material or tone you picked. Learn this vocabulary once and you can read (or write) the surface styling of almost any component in the library.

```tsx
<Box material="solid" tone="accent" shape="pill" padding={{ x: 20, y: 10 }}>
  <Text weight="medium">Get started</Text>
</Box>
```

## The nine materials

Each material differs only in what's actually present *at rest* — the interaction model on top (below) is identical across all of them.

| Material | At rest |
| --- | --- |
| `solid` | Fully filled with the tone's solid color, text auto-contrasted against it |
| `glass` | A translucent tone fill plus backdrop blur — frosted |
| `plate` | A fixed frosted fill, a hairline edge, and a resting shadow, so it reads as raised off the page |
| `translucent` | A flat translucent tone fill, no blur |
| `pale` | The same tint as `translucent`, made opaque — a quiet, pale surface that won't blend with whatever sits behind it |
| `transparent` | Nothing at rest |
| `outline` | A static, always-visible border |
| `ghost` | Nothing at rest — a border only appears once you interact with it |
| `dotted` | A faint tinted wash, a hairline edge, and a tone-driven dot pattern — a placeholder surface for "content goes here" stubs and empty drop targets |

`transparent` and `ghost` look identical sitting still — the difference only shows up once you hover, press, or focus one: `ghost` draws a border at that point, `transparent` never does. That's a real, deliberate distinction, not two names for the same thing:

```tsx
<Box material="ghost" pressable focusable>
  <Trash2 />
</Box>
```

## Tone: the color role

`tone` (`neutral` / `accent` / `danger` / `success` / `warning` / `info`) picks which [Color](color) role a material draws from. Every material maps the same tone the same way — `solid` always reaches for the tone's solid step, `outline`'s border always reaches for the tone's border step — so switching `tone` recolors a `Box` correctly no matter which material it's using:

```tsx
<Box material="translucent" tone="danger">
  <Text>3 items need attention</Text>
</Box>
```

## `color`: stepping outside the tone system

`color` overrides `tone` entirely — pass one of the ten categorical hue names (`'teal'`, `'indigo'`, …) or any CSS color (`'#f0abfc'`, `'var(--my-token)'`), and every material derives its fill/border/text from that instead. Solid text still auto-contrasts against whatever you pass, the same trick `Avatar` uses for its identity-keyed background:

```tsx
<Box material="solid" color="teal" />
<Box material="translucent" color="#f0abfc" />
```

Reach for `tone` when the color is communicating a *status* (danger, success, …) and for `color` when it's communicating an *identity* (a category, a person, a custom brand color) — the same distinction [Color](color) draws between status colors and the categorical palette.

## One interaction model, shared by every material

- **`pressable`** — the background responds to `:active` (a genuinely clickable `Box`, no JS state needed). Hover is a lighter preview of the same change; press takes it one step further. This is what makes `ghost`'s border "appear on interaction" — the border rule is keyed to the same `:active`/`:focus-within` state pressable and editable already track.
- **`focusable`** — adds a `:focus-visible` ring, identical in appearance across every material, so keyboard focus is never material-dependent.
- **`editable`** — for `asChild` wrapping a native `input`/`textarea`: the "engaged" look triggers on `:focus-within` instead of `:active`, since a text field doesn't have a press state the way a button does.

```tsx
<Box asChild material="outline" editable focusable>
  <input placeholder="Search…" />
</Box>
```

## Composing with shape, size, and elevation

`material`/`tone`/`color` cover fill and color; `shape`, `size`, `padding`, and `elevation` cover geometry and depth — all independent axes, so any combination is valid:

```tsx
<Box material="glass" tone="neutral" shape="rounded" elevation="overlay" padding={16}>
  <Text>A floating panel</Text>
</Box>
```

**`shape`** — the corner algorithm. The actual rounding amount still comes from the ambient `--radius-outer` a parent scope supplies — `shape` decides how that value gets used, not what it is:

| Shape | Corner behavior |
| --- | --- |
| `rect` | Always a hard `0` — ignores any ambient radius scope |
| `rounded` (default) | Floors at `--radius-mini` (2px) — never a hard square unless you pick `rect` |
| `squircle` | A true superellipse corner where the browser supports `corner-shape`; a scaled-down `border-radius` fallback elsewhere |
| `circle` | Forced `50%` with `aspect-ratio: 1` — width follows `size`/height, padding resets to `0` |
| `pill` | Always a full capsule end, regardless of ambient radius or size |

**`size`** — a named tier setting the box's minimum height and its control padding together (an arbitrary number/string instead makes the box a square of that size — see the `size` prop reference above):

| Size | Height |
| --- | --- |
| `mini` | 16px |
| `s` | 24px |
| `m` (default) | 32px |
| `l` | 40px |
| `xl` | 48px |

**`elevation`** — a combined z-index + shadow role, so a surface's stacking order and its depth cue always move together:

| Elevation | Shadow | Typical use |
| --- | --- | --- |
| `flat` (default) | None | A `Box` at rest, not lifted off the page |
| `raised` | Light | A `Tabs` item, a `DatePicker` day |
| `sticky` | A soft bottom edge | `Screen.Header`, a `DataTable` column header |
| `overlay` | Medium | `Popover`, `Dropdown`, `Drawer` |
| `modal` | Heavy | `Modal`, `Dialog` |
| `toast` | Heaviest | A toast notification |

## Building your own components

1. **Reach for `Box` before hand-rolling a styled container.** A card, a chip, a pill badge, a placeholder tile — if it needs a fill, a border, or a hover/press state, `Box` almost certainly already covers it.
2. **Pick the material by role, not by how it happens to look in one theme.** `plate` and `glass` can look similar in light mode and very different in dark mode (`plate`'s shadow-heavy chrome vs. `glass`'s pure blur) — choose based on what the surface *is* (a raised control vs. a frosted overlay), not a snapshot of its current appearance.
3. **`tone` for status, `color` for identity.** Don't reach for `color` with a raw hex value to express "this is dangerous" — that's what `tone="danger"` is for, and it stays correct across theme and accent changes for free (see [Dark theme](darkTheme)).
4. **Match the interaction prop to what's actually interactive.** `pressable` on a genuinely clickable surface, `editable` only when `asChild` wraps a native text input, `focusable` whenever keyboard users can land on it — mismatching these either hides real interactivity or fakes interactivity that isn't there.

## Related topics

- [Color](color) — the role tokens `tone` draws from, and the status/categorical distinction behind `tone` vs `color`
- [Dark theme](darkTheme) — why `glass`'s fill needed a deliberate dark-mode value, not just "the token exists in both themes"
- [Layout & responsiveness](layout) — `Box` as the general-purpose surface primitive alongside `Flex`/`Grid`/`Screen`
- [Motion](motion) — the duration choice behind `Box`'s `pressable`/`focusable`/`editable` transitions
- [Typography](typography) — the size/weight scale text rendered inside a `Box` draws on
- [Entering data](enteringData) — `TextInput`, the text-shaped input controls' own `Box`-based chassis
- [Actions](actions) — `Button` and `Toolbar.Action`, the other `Box`-built controls
