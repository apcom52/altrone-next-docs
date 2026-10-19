# SideNavigation

`SideNavigation` — оглавление текущей страницы: список ссылок на её разделы, который следит за прокруткой и подсвечивает раздел, находящийся в поле зрения. Он рисует семантический `<nav>` со списком, поддерживает вложенные ссылки и необязательный заголовок. Используйте его рядом с длинной статьёй или документацией, чтобы человек видел структуру страницы и мог быстро перейти к нужному месту.

```tsx
import { SideNavigation } from 'altrone-ui';
```

## Базовое использование

Положите внутрь элементы `SideNavigation.Link`. В `href` передайте селектор раздела вида `#id`, а в `label` — текст ссылки. У элемента страницы с этим `id` должен быть одноимённый атрибут: именно за ним компонент и наблюдает. Необязательный `title` рисует заголовок над ссылками и называет `<nav>` для вспомогательных технологий.

```tsx
<SideNavigation title="On this page">
  <SideNavigation.Link href="#introduction" label="Introduction" />
  <SideNavigation.Link href="#installation" label="Installation" />
  <SideNavigation.Link href="#usage" label="Usage" />
</SideNavigation>
```

::playground{src=sideNavigation/SideNavigationBasicDemo caption="Прокрутите страницу — подсвечивается ссылка раздела, который виден лучше всего"}

Подсвеченной считается ссылка того раздела, который сильнее всего виден во вьюпорте. Пока ни один из разделов не попал в поле зрения, не подсвечена ни одна ссылка. Подсвеченная ссылка выделяется жирным начертанием и цветом и получает `aria-current="page"`.

Компонент сам не закрепляется на экране. Чтобы оглавление оставалось на виду при прокрутке, задайте ему `position: sticky` через `style` или оберните его в закреплённый контейнер.

## Вложенные ссылки

Ссылки, положенные внутрь другой `SideNavigation.Link`, образуют подпункты с отступом: так удобно показать подразделы. Подпункты тоже наблюдают за своими разделами, так что подсветка работает на любом уровне.

```tsx
<SideNavigation.Link href="#api" label="API">
  <SideNavigation.Link href="#props" label="Props" />
  <SideNavigation.Link href="#events" label="Events" />
</SideNavigation.Link>
```

::playground{src=sideNavigation/SideNavigationNestedDemo caption="Раздел API с подразделами Props и Events"}

## Обработка кликов

`SideNavigation.Link` — обычная ссылка `<a>`, поэтому клик по `#id` прокручивает страницу к разделу средствами браузера. Остальные атрибуты `<a>`, например `onClick`, передаются ссылке.

## Свойства

### SideNavigation

:::prop[title]{type="string"}
Заголовок над ссылками, например «На этой странице». Им же именуется `<nav>`.
:::

:::prop[children]{type="ReactNode"}
Элементы `SideNavigation.Link`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на элемент `<nav>`.
:::

Остальные атрибуты `<nav>` передаются корневому элементу.

### SideNavigation.Link

:::prop[href*]{type="string"}
Селектор раздела вида `#id`. Ссылка подсвечивается, когда раздел с таким `id` виден лучше остальных.
:::

:::prop[label*]{type="string"}
Текст ссылки.
:::

:::prop[children]{type="ReactNode"}
Вложенные `SideNavigation.Link` — подпункты.
:::

:::prop[ref]{type="Ref<HTMLLIElement>"}
Ссылка на элемент `<li>` пункта.
:::

Остальные атрибуты `<a>` передаются ссылке.

## Связанные темы

- [NavigationList](/ru/components/navigation/navigationList) — вертикальное меню для навигации по разделам приложения
- [Tabs](/ru/components/navigation/tabs) — переключение между видами одного экрана
- [Breadcrumbs](/ru/components/navigation/breadcrumbs) — путь по иерархии страниц
- [Доступность](/ru/accessibility) — навигация с клавиатуры и фокус во всей библиотеке
