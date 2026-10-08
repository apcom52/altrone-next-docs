# Grid

`Grid` is a 12-column grid for two-dimensional layouts. `Grid` is the container, `Grid.Column` is a cell with a width and an offset. Spacing comes from the same `Gap` scale as [Flex](/en/components/layout/flex).

A column's width is a number out of 12, so the layout doesn't depend on pixels: a row whose `size` values add up to 12 fills the container completely, gaps included, with no drift at the right edge. `Grid` takes the full available width.

## Basic usage

Columns fill a row from left to right. If the `size` values in a row add up to less than 12, the remainder stays empty; if they add up to more, the columns that don't fit wrap onto the next row.

```tsx
<Grid gap="m" rowGap="s">
  <Grid.Column size={6}>Left half</Grid.Column>
  <Grid.Column size={6}>Right half</Grid.Column>
</Grid>
```

::playground{src=grid/GridBasicDemo caption="Three rows: 6 + 6, 4 + 4 + 4 and 3 + 9"}

## Offset

`offset` adds empty space before a column — from 0 to 11 columns. It centers a block or pushes it to the right edge without creating empty columns.

```tsx
<Grid gap="m" rowGap="s">
  <Grid.Column size={8} offset={2}>Centered</Grid.Column>
  <Grid.Column size={4} offset={8}>Pushed to the right</Grid.Column>
</Grid>
```

::playground{src=grid/GridOffsetDemo caption="A centered block and a block at the right edge"}

## Content-sized column

`size="auto"` is the default. Such a column takes the width of its content and shares with the other `auto` columns the free space left in the row after the columns with an explicit `size`. Buttons and icons take exactly the space they need, while inputs and content blocks take the rest.

```tsx
<Grid gap="s">
  <Grid.Column size="auto">
    <Button label="Filters" />
  </Grid.Column>
  <Grid.Column size={8}>
    <TextInput placeholder="Search…" />
  </Grid.Column>
  <Grid.Column size="auto">
    <Button label="Search" variant="submit" />
  </Grid.Column>
</Grid>
```

::playground{src=grid/GridAutoDemo}

## Row and column gaps

`gap` controls the distance between columns in a row, `rowGap` the distance between rows. The values are independent and come from one scale.

```tsx
<Grid gap="s" rowGap="xl">
  <Grid.Column size={6}>A</Grid.Column>
  <Grid.Column size={6}>B</Grid.Column>
  <Grid.Column size={6}>C</Grid.Column>
  <Grid.Column size={6}>D</Grid.Column>
</Grid>
```

::playground{src=grid/GridGapsDemo caption="A narrow gap between columns and a wide rowGap between rows"}

The `Gap` scale values and their sizes are in the "Gap scale" section of the [Flex](/en/components/layout/flex) page.

## A single row without wrapping

By default columns that don't fit wrap onto the next row. With `wrap={false}` all columns stay in one row even if they don't fit — the container can then be scrolled.

```tsx
<Grid gap="s" wrap={false}>
  {tabs.map((tab) => (
    <Grid.Column key={tab} size="auto">
      <Button label={tab} variant="text" size="s" />
    </Grid.Column>
  ))}
</Grid>
```

::playground{src=grid/GridNoWrapDemo caption="The row is wider than the container — scroll it horizontally"}

## Another HTML element

`Grid` and `Grid.Column` render a `<div>`. `asChild` moves the computed `className` and `style` onto the single child element, so the grid can be a list and a column can be its item.

```tsx
<Grid asChild gap="m" rowGap="m">
  <ul>
    {items.map((item) => (
      <Grid.Column asChild key={item.id} size={4}>
        <li>
          <Card {...item} />
        </li>
      </Grid.Column>
    ))}
  </ul>
</Grid>
```

:::note
`asChild` requires exactly one child element. If `children` is not a valid React element, the component returns `null` and logs an error to the console.
:::

## Grid props

:::prop[gap]{type="'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'" default="'none'"}
The distance between columns in a row.
:::

:::prop[rowGap]{type="'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'" default="'none'"}
The distance between rows. Independent of `gap`.
:::

:::prop[wrap]{type="boolean" default="true"}
Wraps the columns that don't fit onto the next row. With `false` all columns stay in one row.
:::

:::prop[asChild]{type="boolean" default="false"}
Moves the computed `className` and `style` onto the single child element instead of rendering a `<div>` — for example, a `ul` or a `section`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
A reference to the root DOM element. Accepted as a regular prop.
:::

The other `HTMLAttributes<HTMLElement>` attributes are passed to the root element.

## Grid.Column props

:::prop[size]{type="1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'" default="'auto'"}
The column's width in twelfths. `auto` sizes it to its content, plus a share of the row's free space.
:::

:::prop[offset]{type="0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11" default="0"}
How many columns to leave empty before this column.
:::

:::prop[asChild]{type="boolean" default="false"}
Moves the computed `className` and `style` onto the single child element instead of rendering a `<div>` — for example, an `li`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
A reference to the column's root DOM element. Accepted as a regular prop.
:::

The other `HTMLAttributes<HTMLElement>` attributes, except `size`, are passed to the column's root element.

## Related topics

- [Flex](/en/components/layout/flex) — layout along one axis and the shared gap scale
- [Accessibility](/en/foundations/accessibility) — the library-wide rules, including reading order and semantic elements
