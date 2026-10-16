# Data Table

CSS custom properties that `DataTable` reads and that can be overridden.

:::spoiler[How to override variables]
`style` and `className` passed to `DataTable` land on the inner element with `role="table"`, not on the outer wrapper where the background, border and radius are read, and not on the header and footer. So it is more reliable to set the variables on an ancestor of the table — a plain wrapper with `style` works: the values inherit downward and beat the defaults.

```tsx
<div style={{ "--data-table-rounding": "8px" } as React.CSSProperties}>
  <DataTable data={people} columns={columns} />
</div>
```

::playground{src=dataTable/DataTableCssVarsDemo caption="A smaller radius, header text color and fill of even rows"}
:::

## Internal variables

Defined by the table itself.

::::css-vars
:::css-var[--data-table-background-color]{kind="fill" type="Fill color" color="var(--background-2)"}
Table background. Default: `var(--background-2)`
:::

:::css-var[--data-table-even-background-color]{kind="fill" type="Fill color" color="var(--background-1)"}
Fill of even rows. Default: `var(--background-1)`
:::

:::css-var[--data-table-selected-background-color]{kind="fill" type="Fill color" color="var(--accent-3)"}
Fill of the selected row. Default: `var(--accent-3)`
:::

:::css-var[--data-table-selected-border-color]{kind="border" type="Border color" color="var(--accent-a6)"}
Border of the selected row. Default: `var(--accent-a6)`
:::

:::css-var[--data-table-selected-text-color]{kind="text" type="Text color" color="var(--accent-12)"}
Text color of the selected row. Default: `var(--accent-12)`
:::

:::css-var[--data-table-header-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Background of the column headers and footer. Default: `var(--glass-background-color)`
:::

:::css-var[--data-table-header-text-color]{kind="text" type="Text color" color="var(--accent-12)"}
Text color of the headers and footer. Default: `var(--accent-12)`
:::

:::css-var[--data-table-border-color]{kind="border" type="Border color" color="var(--border-a1)"}
Thin border around the table. Default: `var(--border-a1)`
:::

:::css-var[--data-table-rounding]{kind="radius" type="Corner radius"}
Table corner radius. Default: `28px`
:::

:::css-var[--data-table-padding]{kind="gap" type="Spacing"}
Table inner padding. Default: `8px`
:::
::::

## Global variables

Not defined by the table, but they supply the defaults of its variables. Changing a token changes every table at once.

::::css-vars
:::css-var[--background-1]{kind="fill" type="Fill color" color="var(--background-1)"}
Fill of even rows.
:::

:::css-var[--background-2]{kind="fill" type="Fill color" color="var(--background-2)"}
Table background.
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Background of the headers and footer.
:::

:::css-var[--accent-3]{kind="fill" type="Fill color" color="var(--accent-3)"}
Fill of the selected row.
:::

:::css-var[--accent-12]{kind="text" type="Text color" color="var(--accent-12)"}
Text color of the headers and the selected row.
:::

:::css-var[--border-a1]{kind="border" type="Border color" color="var(--border-a1)"}
Table border.
:::
::::
