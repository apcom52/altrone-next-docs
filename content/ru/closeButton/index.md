# Close Button

`CloseButton` — готовая кнопка-иконка для закрытия панелей, карточек, сообщений и уведомлений. Это `Button` с иконкой `X`, скрытой подписью и локализованным доступным именем, поэтому кнопка закрытия выглядит и ведёт себя одинаково во всём продукте. В отличие от обычной иконочной `Button`, при наведении она не показывает подсказку: крестик понятен и без неё.

```tsx
import { CloseButton } from 'altrone-ui';
```

## Базовое использование

Обязательных пропов нет. Передайте `onClick`, чтобы скрыть то, к чему относится кнопка.

```tsx
<CloseButton onClick={() => setOpen(false)} />
```

::playground{src=closeButton/CloseButtonBasicDemo caption="Нажмите крестик, чтобы скрыть карточку"}

Доступное имя приходит из локализации библиотеки — «Закрыть» по-русски — и следует за пропом `language` у [Application](/ru/components/layout/application). Пропа `aria-label` нет: чтобы назвать кнопку иначе, используйте `label`.

## Размеры

`size` принимает те же пять ступеней, что и остальные контролы. Кнопка всегда круглая, иконка масштабируется вместе с ней.

```tsx
<CloseButton size="mini" />
<CloseButton size="s" />
<CloseButton size="m" />
<CloseButton size="l" />
<CloseButton size="xl" />
```

::playground{src=closeButton/CloseButtonSizesDemo caption="mini, s, m, l, xl"}

## В шапке панели

Обычное место кнопки — конец строки заголовка, рядом с названием. Если на экране несколько крестиков, дайте каждому конкретный `label` — тогда скринридер объявит «Close Filters», а не несколько одинаковых «Закрыть».

```tsx
<Flex align="center" justify="between">
  <Text weight="medium">Filters</Text>
  <CloseButton size="s" label="Close Filters" onClick={closeFilters} />
</Flex>
```

::playground{src=closeButton/CloseButtonHeaderDemo caption="У каждой панели своя кнопка закрытия"}

:::note
`Modal` и `Drawer` по умолчанию рисуют `CloseButton` в своей шапке, `Popover` — при `showCloseButton`, `Message` — если передан `onClose`, а у тостов и уведомлений он есть всегда. Добавлять кнопку вручную нужно только в собственные карточки и панели.
:::

## Заблокированная кнопка

`disabled` блокирует кнопку и приглушает иконку.

```tsx
<CloseButton disabled />
```

::playground{src=closeButton/CloseButtonDisabledDemo caption="Обычная и заблокированная"}

Саму иконку заменяет проп `icon` — см. вкладку [Иконки](/ru/components/controls/closeButton/icons).

## Свойства

`CloseButton` принимает узкий набор пропов, а не весь API `Button`: `variant`, `danger`, `badge`, `state`, `tooltip` и `kbd` недоступны, а `showLabel` всегда `false`.

:::prop[onClick]{type="(event: React.MouseEvent<HTMLButtonElement>) => void"}
Обработчик клика.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер кнопки.
:::

:::prop[label]{type="string"}
Доступное имя. По умолчанию — локализованное «Закрыть».
:::

:::prop[icon]{type="ReactElement" default="<X />"}
Заменяет иконку. Подробнее — на вкладке [Иконки](/ru/components/controls/closeButton/icons).
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует кнопку.
:::

:::prop[type]{type="'button' | 'submit' | 'reset'" default="'button'"}
HTML-тип кнопки. По умолчанию `"button"`, поэтому кнопка никогда не отправляет форму.
:::

:::prop[asChild]{type="boolean" default="false"}
Переносит стили и поведение кнопки на единственный дочерний элемент вместо рендера `<button>`.
:::

:::prop[ref]{type="Ref<HTMLButtonElement>"}
Ссылка на элемент `<button>`.
:::

Остальные атрибуты `<button>` (`id`, `className`, `style`, `data-*`, `onFocus`, …) передаются элементу, кроме `aria-label` — для него используйте `label`.

## Похожие темы

- [Button](/ru/components/controls/button) — компонент, на котором построен `CloseButton`
- [Modal](/ru/components/overlays/modal) — диалог с кнопкой закрытия в шапке
- [Drawer](/ru/components/overlays/drawer) — боковая панель с кнопкой закрытия в шапке
- [Popover](/ru/components/overlays/popover) — `showCloseButton` добавляет кнопку в поповер
- [Message](/ru/components/feedback/message) — сообщение, которое можно закрыть
- [Доступность](/ru/foundations/accessibility) — правило доступного имени для иконочных контролов
