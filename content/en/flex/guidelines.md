# Flex

## Use Flex and a token, not your own layout with pixels

`gap="m"` is tied to the design system: the spacing stays consistent with the rest of the interface and changes together with it. A hand-made `div` with `display: flex` and a pixel value falls out of the rhythm and ignores the scale.

::::good-bad
:::good
```tsx
<Flex gap="m">
  <Button label="Cancel" />
  <Button label="Save" />
</Flex>
```
:::

:::bad
```tsx
<div style={{ display: "flex", gap: 12 }}>
  <Button label="Cancel" />
  <Button label="Save" />
</div>
```
:::
::::

## Space between elements is `gap`, not outer margins

Inside `Flex` the outer margins of direct children are zeroed, so a `margin` on a child changes nothing. Don't try to adjust the distance with the margins of individual elements — set it once, on the container.

::::good-bad
:::good
```tsx
<Flex gap="l">
  <Button label="Back" />
  <Button label="Next" />
</Flex>
```
:::

:::bad
```tsx
<Flex>
  <Button label="Back" style={{ marginRight: 16 }} />
  <Button label="Next" />
</Flex>
```
:::
::::

## Spread two groups to the edges, not three

`justify="between"` reads cleanly with two elements: a title and an action. Three elements drift apart across the whole width and stop looking related — group them into two blocks or use `Grid`.

::::good-bad
:::good
::playground{src=flex/FlexGuidelineBetweenGoodDemo caption="Two groups: a title and an action"}
:::

:::bad
::playground{src=flex/FlexGuidelineBetweenBadDemo caption="Three actions drifted apart across the width"}
:::
::::

## Flex is for one dimension, Grid is for two

`Flex` aligns elements along one axis. If cards must form even columns and rows, `Flex` with `wrap` produces a ragged grid: each card's width depends on its content, and the columns don't match between rows. Use [Grid](/en/components/layout/grid) for that layout.

::::good-bad
:::good
::playground{src=flex/FlexGuidelineGridGoodDemo caption="Grid: columns line up in every row"}
:::

:::bad
::playground{src=flex/FlexGuidelineGridBadDemo caption="Wrapping Flex: the columns are not aligned"}
:::
::::

## Use real elements for lists and navigation

A container that is a list or navigation by meaning should be a `ul`, `nav` or `section`, not a set of `div`s. With `asChild`, `Flex` keeps the markup intact, and screen readers see the structure.

::::good-bad
:::good
```tsx
<Flex asChild orientation="vertical" gap="s">
  <ul>
    <li>Profile</li>
    <li>Billing</li>
  </ul>
</Flex>
```
:::

:::bad
```tsx
<Flex orientation="vertical" gap="s">
  <div>Profile</div>
  <div>Billing</div>
</Flex>
```
:::
::::

## Don't nest deeper than you need to

Three levels of nesting are normal. If a fourth appears inside a `Flex`, extract the nested fragment into its own component: the layout becomes easier to read, and the repeated piece can be reused.

## Accessibility

- `Flex` changes only the appearance: the order of elements in the DOM matches the reading order. Don't rely on the layout to change the logical order — change the order in the markup.
- For lists, navigation and sections use semantic elements through `asChild`, not `div`.
- Prefer `wrap` to horizontal scrolling: when the page is zoomed and on narrow screens the content reflows instead of running off the edge.

The library-wide rules are in the [Accessibility](/en/foundations/accessibility) article.
