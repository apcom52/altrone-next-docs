# Breadcrumbs

The CSS variables `Breadcrumbs` reads and that can be overridden.

:::spoiler[How to override the variables]
The variables are defined on the application root, so the `style` prop of `Breadcrumbs` is a reliable way to change them for one set of crumbs: a value there beats the defaults.

```tsx
<Breadcrumbs
  style={{
    "--breadcrumbs-text-size": "16px",
    "--breadcrumbs-item-text-color": "var(--text-1)",
    "--breadcrumbs-current-item-text-color": "var(--danger-text-1)",
  } as React.CSSProperties}
>
  ...
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsCssVarsDemo caption="A larger font, dark crumbs and a red current page"}

Change the hover color (`--breadcrumbs-item-hover-text-color`) together with the regular crumb color. The current page doesn't react to hover and always keeps its color. The bold weight of the current crumb and the spacing between elements are set by the component itself and can't be overridden.
:::

## Internal variables

Defined by the component itself.

::::css-vars
:::css-var[--breadcrumbs-item-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Crumb text and icon color. Default: `var(--text-2)`
:::

:::css-var[--breadcrumbs-item-hover-text-color]{kind="text" type="Text color" color="var(--accent-11)"}
Crumb color on hover and focus. Default: `var(--accent-11)`
:::

:::css-var[--breadcrumbs-current-item-text-color]{kind="text" type="Text color" color="var(--accent-12)"}
Color of the current page. Default: `var(--accent-12)`
:::

:::css-var[--breadcrumbs-text-size]{kind="font" type="Font size"}
Crumb text size. Default: `var(--text-size-4)`
:::

:::css-var[--breadcrumbs-icon-size]{kind="size" type="Size"}
Crumb icon size. Default: `16px`
:::

:::css-var[--breadcrumbs-separator-color]{kind="text" type="Text color" color="var(--border-3)"}
Separator color. Default: `var(--border-3)`
:::

:::css-var[--breadcrumbs-separator-size]{kind="size" type="Size"}
Separator size. Default: `16px`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks.

::::css-vars
:::css-var[--l-gap]{kind="gap" type="Spacing"}
Space between crumbs.
:::

:::css-var[--gap]{kind="gap" type="Spacing"}
Space between a crumb and its separator.
:::

:::css-var[--s-gap]{kind="gap" type="Spacing"}
Space between the icon and the text of a crumb.
:::
::::
