# Grid

## Grid is for two dimensions, Flex is for one

If you need to align elements along a single axis — in a row or a column — use [Flex](/en/components/layout/flex). `Grid` is for when columns must line up between rows: cards, a page layout, a form with several fields in a line. A live comparison is in the [Flex guidelines](/en/components/layout/flex/guidelines).

## Make column sizes add up to 12

A row whose `size` values add up to 12 fills the container completely. If they add up to less, an empty space is left on the right, and it looks like a mistake rather than a decision. If you need an empty edge, set it explicitly with `offset`.

::::good-bad
:::good
::playground{src=grid/GridGuidelineSumGoodDemo caption="8 + 4: the row is filled completely"}
:::

:::bad
::playground{src=grid/GridGuidelineSumBadDemo caption="5 + 4: an unexplained gap is left on the right"}
:::
::::

## Auto for buttons, an explicit size for fields

A button's width is set by its label, not by the grid. An `auto` column adapts to its content, while a column with a fixed `size` may end up narrower than the label — the button shrinks or spills out of the column. An input and content blocks, on the other hand, get an explicit `size` so they take the rest of the row.

::::good-bad
:::good
::playground{src=grid/GridGuidelineAutoGoodDemo caption="The button is content-sized, the field has an explicit width"}
:::

:::bad
::playground{src=grid/GridGuidelineAutoBadDemo caption="The button is squeezed into two columns out of twelve"}
:::
::::

## Set rowGap together with gap

`gap` controls only the distance between columns. If cards wrap onto a new row and `rowGap` is not set, the rows stick together. Usually `gap` and `rowGap` match — use different values only when that is intended.

::::good-bad
:::good
::playground{src=grid/GridGuidelineGapsGoodDemo caption="gap and rowGap are set together"}
:::

:::bad
::playground{src=grid/GridGuidelineGapsBadDemo caption="The rows stick together: rowGap is not set"}
:::
::::

## Change column sizes on narrow screens

Column proportions don't change with the screen width: `size={4}` always takes a third of the container, and on a phone such columns become too narrow. `Grid` doesn't react to the window width by itself, and `size` never changes implicitly — pick the set of sizes for the screen yourself, for example with `useBreakpoint()`.

```tsx
const { isMd } = useBreakpoint();

<Grid gap="m" rowGap="m">
  {cards.map((card) => (
    <Grid.Column key={card.id} size={isMd ? 4 : 12}>
      <Card {...card} />
    </Grid.Column>
  ))}
</Grid>
```

The `useBreakpoint()` values are known only after the first render in the browser, so until then `Grid` uses the set for a narrow screen.

## Don't use Grid for small alignments

A pair of elements that must be aligned to the edges or to the center is a job for `Flex`. A twelve-column grid for two buttons complicates the markup and makes the code harder to read.

## Accessibility

- `Grid` changes only the appearance: the order of columns in the DOM matches the reading order. `offset` shifts a column visually and does not change that order.
- For a list of cards use `ul` and `li` through `asChild`, not a set of `div`s.
- Don't rely on a column's position in the grid to convey meaning: it should also be clear from the sequence of elements in the markup.

The library-wide rules are in the [Accessibility](/en/foundations/accessibility) article.
