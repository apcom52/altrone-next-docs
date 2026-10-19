# Breadcrumbs

`Breadcrumbs` — хлебные крошки: они показывают, где человек находится в иерархии страниц, и дают быстрый путь назад без кнопки «Назад» в браузере. Компонент рисует семантический `<nav>` с локализованным `aria-label` и упорядоченным списком `<ol>` внутри, а разделители между крошками расставляет сам.

```tsx
import { Breadcrumbs } from 'altrone-ui';
```

## Базовое использование

Положите внутрь элементы `Breadcrumbs.Item` и передайте текст в `label`. Последнюю крошку — текущую страницу — отметьте `current`: она получит жирное начертание, акцентный цвет и `aria-current="page"`.

```tsx
<Breadcrumbs>
  <Breadcrumbs.Item label="Home" />
  <Breadcrumbs.Item label="Products" />
  <Breadcrumbs.Item label="Details" current />
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsBasicDemo caption="Три крошки, последняя — текущая страница"}

Разделитель рисуется после каждой крошки, кроме последней, — об этом заботиться не нужно.

## Ссылки

Без `asChild` крошка — обычный блок, а не ссылка. Чтобы сделать её кликабельной, передайте `asChild` и положите внутрь `<a>` или ссылку роутера: стили, `ref` и обработчики перейдут на неё. `label` и `icon` при этом автоматически становятся её содержимым — текст внутрь писать не нужно. Иконку `icon` обычно ставят только на первую крошку — «Домой».

```tsx
<Breadcrumbs>
  <Breadcrumbs.Item icon={<Home />} label="Home" asChild>
    <a href="/" />
  </Breadcrumbs.Item>
  <Breadcrumbs.Item label="Catalog" asChild>
    <a href="/catalog" />
  </Breadcrumbs.Item>
  <Breadcrumbs.Item label="Item #42" current />
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsLinksDemo caption="Home и Catalog — ссылки, последняя крошка — текущая страница"}

С роутером всё работает так же:

```tsx
import { Link } from 'react-router-dom';

<Breadcrumbs.Item label="Orders" asChild>
  <Link to="/orders" />
</Breadcrumbs.Item>
```

:::note
Если `children` при `asChild` — не единственный валидный React-элемент, компонент выведет ошибку в консоль и вернёт `null`.
:::

## Свёрнутый путь

Когда путь слишком глубок, замените средние крошки одной с многоточием, открывающей `Dropdown` со скрытыми уровнями.

```tsx
<Breadcrumbs>
  <Breadcrumbs.Item icon={<Home />} label="Home" asChild>
    <a href="/" />
  </Breadcrumbs.Item>
  <Dropdown
    content={
      <Dropdown.Menu>
        <Dropdown.Action label="Category" />
        <Dropdown.Action label="Subcategory" />
      </Dropdown.Menu>
    }
  >
    <Breadcrumbs.Item icon={<Ellipsis />} />
  </Dropdown>
  <Breadcrumbs.Item label="Product" current />
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsCollapsedDemo caption="Откройте многоточие — появится меню со скрытыми уровнями"}

## Свойства

### Breadcrumbs

:::prop[children]{type="ReactNode"}
Элементы `Breadcrumbs.Item`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на элемент `<nav>`.
:::

Остальные атрибуты `<nav>` передаются корневому элементу.

### Breadcrumbs.Item

:::prop[label]{type="string"}
Текст крошки. Длинный текст обрезается многоточием.
:::

:::prop[icon]{type="ReactElement"}
Иконка слева от текста.
:::

:::prop[separatorIcon]{type="ReactElement" default="<ChevronRight />"}
Разделитель после этой крошки. Подробнее — на вкладке [Иконки](/ru/components/navigation/breadcrumbs/icons).
:::

:::prop[current]{type="boolean" default="false"}
Отмечает текущую страницу: жирное начертание, акцентный цвет и `aria-current="page"`. Не сочетайте с `asChild`.
:::

:::prop[asChild]{type="boolean" default="false"}
Перенести стили, `ref` и обработчики на единственный дочерний элемент, например `<a>` или ссылку роутера. `label` и `icon` становятся его содержимым.
:::

:::prop[children]{type="ReactElement"}
Используется только вместе с `asChild`. Должен быть ровно одним валидным React-элементом.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на крошку: `<div>` или дочерний элемент при `asChild`.
:::

Остальные атрибуты `<div>` (кроме `children`) передаются крошке.

## Связанные темы

- [Dropdown](/ru/components/overlays/dropdown) — меню для свёрнутых уровней пути
- [NavigationList](/ru/components/navigation/navigationList) — вертикальное меню для навигации по разделам
- [Tabs](/ru/components/navigation/tabs) — переключение между видами одного экрана
- [Доступность](/ru/accessibility) — навигация с клавиатуры и фокус во всей библиотеке
