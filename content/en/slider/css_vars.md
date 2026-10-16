# Slider

The CSS variables `Slider` reads and that can be overridden.

:::spoiler[How to override the variables]
All of them are set on the root element, so the reliable way to change a variable on one slider is the `style` prop: an inline value beats any value from classes, in any theme. A stylesheet rule works too, but its selector must be more specific than the size classes (for example, `.my-slider.my-slider`).

```tsx
<Slider
  value={value}
  onChange={setValue}
  style={{ "--slider-track-thickness": "10px", "--slider-thumb-size": "22px" } as React.CSSProperties}
/>
```

::playground{src=slider/SliderCssVarsDemo caption="Overriding variables through the style prop"}

The track thickness and the thumb size are set by the size classes, so an override through `style` replaces the value of the chosen `size`.

What cannot be overridden:

- **The focus ring.** It comes from the global `--focus-color`.
- **The 24px minimum hit area.** It protects the slider at `size="mini"`.
- **The disabled look.** Its colors are built from the `--disabled-*` tokens, so a disabled slider can only be recolored by overriding the tokens themselves.
:::

## Internal variables

Defined by the slider itself.

::::css-vars
:::css-var[--slider-track-color]{kind="fill" type="Fill color" color="var(--interactive-3)"}
The track background. Default: `var(--interactive-3)`
:::

:::css-var[--slider-fill-color]{kind="fill" type="Fill color" color="var(--accent-9)"}
The filled part color. Default: `var(--accent-9)`
:::

:::css-var[--slider-fill-hover-color]{kind="fill" type="Fill color" color="var(--accent-10)"}
The filled part color on hover. Default: `var(--accent-10)`
:::

:::css-var[--slider-value-text-color]{kind="text" type="Text color" color="var(--text-2)"}
The icon and text color; it is also the value bubble background. Default: `var(--text-2)`
:::

:::css-var[--slider-value-background-color]{kind="fill" type="Fill color" color="var(--background-1)"}
The text color inside the value bubble. Default: `var(--background-1)`
:::

:::css-var[--slider-fill-surface-color]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
The slab background in `fill`. Default: `var(--interactive-a1)`
:::

:::css-var[--slider-thumb-fill]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
The thumb fill; the thumb is white in the dark theme. Default: `var(--glass-background-color)`
:::

:::css-var[--slider-thumb-shadow]{kind="shadow" type="Shadow"}
The thumb outline and contact shadow. Default: a layered plate shadow
:::

:::css-var[--slider-size]{kind="size" type="Size"}
The slab height in `fill`. Default: `32px`
:::

:::css-var[--slider-track-thickness]{kind="size" type="Size"}
The track thickness. Default: `4px`
:::

:::css-var[--slider-thumb-size]{kind="size" type="Size"}
The thumb diameter. Default: `16px`
:::

:::css-var[--slider-thumb-grow]{kind="size" type="Size"}
How much the thumb stretches while dragging. Default: `calc(var(--slider-thumb-size) / 2.5)`
:::

:::css-var[--slider-value-font-size]{kind="font" type="Font size"}
The value bubble font size. Default: `var(--text-size-3)`
:::
::::

## Global variables

Not defined by the slider: global design tokens it reads. Changing a token affects all sliders at once.

::::css-vars
:::css-var[--focus-color]{kind="border" type="Border color" color="var(--focus-color)"}
The keyboard focus ring. Default: black in the light theme
:::

:::css-var[--radius-pill]{kind="radius" type="Corner radius"}
The track and slab corner radius. Default: `9999px`
:::

:::css-var[--radius-s]{kind="radius" type="Corner radius"}
The value bubble corner radius in `default`. Default: `4px`
:::

:::css-var[--glass-effects]{kind="blur" type="Blur"}
The background blur under the thumb and the slab. Default: `blur(64px) saturate(180%)` in the light theme
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Shadow"}
The slab shadow in `fill`. Default: `var(--elevation-raised-shadow)`
:::

:::css-var[--disabled-background]{kind="fill" type="Fill color" color="var(--disabled-background)"}
The fill and thumb when disabled. Default: `var(--gray-3)`
:::

:::css-var[--disabled-border]{kind="border" type="Border color" color="var(--disabled-border)"}
The thumb outline when disabled. Default: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
The text and icon when disabled. Default: `var(--gray-9)`
:::
::::
