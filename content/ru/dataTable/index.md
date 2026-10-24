# Data Table

`DataTable` — таблица для больших объёмов данных: сортировка, конструктор фильтров, пагинация, выделение строк, действия над строками и ресайз колонок уже встроены. Колонка описывается типом (`string`, `currency`, `date`, `boolean` …), а тип определяет и отображение ячейки, и набор правил фильтрации — с учётом языка приложения.

## Базовое использование

Передайте `data` и `columns`. Каждая колонка — это `accessor` (ключ поля строки), `label` и `type`. Если порядок строк может меняться снаружи (обновление данных, пуш по сокету), добавьте `getRowId` — тогда состояние строки, например открытое меню действий, следует за самой строкой, а не за её позицией в массиве.

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

::playground{src=dataTable/DataTableBasicDemo caption="Типы колонок сами форматируют значения: валюту, булево и дату"}

## Типы колонок

Тип колонки задаётся в `type` и определяет, как выглядит значение в ячейке и какие правила фильтрации для него доступны. По умолчанию любая колонка является текстовой.

| Тип колонки | Что показывает | Дополнительные опции |
| ----------- | -------------- | -------------------- |
| `string`, `text` | Текст | — |
| `number` | Число | `digitsAfterPoint` |
| `currency` | Денежная сумма | `currency`, `currencyAccessor` |
| `date` | Дата | `level`, `format` |
| `boolean` | Флажок | — |
| `password` | Замаскированное значение | — |
| `select` | Список данных | — |
| `link` | Ссылка | `hrefTransformer`, `textTransformer` |
| `color` | Цветовой маркер | `colorPresets` |
| `custom` | Произвольная ячейка | `renderReadMode`, `renderLoadingMode` |

Дополнительные опции передаются в поле `options` описания колонки:

```tsx
const columns: DataTableColumn<Person>[] = [
  // Число: количество знаков после запятой
  { accessor: 'rating', label: 'Rating', type: 'number', options: { digitsAfterPoint: 1 } },

  // Денежная сумма: фиксированная валюта...
  { accessor: 'salary', label: 'Salary', type: 'currency', options: { currency: 'USD' } },
  // ...или валюта из другого поля строки
  { accessor: 'price', label: 'Price', type: 'currency', options: { currencyAccessor: 'currencyCode' } },

  // Дата: точность (day, month, year) и формат вывода
  { accessor: 'joined', label: 'Joined', type: 'date', options: { level: 'month', format: 'MMM yyyy' } },

  // Ссылка: адрес и текст считаются из значения и строки
  {
    accessor: 'website',
    label: 'Website',
    type: 'link',
    options: {
      hrefTransformer: (value) => String(value),
      textTransformer: (value, person) => `${person.name}'s site`,
    },
  },

  // Цветовой маркер: набор готовых цветов в выборе
  { accessor: 'color', label: 'Color', type: 'color', options: { colorPresets: ['#ef4444', '#22c55e', '#3b82f6'] } },
];
```

Опции колонки `custom` описаны в разделе «Произвольное содержимое ячейки».

## Сортировка и фильтры

`sortable` включает сортировку по клику на заголовок. `filterable` добавляет колонку в конструктор фильтров в шапке: `true` подбирает фильтр по `type` колонки, а явное значение (`filterable: 'select'`) задаёт его самостоятельно. Колонка `link` фильтруется по тексту; у `custom` своего фильтра нет, поэтому с `filterable: true` она в конструктор не попадает — укажите тип явно (`filterable: 'string'`). Начальное состояние задают `defaultSort` и `defaultFilters`.

```tsx
<DataTable
  data={people}
  columns={columns}
  defaultSort={{ field: 'salary', direction: 'desc' }}
  defaultFilters={[{ id: 'active', value: { rule: 'positive' } }]}
/>
```

::playground{src=dataTable/DataTableSortFilterDemo caption="Кликните по заголовку или откройте фильтры в шапке"}

### Как устроен фильтр

Каждый фильтр — это объект с идентификатором колонки и условием:

```ts
{
  id: 'salary',                    // accessor колонки
  value: {
    rule: 'between',               // правило сравнения
    value: [50000, 100000],        // с чем сравниваем
  },
}
```

| Поле | Что означает |
| ---- | ------------ |
| `id` | Совпадает с `accessor` колонки, к которой относится фильтр |
| `value.rule` | Правило сравнения. Набор правил зависит от типа колонки |
| `value.value` | Значение, с которым сравнивают. Для диапазонов — пара `[от, до]`, для правил `empty` и `notEmpty` не нужно |
| `value.level` | Только для дат: точность сравнения — `day`, `month` или `year` |

Правила каждого типа лежат в готовых перечислениях, чтобы не писать строки вручную:

| Тип колонки | Перечисление |
| ----------- | ------------ |
| Текст | `StringFilterRules` |
| Число | `NumberFilterRules` |
| Дата | `DateFilterRules` |
| Флажок | `BooleanFilterRules` |
| Список данных | `SelectFilterRules` |
| Цветовой маркер | `ColorFilterRules` |
| Замаскированное значение | `PasswordFilterRules` |
| Массив значений | `ArrayFilterRules` |

```tsx
import { NumberFilterRules } from 'altrone-ui';

<DataTable
  data={people}
  columns={columns}
  defaultFilters={[{ id: 'salary', value: { rule: NumberFilterRules.gte, value: 50000 } }]}
/>
```

## Управляемое состояние

Текущей страницей, сортировкой и фильтрами можно управлять из своего кода: передайте `page`, `sort` и `filters`, а изменения принимайте в `onPageChange`, `onSortChange` и `onFilterChange`. Таблица рисует то, что ей дали, и только просит об изменениях. Так состояние удобно хранить в адресной строке или во внешнем сторе — ссылка откроет таблицу сразу на нужной странице с нужными фильтрами.

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

::playground{src=dataTable/DataTableControlledDemo caption="Кнопки меняют состояние снаружи, таблица следует за ними"}

Что важно знать:

- **Независимость.** Каждое из трёх свойств управляется отдельно: можно вести только `page`, оставив сортировку и фильтры внутри таблицы.
- **Нумерация.** `page` считается с единицы, а `defaultPage` — с нуля.
- **Сортировка без значения.** `sort={null}` означает, что сортировка управляется снаружи и сейчас не применена.
- **Только действия пользователя.** Колбэки срабатывают, когда пользователь что-то изменил, а не при монтировании таблицы.
- **Сброс страницы.** Когда `page` управляется снаружи, таблица не возвращает первую страницу после смены фильтров или сортировки — это делаете вы, например, в `onFilterChange`.

## Выделение строк и действия

Проп `selectable` включает выделение строк: в шапке появляется переключатель режима выделения, а действия получают список выделенных строк. `actions` принимает один `DataTable.Action`, массив или функцию, которой передаётся `{ selectableMode, selectedItems }`.

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

::playground{src=dataTable/DataTableSelectionDemo caption="Включите режим выделения, отметьте строки и удалите их"}

### Расположение действий в шапке

Шапка таблицы — это `Toolbar`. Всё, что вы передаёте в `actions`, попадает в левую секцию рядом со встроенными переключателем выделения и фильтрами. Чтобы поставить содержимое в другое место, оберните его в `Toolbar.Leading` (слева), `Toolbar.Center` (по центру) или `Toolbar.Trailing` (справа).

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

### Действия над строкой

Действия над одной строкой передаются в `rowActions` — это один `DataTable.RowAction` или массив, либо функция с `{ row, rowIndex, selected }`. Действия с `collapsed` складываются в меню «…», остальные остаются кнопками.

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

::playground{src=dataTable/DataTableRowActionsDemo caption="«View» — кнопка, остальные действия — в меню"}

## Произвольное содержимое ячейки

Колонка `type: 'custom'` отдаёт разметку ячейки вам: `renderReadMode` получает `{ value, item }`, а необязательный `renderLoadingMode` рисует заглушку на время загрузки.

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

::playground{src=dataTable/DataTableCustomCellDemo caption="Аватар с именем и статус-метка вместо простого текста"}

## Загрузка данных

`mode="loading"` заменяет ячейки скелетонами и блокирует действия. Скелетоны рисуются в ячейках переданных строк, поэтому на время загрузки отдайте несколько строк-заглушек.

```tsx
<DataTable data={loading ? placeholders : rows} columns={columns} mode={loading ? 'loading' : 'read'} />
```

::playground{src=dataTable/DataTableLoadingDemo caption="Две секунды скелетонов, затем данные"}

## Ширина колонок

`width` задаёт ширину колонки в пикселях. Если колонки не помещаются, таблица получает собственный горизонтальный скролл — шапка едет вместе с телом, а страница не расползается. `resizableColumns` разрешает менять ширину перетаскиванием края заголовка; отдельной колонке запретить это можно через `resizable: false`.

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

::playground{src=dataTable/DataTableResizableDemo caption="Потяните край заголовка, ID зафиксирован"}

## Скрытые колонки

Колонку можно убрать с экрана, не удаляя из описания, — это удобно, когда видимость переключает пользователь или настройка. Задайте колонке `visible: false`, и она не отображается, не участвует в сортировке и не появляется в фильтрах.

```tsx
{ accessor: 'salary', label: 'Salary', type: 'currency', visible: canSeeSalary }
```

## Нижняя панель

Внизу таблицы находится панель с пагинацией. Если данных немного и страницы не нужны, отключите её через `showFooter={false}` и выведите все строки, задав `rowsPerPage` побольше.

```tsx
<DataTable data={people} columns={columns} showFooter={false} rowsPerPage={100} />
```

## Пустая таблица

Когда строк для показа нет, вместо тела таблицы выводится заглушка «нет данных». Если пустое состояние вы показываете сами, отключите встроенное через `showEmptyBanner={false}`.

```tsx
<DataTable data={[]} columns={columns} showEmptyBanner={false} />
```

## Свойства

:::prop[data*]{type="T[]"}
Строки таблицы.
:::

:::prop[columns*]{type="DataTableColumn<T>[]"}
Описание колонок: `accessor`, `label`, `type`, `width`, `sortable`, `filterable`, `visible`, `resizable`, `options`.
:::

:::prop[getRowId]{type="(row: T, index: number) => string"}
Стабильный идентификатор строки. Без него идентичность строки — её позиция в массиве, и при внешней перестановке данных состояние строки останется на старом месте.
:::

:::prop[mode]{type="'loading' | 'read' | 'select'" default="'read'"}
Режим таблицы: `loading` показывает скелетоны, `select` включает чекбоксы строк.
:::

:::prop[rowsPerPage]{type="number" default="20"}
Количество строк на странице.
:::

:::prop[selectable]{type="boolean" default="false"}
Включает выделение строк и переключатель режима выделения в шапке.
:::

:::prop[showFooter]{type="boolean" default="true"}
Показывает нижнюю панель с пагинацией.
:::

:::prop[showEmptyBanner]{type="boolean" default="true"}
Показывает заглушку, когда строк для отображения нет.
:::

:::prop[resizableColumns]{type="boolean" default="false"}
Разрешает менять ширину колонок перетаскиванием.
:::

:::prop[icons]{type="Partial<DataTableIconSet>"}
Замена иконок таблицы. Подробности — на вкладке «Иконки».
:::

:::prop[actions]{type="ReactNode | ((ctx: { selectableMode: boolean; selectedItems: T[] }) => ReactNode)"}
Содержимое шапки: `DataTable.Action` или любые элементы, при желании в `Toolbar.Leading`, `Toolbar.Center`, `Toolbar.Trailing`.
:::

:::prop[rowActions]{type="DataTable.RowAction | DataTable.RowAction[] | ((ctx: { row: T; rowIndex: number; selected: boolean }) => …)"}
Действия над строкой в отдельной колонке справа. `collapsed`-действия складываются в меню.
:::

:::prop[defaultPage]{type="number" default="0"}
Начальная страница (с нуля) неуправляемой таблицы.
:::

:::prop[defaultSort]{type="{ field: string; direction: 'asc' | 'desc' }"}
Начальная сортировка неуправляемой таблицы.
:::

:::prop[defaultFilters]{type="DataTableFilter[]"}
Начальные фильтры неуправляемой таблицы.
:::

:::prop[page]{type="number"}
Управляемая текущая страница, с единицы. Работает в паре с `onPageChange`.
:::

:::prop[sort]{type="Sorting | null"}
Управляемая сортировка; `null` — сортировки нет. Работает в паре с `onSortChange`.
:::

:::prop[filters]{type="DataTableFilter[]"}
Управляемые фильтры. Работает в паре с `onFilterChange`.
:::

:::prop[onPageChange]{type="(page: number, event?: MouseEvent) => void"}
Страница изменилась; номер с единицы. `event` не передаётся при программной смене — например, при автоматическом сбросе страницы после смены фильтра.
:::

:::prop[onSortChange]{type="(sort?: Sorting, event?: MouseEvent) => void"}
Сортировка изменилась; `undefined`, если её сбросили.
:::

:::prop[onFilterChange]{type="(filters: DataTableFilter[], event?: MouseEvent) => void"}
Фильтры изменились; всегда массив, при отсутствии фильтров — пустой.
:::

:::prop[onModeChange]{type="(mode: DataTableMode, event: MouseEvent) => void"}
Режим изменился, например при входе в режим выделения.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент таблицы.
:::

## Похожие темы

- [Toolbar](/ru/components/layout/toolbar) — контейнер, на котором построена шапка таблицы
- [Dropdown](/ru/components/overlays/dropdown) — меню, в которое складываются `collapsed`-действия строк
- [Scrollable](/ru/components/layout/scrollable) — прокрутка, которую таблица использует для широких данных
