# Data Table

## Pick the column type by what the data means

A column type is more than looks. It decides locale-aware formatting, sorting and the set of filter rules: numbers and dates get "greater", "less" and "between", strings get "contains". If you turn an amount or a date into a ready string, sorting becomes alphabetical and filters become substring matches.

::::good-bad
:::good
::playground{src=dataTable/DataTableGuidelineTypesGoodDemo caption="The amount and the date stay values — sorting and filters work by meaning"}
:::

:::bad
::playground{src=dataTable/DataTableGuidelineTypesBadDemo caption="Ready-made strings sort as text and the “greater than” filter is gone"}
:::
::::

## Keep one or two actions visible

A row has little room, and every icon button is one more target to find and not miss. Keep the main action visible, move the rest into the menu with `collapsed`, and separate irreversible ones from the frequent ones.

::::good-bad
:::good
::playground{src=dataTable/DataTableGuidelineRowActionsGoodDemo caption="One frequent action in view, deletion in the menu"}
:::

:::bad
::playground{src=dataTable/DataTableGuidelineRowActionsBadDemo caption="Five similar icons: it's unclear which is which, and “Delete” sits next to “Edit”"}
:::
::::

## Accessibility

- Actions without a visible label (`showLabel={false}`) still get an `aria-label` from `label` — always give a meaningful `label`.
- Headers of sortable columns are keyboard accessible; don't drop `sortable` where users need to compare values.
- Don't convey meaning by color alone: accompany a status in a `custom` cell with text, like "Active" in the label.
- For a table updated from outside, set `getRowId` — otherwise an open actions menu can jump to a different row.
