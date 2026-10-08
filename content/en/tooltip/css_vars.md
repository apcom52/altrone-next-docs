# Tooltip

The CSS custom properties `Tooltip` reads and that can be overridden.

:::spoiler[How to override variables]
Unlike most other props, `className`/`style` passed to `Tooltip` land on the floating panel itself, not the trigger — so `style` is the reliable way to override a variable for one tooltip:

```tsx
<Tooltip
  content="A themed tooltip"
  style={{ "--tooltip-background-color": "var(--accent-9)", "--tooltip-text-color": "white" } as React.CSSProperties}
>
  <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
    Hover me
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipCssVarsDemo caption="Overriding the panel's colors through the style prop"}

What can't be overridden:

- **The panel's shadow or border.** There isn't one, by design — a shadow or a hairline border can't wrap the arrow's triangle correctly, so the tooltip is set apart purely by lightening its own fill against the page.
- **The arrow's shape.** Its size and corner radius are fixed in the component; only its fill color follows `--tooltip-arrow-color`.
- **The auto-generated trigger button's size and shape.** Only its icon is replaceable, via `triggerIcon`.
:::

## Internal variables

Defined by `Tooltip` itself.

::::css-vars
:::css-var[--tooltip-background-color]{kind="fill" type="Fill color" color="color(display-p3 0.064 0.07 0.067)"}
Panel fill — an inverted surface, dark even in light theme. Default (light theme): `color(display-p3 0.064 0.07 0.067)`; dark theme: `var(--gray-6)`
:::

:::css-var[--tooltip-text-color]{kind="text" type="Text color" color="color(display-p3 0.927 0.933 0.93)"}
Panel text color. Default: `color(display-p3 0.927 0.933 0.93)`
:::

:::css-var[--tooltip-arrow-color]{kind="fill" type="Fill color" color="var(--tooltip-background-color)"}
Arrow fill — matches the panel by default, so the arrow reads as a pointed extension of it. Default: `var(--tooltip-background-color)`
:::

:::css-var[--tooltip-radius]{kind="radius" type="Corner radius"}
Panel corner radius, seeds the ambient `--radius-outer`. Default: `10px`
:::

:::css-var[--tooltip-button-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Text/icon color of the auto-generated `?` trigger button. Default: `var(--text-2)`
:::

:::css-var[--tooltip-button-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Fill of the auto-generated `?` trigger button. Default: `var(--glass-background-color)`
:::

:::css-var[--tooltip-button-border-color]{kind="border" type="Border color" color="var(--border-1)"}
Border color of the auto-generated `?` trigger button. Default: `var(--border-1)`
:::
::::

## Global variables

Not defined by `Tooltip` itself: the global design tokens its panel and its auto-generated trigger button read directly. Changing one restyles every tooltip at once.

::::css-vars
:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Source of `--tooltip-button-text-color`'s default. Default: `var(--gray-12)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Source of `--tooltip-button-background-color`'s default. Default (light theme): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--border-1]{kind="border" type="Border color" color="var(--border-1)"}
Source of `--tooltip-button-border-color`'s default. Default: `var(--gray-6)`
:::

:::css-var[--text-weight-medium]{kind="font" type="Font weight"}
Font weight of the panel's content. Default: `500`
:::

:::css-var[--text-size-3]{kind="font" type="Font size"}
Font size of the panel's content and `title`. Default: `12px`
:::

:::css-var[--line-height-3]{kind="font" type="Font size"}
Line height of the panel's content and `title`. Default: `16px`
:::

:::css-var[--text-weight-bold]{kind="font" type="Font weight"}
Font weight of `title`. Default: `600`
:::

:::css-var[--solid-2]{kind="text" type="Text color" color="var(--solid-2)"}
Color of the `kbd` badge. Default: `var(--gray-10)`
:::

:::css-var[--radius-circle]{kind="radius" type="Corner radius"}
Corner radius of the auto-generated `?` trigger button. Default: `50%`
:::

:::css-var[--level-tooltip]{kind="size" type="Z-index"}
The panel's z-index. Default: `1080`
:::
::::
