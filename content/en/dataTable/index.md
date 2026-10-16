# Data Table

`DataTable` is a table for large amounts of data: sorting, a filter builder, pagination, row selection, row actions and column resizing are all built in. A column is described by a type (`string`, `currency`, `date`, `boolean` …), and the type decides both how a cell is displayed and which filtering rules it gets — localized to the application language.

## Basic usage

Pass `data` and `columns`. Each column is an `accessor` (a key of the row), a `label` and a `type`. If the order of rows can change from outside (a refetch, a websocket push), add `getRowId` — then per-row state, such as an open actions menu, follows the row itself instead of its position in the array.

```tsx
type Person = { id: number; name: string; role: string; salary: number; active: boolean; joined: string };

<DataTable<Person>
  data={people}
  getRowId={(person) => String(person.id)}
  rowsPerPage={5}
  columns={[
    { accessor: 'name', label: 'Name', type: 'string' },
    { accessor: 'role', label: 'Role', type: 'string' },
    { accessor: 'salary', label: 'Salary', type: 'currency', options: { currency: 'USD' } },
    { accessor: 'active', label: 'Active', type: 'boolean' },
    { accessor: 'joined', label: 'Joined', type: 'date' },
  ]}
/>
```

::playground{src=dataTable/DataTableBasicDemo caption="Column types format values themselves: currency, booleans and dates"}

## Column types

The column type is set in `type` and decides how a value looks in a cell and which filter rules are available for it. By default any column is a text column.

| Column type | What it shows | Additional options |
| ----------- | ------------- | ------------------ |
| `string`, `text` | Text | — |
| `number` | Number | `digitsAfterPoint` |
| `currency` | Monetary amount | `currency`, `currencyAccessor` |
| `date` | Date | `level`, `format` |
| `boolean` | Checkmark | — |
| `password` | Masked value | — |
| `select` | Data list | — |
| `link` | Link | `hrefTransformer`, `textTransformer` |
| `color` | Color marker | `colorPresets` |
| `custom` | Custom cell | `renderReadMode`, `renderLoadingMode` |

Additional options are passed in the `options` field of the column definition:

```tsx
const columns: DataTableColumn<Person>[] = [
  // Number: digits after the decimal point
  { accessor: 'rating', label: 'Rating', type: 'number', options: { digitsAfterPoint: 1 } },

  // Monetary amount: a fixed currency...
  { accessor: 'salary', label: 'Salary', type: 'currency', options: { currency: 'USD' } },
  // ...or a currency taken from another field of the row
  { accessor: 'price', label: 'Price', type: 'currency', options: { currencyAccessor: 'currencyCode' } },

  // Date: precision (day, month, year) and output format
  { accessor: 'joined', label: 'Joined', type: 'date', options: { level: 'month', format: 'MMM yyyy' } },

  // Link: the address and the text are computed from the value and the row
  {
    accessor: 'website',
    label: 'Website',
    type: 'link',
    options: {
      hrefTransformer: (value) => String(value),
      textTransformer: (value, person) => `${person.name}'s site`,
    },
  },

  // Color marker: a set of ready-made colors in the picker
  { accessor: 'color', label: 'Color', type: 'color', options: { colorPresets: ['#ef4444', '#22c55e', '#3b82f6'] } },
];
```

The options of the `custom` column are described in "Custom cell content".

## Sorting and filters

`sortable` turns on sorting by clicking the header. `filterable` adds the column to the filter builder in the header: `true` picks a filter from the column `type`, and an explicit value (`filterable: 'select'`) sets it directly. Use `defaultSort` and `defaultFilters` for the initial state.

```tsx
<DataTable
  data={people}
  columns={columns}
  defaultSort={{ field: 'salary', direction: 'desc' }}
  defaultFilters={[{ id: 'active', value: { rule: 'positive' } }]}
/>
```

::playground{src=dataTable/DataTableSortFilterDemo caption="Click a header or open the filters in the toolbar"}

### How a filter is shaped

Each filter is an object with a column identifier and a condition:

```ts
{
  id: 'salary',                    // the column accessor
  value: {
    rule: 'between',               // the comparison rule
    value: [50000, 100000],        // what to compare with
  },
}
```

| Field | Meaning |
| ----- | ------- |
| `id` | Equals the `accessor` of the column the filter belongs to |
| `value.rule` | The comparison rule. The set of rules depends on the column type |
| `value.value` | The value to compare with. A `[from, to]` pair for ranges, not needed for `empty` and `notEmpty` |
| `value.level` | Dates only: comparison precision — `day`, `month` or `year` |

The rules of each type live in ready-made enums, so you don't write strings by hand:

| Column type | Enum |
| ----------- | ---- |
| Text | `StringFilterRules` |
| Number | `NumberFilterRules` |
| Date | `DateFilterRules` |
| Checkmark | `BooleanFilterRules` |
| Data list | `SelectFilterRules` |
| Color marker | `ColorFilterRules` |
| Masked value | `PasswordFilterRules` |
| Array of values | `ArrayFilterRules` |

```tsx
import { NumberFilterRules } from 'altrone-ui';

<DataTable
  data={people}
  columns={columns}
  defaultFilters={[{ id: 'salary', value: { rule: NumberFilterRules.gte, value: 50000 } }]}
/>
```

## Controlled state

The current page, sorting and filters can be managed from your own code: pass `page`, `sort` and `filters`, and receive changes in `onPageChange`, `onSortChange` and `onFilterChange`. The table renders what it is given and only asks for changes. This makes it easy to keep the state in the address bar or an external store — a link opens the table right on the needed page with the needed filters.

```tsx
const [page, setPage] = useState(1);
const [sort, setSort] = useState<Sorting | undefined>();
const [filters, setFilters] = useState<DataTableFilter[]>([]);

<DataTable
  data={people}
  columns={columns}
  page={page}
  sort={sort ?? null}
  filters={filters}
  onPageChange={setPage}
  onSortChange={setSort}
  onFilterChange={setFilters}
/>
```

::playground{src=dataTable/DataTableControlledDemo caption="The buttons change the state from outside, the table follows"}

Good to know:

- **Independence.** Each of the three is controlled separately: you can drive only `page` and leave sorting and filters inside the table.
- **Numbering.** `page` counts from one, while `defaultPage` counts from zero.
- **Sorting without a value.** `sort={null}` means sorting is controlled from outside and nothing is applied right now.
- **User actions only.** Callbacks fire when the user changes something, not when the table mounts.
- **Page reset.** When `page` is controlled from outside, the table doesn't return to the first page after filters or sorting change — you do that yourself, for example in `onFilterChange`.

## Row selection and actions

The `selectable` prop turns on row selection: a selection mode toggle appears in the header, and actions receive the list of selected rows. `actions` accepts one `DataTable.Action`, an array, or a function that is passed `{ selectableMode, selectedItems }`.

```tsx
<DataTable
  data={people}
  columns={columns}
  selectable
  mode={mode}
  onModeChange={setMode}
  actions={({ selectedItems }) => (
    <DataTable.Action
      label={`Remove ${selectedItems.length} selected`}
      danger
      disabled={selectedItems.length === 0}
      onClick={() => removePeople(selectedItems)}
    />
  )}
/>
```

::playground{src=dataTable/DataTableSelectionDemo caption="Turn on selection mode, tick some rows and remove them"}

### Placing actions in the header

The table header is a `Toolbar`. Everything you pass to `actions` lands in the left section next to the built-in selection toggle and filters. To put content elsewhere, wrap it in `Toolbar.Leading` (left), `Toolbar.Center` (middle) or `Toolbar.Trailing` (right).

```tsx
<DataTable
  data={people}
  columns={columns}
  actions={[
    <Toolbar.Leading key="add">
      <DataTable.Action label="Add person" icon={<UserPlus />} onClick={addPerson} />
    </Toolbar.Leading>,
    <Toolbar.Trailing key="export">
      <DataTable.Action label="Export" icon={<Download />} showLabel={false} onClick={exportPeople} />
      <DataTable.Action label="Refresh" icon={<RefreshCw />} showLabel={false} onClick={refresh} />
    </Toolbar.Trailing>,
  ]}
/>
```

### Row actions

Actions on a single row go to `rowActions` — one `DataTable.RowAction`, an array, or a function receiving `{ row, rowIndex, selected }`. Actions with `collapsed` fold into a "…" menu, the rest stay buttons.

```tsx
<DataTable
  data={people}
  columns={columns}
  getRowId={(person) => String(person.id)}
  rowActions={({ row }) => [
    <DataTable.RowAction key="view" label="View" icon={<Eye />} showLabel={false} onClick={() => open(row)} />,
    <DataTable.RowAction key="edit" label="Edit" icon={<Pencil />} collapsed onClick={() => edit(row)} />,
    <DataTable.RowAction key="delete" label="Delete" icon={<Trash />} danger collapsed onClick={() => remove(row)} />,
  ]}
/>
```

::playground{src=dataTable/DataTableRowActionsDemo caption="“View” is a button, the other actions live in the menu"}

## Custom cell content

A `type: 'custom'` column hands the cell markup to you: `renderReadMode` receives `{ value, item }`, and the optional `renderLoadingMode` draws a placeholder while loading.

```tsx
{
  accessor: 'active',
  label: 'Status',
  type: 'custom',
  options: {
    renderReadMode: ({ value }) => (
      <Label variant="status" shape="pill" color={value ? 'success' : 'warning'}>
        {value ? 'Active' : 'On leave'}
      </Label>
    ),
  },
}
```

::playground{src=dataTable/DataTableCustomCellDemo caption="An avatar with a name and a status label instead of plain text"}

## Loading data

`mode="loading"` replaces cell content with skeletons and disables the actions. Skeletons are drawn in the cells of the rows you pass, so hand over a few placeholder rows while loading.

```tsx
<DataTable data={loading ? placeholders : rows} columns={columns} mode={loading ? 'loading' : 'read'} />
```

::playground{src=dataTable/DataTableLoadingDemo caption="Two seconds of skeletons, then the data"}

## Column width

`width` sets a column width in pixels. When the columns don't fit, the table gets its own horizontal scroll — the header moves together with the body and the page doesn't stretch. `resizableColumns` lets users change widths by dragging the header edge; a single column can opt out with `resizable: false`.

```tsx
<DataTable
  data={people}
  resizableColumns
  columns={[
    { accessor: 'id', label: 'ID', type: 'number', width: 80, resizable: false },
    { accessor: 'name', label: 'Name', type: 'string', width: 220 },
  ]}
/>
```

::playground{src=dataTable/DataTableResizableDemo caption="Drag a header edge, ID stays fixed"}

## Hidden columns

A column can be taken off the screen without removing it from the definition — handy when visibility is toggled by the user or a setting. Set `visible: false` on a column, and it isn't displayed, doesn't take part in sorting and doesn't appear in filters.

```tsx
{ accessor: 'salary', label: 'Salary', type: 'currency', visible: canSeeSalary }
```

## Footer

The bottom of the table holds the pagination bar. If there is little data and pages aren't needed, turn it off with `showFooter={false}` and show all rows by setting a larger `rowsPerPage`.

```tsx
<DataTable data={people} columns={columns} showFooter={false} rowsPerPage={100} />
```

## Empty table

When there are no rows to show, a "no data" placeholder replaces the table body. If you show the empty state yourself, turn the built-in one off with `showEmptyBanner={false}`.

```tsx
<DataTable data={[]} columns={columns} showEmptyBanner={false} />
```

## Props

:::prop[data*]{type="T[]"}
The table rows.
:::

:::prop[columns*]{type="DataTableColumn<T>[]"}
Column definitions: `accessor`, `label`, `type`, `width`, `sortable`, `filterable`, `visible`, `resizable`, `options`.
:::

:::prop[getRowId]{type="(row: T, index: number) => string"}
A stable row identifier. Without it a row's identity is its position in the array, so per-row state stays at the old position when the data is reordered from outside.
:::

:::prop[mode]{type="'loading' | 'read' | 'select'" default="'read'"}
Table mode: `loading` shows skeletons, `select` turns on row checkboxes.
:::

:::prop[rowsPerPage]{type="number" default="20"}
Number of rows per page.
:::

:::prop[selectable]{type="boolean" default="false"}
Enables row selection and the selection mode toggle in the header.
:::

:::prop[showFooter]{type="boolean" default="true"}
Shows the bottom bar with pagination.
:::

:::prop[showEmptyBanner]{type="boolean" default="true"}
Shows a placeholder when there are no rows to display.
:::

:::prop[resizableColumns]{type="boolean" default="false"}
Lets users resize columns by dragging.
:::

:::prop[icons]{type="Partial<DataTableIconSet>"}
Replacement table icons. See the Icons tab.
:::

:::prop[actions]{type="ReactNode | ((ctx: { selectableMode: boolean; selectedItems: T[] }) => ReactNode)"}
Header content: `DataTable.Action` or any elements, optionally in `Toolbar.Leading`, `Toolbar.Center`, `Toolbar.Trailing`.
:::

:::prop[rowActions]{type="DataTable.RowAction | DataTable.RowAction[] | ((ctx: { row: T; rowIndex: number; selected: boolean }) => …)"}
Row actions in a separate column on the right. `collapsed` actions fold into a menu.
:::

:::prop[defaultPage]{type="number" default="0"}
Initial page (zero-based) of an uncontrolled table.
:::

:::prop[defaultSort]{type="{ field: string; direction: 'asc' | 'desc' }"}
Initial sorting of an uncontrolled table.
:::

:::prop[defaultFilters]{type="DataTableFilter[]"}
Initial filters of an uncontrolled table.
:::

:::prop[page]{type="number"}
Controlled current page, one-based. Pairs with `onPageChange`.
:::

:::prop[sort]{type="Sorting | null"}
Controlled sorting; `null` means no sorting. Pairs with `onSortChange`.
:::

:::prop[filters]{type="DataTableFilter[]"}
Controlled filters. Pairs with `onFilterChange`.
:::

:::prop[onPageChange]{type="(page: number, event?: MouseEvent) => void"}
The page changed; one-based. `event` is absent for a programmatic change, such as an automatic page reset after a filter change.
:::

:::prop[onSortChange]{type="(sort?: Sorting, event?: MouseEvent) => void"}
The sorting changed; `undefined` when it was cleared.
:::

:::prop[onFilterChange]{type="(filters: DataTableFilter[], event?: MouseEvent) => void"}
The filters changed; always an array, empty when there are none.
:::

:::prop[onModeChange]{type="(mode: DataTableMode, event: MouseEvent) => void"}
The mode changed, for example on entering selection mode.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the table's root element.
:::

## Related topics

- [Toolbar](/en/components/layout/toolbar) — the container the table header is built on
- [Dropdown](/en/components/overlays/dropdown) — the menu that `collapsed` row actions fold into
- [Scrollable](/en/components/layout/scrollable) — the scrolling the table uses for wide data
