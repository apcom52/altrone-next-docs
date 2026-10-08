# Toolbar

CSS variables that `Toolbar` reads and that can be overridden.

:::spoiler[How to override the variables]
`className` and `style` go to the root element of the `Toolbar`, so variables set through `style` apply to this toolbar only. Inline variables win over the per-`size` values:

```tsx
<Toolbar
  style={{ "--toolbar-size": "72px", "--toolbar-inset": "24px" } as React.CSSProperties}
>
  ...
</Toolbar>
```

::playground{src=toolbar/ToolbarCssVarsDemo caption="A taller toolbar with wider insets and gaps"}

To change all toolbars at once, set the variables on a parent element or in your stylesheet. Set the variables on the `Toolbar` itself rather than on a parent: `size` assigns `--toolbar-size`, `--toolbar-inset`, `--toolbar-title-size`, `--toolbar-title-line-height` and `--toolbar-logo-size` on the root, which beats an inherited value.

What can't be overridden:

- **The balance of the sections.** The widths of `Toolbar.Leading` and `Toolbar.Trailing` are measured and set from script.
- **The shadow of the group pill.** It comes from the global `sticky` elevation role, not from a toolbar variable.
:::

## Internal variables

Defined by `Toolbar` itself.

::::css-vars
:::css-var[--toolbar-size]{kind="size" type="Size"}
Toolbar height (width when vertical). Default: `56px`
:::

:::css-var[--toolbar-inset]{kind="gap" type="Spacing"}
Padding along the edges of the toolbar. Default: `12px`
:::

:::css-var[--toolbar-inset-start]{kind="gap" type="Spacing"}
Padding at the start edge; set it separately to clear a sidebar. Default: `var(--toolbar-inset)`
:::

:::css-var[--toolbar-inset-end]{kind="gap" type="Spacing"}
Padding at the end edge. Default: `var(--toolbar-inset)`
:::

:::css-var[--toolbar-gap]{kind="gap" type="Spacing"}
Space between groups and regions. Default: `var(--gap)`
:::

:::css-var[--toolbar-background]{kind="fill" type="Fill color" color="var(--accent-a3)"}
Fill of the `solid` toolbar; not set by default, so the default translucent fill applies. Default: `var(--toolbar-glass-fill)`
:::

:::css-var[--toolbar-glass-fill]{kind="fill" type="Fill color" color="var(--accent-a3)"}
Accent-tinted fill of the `solid` toolbar. Default: `var(--color-header-backdrop)`
:::

:::css-var[--toolbar-glass-blur]{kind="blur" type="Blur"}
Backdrop blur of the `solid` toolbar. Default: `blur(32px) saturate(180%)`, light theme
:::

:::css-var[--toolbar-glass-rim]{kind="border" type="Border color" color="var(--glass-border-color)"}
Hairline on the edge of the `solid` toolbar facing the content. Default: `var(--glass-border-color)`
:::

:::css-var[--toolbar-glass-highlight]{kind="border" type="Border color" color="rgb(255 255 255 / 0.55)" dark="rgb(255 255 255 / 0.12)"}
Light highlight along the top edge of the `solid` toolbar. Default: `rgb(255 255 255 / 0.55)`, light theme
:::

:::css-var[--toolbar-pill-fill]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Fill of the group pill. Default: `var(--glass-background-color)`
:::

:::css-var[--toolbar-pill-blur]{kind="blur" type="Blur"}
Backdrop blur of the group pill. Default: `var(--glass-effects)`
:::

:::css-var[--toolbar-title-size]{kind="font" type="Font size"}
Font size of `Toolbar.Title`. Default: `var(--text-size-5)`
:::

:::css-var[--toolbar-title-line-height]{kind="font" type="Line height"}
Line height of `Toolbar.Title`. Default: `var(--line-height-5)`
:::

:::css-var[--toolbar-logo-size]{kind="size" type="Size"}
Width and height of `Toolbar.Logo`. Default: `32px`
:::
::::

## Global variables

Not defined by `Toolbar`: global design tokens it reads directly.

::::css-vars
:::css-var[--gap]{kind="gap" type="Spacing"}
The value `--toolbar-gap` resolves to. Default: `8px`
:::

:::css-var[--xs-gap]{kind="gap" type="Spacing"}
Padding inside the group pill and around the title and separators. Default: `4px`
:::

:::css-var[--narrow-gap]{kind="gap" type="Spacing"}
Space between actions inside a group. Default: `2px`
:::

:::css-var[--radius-pill]{kind="radius" type="Corner radius"}
Corner radius of the group pill. Default: `9999px`
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
The color `--toolbar-pill-fill` resolves to. Default (light theme): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--glass-effects]{kind="blur" type="Blur"}
The blur `--toolbar-pill-blur` resolves to. Default (light theme): `blur(64px) saturate(180%)`
:::

:::css-var[--glass-border-color]{kind="border" type="Border color" color="var(--glass-border-color)"}
The color `--toolbar-glass-rim` resolves to. Default (light theme): `color(display-p3 0 0 0 / 0.08)`
:::

:::css-var[--color-header-backdrop]{kind="fill" type="Fill color" color="var(--accent-a3)"}
The color `--toolbar-glass-fill` resolves to; follows `Application`'s `accent`. Default: `var(--accent-a3)`
:::

:::css-var[--border-1]{kind="border" type="Border color" color="var(--gray-6)"}
Color of the `line` separator. Default (light theme): `var(--gray-6)`
:::

:::css-var[--text-12]{kind="text" type="Text color" color="var(--text-12)"}
Color of `Toolbar.Title`.
:::

:::css-var[--text-weight-bold]{kind="font" type="Font weight"}
Font weight of `Toolbar.Title`. Default: `600`
:::

:::css-var[--gray-a8]{kind="fill" type="Fill color" color="var(--gray-a8)"}
Start color of the `showBackdrop` gradient scrim.
:::

:::css-var[--elevation-sticky-shadow]{kind="shadow" type="Shadow"}
Shadow of the group pill and of a `sticky` `solid` toolbar. Default: `var(--shadow-1)`
:::

:::css-var[--elevation-sticky-z-index]{kind="size" type="Size"}
`z-index` of a `sticky` toolbar. Default: `var(--level-sticky)`
:::
::::
