# Breadcrumbs

Хлебные крошки показывают, где пользователь находится в иерархии страниц, и дают быстрый путь назад — без нажатия «Назад» в браузере. `Breadcrumbs` рендерит семантичный `<nav>` с локализованным `aria-label` и `<ol>` внутри и сам расставляет разделители: у последнего элемента разделителя не будет.

## Базовое использование

```tsx
<Breadcrumbs>
  <Breadcrumbs.Item label="Home" />
  <Breadcrumbs.Item label="Products" />
  <Breadcrumbs.Item label="Details" current />
</Breadcrumbs>
```

::playground{src=BreadcrumbsBasicDemo}

`current` отмечает текущую страницу — обычно последний элемент: жирное начертание и `aria-current="page"` проставляются автоматически.

## Ссылки (asChild)

`asChild` объединяет стили `Breadcrumbs.Item` с единственным дочерним элементом — это позволяет сделать крошку кликабельной ссылкой или компонентом роутера. `label` и `icon` при этом автоматически становятся содержимым дочернего элемента — передавать текст внутрь `<a>` не нужно.

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

::playground{src=BreadcrumbsLinksDemo caption="Home и Catalog — кликабельные ссылки, последний элемент — текущая страница"}

С роутером работает так же:

```tsx
import { Link } from "react-router-dom";

<Breadcrumbs>
  <Breadcrumbs.Item icon={<Home />} label="Home" asChild>
    <Link to="/" />
  </Breadcrumbs.Item>
  <Breadcrumbs.Item label="Orders" asChild>
    <Link to="/orders" />
  </Breadcrumbs.Item>
  <Breadcrumbs.Item label="Order #1234" current />
</Breadcrumbs>
```

:::note
Если `children` при `asChild={true}` — не единственный валидный React-элемент, компонент выведет ошибку в консоль и вернёт `null`.
:::

## Свёрнутые промежуточные элементы

Когда путь слишком глубокий, замените средние элементы на многоточие, открывающее `Dropdown` со скрытыми уровнями.

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

::playground{src=BreadcrumbsCollapsedDemo caption="Откройте многоточие — появится меню со скрытыми уровнями"}

## Свойства Breadcrumbs.Item

:::prop[label]{type="string"}
Текст крошки.
:::

:::prop[icon]{type="ReactElement"}
Иконка слева от текста.
:::

:::prop[separatorIcon]{type="ReactElement" default="ChevronRight"}
Разделитель после этого элемента (скрывается на последнем элементе через CSS).
:::

:::prop[current]{type="boolean" default="false"}
Отмечает элемент как текущую страницу: жирное начертание и `aria-current="page"` на элементе крошки. Не сочетайте с `asChild`.
:::

:::prop[asChild]{type="boolean" default="false"}
Объединяет стили `Breadcrumbs.Item` с единственным дочерним элементом по паттерну Slot. Используйте, чтобы отрендерить `<a>` или компонент роутера.
:::

:::prop[children]{type="ReactElement"}
Используется только вместе с `asChild`. Должен быть ровно одним валидным React-элементом.
:::

## Рекомендации

**Отмечайте `current` только на последнем элементе.** Разделитель после последнего элемента скрывается автоматически (CSS `:last-child`) — управлять этим вручную не нужно.

**Не делайте текущую страницу ссылкой.** У элемента с `current` не должно быть `asChild` — пользователь уже здесь, повторный переход не нужен.

**Сворачивайте путь длиннее четырёх-пяти уровней.** Используйте `Dropdown` за многоточием вместо того, чтобы показывать весь путь целиком — это сохраняет крошки читаемыми на узких экранах.

**`icon` — только для первого элемента (обычно «Home»).** Иконки на каждом уровне создают визуальный шум и не добавляют смысла.
