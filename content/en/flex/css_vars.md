# Flex

The CSS variables `Flex` reads and that can be overridden. `Flex` defines no variables of its own: the `gap` distance comes from the global spacing-scale tokens.

:::spoiler[How to override variables]
The `gap` prop picks a token from the scale, and `Flex` puts it into `gap: var(--…)` on the element itself. That is why the distance of a single `Flex` can be overridden with the `style` prop: an inline token value takes effect immediately. Override the token that the `gap` prop selects (for `gap="m"` that is `--gap`).

```tsx
<Flex gap="m" style={{ "--gap": "24px" } as React.CSSProperties}>
  <Box size={20} />
  <Box size={20} />
  <Box size={20} />
</Flex>
```

::playground{src=flex/FlexCssVarsDemo caption="The top row is the default gap=m, the bottom one is the same token overridden to 24px"}

Things to keep in mind:

- **The token is inherited by descendants.** Components inside that read the same token change together with the container: for example, `Button` uses `--gap` for the space between its icon and label.
- **A token on an ancestor affects every nested `Flex` and `Grid`.** Override it on the container itself if only that container should change.
- **A `gap` in `style` has no effect.** The `gap` property is always taken from the `gap` prop, so change either the prop or the token.
:::

## Global variables

Not defined by `Flex` itself: these are the global design tokens of the spacing scale. Changing a token changes the distance everywhere the matching `gap` value is used.

::::css-vars
:::css-var[--narrow-gap]{kind="gap" type="Gap size"}
Distance for `gap="xxs"`. Default: `2px`
:::

:::css-var[--xs-gap]{kind="gap" type="Gap size"}
Distance for `gap="xs"`. Default: `4px`
:::

:::css-var[--s-gap]{kind="gap" type="Gap size"}
Distance for `gap="s"`. Default: `6px`
:::

:::css-var[--gap]{kind="gap" type="Gap size"}
Distance for `gap="m"`. Default: `8px`
:::

:::css-var[--l-gap]{kind="gap" type="Gap size"}
Distance for `gap="l"`. Default: `12px`
:::

:::css-var[--xl-gap]{kind="gap" type="Gap size"}
Distance for `gap="xl"`. Default: `24px`
:::

:::css-var[--xxl-gap]{kind="gap" type="Gap size"}
Distance for `gap="xxl"`. Default: `36px`
:::
::::
