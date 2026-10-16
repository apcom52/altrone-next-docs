# NavigationList

`NavigationList` — вертикальное меню навигации: боковая панель со ссылками, группами с заголовками, вложенными пунктами, шапкой и подвалом. Он рисует семантический `<nav>`, отмечает текущую страницу для вспомогательных технологий и плавно переносит подсветку с одного пункта на другой. Используйте его для главной навигации приложения или раздела.

```tsx
import { NavigationList } from 'altrone-ui';
```

## Базовое использование

Положите внутрь элементы `NavigationList.Link`. Текст передаётся в `label`, необязательная иконка — в `icon`. Текущий пункт отметьте `selected` — он получит подсветку и `aria-current="page"`. Задайте списку `aria-label`, чтобы скринридер отличал его от другой навигации.

```tsx
<NavigationList aria-label="Main">
  <NavigationList.Link label="Dashboard" icon={<Home />} href="/" selected={pathname === '/'} />
  <NavigationList.Link label="Projects" icon={<Folder />} href="/projects" selected={pathname === '/projects'} />
</NavigationList>
```

::playground{src=navigationList/NavigationListBasicDemo caption="Подсветка плавно переезжает на выбранный пункт"}

Список шириной 300px и такой же высоты, как контейнер; если содержимое не помещается, он прокручивается.

## Ссылки и кнопки

С `href` пункт — обычная ссылка `<a>`. Без `href`, но с `onClick`, он работает как кнопка: получает фокус и срабатывает по `Enter` и `Space`. Чтобы использовать компонент ссылки вашего роутера, передайте `asChild` и положите внутрь ссылку роутера.

```tsx
<NavigationList.Link label="Dashboard" icon={<Home />} selected={pathname === '/'} asChild>
  <Link to="/" />
</NavigationList.Link>
```

## Группы

`NavigationList.Group` собирает связанные ссылки под `title`. Группа с заголовком для вспомогательных технологий — именованная группа; без заголовка она лишь визуально отделяет набор ссылок.

```tsx
<NavigationList.Group title="Workspace">
  <NavigationList.Link label="Overview" href="/overview" />
  <NavigationList.Link label="Members" href="/members" />
</NavigationList.Group>
```

::playground{src=navigationList/NavigationListGroupsDemo caption="Две группы с заголовками"}

## Вложенные ссылки

Ссылки внутри другой ссылки образуют подменю. Оно открыто, пока `selected` родитель или один из вложенных пунктов, и закрыто в остальных случаях. Вложенность может быть любой глубины, но обычно хватает двух уровней.

```tsx
<NavigationList.Link label="Teams" icon={<Users />} selected={inTeams}>
  <NavigationList.Link label="Frontend" selected={team === 'frontend'} onClick={() => setTeam('frontend')} />
  <NavigationList.Link label="Backend" selected={team === 'backend'} onClick={() => setTeam('backend')} />
</NavigationList.Link>
```

::playground{src=navigationList/NavigationListNestedDemo caption="Подменю Teams открывается, когда выбрана команда"}

## Бейджи и отключённые пункты

`badge` показывает счётчик или короткое слово у правого края. `disabled` убирает ссылку, исключает пункт из порядка табуляции и игнорирует клики.

```tsx
<NavigationList.Link label="Inbox" icon={<Inbox />} badge={12} />
<NavigationList.Link label="Reports" icon={<BarChart2 />} disabled />
```

::playground{src=navigationList/NavigationListStatesDemo caption="Числовой бейдж, текстовый бейдж и отключённый пункт"}

## Действия

`actions` размещает кнопки у края ссылки или заголовка группы, например «Добавить» или «Ещё». Клик по действию никогда не срабатывает как клик по самой ссылке. Функциональная форма получает `{ selected, disabled }`, так что действия можно показывать только там, где они уместны.

```tsx
<NavigationList.Group
  title="Projects"
  actions={<Button size="s" label="New project" icon={<Plus />} showLabel={false} onClick={createProject} />}
>
  <NavigationList.Link
    label="Website"
    actions={<Button size="s" label="Add page" icon={<Plus />} showLabel={false} onClick={addPage} />}
  />
</NavigationList.Group>
```

::playground{src=navigationList/NavigationListActionsDemo caption="Действие в заголовке группы и в каждой ссылке"}

Кнопкам только с иконкой нужен `label`: он становится их доступным названием.

## Шапка и подвал

`NavigationList.Header` и `NavigationList.Footer` закреплены у верхнего и нижнего краёв и остаются на месте, пока группы между ними прокручиваются. Обычно сверху размещают переключатель рабочего пространства, снизу — аккаунт.

```tsx
<NavigationList>
  <NavigationList.Header>...</NavigationList.Header>
  <NavigationList.Link label="Home" href="/" />
  <NavigationList.Footer>...</NavigationList.Footer>
</NavigationList>
```

::playground{src=navigationList/NavigationListHeaderFooterDemo caption="Фиксированные шапка и подвал вокруг ссылок"}

## Свойства

### NavigationList

:::prop[children]{type="ReactNode"}
Элементы `Header`, `Group`, `Link` и `Footer`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на элемент `<nav>`.
:::

Остальные атрибуты `<nav>`, такие как `aria-label`, `className` и `style`, передаются дальше.

### NavigationList.Group

:::prop[title]{type="string"}
Заголовок группы.
:::

:::prop[actions]{type="ReactElement | ReactElement[] | (() => ReactElement | ReactElement[])"}
Элементы, обычно `Button`, рядом с заголовком.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на элемент группы.
:::

### NavigationList.Link

:::prop[label*]{type="string"}
Текст пункта.
:::

:::prop[href]{type="string"}
Адрес ссылки. Без него пункт работает как кнопка.
:::

:::prop[selected]{type="boolean"}
Текущий пункт: подсветка, `aria-current="page"` и открытые вложенные ссылки.
:::

:::prop[icon]{type="ReactElement"}
Иконка слева от текста.
:::

:::prop[badge]{type="string | number | ReactElement"}
Бейдж у правого края.
:::

:::prop[disabled]{type="boolean"}
Отключает пункт.
:::

:::prop[actions]{type="ReactElement | ReactElement[] | ((context: { selected?: boolean; disabled?: boolean }) => ReactElement | ReactElement[])"}
Элементы у правого края. Клики внутри не срабатывают как клик по ссылке.
:::

:::prop[childrenIcon]{type="ReactElement" default="<ChevronDown />"}
Иконка, которая показывается, пока вложенные ссылки открыты. См. [Иконки](/ru/components/navigation/navigationList/icons).
:::

:::prop[asChild]{type="boolean" default="false"}
Переносит стили ссылки на единственный дочерний элемент, например ссылку роутера.
:::

:::prop[ref]{type="Ref<HTMLAnchorElement>"}
Ссылка на элемент пункта.
:::

### NavigationList.Header и NavigationList.Footer

:::prop[children]{type="ReactNode"}
Содержимое, закреплённое сверху или снизу.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на элемент.
:::

## Связанные темы

- [Tabs](/ru/components/navigation/tabs) — переключение между видами одного экрана
- [Screen](/ru/components/layout/screen) — раскладка страницы, где список обычно стоит в боковой панели
- [Button](/ru/components/controls/button) — кнопки для `actions`
- [Доступность](/ru/accessibility) — навигация с клавиатуры и фокус во всей библиотеке
