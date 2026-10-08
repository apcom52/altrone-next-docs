# Grid

The CSS variables `Grid` reads and that can be overridden. `Grid` has no overridable variables of its own: the `gap` and `rowGap` distances come from the global spacing-scale tokens.

:::spoiler[How to override variables]
The `gap` and `rowGap` props pick tokens from the scale, and `Grid` puts them into the distances between columns and rows on the element itself. That is why the spacing of a single grid can be overridden with the `style` prop: an inline token value takes effect immediately. Override the token that the prop selects (for `gap="m"` that is `--gap`).

```tsx
<Grid gap="m" rowGap="s" style={{ "--gap": "24px" } as React.CSSProperties}>
  <Grid.Column size={6}>A</Grid.Column>
  <Grid.Column size={6}>B</Grid.Column>
</Grid>
```

::playground{src=grid/GridCssVarsDemo caption="The distance between columns is the --gap token overridden to 24px"}

Things to keep in mind:

- **The token is inherited by descendants.** Components inside the columns that read the same token change together with the grid: for example, `Button` uses `--gap` for the space between its icon and label.
- **A token on an ancestor affects every nested `Flex` and `Grid`.** Override it on the grid itself if only that grid should change.

What can't be overridden:

- **`--grid-column-spacing` and `--grid-row-spacing`.** `Grid` sets them with an inline style from the `gap` and `rowGap` props, so change the prop or the token.
- **`--grid-column-size` and `--grid-column-offset`.** `Grid.Column` computes them from `size` and `offset` and sets them with an inline style.
:::

## Global variables

Not defined by `Grid` itself: these are the global design tokens of the spacing scale. Changing a token changes the distance everywhere the matching `gap` or `rowGap` value is used.

::::css-vars
:::css-var[--narrow-gap]{kind="gap" type="Gap size"}
Distance for the `xxs` value. Default: `2px`
:::

:::css-var[--xs-gap]{kind="gap" type="Gap size"}
Distance for the `xs` value. Default: `4px`
:::

:::css-var[--s-gap]{kind="gap" type="Gap size"}
Distance for the `s` value. Default: `6px`
:::

:::css-var[--gap]{kind="gap" type="Gap size"}
Distance for the `m` value. Default: `8px`
:::

:::css-var[--l-gap]{kind="gap" type="Gap size"}
Distance for the `l` value. Default: `12px`
:::

:::css-var[--xl-gap]{kind="gap" type="Gap size"}
Distance for the `xl` value. Default: `24px`
:::

:::css-var[--xxl-gap]{kind="gap" type="Gap size"}
Distance for the `xxl` value. Default: `36px`
:::
::::
