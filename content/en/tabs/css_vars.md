# Tabs

The CSS variables `Tabs` reads and that can be overridden.

:::spoiler[How to override the variables]
The variables are defined on the application root, so the `style` prop of `Tabs` is a reliable way to change them for one strip: a value there beats both the defaults and the values set by `size`.

```tsx
<Tabs
  style={{
    "--tabs-background-color": "var(--accent-3)",
    "--tabs-item-active-background-color": "var(--accent-9)",
    "--tabs-item-rounding": "6px",
  } as React.CSSProperties}
>
  ...
</Tabs>
```

::playground{src=tabs/TabsCssVarsDemo caption="A colored strip and smaller tab rounding"}

The tab dimensions (`--tabs-item-size`, `--tabs-item-icon-size`, `--tabs-item-font-size`, the paddings) are set by the `size` prop; override them only if none of the five sizes fits, and change them together with the height of the strip itself. `--tabs-item-background-color` drives the tab states — don't override it, change `--tabs-item-hover-background-color` instead. The color and size of the badge belong to the badge itself and aren't configurable here.
:::

## Internal variables

Defined by the component itself. Size values are shown for `size="m"`; other sizes substitute their own.

::::css-vars
:::css-var[--tabs-background-color]{kind="fill" type="Fill color" color="var(--background-a2)"}
Strip background. Default: `var(--background-a2)`
:::

:::css-var[--tabs-border-color]{kind="border" type="Border color" color="var(--border-a1)"}
Strip border. Default: `var(--border-a1)`
:::

:::css-var[--tabs-item-hover-background-color]{kind="fill" type="Fill color" color="var(--interactive-a2)"}
Tab background on hover and focus. Default: `var(--interactive-a2)`
:::

:::css-var[--tabs-item-active-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Backdrop of the selected tab. Default: `var(--glass-background-color)`
:::

:::css-var[--tabs-item-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Tab text and icon color. Default: `var(--text-2)`
:::

:::css-var[--tabs-item-size]{kind="size" type="Size"}
Tab height. Default: `24px`
:::

:::css-var[--tabs-item-icon-size]{kind="size" type="Size"}
Tab icon size. Default: `16px`
:::

:::css-var[--tabs-item-font-size]{kind="font" type="Font size"}
Tab label size. Default: `14px`
:::

:::css-var[--tabs-item-rounding]{kind="radius" type="Corner radius"}
Rounding of the tab and its backdrop. Default: `12px`
:::

:::css-var[--tabs-item-padding-x]{kind="gap" type="Spacing"}
Horizontal padding inside a tab. Default: `8px`
:::

:::css-var[--tabs-item-padding-y]{kind="gap" type="Spacing"}
Vertical padding inside a tab. Default: `4px`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks.

::::css-vars
:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
The default for `--tabs-item-active-background-color`.
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Text and icon color of a disabled tab.
:::

:::css-var[--s-gap]{kind="gap" type="Spacing"}
Space between tabs.
:::

:::css-var[--space-inline]{kind="gap" type="Spacing"}
Space between the icon, the label and the badge.
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Shadow"}
Shadow of the selected tab's backdrop.
:::
::::
