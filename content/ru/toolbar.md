# Toolbar

Панель инструментов собирает действия в одно место и даёт им структуру. Это не просто ряд кнопок — это навигационный якорь: пользователь знает, где искать действия, потому что они всегда здесь. `Toolbar` формирует правильную семантику `role="toolbar"` и предоставляет готовую систему секций, групп и кнопок с поддержкой клавиатурных подсказок.

## Базовые действия

`Toolbar.Action` — это кнопка с `variant="text"`. Поддерживает иконки, текстовые метки и клавиатурные подсказки через `kbd`.

```tsx
<Toolbar>
  <Toolbar.Action label="Жирный"    icon={<Bold />}      showLabel={false} kbd="⌘B" />
  <Toolbar.Action label="Курсив"    icon={<Italic />}    showLabel={false} kbd="⌘I" />
  <Toolbar.Action label="Ссылка"    icon={<Link />}      showLabel={false} kbd="⌘K" />
</Toolbar>
```

::playground{src=ToolbarBasicDemo caption="Наведите на иконку, чтобы увидеть подсказку с горячей клавишей"}

## Секции: Leading, Center, Trailing

Для сложных тулбаров с заголовком, поиском и действиями используйте секции. Каждая занимает свою часть: `Leading` — слева, `Center` — по центру, `Trailing` — справа.

```tsx
<Toolbar>
  <Toolbar.Leading>
    <Toolbar.Title label="Мой воркспейс" clickable />
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

::playground{src=ToolbarSectionsDemo caption="Тулбар приложения с заголовком, поиском и действиями"}

## Группы с выравниванием

`Toolbar.Group` объединяет связанные действия. `weight={1}` растягивает группу на доступное пространство; `align="end"` прижимает содержимое к правому краю.

```tsx
<Toolbar>
  <Toolbar.Group weight={1}>
    <Toolbar.Action label="Отменить" icon={<Undo2 />} showLabel={false} kbd="⌘Z" />
    <Toolbar.Action label="Повторить" icon={<Redo2 />} showLabel={false} kbd="⌘⇧Z" />
    <Toolbar.Action label="Сохранить" icon={<Save />} kbd="⌘S" />
  </Toolbar.Group>
  <Toolbar.Group align="end">
    <Toolbar.Action label="Поделиться" icon={<Share2 />} />
    <Toolbar.Action label="Опубликовать" icon={<Send />} />
  </Toolbar.Group>
</Toolbar>
```

::playground{src=ToolbarGroupsDemo caption="Группы разделяют действия по смыслу и позиции"}

## Вертикальный тулбар

`placement="left"` или `placement="right"` меняет ориентацию на вертикальную. Удобно для боковых панелей инструментов в редакторах и графических приложениях.

```tsx
<Toolbar placement="left">
  <Toolbar.Action label="Выделение" icon={<MousePointer />} showLabel={false} />
  <Toolbar.Action label="Рисование" icon={<Pen />}          showLabel={false} />
  <Toolbar.Action label="Ластик"    icon={<Eraser />}       showLabel={false} />
</Toolbar>
```

## Кликабельный заголовок

`Toolbar.Title` с `clickable` добавляет шеврон рядом с названием. Используйте для переключателей рабочего пространства или проекта.

```tsx
<Toolbar>
  <Toolbar.Title label="Acme Corp" clickable onClick={openWorkspaceSwitcher} />
</Toolbar>
```

## Свойства Toolbar

:::prop[placement]{type="'top' | 'bottom' | 'left' | 'right'" default="'top'"}
Край, на котором расположен тулбар. Влияет на ориентацию и `aria-orientation`.
:::

:::prop[fixed]{type="boolean" default="false"}
Накладывает `position: absolute` на тулбар внутри позиционированного контейнера.
:::

:::prop[showBackdrop]{type="boolean" default="false"}
Показывает размытый фон за тулбаром.
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

## Свойства Toolbar.Title

:::prop[label*]{type="string"}
Текст заголовка.
:::

:::prop[clickable]{type="boolean" default="false"}
Добавляет кнопку с шевроном для открытия дополнительного меню.
:::

## Свойства Toolbar.Group

:::prop[align]{type="'start' | 'center' | 'end' | 'between'" default="'start'"}
Выравнивание содержимого группы.
:::

:::prop[weight]{type="number"}
Значение `flex` — группа с `weight={1}` занимает всё оставшееся пространство.
:::

## Рекомендации

**Иконки без подписей — только для узнаваемых действий.** `Bold`, `Italic`, `Undo` — иконки, которые пользователь знает. «Запустить анализ», «Создать снапшот» — требуют подписи. Когда сомневаетесь — оставьте `showLabel` по умолчанию.

**`kbd` — для клавиш, которые действительно работают.** Не показывайте сочетания клавиш, которые не зарегистрированы. Это обещание: нажав `⌘S`, пользователь ожидает сохранения.

**Разделяйте группы по смыслу, а не для красоты.** `Undo/Redo` — одна группа. `Share/Publish` — другая. Группировка должна отражать логику, а не заполнять пространство.

**Тулбар — не навигация.** `Toolbar.Action` выполняет действие; для перехода между страницами используйте навигационные компоненты. Смешение навигации и действий в одной панели создаёт двусмысленность.
