# Box

The CSS variables a `Box` defines and reads, and that you can override. Every component built on `Box` — `Button`, `Toolbar.Action`, text fields — exposes the same `--box-*` variables.

:::spoiler[How to override variables]
All `--box-*` variables are set on the box element itself. The reliable way to change one for a single box is the `style` prop — an inline value beats every class-based value, in every theme. A stylesheet rule works too, but it needs a selector more specific than the material, tone and size classes (for example `.my-box.my-box`).

```tsx
<Box
  material="translucent"
  tone="accent"
  style={{
    "--box-tone-translucent": "var(--teal-a3)",
    "--box-tone-text": "var(--teal-11)",
  } as React.CSSProperties}
/>
```

::playground{src=box/BoxCssVarsDemo caption="Overriding variables through the style prop"}

The `--box-tone-*` variables are the color roles every material reads, so override those to recolor a box and keep its hover, press and focus states. Overriding `--box-fill` replaces the fill in every state, including hover and press. The hover and press looks are built from the tone variables and `--box-fill`, not from a variable of their own.

What can't be overridden through a variable:

- **`--box-color` and the dimensions from props.** `color`, `width`, `height`, a custom `size` and `padding` are written inline by the component, so use the prop instead of the variable.
- **The concentric radius.** `--radius-outer` is the ambient scope shared with everything nested inside; set it with `radius`.
- **The hairline of `plate`.** It is a fixed layered shadow, so `--box-border-*` has no effect on it.
:::

## Internal variables

Defined by the box itself.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Fill color" color="transparent"}
Background. Default: `transparent`, replaced by the material
:::

:::css-var[--box-border-color]{kind="border" type="Border color" color="transparent"}
Border color. Default: `transparent`
:::

:::css-var[--box-border-width]{kind="size" type="Border width"}
Border width. Default: `0px`
:::

:::css-var[--box-blur]{kind="blur" type="Backdrop filter"}
Backdrop blur. Default: `none`
:::

:::css-var[--box-radius]{kind="radius" type="Corner radius"}
Corner radius, set by `shape`. Default: `2px` for `rounded`
:::

:::css-var[--box-size]{kind="size" type="Size"}
Minimum height, set by `size`. Default: `32px`
:::

:::css-var[--box-padding-x]{kind="gap" type="Spacing"}
Horizontal padding. Default: `8px`
:::

:::css-var[--box-padding-y]{kind="gap" type="Spacing"}
Vertical padding. Default: `6px`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Shadow"}
Shadow, set by `elevation`. Default: `var(--elevation-flat-shadow)`
:::

:::css-var[--box-tone-solid]{kind="fill" type="Fill color" color="var(--solid-1)"}
Fill of `solid`. Default: `var(--solid-1)` for the neutral tone
:::

:::css-var[--box-tone-solid-text]{kind="text" type="Text color" color="var(--background-1)"}
Text on a `solid` fill. Default: `var(--background-1)` for the neutral tone
:::

:::css-var[--box-tone-translucent]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Fill of `translucent`, and the hover wash of the empty materials. Default: `var(--interactive-a1)`
:::

:::css-var[--box-tone-translucent-strong]{kind="fill" type="Fill color" color="var(--interactive-a3)"}
Pressed fill of `translucent`. Default: `var(--interactive-a3)`
:::

:::css-var[--box-tone-pale]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Fill of `pale`. Default: `var(--interactive-1)`
:::

:::css-var[--box-tone-pale-strong]{kind="fill" type="Fill color" color="var(--interactive-3)"}
Pressed fill of `pale`. Default: `var(--interactive-3)`
:::

:::css-var[--box-tone-border]{kind="border" type="Border color" color="var(--border-a2)"}
Border of `outline`, `ghost` and `dotted`. Default: `var(--border-a2)`
:::

:::css-var[--box-tone-border-strong]{kind="border" type="Border color" color="var(--border-a3)"}
Pressed border and the dots of `dotted`. Default: `var(--border-a3)`
:::

:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--text-2)"}
Text and icon color. Default: `var(--text-2)`
:::

:::css-var[--box-dotted-gap]{kind="gap" type="Spacing"}
Distance between the dots of `dotted`. Default: `12px`
:::

:::css-var[--box-dotted-radius]{kind="size" type="Size"}
Radius of one dot of `dotted`. Default: `1.2px`
:::
::::

## Global variables

Not defined by the box: global design tokens it reads. Changing a token restyles every box at once. The `danger`, `success` and `warning` tones read the same set of roles from their own scales, for example `--danger-solid-1` and `--danger-text-1`.

::::css-vars
:::css-var[--radius-outer]{kind="radius" type="Corner radius"}
The ambient radius that `rounded` and `squircle` follow; set by `radius`. Default: `0px`
:::

:::css-var[--radius-mini]{kind="radius" type="Corner radius"}
The floor of `rounded`. Default: `2px`
:::

:::css-var[--radius-pill]{kind="radius" type="Corner radius"}
Corner radius of `pill`. Default: `9999px`
:::

:::css-var[--squircle-fallback-ratio]{kind="size" type="Ratio"}
Scales `squircle` down where `corner-shape` isn't supported. Default: `0.5`
:::

:::css-var[--base-control-size]{kind="size" type="Size"}
Minimum height of a `m` box. Default: `32px`
:::

:::css-var[--space-control-x-m]{kind="gap" type="Spacing"}
Horizontal padding of `size="m"`; other tiers read `--space-control-x-{mini,s,l,xl}`. Default: `8px`
:::

:::css-var[--space-control-y-m]{kind="gap" type="Spacing"}
Vertical padding of `size="m"`; other tiers read `--space-control-y-{mini,s,l,xl}`. Default: `6px`
:::

:::css-var[--elevation-flat-shadow]{kind="shadow" type="Shadow"}
Shadow of `elevation="flat"`; other roles read `--elevation-<role>-shadow`. Default: `var(--shadow-none)`
:::

:::css-var[--elevation-flat-z-index]{kind="size" type="Stacking order"}
Stacking order of `elevation="flat"`; other roles read `--elevation-<role>-z-index`. Default: `auto`
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Fill of `glass` and `plate`. Default: `color(display-p3 1 1 1 / 0.7)` in the light theme
:::

:::css-var[--glass-effects]{kind="blur" type="Backdrop filter"}
Backdrop blur of `glass` and `plate`. Default: `blur(64px) saturate(180%)` in the light theme
:::

:::css-var[--glass-press-effects]{kind="blur" type="Backdrop filter"}
Backdrop blur of a pressed `glass` or `plate`. Default: `blur(64px) saturate(180%) brightness(1.1)`
:::

:::css-var[--gray-a3]{kind="border" type="Border color" color="var(--gray-a3)"}
Hairline of `plate`. Default: `color(display-p3 0.004 0.004 0.204 / 0.059)` in the light theme
:::

:::css-var[--focus-color]{kind="border" type="Border color" color="var(--focus-color)"}
Focus ring color. Default: `color(display-p3 0 0 0)` in the light theme
:::

:::css-var[--solid-1]{kind="fill" type="Fill color" color="var(--solid-1)"}
Neutral `solid` fill. Default: `var(--gray-9)`
:::

:::css-var[--background-1]{kind="fill" type="Fill color" color="var(--background-1)"}
Text on a neutral `solid` fill, and the base a `color` tint mixes into. Default: `var(--gray-1)`
:::

:::css-var[--interactive-a1]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Neutral translucent fill. Default: `var(--gray-a3)`
:::

:::css-var[--interactive-a3]{kind="fill" type="Fill color" color="var(--interactive-a3)"}
Neutral pressed translucent fill. Default: `var(--gray-a5)`
:::

:::css-var[--interactive-1]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Neutral `pale` fill. Default: `var(--gray-3)`
:::

:::css-var[--interactive-3]{kind="fill" type="Fill color" color="var(--interactive-3)"}
Neutral pressed `pale` fill. Default: `var(--gray-5)`
:::

:::css-var[--border-a2]{kind="border" type="Border color" color="var(--border-a2)"}
Neutral border. Default: `var(--gray-a7)`
:::

:::css-var[--border-a3]{kind="border" type="Border color" color="var(--border-a3)"}
Neutral strong border. Default: `var(--gray-a8)`
:::

:::css-var[--text-1]{kind="text" type="Text color" color="var(--text-1)"}
Neutral text, and what a `color` tint mixes its text with. Default: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Neutral text color. Default: `var(--gray-12)`
:::

:::css-var[--accent-9]{kind="fill" type="Fill color" color="var(--accent-9)"}
Accent `solid` fill. Default: `var(--blue-9)`
:::

:::css-var[--accent-a3]{kind="fill" type="Fill color" color="var(--accent-a3)"}
Accent translucent fill. Default: `var(--blue-a3)`
:::

:::css-var[--accent-a5]{kind="fill" type="Fill color" color="var(--accent-a5)"}
Accent pressed translucent fill. Default: `var(--blue-a5)`
:::

:::css-var[--accent-3]{kind="fill" type="Fill color" color="var(--accent-3)"}
Accent `pale` fill. Default: `var(--blue-3)`
:::

:::css-var[--accent-5]{kind="fill" type="Fill color" color="var(--accent-5)"}
Accent pressed `pale` fill. Default: `var(--blue-5)`
:::

:::css-var[--accent-a7]{kind="border" type="Border color" color="var(--accent-a7)"}
Accent border. Default: `var(--blue-a7)`
:::

:::css-var[--accent-a9]{kind="border" type="Border color" color="var(--accent-a9)"}
Accent strong border. Default: `var(--blue-a9)`
:::

:::css-var[--accent-11]{kind="text" type="Text color" color="var(--accent-11)"}
Accent text color. Default: `var(--blue-11)`
:::

:::css-var[--white]{kind="text" type="Text color" color="var(--white)"}
Text on an accent, `danger`, `success` or `warning` `solid` fill. Default: `color(display-p3 1 1 1)`
:::

:::css-var[--danger-solid-1]{kind="fill" type="Fill color" color="var(--danger-solid-1)"}
`danger` `solid` fill. Default: `var(--red-9)`
:::

:::css-var[--danger-text-1]{kind="text" type="Text color" color="var(--danger-text-1)"}
`danger` text color. Default: `var(--red-11)`
:::
::::
