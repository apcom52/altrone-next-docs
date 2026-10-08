# Text

The CSS variables a `Text` reads and you can override.

:::spoiler[How to override variables]
The `--text-*` variables are defined on the application root, so changing one in a stylesheet restyles every `Text` at once, and changing it on any ancestor restyles the `Text` inside. For a single element, use the `style` prop — an inline value beats every class-based value, in every theme.

```tsx
<Text
  code
  style={{ "--text-code-background-color": "var(--teal-3)" } as React.CSSProperties}
>
  npm install
</Text>
```

::playground{src=text/TextCssVarsDemo caption="Overriding the code and highlight colors, and the list offset"}

The code and highlight colors have their own dark-theme values, and those win over an override set on the application root. Use the `style` prop, or repeat the override under `[data-altrone-theme='dark']`. To make a `Text` take its color from the parent, set `--text-color` to `currentcolor`.

What can't be overridden:

- **The size scale per element.** `size` picks a tier from the global `--text-size-*` and `--line-height-*` tokens; change the token or pick another `size`.
- **Line clamping.** The number of lines comes from the `lineClamp` prop.
- **Link appearance.** A link reads the accent tokens directly, so recolor it through `--accent-11` and `--accent-12`.
:::

## Internal variables

Defined by `Text` itself, on the application root.

::::css-vars
:::css-var[--text-color]{kind="text" type="Text color" color="var(--text-2)"}
Default text color. Default: `var(--text-2)`
:::

:::css-var[--text-color-muted]{kind="text" type="Text color" color="var(--text-1)"}
Color of `muted`. Default: `var(--text-1)`
:::

:::css-var[--text-color-danger]{kind="text" type="Text color" color="var(--danger-text-1)"}
Color of `danger`. Default: `var(--danger-text-1)`
:::

:::css-var[--text-color-success]{kind="text" type="Text color" color="var(--success-text-1)"}
Color of `success`. Default: `var(--success-text-1)`
:::

:::css-var[--text-color-warning]{kind="text" type="Text color" color="var(--warning-text-1)"}
Color of `warning`. Default: `var(--warning-text-1)`
:::

:::css-var[--text-code-background-color]{kind="fill" type="Fill color" color="var(--accent-1)"}
Background of `code`. Default: `var(--accent-1)` in the light theme
:::

:::css-var[--text-code-border-color]{kind="border" type="Border color" color="var(--accent-6)"}
Frame of `code`. Default: `var(--accent-6)` in the light theme
:::

:::css-var[--text-code-text-color]{kind="text" type="Text color" color="var(--accent-12)"}
Text color of `code`. Default: `var(--accent-12)` in the light theme
:::

:::css-var[--text-highlighted-background-color]{kind="fill" type="Fill color" color="var(--accent-3)"}
Background of `highlighted`. Default: `var(--accent-3)` in the light theme
:::

:::css-var[--text-highlighted-text-color]{kind="text" type="Text color" color="var(--accent-12)"}
Text color of `highlighted`. Default: `var(--accent-12)`
:::

:::css-var[--text-rounding]{kind="radius" type="Corner radius"}
Corner radius of `code` and `highlighted`. Default: `8px`
:::

:::css-var[--text-list-offset]{kind="gap" type="Spacing"}
Left indent of a list. Default: `24px`
:::

:::css-var[--text-block-line-height]{kind="size" type="Line height"}
Line height of a `block` without `size`. Default: `1.6`
:::
::::

## Global variables

Not defined by `Text`: global design tokens it reads. Changing a token restyles every `Text` at once.

::::css-vars
:::css-var[--text-size-4]{kind="font" type="Font size"}
Font size of a tier; other tiers read `--text-size-{1..9}`. Default: `14px`
:::

:::css-var[--line-height-4]{kind="size" type="Line height"}
Line height of a tier; other tiers read `--line-height-{1..9}`. Default: `20px`
:::

:::css-var[--text-weight-regular]{kind="font" type="Font weight"}
Regular weight; other weights read `--text-weight-{light,medium,bold}`. Default: `400`
:::

:::css-var[--font-family-base]{kind="font" type="Font family"}
Font of all text except `code` and `kbd`. Default: `'Inter Variable'`, then system fonts
:::

:::css-var[--font-family-code]{kind="font" type="Font family"}
Font of `code` and `kbd`. Default: `'JetBrains Mono Variable'`, then monospace
:::

:::css-var[--xs-gap]{kind="gap" type="Spacing"}
Horizontal padding of `code` and `highlighted`. Default: `4px`
:::

:::css-var[--text-1]{kind="text" type="Text color" color="var(--text-1)"}
Color of `muted`, and of `code` text in the dark theme. Default: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Default text color. Default: `var(--gray-12)`
:::

:::css-var[--danger-text-1]{kind="text" type="Text color" color="var(--danger-text-1)"}
Color of `danger`. Default: `var(--red-11)`
:::

:::css-var[--success-text-1]{kind="text" type="Text color" color="var(--success-text-1)"}
Color of `success`. Default: `var(--green-11)`
:::

:::css-var[--warning-text-1]{kind="text" type="Text color" color="var(--warning-text-1)"}
Color of `warning`. Default: `var(--amber-11)`
:::

:::css-var[--accent-1]{kind="fill" type="Fill color" color="var(--accent-1)"}
Background of `code` in the light theme. Default: `var(--blue-1)`
:::

:::css-var[--accent-3]{kind="fill" type="Fill color" color="var(--accent-3)"}
Background of `highlighted` in the light theme. Default: `var(--blue-3)`
:::

:::css-var[--accent-6]{kind="border" type="Border color" color="var(--accent-6)"}
Frame of `code` in the light theme. Default: `var(--blue-6)`
:::

:::css-var[--accent-11]{kind="text" type="Text color" color="var(--accent-11)"}
Link color. Default: `var(--blue-11)`
:::

:::css-var[--accent-12]{kind="text" type="Text color" color="var(--accent-12)"}
Link color on hover and focus, and text of `highlighted` and of `code` in the light theme. Default: `var(--blue-12)`
:::

:::css-var[--interactive-2]{kind="fill" type="Fill color" color="var(--interactive-2)"}
Background of `code` and `highlighted` in the dark theme. Default: `var(--gray-4)`
:::

:::css-var[--border-a1]{kind="border" type="Border color" color="var(--border-a1)"}
Frame of `code` in the dark theme. Default: `var(--gray-a6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Color of `deleted` and `kbd`, and of list markers. Default: `var(--gray-9)`
:::
::::
