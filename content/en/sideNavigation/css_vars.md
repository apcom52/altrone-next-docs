# SideNavigation

The CSS variables `SideNavigation` reads and that can be overridden.

:::spoiler[How to override the variables]
The variables are defined on the application root, so the `style` prop of `SideNavigation` is a reliable way to change them for one outline: a value there beats the defaults.

```tsx
<SideNavigation
  title="On this page"
  style={{
    "--side-navigation-link-text-color": "var(--text-1)",
    "--side-navigation-link-active-text-color": "var(--danger-text-1)",
    "--side-navigation-link-text-size": "16px",
  } as React.CSSProperties}
>
  ...
</SideNavigation>
```

::playground{src=sideNavigation/SideNavigationCssVarsDemo caption="Darker links, a red accent and a larger font"}

The color set in `--side-navigation-link-active-text-color` is used both for the highlighted link and for a link on hover and focus, so change it deliberately. The title takes its color from `--side-navigation-link-text-color`, while its size and weight are set by the component itself and can't be overridden.
:::

## Internal variables

Defined by the component itself.

::::css-vars
:::css-var[--side-navigation-link-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Color of the links and the title. Default: `var(--text-2)`
:::

:::css-var[--side-navigation-link-active-text-color]{kind="text" type="Text color" color="var(--accent-11)"}
Color of the highlighted link and of a link on hover. Default: `var(--accent-11)`
:::

:::css-var[--side-navigation-link-text-size]{kind="font" type="Font size"}
Link text size. Default: `14px`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks.

::::css-vars
:::css-var[--gap]{kind="gap" type="Spacing"}
Space between the links, between the title and the list, and the horizontal padding of the outline.
:::

:::css-var[--l-gap]{kind="gap" type="Spacing"}
Indent of nested links and the top margin of the list.
:::

:::css-var[--xl-gap]{kind="gap" type="Spacing"}
Vertical padding around the outline.
:::
::::
