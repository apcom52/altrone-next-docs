# Progress

CSS custom properties that `Progress` reads and that can be overridden.

:::spoiler[How to override variables]
The variables are set on the root element of the bar, so the `style` prop is a reliable way to change them for one bar: an inline value beats the default and the values from the size classes.

```tsx
<Progress
  value={70}
  style={{
    "--progress-active-background-color": "var(--teal-9)",
    "--progress-text-color": "var(--teal-12)",
  } as React.CSSProperties}
/>
```

::playground{src=progress/ProgressCssVarsDemo caption="A teal fill and a 40px height"}

The background of the empty part comes from the `Box` the bar is built on and has no `--progress-*` variable of its own.
:::

## Internal variables

Defined by the bar itself.

::::css-vars
:::css-var[--progress-active-background-color]{kind="fill" type="Fill color" color="var(--accent-5)"}
Fill of the completed part. Default: `var(--accent-5)`
:::

:::css-var[--progress-text-color]{kind="text" type="Text color" color="var(--accent-12)"}
Label color. Default: `var(--accent-12)`
:::

:::css-var[--progress-height]{kind="size" type="Size"}
Bar height. Default: `32px`
:::

:::css-var[--progress-padding-inline]{kind="gap" type="Spacing"}
Horizontal padding of the label. Default: `8px`
:::
::::

## Global variables

Not defined by the bar, but they supply the defaults of its variables.

::::css-vars
:::css-var[--accent-5]{kind="fill" type="Fill color" color="var(--accent-5)"}
Fill of the completed part.
:::

:::css-var[--accent-12]{kind="text" type="Text color" color="var(--accent-12)"}
Label color.
:::
::::
