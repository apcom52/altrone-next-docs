# Typography

`Text` is the only text primitive in Altrone — every size, weight, and semantic element (a paragraph, a list, a link) goes through one component and one shared scale, instead of each component inventing its own font sizes. This article covers that shared scale: the tokens behind it and how to use them.

## The size scale

Nine tiers, each pairing a font size with its own line height — `Text`'s `size` prop picks one directly (`<Text size={7}>`):

| Size | Font size | Line height |
| --- | --- | --- |
| 1 | 8px | 12px |
| 2 | 10px | 14px |
| 3 | 12px | 16px |
| 4 (default) | 14px | 20px |
| 5 | 16px | 24px |
| 6 | 18px | 26px |
| 7 | 20px | 28px |
| 8 | 24px | 30px |
| 9 | 28px | 36px |

`4` is the baseline body size — it's what `Application` sets as the app's own root font size, so any `Text` without an explicit `size` inherits it rather than falling back to the browser default.

## Weight

Four tokens, each a specific numeric weight rather than a generic "bold: true/false":

| Token | Weight |
| --- | --- |
| `light` | 300 |
| `regular` (default) | 400 |
| `medium` | 500 |
| `bold` | 600 |

## Fonts

Two font families, each with a real fallback stack rather than a bare font name:

- **`--font-family-base`** — `Inter Variable`, then system sans-serif fallbacks
- **`--font-family-code`** — `JetBrains Mono Variable`, then a generic monospace fallback

`Text code` (and anything else rendering inline/block code) uses the code family; everything else uses the base one.

## Icon size follows text, not the other way around

Icons don't have their own independent size scale — they follow whatever size the surrounding component is set to. See [Icons](icons) for the full convention (including the `lucide` class the automatic `1em` sizing is keyed to).

## Building your own components

1. **Reach for `Text` and the size/weight scale above for anything textual** — never hardcode a `font-size` or `font-weight` value.
2. **Icon sizing follows the component, not a typography token** — see [Icons](icons) rather than trying to size an icon off `--text-size-*` directly.

## Related topics

- [Icons](icons) — how icon size ties into a component's size, not a text-size token
- [Color](color) — the text-color roles that pair with this scale
- [Accessibility](accessibility) — contrast and readability requirements that apply regardless of which size tier you pick
