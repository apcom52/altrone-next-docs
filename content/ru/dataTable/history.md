# Data Table

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="DataTable" name="DataTable" open="true"}
**4.0**

- Новый дизайн, увеличено скругление таблицы.
- Новый движок рендеринга — TanStack Table.
- Тип колонки определяет отображение ячеек и правила фильтрации; появился тип `custom`.
- Режим загрузки данных со скелетонами и ресайз колонок (`resizableColumns`).
- Полностью управляемое состояние: `page`, `sort` и `filters` с колбэками `onPageChange`, `onSortChange`, `onFilterChange`.
- Шапка переведена на `Toolbar`, `actions` раскладываются по секциям Leading/Center/Trailing.
- Широкие таблицы получили собственный горизонтальный скролл вместо распирания страницы.
- Добавлен `getRowId`; `renderRowActions` заменён на `rowActions`, а `RowAction.onClick` получает нативный `MouseEvent`.
- Убраны кнопки первой и последней страницы пагинации.
- Проп колонки `visible` переименован в `enabled`.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/dataTable-3.png" name="DataTable"}
**3.5**

- Добавлены `RowActions`/`RowAction` и проп `renderRowActions`.
- Добавлен `showEmptyBanner` — заглушка вместо пустой таблицы.

**3.3**

- Добавлены фильтры по дате, месяцу и году.
- Добавлены `defaultFilters`, `defaultSort` и колбэки `onSortChange`, `onPageChange`.

**3.2**

- Добавлен `type` колонки, который определяет фильтр и отображение по умолчанию с учётом локали.

**3.0**

- Новый дизайн.
- Фильтрация выросла в конструктор сложных запросов, сортировка включается кликом по заголовку.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/dataTable-2.png" name="DataTable"}
**2.0**

- Поиск и пагинация переехали на отдельные компоненты `Search` и `Pagination`.
- Добавлен проп `visible` для колонок и фильтр-чекбокс.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/dataTable-1.png" name="DataTable"}
**1.3**

- Добавлен режим выделения строк с собственными массовыми действиями.

**1.2**

- Добавлена полосатая заливка строк (`striped`) и первые generic-типы данных.

**1.1**

- Добавлены действия в шапке таблицы (`DataTableAction`).

**1.0**

- Добавлен в библиотеку — таблица для показа множества строк с сортировкой и пагинацией.
:::
