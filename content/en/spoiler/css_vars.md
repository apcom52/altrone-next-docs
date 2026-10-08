# Spoiler

CSS variables that `Spoiler` reads and that can be overridden.

:::spoiler[How to override the variables]
`className` and `style` go to the root element of the `Spoiler`, so variables set through `style` apply to this spoiler only:

```tsx
<Spoiler
  title="Larger, tinted heading"
  style={{ "--spoiler-text-color": "var(--teal-11)", "--spoiler-text-size": "16px" } as React.CSSProperties}
>
  ...
</Spoiler>
```

::playground{src=spoiler/SpoilerCssVarsDemo caption="Overriding the heading color, size and icon size through the style prop"}

To change all spoilers at once, set the variables on a parent element or in your stylesheet.

What can't be overridden:

- **The animation.** Height and opacity are animated by `motion` with fixed spring and tween settings, not by CSS.
- **The focus ring.** It uses `--accent-8` directly; change the accent instead.
:::

## Internal variables

Defined by `Spoiler` itself.

::::css-vars
:::css-var[--spoiler-text-color]{kind="text" type="Text color" color="var(--accent-12)"}
Heading text and icon color. Default: `var(--accent-12)`
:::

:::css-var[--spoiler-border-color]{kind="border" type="Border color" color="var(--border-1)"}
Divider between neighboring spoilers. Default: `var(--border-1)`
:::

:::css-var[--spoiler-text-size]{kind="font" type="Font size"}
Heading font size. Default: `var(--text-size-3)`
:::

:::css-var[--spoiler-heading-line-height]{kind="font" type="Line height"}
Heading line height, which sets the heading's height. Default: `32px`
:::

:::css-var[--spoiler-icon-size]{kind="size" type="Size"}
Width and height of the expand/collapse icon. Default: `18px`
:::
::::

## Global variables

Not defined by `Spoiler`: global design tokens it reads directly.

::::css-vars
:::css-var[--gap]{kind="gap" type="Spacing"}
Gap between the heading and the content, and horizontal padding of the heading and content. Default: `8px`
:::

:::css-var[--accent-12]{kind="text" type="Text color" color="var(--accent-12)"}
The color `--spoiler-text-color` resolves to. Follows `Application`'s `accent`.
:::

:::css-var[--accent-8]{kind="border" type="Border color" color="var(--accent-8)"}
Focus ring around the heading (`:focus-visible`). Follows `Application`'s `accent`.
:::

:::css-var[--border-1]{kind="border" type="Border color" color="var(--gray-6)"}
The color `--spoiler-border-color` resolves to. Default (light theme): `var(--gray-6)`
:::

:::css-var[--text-size-3]{kind="font" type="Font size"}
The size `--spoiler-text-size` resolves to. Default: `12px`
:::

:::css-var[--text-weight-bold]{kind="font" type="Font weight"}
Heading font weight. Default: `600`
:::
::::
