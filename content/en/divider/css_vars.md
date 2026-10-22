# Divider

The CSS variables `Divider` reads and that can be overridden.

:::spoiler[How to override the variables]
`--divider-color` is defined on the application root, so the `style` prop of `Divider` is a reliable way to change it for one line: a value there beats the default.

```tsx
<Divider style={{ "--divider-color": "var(--accent-9)" } as React.CSSProperties} />
```

::playground{src=divider/DividerCssVarsDemo caption="An accent-colored line"}

The thickness (`1px`) is fixed and can't be changed through variables. The inset of the line's ends and its outer margins come from the global `--l-gap` and `--xs-gap`. The inset is padding, so it stays inside a `Flex`; the outer margins are reset there by the default `disableInnerMargins`, and the `gap` of `Flex` spaces the line instead.
:::

## Internal variables

Defined by the component itself.

::::css-vars
:::css-var[--divider-color]{kind="fill" type="Fill color" color="var(--border-a1)"}
Line color. Default: `var(--border-a1)`
:::
::::

## Global variables

Not defined by the component itself, but they affect how it looks.

::::css-vars
:::css-var[--border-a1]{kind="fill" type="Fill color" color="var(--border-a1)"}
The default for `--divider-color`. Default: `var(--gray-a6)`
:::

:::css-var[--l-gap]{kind="gap" type="Spacing"}
A horizontal line is inset by half of it at each end; the side margins of a vertical line. Default: `12px`
:::

:::css-var[--xs-gap]{kind="gap" type="Spacing"}
The top and bottom margins of a horizontal line; the inset at the ends of a vertical line. Default: `4px`
:::
::::
