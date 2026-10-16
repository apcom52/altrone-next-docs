# NavigationList

CSS custom properties that `NavigationList` reads and that can be overridden.

:::spoiler[How to override variables]
The variables are set on the application root, so the `style` prop of the list is a reliable way to change them for one list: an inline value beats the defaults.

```tsx
<NavigationList
  style={{
    "--navigation-list-width": "220px",
    "--navigation-list-rounding": "12px",
    "--navigation-list-link-selected-text-color": "var(--danger-text-1)",
  } as React.CSSProperties}
>
  ...
</NavigationList>
```

::playground{src=navigationList/NavigationListCssVarsDemo caption="A narrow list, smaller corners and a red selected item"}

The hover highlight and the background of the selected link are separate variables: change both if you restyle the states.
:::

## Internal variables

Defined by the list itself.

::::css-vars
:::css-var[--navigation-list-width]{kind="size" type="Size"}
Width of the list. Default: `300px`
:::

:::css-var[--navigation-list-rounding]{kind="radius" type="Corner radius"}
List corner radius. Default: `24px`
:::

:::css-var[--navigation-list-padding]{kind="gap" type="Spacing"}
Padding around the list content. Default: `4px`
:::

:::css-var[--navigation-list-content-padding]{kind="gap" type="Spacing"}
Inset of the links inside the scroll area. Default: `4px`
:::

:::css-var[--navigation-list-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
List background. Default: `var(--glass-background-color)`
:::

:::css-var[--navigation-list-chrome-background-color]{kind="fill" type="Fill color" color="var(--background-1)"}
Header and footer background. Default: `var(--background-1)`
:::

:::css-var[--navigation-list-chrome-border-color]{kind="border" type="Border color" color="var(--border-1)"}
Border between the header or footer and the links. Default: `var(--border-1)`
:::

:::css-var[--navigation-list-group-text-size]{kind="font" type="Font size"}
Group title size. Default: `12px`
:::

:::css-var[--navigation-list-group-text-color]{kind="text" type="Text color" color="var(--text-1)"}
Group title color. Default: `var(--text-1)`
:::

:::css-var[--navigation-list-link-background-color]{kind="fill" type="Fill color" color="transparent"}
Link background. Default: `transparent`
:::

:::css-var[--navigation-list-link-backdrop-color]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Hover highlight. Default: `var(--interactive-a1)`
:::

:::css-var[--navigation-list-link-rounding]{kind="radius" type="Corner radius"}
Link and highlight corner radius. Default: `16px`
:::

:::css-var[--navigation-list-link-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Link text and icon color. Default: `var(--text-2)`
:::

:::css-var[--navigation-list-link-text-size]{kind="font" type="Font size"}
Link text size. Default: `14px`
:::

:::css-var[--navigation-list-link-icon-size]{kind="size" type="Size"}
Link icon size. Default: `18px`
:::

:::css-var[--navigation-list-link-selected-background-color]{kind="fill" type="Fill color" color="var(--background-1)"}
Background of the selected link. Default: `var(--background-1)`
:::

:::css-var[--navigation-list-link-selected-text-color]{kind="text" type="Text color" color="var(--accent-12)"}
Text color of the selected link. Default: `var(--accent-12)`
:::

:::css-var[--navigation-list-secondary-link-border-color]{kind="border" type="Border color" color="var(--border-1)"}
Line beside third-level links. Default: `var(--border-1)`
:::
::::

## Global variables

Not defined by the list itself, but they shape its look.

::::css-vars
:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
The default of `--navigation-list-background-color`.
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Text and icon color of a disabled link.
:::

:::css-var[--space-content]{kind="gap" type="Spacing"}
Padding of the header and the footer.
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Shadow"}
Shadow of the list.
:::
::::
