# Toolbar

Панель инструментов собирает действия в одно место и даёт им структуру. Это не просто ряд кнопок — это навигационный якорь: пользователь знает, где искать действия, потому что они всегда здесь. Визуально `Toolbar` сделан по мотивам Apple liquid glass: `Toolbar.Group` собирает контролы в размытые стеклянные капсулы со светлым бликом по верхней кромке. Один и тот же `Toolbar` работает как шапка приложения, как шапка фрейма или панели и как ряд плавающих стеклянных «пилюль» над канвой — проп `variant` определяет только количество «хрома», а не разметку. Любой вариант живёт в обычном потоке документа — тулбар не позиционирует себя сам. Компонент формирует правильную семантику `role="toolbar"` и предоставляет готовую систему секций, групп и кнопок с поддержкой клавиатурных подсказок.

## Базовые действия

`Toolbar.Action` — это кнопка с `variant="text"`. Поддерживает иконки, текстовые метки и клавиатурные подсказки через `kbd`. `size` кнопки наследуется от `Toolbar` — задайте его на тулбаре, и весь ряд масштабируется одним пропом.

```tsx
<Toolbar>
  <Toolbar.Action label="Жирный"    icon={<Bold />}      showLabel={false} kbd="⌘B" />
  <Toolbar.Action label="Курсив"    icon={<Italic />}    showLabel={false} kbd="⌘I" />
  <Toolbar.Action label="Ссылка"    icon={<Link />}      showLabel={false} kbd="⌘K" />
</Toolbar>
```

::playground{src=ToolbarBasicDemo caption="Наведите на иконку, чтобы увидеть подсказку с горячей клавишей"}

## Варианты

Проп `variant` определяет, сколько «хрома» несёт тулбар — от минимума к максимуму:

- **`plain`** — нет фона тулбара, у групп нет материала: плоские text-кнопки в голом ряду. Для панели на поверхности, у которой уже есть свой фон.
- **`grouped`** — фона тулбара нет, но каждая `Toolbar.Group` — приподнятая стеклянная пилюля (размытая заливка, блик по кромке, тень). Полоса прозрачна, поэтому пилюли читаются как острова на той поверхности, что за ними. `showBackdrop` добавляет размытый градиент-подложку под пилюли. Позиционирование (оверлей над канвой) — на стороне вызывающего кода.
- **`solid`** (по умолчанию) — акцентно-тонированная размытая заливка тулбара с хайрлайном по кромке, обращённой к контенту, плюс те же стеклянные пилюли у групп. Самодостаточная шапка приложения или фрейма.

```tsx
{/* Полосу позиционирует вызывающий код — сам тулбар всегда в потоке. */}
<div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', insetInline: 0, top: 0 }}>
    <Toolbar variant="grouped" showBackdrop>
      <Toolbar.Leading>
        <Toolbar.Group>
          <Toolbar.Action label="Отменить" icon={<Undo2 />} showLabel={false} kbd="⌘Z" />
          <Toolbar.Action label="Повторить" icon={<Redo2 />} showLabel={false} kbd="⌘⇧Z" />
        </Toolbar.Group>
      </Toolbar.Leading>
    </Toolbar>
  </div>
  <Canvas />
</div>
```

## Секции: Leading, Center, Trailing

Для сложных тулбаров с заголовком, поиском и действиями используйте секции. Когда они есть, тулбар раскладывается гридом `1fr auto 1fr` — центр остаётся оптически по центру независимо от ширины боковых секций, без перекрытий. Без секций содержимое просто выстраивается в ряд слева направо.

```tsx
<Toolbar sticky>
  <Toolbar.Leading>
    <Dropdown content={<Dropdown.Menu>{/* … */}</Dropdown.Menu>}>
      <Toolbar.Title title="Мой воркспейс" clickable />
    </Dropdown>
  </Toolbar.Leading>
  <Toolbar.Center>
    <Search value={query} onChange={(e) => setQuery(e.target.value)} />
  </Toolbar.Center>
  <Toolbar.Trailing>
    <Toolbar.Action label="Создать" icon={<Plus />} />
    <Toolbar.Action label="Настройки" icon={<Settings />} showLabel={false} />
  </Toolbar.Trailing>
</Toolbar>
```

::playground{src=ToolbarSectionsDemo caption="Шапка приложения с заголовком, поиском и действиями"}

## Группы и разделители

`Toolbar.Group` объединяет связанные действия в стеклянную пилюлю — вид наследуется от `variant` тулбара (пилюля в `grouped`/`solid`, просто ряд в `plain`). Проп `variant` на группе переопределяет это точечно: например, пилюля-группа внутри `plain`-тулбара или плоский кластер внутри `solid`-тулбара. Совсем без группы-контейнера — положите действия в тулбар (или секцию) напрямую. `weight={1}` растягивает группу на доступное пространство; `justify="end"` прижимает содержимое к правому краю.

`Toolbar.Separator` разделяет содержимое: `variant="space"` (по умолчанию) — гибкий промежуток `flex: 1`, отжимающий следующий блок к краю; `variant="line"` — хайрлайн между соседними группами.

```tsx
<Toolbar>
  <Toolbar.Group weight={1}>
    <Toolbar.Action label="Отменить" icon={<Undo2 />} showLabel={false} kbd="⌘Z" />
    <Toolbar.Action label="Повторить" icon={<Redo2 />} showLabel={false} kbd="⌘⇧Z" />
    <Toolbar.Action label="Сохранить" icon={<Save />} kbd="⌘S" />
  </Toolbar.Group>
  <Toolbar.Group justify="end">
    <Toolbar.Action label="Поделиться" icon={<Share2 />} />
    <Toolbar.Action label="Опубликовать" icon={<Send />} />
  </Toolbar.Group>
</Toolbar>
```

::playground{src=ToolbarGroupsDemo caption="Группы разделяют действия по смыслу и позиции"}

## Вертикальный тулбар

`edge="left"` или `edge="right"` меняет ориентацию на вертикальную (`aria-orientation="vertical"`) и раскладывает секции сверху вниз. Удобно для боковых панелей инструментов в редакторах и графических приложениях.

```tsx
<Toolbar edge="left">
  <Toolbar.Action label="Выделение" icon={<MousePointer />} showLabel={false} />
  <Toolbar.Action label="Рисование" icon={<Pen />}          showLabel={false} />
  <Toolbar.Action label="Ластик"    icon={<Eraser />}       showLabel={false} />
</Toolbar>
```

## Схлопывание в overflow-меню

Каждая секция (`Toolbar.Leading` / `Center` / `Trailing`, либо плоский `Toolbar` без секций) следит за собственной шириной (высотой — для вертикального тулбара) и, когда её прямые дочерние элементы перестают помещаться, схлопывает часть из них в `Dropdown` — по приоритету, заданному пропом `priority` на `Toolbar.Action` или `Toolbar.Group`:

- **`'low'`** — схлопывается первым.
- **`'medium'`** (по умолчанию) — схлопывается только тогда, когда все `'low'`-действия в этом же ряду уже схлопнуты.
- **`'high'`** — не схлопывается никогда; при нехватке места ряд может визуально не помещаться.
- Внутри одного приоритета действия схлопываются в порядке чтения — сначала самое левое (для вертикального тулбара — самое верхнее).

`Toolbar.Group` схлопывается целиком, одним блоком — при этом её собственные действия разворачиваются в overflow-меню плоским списком, без вложенной группировки. `Toolbar.Title`, `Toolbar.Logo`, `Toolbar.Separator` и произвольные узлы `priority` не поддерживают и никогда не схлопываются.

Кнопка-триггер появляется с той стороны секции, что ближе к центру тулбара, и её стрелки всегда указывают дальше внутрь:

| Секция | Позиция триггера | Иконка (горизонтальный) | Иконка (вертикальный) |
|--------|-------------------|--------------------------|-------------------------|
| `Toolbar.Leading` / `Center` (и плоский `Toolbar`) | в конце содержимого секции | `ChevronsRight` | `ChevronsDown` |
| `Toolbar.Trailing` | в начале содержимого секции | `ChevronsLeft` | `ChevronsUp` |

`Toolbar.Leading` прижат к начальному краю тулбара, поэтому ближе к центру оказывается её последний дочерний элемент. `Toolbar.Trailing`, наоборот, прижат к конечному краю — ближе к центру оказывается первый элемент, туда и ставится триггер.

```tsx
<Toolbar.Trailing>
  <Toolbar.Action label="В избранное" icon={<Star />} showLabel={false} priority="high" />
  <Toolbar.Group priority="medium">
    <Toolbar.Action label="Поделиться" icon={<Share2 />} showLabel={false} />
    <Toolbar.Action label="Комментарии" icon={<MessageCircle />} showLabel={false} />
  </Toolbar.Group>
  <Toolbar.Action label="Фильтр" icon={<Filter />} showLabel={false} priority="low" />
  <Toolbar.Action label="Печать" icon={<Printer />} showLabel={false} priority="low" />
</Toolbar.Trailing>
```

## Кликабельный заголовок

`Toolbar.Title` с `clickable` помечает заголовок как триггер поповера/меню: добавляет шеврон рядом с названием и курсор-ладошку. Оберните его в `Dropdown`, чтобы открыть меню — например, переключатель рабочего пространства или проекта. Статический заголовок (по умолчанию) — просто текст.

```tsx
<Dropdown content={<Dropdown.Menu>{/* ... */}</Dropdown.Menu>}>
  <Toolbar.Title title="Acme Corp" clickable />
</Dropdown>
```

## Логотип

`Toolbar.Logo` — слот под лого продукта: положите в него `<svg>` или `<img>`. Он сжимается в квадрат по размеру тулбара (`size`) — от 24px при `mini` до 40px при `xl`. Навигацию домой вешает потребитель: оберните в `<a>` или передайте `onClick`.

```tsx
<Toolbar sticky>
  <Toolbar.Leading>
    <Toolbar.Logo>
      <BrandMark />
    </Toolbar.Logo>
    <Toolbar.Title title="Button" />
  </Toolbar.Leading>
  <Toolbar.Trailing>
    <Toolbar.Group>
      <Toolbar.Action label="Поиск" icon={<Search />} showLabel={false} onClick={openSearch} />
      <Toolbar.Action label="Уведомления" icon={<Bell />} showLabel={false} badge={5} />
      <Toolbar.Action label="Ещё" icon={<Ellipsis />} showLabel={false} />
    </Toolbar.Group>
  </Toolbar.Trailing>
</Toolbar>
```

## Переключатель сайдбара

`Toolbar.SidebarToggleAction` — единственное преднастроенное действие шапки: icon-only по умолчанию, с локализованным `aria-label`, иконка и подпись меняются автоматически вместе с состоянием сайдбара.

Управляемый — передайте `collapsed`, и компонент не хранит собственного состояния; свяжите его с тем же булевом, что и `Screen.Sidebar`:

```tsx
<Toolbar.SidebarToggleAction
  collapsed={sidebarCollapsed}
  onClick={() => setSidebarCollapsed((v) => !v)}
/>
```

Неуправляемый — опустите `collapsed` внутри `Screen`, чей `Screen.Sidebar` тоже неуправляемый: кнопка сама читает и переключает его через контекст `Screen`, без необходимости заводить состояние:

```tsx
<Toolbar.SidebarToggleAction />
```

## Свойства Toolbar

:::prop[variant]{type="'plain' | 'grouped' | 'solid'" default="'solid'"}
Сколько «хрома» несёт тулбар. `plain` — без фона тулбара и материала групп; `grouped` — без фона тулбара, но группы — стеклянные пилюли на прозрачной полосе (позиционирует вызывающий код); `solid` — акцентно-тонированная размытая заливка + хайрлайн + стеклянные пилюли. Все три — в обычном потоке документа.
:::

:::prop[edge]{type="'top' | 'bottom' | 'left' | 'right'" default="'top'"}
Край, на котором расположен тулбар. `left`/`right` включают вертикальную ориентацию.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Высота и внутренние отступы тулбара. Масштабирует `Toolbar.Title` и каскадом становится дефолтным `size` для вложенных `Toolbar.Action`.
:::

:::prop[sticky]{type="boolean" default="false"}
`position: sticky` к краю `edge` ближайшего скролл-контейнера.
:::

:::prop[showBackdrop]{type="boolean" default="false"}
Размытая градиент-подложка за тулбаром — поднимает пилюли `grouped` над насыщенным контентом.
:::

:::prop[fixed]{type="boolean"}
Устарело — используйте `sticky`. Работает как `sticky` до v4.
:::

## Свойства Toolbar.Action

:::prop[label*]{type="string"}
Текст кнопки. При `showLabel={false}` используется как доступное имя и текст подсказки.
:::

:::prop[icon]{type="ReactElement"}
Иконка.
:::

:::prop[showLabel]{type="boolean" default="true"}
Скрывает текст визуально, оставляя его доступным.
:::

:::prop[kbd]{type="string"}
Горячая клавиша, отображается в тултипе рядом с меткой.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Переопределяет унаследованный от тулбара размер.
:::

:::prop[priority]{type="'high' | 'medium' | 'low'" default="'medium'"}
Приоритет схлопывания, когда ряд не помещается по ширине. `low` схлопывается первым, `medium` — только когда схлопнуты все `low`, `high` — никогда.
:::

## Свойства Toolbar.Title

Заголовок рендерится через `Text` с `truncate`: если на него не хватает места в строке, текст обрезается многоточием, а не выталкивает остальные группы за край.

:::prop[title*]{type="string"}
Текст заголовка. Обрезается многоточием, когда в строке не хватает места.
:::

:::prop[clickable]{type="boolean" default="false"}
Помечает заголовок как триггер меню: шеврон рядом с названием и курсор-ладошка. Без него — просто текст.
:::

## Свойства Toolbar.Logo

:::prop[children]{type="ReactNode"}
Лого — `<svg>` или `<img>`. Сжимается в квадрат по размеру тулбара.
:::

## Свойства Toolbar.Group

:::prop[justify]{type="'start' | 'center' | 'end' | 'between'" default="'start'"}
Распределение содержимого группы вдоль главной оси.
:::

:::prop[weight]{type="number"}
Значение `flex` — группа с `weight={1}` занимает всё оставшееся пространство.
:::

:::prop[variant]{type="'plain' | 'grouped' | 'solid'"}
Переопределяет `variant` тулбара для этой группы: `plain` убирает стеклянную пилюлю, `grouped`/`solid` — включают. По умолчанию наследуется от тулбара.
:::

:::prop[priority]{type="'high' | 'medium' | 'low'" default="'medium'"}
Приоритет схлопывания для всей группы как единого целого. При схлопывании действия группы разворачиваются в overflow-меню плоским списком.
:::

## Свойства Toolbar.Separator

:::prop[variant]{type="'space' | 'line'" default="'space'"}
`space` — гибкий промежуток (`flex: 1`), отжимающий следующий блок к краю. `line` — хайрлайн-разделитель между группами.
:::

## Рекомендации

**Иконки без подписей — только для узнаваемых действий.** `Bold`, `Italic`, `Undo` — иконки, которые пользователь знает. «Запустить анализ», «Создать снапшот» — требуют подписи. Когда сомневаетесь — оставьте `showLabel` по умолчанию.

**`kbd` — для клавиш, которые действительно работают.** Не показывайте сочетания клавиш, которые не зарегистрированы. Это обещание: нажав `⌘S`, пользователь ожидает сохранения.

**Разделяйте группы по смыслу, а не для красоты.** `Undo/Redo` — одна группа. `Share/Publish` — другая. Группировка должна отражать логику, а не заполнять пространство.

**Тулбар — не навигация.** `Toolbar.Action` выполняет действие; для перехода между страницами используйте навигационные компоненты. Смешение навигации и действий в одной панели создаёт двусмысленность.
