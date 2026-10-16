# Data Table

Иконки, которые `DataTable` рисует сам: стрелки сортировки, воронка фильтров, кнопки добавления и удаления фильтра, переключатель режима выделения, кнопка меню действий строки и значки булевых ячеек. Все они заменяются одним пропом `icons`. Иконки, которые передаёте вы (`icon` у `DataTable.Action` и `DataTable.RowAction`), описаны в [сведениях](/ru/components/content/dataTable#выделение-строк-и-действия).

:::spoiler[Как заменить иконки]
Передайте в `icons` только те иконки, которые нужно поменять, — остальные останутся стандартными. Каждое значение — `ReactElement`; иконка из `lucide-react` сама подстраивается под размер таблицы.

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

::playground{src=dataTable/DataTableIconsDemo caption="Стрелки сортировки и воронка фильтров заменены"}

Иконке из другой библиотеки нужен явный размер около `16px` — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[sortAsc]{icon="ArrowUp"}
Показывает сортировку по возрастанию в заголовке колонки
:::

:::icon-card[sortDesc]{icon="ArrowDown"}
Показывает сортировку по убыванию в заголовке колонки
:::

:::icon-card[filter]{icon="Funnel"}
Кнопка открытия фильтров в шапке
:::

:::icon-card[addFilter]{icon="Plus"}
Добавляет новое правило в конструкторе фильтров
:::

:::icon-card[deleteFilter]{icon="Trash"}
Удаляет правило из конструктора фильтров
:::

:::icon-card[enableSelection]{icon="SquareCheckBig"}
Включает режим выделения строк
:::

:::icon-card[disableSelection]{icon="Square"}
Выключает режим выделения строк
:::

:::icon-card[rowActions]{icon="Ellipsis"}
Открывает меню свёрнутых действий строки
:::

:::icon-card[booleanTrue]{icon="Check"}
Обозначает «да» в ячейке булевой колонки
:::

:::icon-card[booleanFalse]{icon="Minus"}
Обозначает «нет» в ячейке булевой колонки
:::
::::
