# BottomNavigation

The CSS variables `BottomNavigation` reads and that can be overridden.

:::spoiler[How to override the variables]
The variables are defined on the application root, so the `style` prop of `BottomNavigation` is a reliable way to change them for one bar: a value there beats the defaults.

```tsx
<BottomNavigation
  style={{
    "--bottom-navigation-rounding": "12px",
    "--bottom-navigation-link-rounding": "8px",
    "--bottom-navigation-selected-link-text-color": "var(--danger-text-1)",
  } as React.CSSProperties}
>
  ...
</BottomNavigation>
```

::playground{src=bottomNavigation/BottomNavigationCssVarsDemo caption="Smaller rounding and a red selected section"}

The rounding of the link and of the backdrop is set by a single variable, `--bottom-navigation-link-rounding`, so change the rounding of the bar and of the link together: the link should sit concentrically inside the bar. The bar's own background and shadow come from global variables and aren't configurable here.
:::

## Internal variables

Defined by the component itself.

::::css-vars
:::css-var[--bottom-navigation-link-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Color of the link icon and label. Default: `var(--text-2)`
:::

:::css-var[--bottom-navigation-selected-link-text-color]{kind="text" type="Text color" color="var(--accent-11)"}
Color of the selected link icon and label. Default: `var(--accent-11)`
:::

:::css-var[--bottom-navigation-link-backdrop-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Backdrop under the selected link. Default: `var(--glass-background-color)`
:::

:::css-var[--bottom-navigation-link-icon-size]{kind="size" type="Size"}
Link icon size. Default: `24px`
:::

:::css-var[--bottom-navigation-link-text-size]{kind="font" type="Font size"}
Link label size. Default: `12px`
:::

:::css-var[--bottom-navigation-link-rounding]{kind="radius" type="Corner radius"}
Rounding of the link and its backdrop. Default: `18px`
:::

:::css-var[--bottom-navigation-link-min-width]{kind="size" type="Size"}
Minimum width of a link. Default: `64px`
:::

:::css-var[--bottom-navigation-rounding]{kind="radius" type="Corner radius"}
Rounding of the bar. Default: `22px`
:::

:::css-var[--bottom-navigation-padding]{kind="gap" type="Spacing"}
Space between the bar edge and the links. Default: `4px`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks.

::::css-vars
:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Bar background and the default for `--bottom-navigation-link-backdrop-color`.
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Shadow"}
Shadow of the bar and of the selected link's backdrop.
:::
::::
