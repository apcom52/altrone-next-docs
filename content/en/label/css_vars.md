# Label

The CSS variables `Label` reads and that can be overridden.

:::spoiler[How to override the variables]
The label's own variables are defined on its root element and depend on `size`; the `--box-*` variables are set there by the `variant` and `color` classes. The `style` prop of `Label` beats both, so it is a reliable way to change them for one label.

```tsx
<Label
  color="teal"
  style={{
    "--label-padding-x": "12px",
    "--label-radius": "2px",
  } as React.CSSProperties}
>
  Release 2.0
</Label>
```

::playground{src=label/LabelCssVarsDemo caption="Wider padding and sharper corners; a bigger dot without a border"}

Change the padding and the rounding through the label's own variables: the label writes `--label-padding-x`/`--label-padding-y` into `--box-padding-x`/`--box-padding-y` and `--label-radius` into `--radius-outer` itself, so overriding those Box variables directly has no effect. The status dot follows the label's rounding; with `shape="pill"` the rounding comes from `--radius-pill` and `--label-radius` doesn't apply. `--box-color` is set by the `color` prop and can't be overridden.
:::

## Internal variables

Defined by the component itself. Values are shown for `size="m"`; other sizes substitute their own.

::::css-vars
:::css-var[--label-padding-x]{kind="gap" type="Spacing"}
Horizontal padding. Default: `8px`
:::

:::css-var[--label-padding-y]{kind="gap" type="Spacing"}
Vertical padding. Default: `4px`
:::

:::css-var[--label-status-padding-left]{kind="gap" type="Spacing"}
Left padding of the `status` variant, before the dot. Default: `4px`
:::

:::css-var[--label-dot-size]{kind="size" type="Size"}
Status dot diameter. Default: `15px`
:::

:::css-var[--label-icon-size]{kind="size" type="Size"}
Leading icon size. Default: `12px`
:::

:::css-var[--label-radius]{kind="radius" type="Corner radius"}
Corner radius of `shape="rounded"`. Default: `8px`
:::

:::css-var[--label-gap]{kind="gap" type="Spacing"}
Space between the icon or the dot and the text. Default: `4px`
:::

:::css-var[--label-font-size]{kind="font" type="Font size"}
Text size. Default: `var(--text-size-3)`
:::

:::css-var[--label-line-height]{kind="font" type="Font size"}
Line height. Default: `var(--line-height-3)`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks. Colors are shown for `color="default"`.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Fill color" color="var(--solid-1)"}
Label background. Default: `var(--solid-1)`
:::

:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--background-1)"}
Text and icon color. Default: `var(--background-1)`
:::

:::css-var[--box-tone-solid]{kind="fill" type="Fill color" color="var(--solid-1)"}
Fill of the `solid` variant and of the status dot. Default: `var(--solid-1)`
:::

:::css-var[--box-tone-solid-text]{kind="text" type="Text color" color="var(--background-1)"}
Icon color inside the status dot. Default: `var(--background-1)`
:::

:::css-var[--box-tone-pale]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Fill of the `soft` and `status` variants. Default: `var(--interactive-1)`
:::

:::css-var[--box-tone-border]{kind="border" type="Border color" color="var(--border-a2)"}
Border of the `outline` and `status` variants. Default: `var(--border-a2)`
:::

:::css-var[--box-border-color]{kind="border" type="Border color" color="var(--border-a2)"}
Border color of the `outline` and `status` variants. Default: `var(--box-tone-border)`
:::

:::css-var[--box-border-width]{kind="size" type="Border width"}
Border width of the `outline` and `status` variants. Default: `1px`
:::

:::css-var[--box-radius]{kind="radius" type="Corner radius"}
Resolved corner radius of the label and the status dot. Default: `var(--label-radius)`
:::

:::css-var[--solid-1]{kind="fill" type="Fill color" color="var(--solid-1)"}
Neutral solid fill.
:::

:::css-var[--background-1]{kind="text" type="Text color" color="var(--background-1)"}
Text color on the neutral solid fill.
:::

:::css-var[--interactive-1]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Neutral pale fill.
:::

:::css-var[--border-a2]{kind="border" type="Border color" color="var(--border-a2)"}
Neutral border.
:::

:::css-var[--blue-9]{kind="fill" type="Fill color" color="var(--blue-9)"}
Base of the `blue` color; the other categorical colors use their own `--<hue>-9`.
:::

:::css-var[--radius-pill]{kind="radius" type="Corner radius"}
Corner radius of `shape="pill"`.
:::

:::css-var[--text-size-3]{kind="font" type="Font size"}
The default for `--label-font-size`. Default: `12px`
:::

:::css-var[--line-height-3]{kind="font" type="Font size"}
The default for `--label-line-height`. Default: `16px`
:::

:::css-var[--text-weight-medium]{kind="font" type="Font weight"}
Text weight.
:::
::::
