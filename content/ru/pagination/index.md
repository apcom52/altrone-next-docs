# Pagination

`Pagination` — полоса переключения страниц: кнопки «в начало», «назад», номера страниц, «вперёд» и «в конец». Она рисует семантический `<nav>` с локализованным `aria-label`, собирает окно номеров вокруг текущей страницы и сама ставит многоточие там, где страницы пропущены. Состоит из обычных `Button`, поэтому размер, фокус и состояния такие же, как у остальных контролов.

```tsx
import { Pagination } from 'altrone-ui';
```

## Базовое использование

Обязателен только `totalPages` — общее число страниц. Без `currentPage` полоса неуправляемая: она сама хранит текущую страницу, начиная с `defaultPage` (по умолчанию `1`).

```tsx
<Pagination totalPages={20} />
```

::playground{src=pagination/PaginationBasicDemo caption="Неуправляемая полоса: страницу хранит сам компонент"}

Первая и последняя страницы всегда видны, вокруг текущей показываются соседние, а пропуск обозначается многоточием. На первой странице кнопки «в начало» и «назад» отключены, на последней — «вперёд» и «в конец».

## Управляемый режим

Если страница нужна вашему коду — например, чтобы запросить данные, — передайте `currentPage` и `onChange`. Обработчик получает номер новой страницы и событие клика последним аргументом. Номер должен оставаться в пределах `1…totalPages`: в режиме разработки выход за них приводит к предупреждению в консоли, так что при уменьшении `totalPages` ограничивайте страницу сами.

```tsx
const [page, setPage] = useState(3);

<Pagination totalPages={12} currentPage={page} onChange={(next) => setPage(next)} />
```

::playground{src=pagination/PaginationControlledDemo caption="Текущая страница живёт в состоянии родителя"}

## Соседние страницы

`siblings` — сколько страниц показывать с каждой стороны от текущей. По умолчанию `1`; `0` оставляет только текущую страницу, первую и последнюю.

```tsx
<Pagination totalPages={30} siblings={2} />
```

::playground{src=pagination/PaginationSiblingsDemo caption="siblings = 0, 1 и 2"}

## Крайние кнопки

Кнопки «в начало» и «в конец» показываются по умолчанию. `showEdgeButtons={false}` убирает их: тогда остаются «назад», «вперёд» и номера страниц.

```tsx
<Pagination totalPages={20} showEdgeButtons={false} />
```

::playground{src=pagination/PaginationEdgeButtonsDemo caption="С крайними кнопками и без них"}

## Размеры

`size` масштабирует кнопки, многоточие и скругление полосы.

```tsx
<Pagination totalPages={9} size="l" />
```

::playground{src=pagination/PaginationSizesDemo caption="Пять размеров: mini, s, m, l, xl"}

## Свойства

:::prop[totalPages*]{type="number"}
Общее число страниц.
:::

:::prop[currentPage]{type="number"}
Текущая страница (с единицы) в управляемом режиме. Без него полоса хранит страницу сама.
:::

:::prop[defaultPage]{type="number" default="1"}
Начальная страница в неуправляемом режиме.
:::

:::prop[onChange]{type="(page: number, event: React.MouseEvent<HTMLButtonElement>) => void"}
Вызывается при выборе страницы. Событие клика передаётся последним аргументом.
:::

:::prop[siblings]{type="number" default="1"}
Сколько страниц показывать с каждой стороны от текущей.
:::

:::prop[showEdgeButtons]{type="boolean" default="true"}
Показывать кнопки перехода на первую и последнюю страницы.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер полосы.
:::

:::prop[prevIcon]{type="ReactElement"}
Иконка кнопки «назад». Подробнее — на вкладке [Иконки](/ru/components/navigation/pagination/icons).
:::

:::prop[nextIcon]{type="ReactElement"}
Иконка кнопки «вперёд».
:::

:::prop[firstPageIcon]{type="ReactElement"}
Иконка кнопки «в начало». Используется при `showEdgeButtons`.
:::

:::prop[lastPageIcon]{type="ReactElement"}
Иконка кнопки «в конец». Используется при `showEdgeButtons`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на элемент `<nav>`.
:::

Остальные атрибуты `<nav>` (кроме `onChange`) передаются корневому элементу.

## Связанные темы

- [Button](/ru/components/controls/button) — из кнопок состоит сама полоса
- [DataTable](/ru/components/content/dataTable) — таблица, под которой обычно стоит пагинация
- [Tabs](/ru/components/navigation/tabs) — переключение между видами, а не страницами списка
- [Application](/ru/components/layout/application) — язык подписей и общие иконки `prev` и `next`
