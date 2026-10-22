# Pagination

The CSS variables `Pagination` reads and that can be overridden.

:::spoiler[How to override the variables]
The variables are defined on the application root (except `--pagination-gap`, which is defined on the strip itself), so the `style` prop of `Pagination` is a reliable way to change them for one strip: a value there beats the defaults.

```tsx
<Pagination
  totalPages={12}
  style={{
    "--pagination-background": "var(--background-a2)",
    "--pagination-rounding": "4px",
    "--pagination-gap": "8px",
  } as React.CSSProperties}
/>
```

::playground{src=pagination/PaginationCssVarsDemo caption="A background, smaller rounding and a bigger padding"}

The strip's rounding is computed as `--pagination-rounding` plus `--pagination-gap`, so the buttons inside stay concentric with its edge. The ellipsis size is set by the `size` prop. The buttons themselves are `Button`s: their colors and rounding are configured by the [button variables](/en/components/controls/button/css-vars), not by the strip's variables.
:::

## Internal variables

Defined by the component itself. The ellipsis size is shown for `size="m"`; other sizes substitute their own.

::::css-vars
:::css-var[--pagination-background]{kind="fill" type="Fill color" color="transparent"}
Strip background. Default: `transparent`
:::

:::css-var[--pagination-rounding]{kind="radius" type="Corner radius"}
Rounding of the buttons inside the strip. Default: `var(--radius-m)`
:::

:::css-var[--pagination-gap]{kind="gap" type="Spacing"}
Space between the strip edge and the buttons. Default: `4px`
:::

:::css-var[--pagination-ellipsis-size]{kind="size" type="Size"}
Width and height of the ellipsis. Default: `32px`
:::

:::css-var[--pagination-ellipsis-font-size]{kind="font" type="Font size"}
Size of the ellipsis character. Default: `var(--text-size-4)`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks.

::::css-vars
:::css-var[--radius-m]{kind="radius" type="Corner radius"}
The default for `--pagination-rounding`.
:::

:::css-var[--text-2]{kind="text" type="Text color" color="var(--text-2)"}
Ellipsis color.
:::

:::css-var[--text-size-4]{kind="font" type="Font size"}
The default for `--pagination-ellipsis-font-size`.
:::
::::
