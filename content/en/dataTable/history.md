# Data Table

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="DataTable" name="DataTable" open="true"}
**4.0**

- New design, a larger table corner radius.
- New rendering engine — TanStack Table.
- The column type decides how cells are displayed and which filter rules apply; a `custom` type was added.
- A data loading mode with skeletons and column resizing (`resizableColumns`).
- Fully controlled state: `page`, `sort` and `filters` with the `onPageChange`, `onSortChange` and `onFilterChange` callbacks.
- The header moved onto `Toolbar`, and `actions` are placed into the Leading/Center/Trailing sections.
- Wide tables got their own horizontal scroll instead of stretching the page.
- Added `getRowId`; `renderRowActions` was replaced by `rowActions`, and `RowAction.onClick` receives a native `MouseEvent`.
- Removed the first/last page buttons from the pagination.
- The column `visible` prop was renamed to `enabled`.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/dataTable-3.png" name="DataTable"}
**3.5**

- Added `RowActions`/`RowAction` and the `renderRowActions` prop.
- Added `showEmptyBanner` — a placeholder instead of an empty table.

**3.3**

- Added filters by date, month and year.
- Added `defaultFilters`, `defaultSort` and the `onSortChange`, `onPageChange` callbacks.

**3.2**

- Added the column `type`, which decides the default filter and rendering with locale support.

**3.0**

- New design.
- Filtering grew into a complex query builder, and sorting is turned on by clicking a header.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/dataTable-2.png" name="DataTable"}
**2.0**

- Search and pagination moved to the separate `Search` and `Pagination` components.
- Added the `visible` prop for columns and a checkbox filter.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/dataTable-1.png" name="DataTable"}
**1.3**

- Added a row selection mode with its own bulk actions.

**1.2**

- Added striped row fill (`striped`) and the first data-type generics.

**1.1**

- Added actions in the table header (`DataTableAction`).

**1.0**

- Added to the library — a table for showing many rows with sorting and pagination.
:::
