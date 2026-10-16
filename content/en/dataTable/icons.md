# Data Table

The icons `DataTable` draws itself: sort arrows, the filter funnel, add and delete buttons for filters, the selection mode toggle, the row actions menu button and the boolean cell marks. All of them are replaced with a single `icons` prop. Icons you pass yourself (`icon` on `DataTable.Action` and `DataTable.RowAction`) are described in the [overview](/en/components/content/dataTable#row-selection-and-actions).

:::spoiler[How to replace the icons]
Pass to `icons` only the icons you want to change — the rest stay default. Each value is a `ReactElement`; a `lucide-react` icon adapts to the table size on its own.

```tsx
import { ChevronDown, ChevronUp, ListFilter } from "lucide-react";

<DataTable
  data={people}
  columns={columns}
  icons={{
    sortAsc: <ChevronUp />,
    sortDesc: <ChevronDown />,
    filter: <ListFilter />,
  }}
/>
```

::playground{src=dataTable/DataTableIconsDemo caption="The sort arrows and the filter funnel are replaced"}

An icon from another library needs an explicit size of about `16px` — see the [Icons](/en/foundations/icons) article.
:::

## Icons

::::icon-cards
:::icon-card[sortAsc]{icon="ArrowUp"}
Shows ascending sorting in a column header
:::

:::icon-card[sortDesc]{icon="ArrowDown"}
Shows descending sorting in a column header
:::

:::icon-card[filter]{icon="Funnel"}
The button that opens the filters in the header
:::

:::icon-card[addFilter]{icon="Plus"}
Adds a new rule in the filter builder
:::

:::icon-card[deleteFilter]{icon="Trash"}
Removes a rule from the filter builder
:::

:::icon-card[enableSelection]{icon="SquareCheckBig"}
Turns row selection mode on
:::

:::icon-card[disableSelection]{icon="Square"}
Turns row selection mode off
:::

:::icon-card[rowActions]{icon="Ellipsis"}
Opens the menu of collapsed row actions
:::

:::icon-card[booleanTrue]{icon="Check"}
Marks "yes" in a boolean column cell
:::

:::icon-card[booleanFalse]{icon="Minus"}
Marks "no" in a boolean column cell
:::
::::
