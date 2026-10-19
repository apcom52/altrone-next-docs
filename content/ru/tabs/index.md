# Tabs

`Tabs` — компактная полоса вкладок для переключения между видами одного экрана. Контейнер `Tabs` рисует `role="tablist"`, каждая `Tabs.Item` — одну вкладку (`role="tab"`). Подложка выбранной вкладки плавно переезжает на новую, а размер всей полосы задаётся одним пропом `size`.

```tsx
import { Tabs } from 'altrone-ui';
```

## Базовое использование

Положите внутрь элементы `Tabs.Item`. Текст передаётся в `label`, активную вкладку отмечает `selected`. Компонент не хранит выбор сам — состояние ведёт ваш код, а `Tabs` рисует только полосу: содержимое вкладки показывайте рядом, ориентируясь на то же состояние.

```tsx
const [tab, setTab] = useState('overview');

<Tabs>
  <Tabs.Item label="Overview" selected={tab === 'overview'} onClick={() => setTab('overview')} />
  <Tabs.Item label="Analytics" selected={tab === 'analytics'} onClick={() => setTab('analytics')} />
  <Tabs.Item label="Settings" selected={tab === 'settings'} onClick={() => setTab('settings')} />
</Tabs>
```

::playground{src=tabs/TabsBasicDemo caption="Подложка плавно переезжает на выбранную вкладку"}

С клавиатуры `Tab` попадает на выбранную вкладку — она единственная в порядке табуляции. Между вкладками фокус двигают стрелки и `Home`/`End`, отключённые вкладки пропускаются, а активирует вкладку `Enter` или `Space`.

## Размеры

Проп `size` масштабирует полосу целиком: высоту, скругление, отступы, размер текста и иконок.

```tsx
<Tabs size="l">
  <Tabs.Item label="Day" selected />
  <Tabs.Item label="Week" />
</Tabs>
```

::playground{src=tabs/TabsSizesDemo caption="Пять размеров: mini, s, m, l, xl"}

## Иконки

`icon` ставит иконку перед подписью. Если подпись не нужна, задайте `showLabel={false}` — вкладка станет иконочной, а `label` останется её доступным названием и подсказкой `title`.

```tsx
<Tabs.Item label="Grid" icon={<Grid2x2 />} selected />
<Tabs.Item label="List" icon={<List />} showLabel={false} />
```

::playground{src=tabs/TabsIconsDemo caption="Вкладки с подписями и только с иконками"}

## Бейджи и отключённые вкладки

`badge` показывает счётчик или короткую метку у правого края вкладки. `disabled` убирает вкладку из порядка табуляции, пропускает её при навигации стрелками и игнорирует клики.

```tsx
<Tabs.Item label="Inbox" badge={12} />
<Tabs.Item label="Mentions" badge="NEW" />
<Tabs.Item label="Billing" disabled />
```

::playground{src=tabs/TabsStatesDemo caption="Числовой бейдж, текстовый бейдж и отключённая вкладка"}

## Ссылки

Без `href` вкладка — это `<button type="button">`. С `href` она рендерится как `<a>`. Чтобы использовать компонент ссылки вашего роутера, передайте `asChild` и положите внутрь ссылку роутера: роль, стили и обработчики перейдут на неё, а иконка, подпись и бейдж останутся из пропсов.

```tsx
import { Link } from 'react-router-dom';

<Tabs.Item label="Overview" selected={pathname === '/'} asChild>
  <Link to="/" />
</Tabs.Item>
```

::playground{src=tabs/TabsLinksDemo caption="Вкладки-ссылки: через href и через asChild"}

:::note
Если `children` при `asChild` — не единственный валидный React-элемент, компонент выведет ошибку в консоль и вернёт `null`.
:::

## Свойства

### Tabs

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер полосы и всех вкладок в ней.
:::

:::prop[children]{type="ReactNode"}
Элементы `Tabs.Item`.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на элемент полосы.
:::

Остальные атрибуты `<div>` передаются корневому элементу.

### Tabs.Item

:::prop[label*]{type="string"}
Подпись вкладки. Она же — подсказка `title` и доступное название при `showLabel={false}`.
:::

:::prop[selected]{type="boolean" default="false"}
Отмечает активную вкладку: показывает подложку, ставит `aria-selected` и делает вкладку единственной в порядке табуляции.
:::

:::prop[icon]{type="ReactElement"}
Иконка перед подписью.
:::

:::prop[showLabel]{type="boolean" default="true"}
При `false` подпись скрыта — вкладка только с иконкой.
:::

:::prop[disabled]{type="boolean" default="false"}
Отключает вкладку: она не получает фокус и игнорирует активацию.
:::

:::prop[badge]{type="string | number | ReactElement"}
Бейдж у правого края вкладки: счётчик или короткая метка.
:::

:::prop[href]{type="string"}
Рендерит вкладку как `<a>` вместо `<button>`.
:::

:::prop[asChild]{type="boolean" default="false"}
Перенести роль, стили, `ref` и обработчики на единственный дочерний элемент, например ссылку роутера.
:::

:::prop[children]{type="ReactElement"}
Используется только вместе с `asChild`. Должен быть ровно одним валидным React-элементом.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на `<button>`, `<a>` или дочерний элемент при `asChild`.
:::

Остальные атрибуты `<a>` (кроме `children`) передаются вкладке.

## Связанные темы

- [NavigationList](/ru/components/navigation/navigationList) — вертикальное меню для переходов между разделами приложения
- [BottomNavigation](/ru/components/navigation/bottomNavigation) — нижняя панель навигации для мобильных экранов
- [Breadcrumbs](/ru/components/navigation/breadcrumbs) — путь по иерархии страниц
- [Доступность](/ru/accessibility) — навигация с клавиатуры и фокус во всей библиотеке
