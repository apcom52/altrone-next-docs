# Data Table

CSS-переменные, которые читает `DataTable` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
`style` и `className`, переданные `DataTable`, попадают на внутренний элемент с `role="table"`, а не на внешнюю обёртку, где читаются фон, рамка и скругление, и не на шапку с нижней панелью. Поэтому переменные надёжнее задавать на предке таблицы — обычная обёртка со `style` подойдёт: значения наследуются вниз и перебивают заданные по умолчанию.

```tsx
<div style={{ "--data-table-rounding": "8px" } as React.CSSProperties}>
  <DataTable data={people} columns={columns} />
</div>
```

::playground{src=dataTable/DataTableCssVarsDemo caption="Меньшее скругление, цвет текста шапки и заливка чётных строк"}
:::

## Внутренние переменные

Определены самой таблицей.

::::css-vars
:::css-var[--data-table-background-color]{kind="fill" type="Цвет заливки" color="var(--background-2)"}
Фон таблицы. По умолчанию: `var(--background-2)`
:::

:::css-var[--data-table-even-background-color]{kind="fill" type="Цвет заливки" color="var(--background-1)"}
Фон чётных строк. По умолчанию: `var(--background-1)`
:::

:::css-var[--data-table-selected-background-color]{kind="fill" type="Цвет заливки" color="var(--accent-3)"}
Фон выбранной строки. По умолчанию: `var(--accent-3)`
:::

:::css-var[--data-table-selected-border-color]{kind="border" type="Цвет обводки" color="var(--accent-a6)"}
Рамка выбранной строки. По умолчанию: `var(--accent-a6)`
:::

:::css-var[--data-table-selected-text-color]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет текста выбранной строки. По умолчанию: `var(--accent-12)`
:::

:::css-var[--data-table-header-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Фон заголовков колонок и нижней панели. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--data-table-header-text-color]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет текста заголовков и нижней панели. По умолчанию: `var(--accent-12)`
:::

:::css-var[--data-table-border-color]{kind="border" type="Цвет обводки" color="var(--border-a1)"}
Тонкая рамка вокруг таблицы. По умолчанию: `var(--border-a1)`
:::

:::css-var[--data-table-rounding]{kind="radius" type="Скругление углов"}
Скругление углов таблицы. По умолчанию: `28px`
:::

:::css-var[--data-table-padding]{kind="gap" type="Размер отступа"}
Внутренний отступ таблицы. По умолчанию: `8px`
:::
::::

## Глобальные переменные

Не определены таблицей, но задают значения её переменных по умолчанию. Изменение токена меняет вид всех таблиц сразу.

::::css-vars
:::css-var[--background-1]{kind="fill" type="Цвет заливки" color="var(--background-1)"}
Фон чётных строк.
:::

:::css-var[--background-2]{kind="fill" type="Цвет заливки" color="var(--background-2)"}
Фон таблицы.
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Фон заголовков и нижней панели.
:::

:::css-var[--accent-3]{kind="fill" type="Цвет заливки" color="var(--accent-3)"}
Фон выбранной строки.
:::

:::css-var[--accent-12]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет текста заголовков и выбранной строки.
:::

:::css-var[--border-a1]{kind="border" type="Цвет обводки" color="var(--border-a1)"}
Рамка таблицы.
:::
::::
