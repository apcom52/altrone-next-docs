# Toolbar

Ряд действий: шапка приложения, окна или панели, а также набор инструментов поверх холста. Связанные действия собираются в `Toolbar.Group` — он оборачивает их в мягкую полупрозрачную капсулу. Компонент всегда один и тот же, а проп `variant` лишь решает, сколько фона у тулбара. Тулбар стоит там, где вы его разместили, и сам себя не позиционирует.

## Базовое использование

`Toolbar.Action` — это текстовая `Button`, которая принимает те же пропы, плюс `kbd` для подсказки с горячей клавишей и `priority` для [схлопывания](#схлопывание-в-overflow-меню). `size` наследуется от `Toolbar`, поэтому весь ряд масштабируется одним пропом. Связанные действия оборачивайте в `Toolbar.Group`.

```tsx
<Toolbar>
  <Toolbar.Group>
    <Toolbar.Action label="Bold" icon={<Bold />} showLabel={false} kbd="⌘B" />
    <Toolbar.Action label="Italic" icon={<Italic />} showLabel={false} kbd="⌘I" />
  </Toolbar.Group>
</Toolbar>
```

::playground{src=toolbar/ToolbarBasicDemo caption="Наведите на иконку, чтобы увидеть подсказку с горячей клавишей; `selected` отмечает активный инструмент"}

## Варианты

`variant` определяет, сколько «хрома» несёт тулбар — от минимума к максимуму:

- **`plain`** — нет фона тулбара и материала у групп: плоские текстовые кнопки в голом ряду. Для тулбара на поверхности, у которой уже есть свой фон.
- **`grouped`** — фона тулбара нет, но каждая `Toolbar.Group` — полупрозрачная капсула с размытием и мягкой тенью. Сама полоса прозрачна, поэтому капсулы выглядят как острова на том, что лежит за ними. `showBackdrop` добавляет под них размытый градиент-подложку. Позиционирование над канвой — на стороне вашего кода.
- **`solid`** (по умолчанию) — размытый фон, подкрашенный акцентным цветом, и тонкая линия по краю, обращённому к контенту; у групп те же капсулы. Шапка, которая выглядит законченной сама по себе.

```tsx
<Toolbar variant="grouped" showBackdrop>
  ...
</Toolbar>
```

::playground{src=toolbar/ToolbarVariantsDemo caption="Одно и то же содержимое в вариантах plain, grouped и solid"}

## Секции

Для шапки с заголовком, поиском и действиями используйте `Toolbar.Leading`, `Toolbar.Center` и `Toolbar.Trailing`. Когда они есть, тулбар раскладывается гридом из трёх колонок, поэтому центр остаётся оптически по центру независимо от ширины боковых секций. Без секций содержимое просто выстраивается в ряд слева направо.

```tsx
<Toolbar sticky>
  <Toolbar.Leading>
    <Toolbar.Title title="Northwind" />
  </Toolbar.Leading>
  <Toolbar.Center>
    <TextInput value={query} onChange={setQuery} placeholder="Search everything" />
  </Toolbar.Center>
  <Toolbar.Trailing>
    <Toolbar.Group>
      <Toolbar.Action label="New" icon={<Plus />} />
    </Toolbar.Group>
  </Toolbar.Trailing>
</Toolbar>
```

::playground{src=toolbar/ToolbarSectionsDemo caption="Шапка приложения: переключатель рабочих пространств, поиск и действия"}

`sticky` прикрепляет тулбар к краю `edge` ближайшего скролл-контейнера.

## Группы и разделители

`Toolbar.Group` объединяет связанные действия в капсулу; её вид наследуется от `variant` тулбара (пилюля в `grouped` и `solid`, голый ряд в `plain`), а собственный `variant` группы переопределяет это только для неё. `weight={1}` заставляет группу занять оставшееся место, а `justify` выравнивает её содержимое.

`Toolbar.Separator` разделяет содержимое: `variant="space"` (по умолчанию) — гибкий промежуток, отжимающий следующий блок к краю, `variant="line"` — хайрлайн между соседними группами.

```tsx
<Toolbar>
  <Toolbar.Group>...</Toolbar.Group>
  <Toolbar.Separator />
  <Toolbar.Group>...</Toolbar.Group>
  <Toolbar.Separator variant="line" />
  <Toolbar.Group>...</Toolbar.Group>
</Toolbar>
```

::playground{src=toolbar/ToolbarGroupsDemo caption="Гибкий промежуток отжимает группу публикации вправо, линия выделяет опасное действие"}

## Вертикальный тулбар

`edge="left"` или `edge="right"` делает тулбар вертикальным (`aria-orientation="vertical"`) и раскладывает секции сверху вниз. Удобно для палитр инструментов в редакторах и графических приложениях. Вертикальный тулбар занимает всю высоту своего контейнера.

```tsx
<Toolbar edge="left" variant="grouped">
  <Toolbar.Leading>
    <Toolbar.Group>...</Toolbar.Group>
  </Toolbar.Leading>
</Toolbar>
```

::playground{src=toolbar/ToolbarVerticalDemo caption="Палитра инструментов у левого края"}

## Схлопывание в overflow-меню

Каждая секция (`Toolbar.Leading`, `Toolbar.Center`, `Toolbar.Trailing` либо плоский `Toolbar` без секций) следит за собственной шириной — высотой в вертикальном тулбаре — и, когда её прямые дочерние элементы перестают помещаться, схлопывает часть из них в `Dropdown`. Что уйдёт первым, решает `priority` на `Toolbar.Action` или `Toolbar.Group`:

- **`'low'`** схлопывается первым.
- **`'medium'`** (по умолчанию) схлопывается, только когда все `'low'`-элементы этого же ряда уже скрыты.
- **`'high'`** не схлопывается никогда; если места всё равно не хватает, ряд визуально переполняется.
- Внутри одного приоритета элементы схлопываются в порядке чтения — сначала самый левый (в вертикальном тулбаре — самый верхний).

`Toolbar.Group` схлопывается целиком, одним блоком, а её действия попадают в меню плоским списком. `Toolbar.Title`, `Toolbar.Logo`, `Toolbar.Separator` и произвольные узлы `priority` не поддерживают и никогда не схлопываются. Поскольку единица схлопывания — группа, действие вне группы уходит из ряда отдельно от соседей.

Триггер находится с той стороны секции, что ближе к центру тулбара, а его стрелки указывают дальше внутрь.

```tsx
<Toolbar.Trailing>
  <Toolbar.Action label="Star" icon={<Star />} showLabel={false} priority="high" />
  <Toolbar.Group priority="medium">...</Toolbar.Group>
  <Toolbar.Action label="Print" icon={<Printer />} showLabel={false} priority="low" />
</Toolbar.Trailing>
```

::playground{src=toolbar/ToolbarOverflowDemo caption="В узком контейнере первыми в меню уходят действия с низким приоритетом"}

## Заголовок

`Toolbar.Title` выводит заголовок; размер шрифта следует `size` тулбара. Слишком длинный для ряда заголовок обрезается многоточием, а не выталкивает остальные группы за край.

С `clickable` заголовок становится триггером: рядом появляются шеврон и курсор-ладошка. Оберните его в `Dropdown`, чтобы открыть меню — например, переключатель рабочего пространства или проекта. Статический заголовок — просто текст.

```tsx
<Dropdown content={<Dropdown.Menu>...</Dropdown.Menu>}>
  <Toolbar.Title title="Northwind" clickable />
</Dropdown>
```

::playground{src=toolbar/ToolbarTitleDemo caption="Статический заголовок и заголовок, открывающий меню"}

## Логотип

`Toolbar.Logo` — слот под знак продукта: положите в него `<svg>` или `<img>`. Он сжимается в квадрат по размеру тулбара — от 24px при `mini` до 40px при `xl`. Переход на главную страницу вешаете вы: оберните логотип в ссылку или передайте `onClick`.

```tsx
<Toolbar.Leading>
  <Toolbar.Logo>
    <BrandMark />
  </Toolbar.Logo>
  <Toolbar.Title title="Northwind" />
</Toolbar.Leading>
```

::playground{src=toolbar/ToolbarLogoDemo caption="Шапка с логотипом, заголовком и действиями с бейджем"}

## Переключатель сайдбара

`Toolbar.SidebarToggleAction` — единственное готовое действие шапки: по умолчанию только иконка, с локализованным `aria-label`. Иконка и подпись меняются вместе с состоянием сайдбара.

Неуправляемый, внутри `Screen`, чей `Screen.Sidebar` тоже неуправляемый, он сам читает и переключает сайдбар через контекст `Screen` — без собственного состояния:

```tsx
<Toolbar.SidebarToggleAction />
```

Управляемый — передайте `collapsed` и свяжите `onClick` с тем же состоянием, что и у `Screen.Sidebar`:

```tsx
<Toolbar.SidebarToggleAction
  collapsed={collapsed}
  onClick={() => setCollapsed((value) => !value)}
/>
```

::playground{src=toolbar/ToolbarSidebarToggleDemo caption="Управляемый переключатель: иконка следует за `collapsed`"}

## Свойства

### Toolbar

:::prop[variant]{type="'plain' | 'grouped' | 'solid'" default="'solid'"}
Сколько поверхности несёт тулбар. См. [Варианты](#варианты).
:::

:::prop[edge]{type="'top' | 'bottom' | 'left' | 'right'" default="'top'"}
Край, на котором расположен тулбар. `left` и `right` делают его вертикальным.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Высота и внутренние отступы тулбара. Масштабирует `Toolbar.Title` и `Toolbar.Logo`, а каскадом становится дефолтным `size` для вложенных `Toolbar.Action`.
:::

:::prop[sticky]{type="boolean" default="false"}
Прикрепляет тулбар к краю `edge` ближайшего скролл-контейнера.
:::

:::prop[showBackdrop]{type="boolean" default="false"}
Размытая градиент-подложка за тулбаром — поднимает пилюли `grouped` над насыщенным контентом.
:::

:::prop[icons]{type="Partial<ToolbarIconSet>"}
Заменяет иконки, которые тулбар рисует сам. См. вкладку [Иконки](/ru/components/layout/toolbar/icons).
:::

:::prop[fixed]{type="boolean" deprecated="true"}
Используйте `sticky`.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент.
:::

Также принимаются стандартные атрибуты `div`, включая `role` — переопределите его, чтобы получить панель без семантики тулбара.

### Toolbar.Action

Все пропы `Button`, кроме `variant`.

:::prop[label*]{type="string"}
Текст кнопки. При `showLabel={false}` становится доступным именем и текстом подсказки.
:::

:::prop[icon]{type="ReactElement"}
Иконка.
:::

:::prop[showLabel]{type="boolean" default="true"}
`false` оставляет только иконку; подпись уходит в тултип.
:::

:::prop[kbd]{type="string"}
Горячая клавиша, показывается в тултипе рядом с подписью.
:::

:::prop[selected]{type="boolean" default="false"}
Нажатое состояние, например текущий инструмент.
:::

:::prop[badge]{type="number | string | ReactElement"}
Бейдж в углу кнопки.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Переопределяет размер, унаследованный от тулбара.
:::

:::prop[priority]{type="'high' | 'medium' | 'low'" default="'medium'"}
Приоритет схлопывания, когда ряд не помещается. См. [Схлопывание в overflow-меню](#схлопывание-в-overflow-меню).
:::

### Toolbar.Group

:::prop[justify]{type="'start' | 'center' | 'end' | 'between'" default="'start'"}
Распределение содержимого группы вдоль главной оси.
:::

:::prop[weight]{type="number"}
Значение `flex` — группа с `weight={1}` занимает всё оставшееся пространство.
:::

:::prop[variant]{type="'plain' | 'grouped' | 'solid'"}
Переопределяет `variant` тулбара для этой группы: `plain` убирает капсулу, `grouped` и `solid` включают её. По умолчанию наследуется.
:::

:::prop[priority]{type="'high' | 'medium' | 'low'" default="'medium'"}
Приоритет схлопывания всей группы как единого целого.
:::

### Toolbar.Separator

:::prop[variant]{type="'space' | 'line'" default="'space'"}
`space` — гибкий промежуток, отжимающий следующий блок к краю; `line` — хайрлайн между группами.
:::

### Toolbar.Title

:::prop[title*]{type="string"}
Текст заголовка. Обрезается многоточием, когда в ряду не хватает места.
:::

:::prop[clickable]{type="boolean" default="false"}
Помечает заголовок как триггер меню: шеврон рядом с текстом и курсор-ладошка.
:::

### Toolbar.Logo

:::prop[children]{type="ReactNode"}
Знак — `<svg>` или `<img>`. Сжимается в квадрат по размеру тулбара.
:::

### Toolbar.SidebarToggleAction

Принимает пропы `Toolbar.Action`, кроме `label` и `icon`.

:::prop[collapsed]{type="boolean"}
Состояние сайдбара. Без него действие само переключает `Screen.Sidebar` через контекст `Screen`; с ним оно не хранит состояния, а `onClick` — ваш.
:::

:::prop[onClick]{type="(event: MouseEvent<HTMLButtonElement>) => void"}
Нужен только когда `collapsed` управляемый.
:::

:::prop[showLabel]{type="boolean" default="false"}
Показывает текстовую подпись рядом с иконкой.
:::

### Toolbar.Leading, Toolbar.Center, Toolbar.Trailing

Секции раскладки без собственных пропов, кроме атрибутов `div` и `ref`. См. [Секции](#секции).

## Похожие темы

- [Screen](/ru/components/layout/screen) — `Screen.Header` — прозрачная зона, которую окрашивает тулбар `solid`
- [Dropdown](/ru/components/overlays/dropdown) — меню за кликабельным заголовком и триггером overflow
- [Button](/ru/components/controls/button) — компонент, на котором построен `Toolbar.Action`
- [Tooltip](/ru/components/overlays/tooltip) — подсказка, которую показывают действия без подписи
