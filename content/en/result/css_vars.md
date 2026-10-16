# Result

CSS custom properties that `Result` reads and that can be overridden.

:::spoiler[How to override variables]
The variables are set on the application root and on the size and status classes of the block, so the `style` prop is a reliable way to change them for one block: an inline value beats all of them.

```tsx
<Result
  status="success"
  title="Invoice sent"
  style={{
    "--result-media-size": "72px",
    "--result-icon-size": "34px",
  } as React.CSSProperties}
/>
```

::playground{src=result/ResultCssVarsDemo caption="A larger chip and a tighter gap"}

The chip colors depend on `status`. Overriding `--result-media-background` and `--result-media-color` replaces the tint for all statuses.
:::

## Internal variables

Defined by the block itself.

::::css-vars
:::css-var[--result-padding]{kind="gap" type="Spacing"}
Padding around the block; depends on `size`. Default: `var(--xl-gap)`
:::

:::css-var[--result-gap]{kind="gap" type="Spacing"}
Space between the chip, the text and the buttons; depends on `size`. Default: `var(--l-gap)`
:::

:::css-var[--result-media-size]{kind="size" type="Size"}
Diameter of the chip; depends on `size`. Default: `48px`
:::

:::css-var[--result-icon-size]{kind="size" type="Size"}
Icon size in the chip; depends on `size`. Default: `22px`
:::

:::css-var[--result-media-background]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Chip fill; depends on `status`. Default: `var(--interactive-1)`
:::

:::css-var[--result-media-color]{kind="text" type="Text color" color="var(--text-1)"}
Icon color; depends on `status`. Default: `var(--text-1)`
:::

:::css-var[--result-description-max-width]{kind="size" type="Size"}
Maximum width of the explanation; depends on `size`. Default: `34ch`
:::
::::

## Global variables

Not defined by the block itself, but they tint the chip for each status.

::::css-vars
:::css-var[--info-interactive-1]{kind="fill" type="Fill color" color="var(--info-interactive-1)"}
Chip fill for `info`.
:::

:::css-var[--info-text-1]{kind="text" type="Text color" color="var(--info-text-1)"}
Icon color for `info`.
:::

:::css-var[--success-interactive-1]{kind="fill" type="Fill color" color="var(--success-interactive-1)"}
Chip fill for `success`.
:::

:::css-var[--success-text-1]{kind="text" type="Text color" color="var(--success-text-1)"}
Icon color for `success`.
:::

:::css-var[--warning-interactive-1]{kind="fill" type="Fill color" color="var(--warning-interactive-1)"}
Chip fill for `warning`.
:::

:::css-var[--warning-text-1]{kind="text" type="Text color" color="var(--warning-text-1)"}
Icon color for `warning`.
:::

:::css-var[--danger-interactive-1]{kind="fill" type="Fill color" color="var(--danger-interactive-1)"}
Chip fill for `error`.
:::

:::css-var[--danger-text-1]{kind="text" type="Text color" color="var(--danger-text-1)"}
Icon color for `error`.
:::
::::
