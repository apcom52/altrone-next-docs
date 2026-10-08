# Splitter

CSS custom properties that `Splitter` reads and that can be overridden.

:::spoiler[How to override the variables]
`className` and `style` passed to `Splitter` land on its root element, and the variables are inherited by the dividers and panels inside it. Override them through `style`:

```tsx
<Splitter
  style={{
    "--splitter-handle-color": "var(--accent-a6)",
    "--splitter-handle-length": "56px",
  } as React.CSSProperties}
>
  ...
</Splitter>
```

::playground{src=splitter/SplitterCssVarsDemo caption="A tinted, longer drag handle"}

What can't be overridden:

- **Which colors the handle uses in each state.** Hover and active colors are separate variables, so overriding only `--splitter-handle-color` leaves the hover and drag feedback as it was.
- **The layout direction and the panels' `flex`.** They are set from `orientation` and the current sizes.
:::

## Internal variables

Defined by `Splitter` itself.

::::css-vars
:::css-var[--splitter-gutter]{kind="size" type="Size"}
Visible width of the strip between two panels. Default: `10px`
:::

:::css-var[--splitter-touch-hit-area]{kind="size" type="Size"}
Invisible touch and pointer target around the gutter. Default: `24px`
:::

:::css-var[--splitter-handle-length]{kind="size" type="Size"}
Length of the drag handle along the divider. Default: `32px`
:::

:::css-var[--splitter-handle-thickness]{kind="size" type="Size"}
Thickness of the drag handle across the divider. Default: `6px`
:::

:::css-var[--splitter-handle-color]{kind="fill" type="Fill color" color="var(--border-a3)"}
Drag handle at rest. Default: `var(--border-a3)`
:::

:::css-var[--splitter-handle-hover-color]{kind="fill" type="Fill color" color="var(--solid-a1)"}
Drag handle while the divider is hovered. Default: `var(--solid-a1)`
:::

:::css-var[--splitter-handle-active-color]{kind="fill" type="Fill color" color="var(--accent-a12)"}
Drag handle while dragging or focused. Default: `var(--accent-a12)`
:::

:::css-var[--splitter-panel-transition]{kind="size" type="Transition"}
Duration and easing of panel collapse and expand. Default: `var(--motion-duration-base) var(--motion-easing-standard)`
:::
::::

## Global variables

Not defined by `Splitter`: design tokens it reads directly. The collapse and expand buttons are regular `Button`s, so their own variables apply as well — see [Button CSS variables](/en/components/controls/button/css-vars).

::::css-vars
:::css-var[--xl-gap]{kind="gap" type="Spacing"}
Offset of the collapse and expand buttons from the drag handle. Default: `var(--xl-gap)`
:::

:::css-var[--radius-pill]{kind="radius" type="Corner radius"}
Rounding of the drag handle. Default: `var(--radius-pill)`
:::

:::css-var[--border-a3]{kind="fill" type="Fill color" color="var(--border-a3)"}
Source of the resting handle color. Default: `var(--border-a3)`
:::

:::css-var[--solid-a1]{kind="fill" type="Fill color" color="var(--solid-a1)"}
Source of the hovered handle color. Default: `var(--solid-a1)`
:::

:::css-var[--accent-a12]{kind="fill" type="Fill color" color="var(--accent-a12)"}
Source of the active handle color. Default: `var(--accent-a12)`
:::

:::css-var[--motion-duration-fast]{kind="size" type="Transition"}
Duration of handle and button color changes. Default: `var(--motion-duration-fast)`
:::

:::css-var[--motion-duration-base]{kind="size" type="Transition"}
Duration of the panel size transition. Default: `var(--motion-duration-base)`
:::

:::css-var[--motion-easing-standard]{kind="size" type="Transition"}
Easing of all `Splitter` transitions. Default: `var(--motion-easing-standard)`
:::
::::
