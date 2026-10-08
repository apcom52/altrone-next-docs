# Popover

Плавающая панель, привязанная к триггеру. Базовый примитив, на котором построены `Dropdown`, `AutocompleteInput`, `ColorPicker` и `DatePicker`. Используйте `Popover` напрямую, когда нужна произвольная панель — форма, подтверждение, информационный блок — а не список пунктов меню.

## Базовый пример

```tsx
<Popover content={<div style={{ padding: 16 }}>Panel content</div>}>
  <Button label="Open popover" />
</Popover>
```

::playground{src=popover/PopoverBasicDemo caption="Клик открывает и закрывает панель"}

## Состояние открытия в триггере

`children` может быть функцией — она получает `{ open, hide }`. Используйте для переключения иконки или стиля кнопки-триггера.

```tsx
<Popover content={<FilterPanel />}>
  {({ open }) => (
    <Button
      label="Filters"
      additionalIcon={open ? <ChevronUp /> : <ChevronDown />}
    />
  )}
</Popover>
```

::playground{src=popover/PopoverOpenStateDemo caption="Иконка кнопки реагирует на состояние поповера"}

## Закрытие изнутри

`content` тоже может быть функцией — она получает `hide` и `hideAllSequence`. Передайте `hide` в кнопки внутри панели.

```tsx
<Popover
  content={({ hide }) => (
    <div style={{ padding: 16 }}>
      <p>Delete this record?</p>
      <Button label="Delete" danger onClick={() => { handleDelete(); hide(); }} />
      <Button label="Cancel" variant="text" onClick={hide} />
    </div>
  )}
>
  <Button label="Delete" danger />
</Popover>
```

::playground{src=popover/PopoverConfirmDemo caption="Подтверждение удаления внутри поповера"}

## Позиционирование

`placement` принимает строки Floating UI: `top`, `bottom`, `left`, `right` и их варианты с суффиксами `-start` и `-end`. `auto` выбирает лучшее место автоматически.

```tsx
<Popover placement="right-start" content={<HelpPanel />}>
  <HelpButton />
</Popover>

<Popover placement="auto" content={<QuickActions />}>
  <ContextMenuTrigger />
</Popover>
```

`overlap` меняет геометрию позиционирования: панель ложится поверх триггера вместо того, чтобы вставать рядом с ним — например, чтобы заменить собой кнопку на время выбора значения.

```tsx
<Popover overlap content={<ColorSwatches />}>
  <ColorPreview />
</Popover>
```

## Триггер по наведению или фокусу

```tsx
{/* Только наведение */}
<Popover trigger="hover" content={<PreviewCard />}>
  <ProjectRow />
</Popover>

{/* Несколько триггеров */}
<Popover trigger={['click', 'focus']} content={<Suggestions />}>
  <TextInput />
</Popover>
```

:::note
При `trigger="hover"` открытие задержано на 500 мс, закрытие — на 250 мс. Встроенный `safePolygon` не даёт панели закрыться, пока курсор движется от триггера к панели.
:::

## Программное управление

Передайте `controlRef` для доступа к императивному API: открыть, закрыть, узнать текущее состояние.
Обычный `ref` при этом указывает на DOM-элемент триггера, как и у любого другого компонента.

```tsx
const popoverRef = useRef<PopoverRef>(null);

<Popover controlRef={popoverRef} content={<Panel />}>
  <Button label="Open" />
</Popover>

<Button
  label="Close from outside"
  onClick={() => popoverRef.current?.hide()}
/>
```

## Вложенные поповеры

`hideAllSequence` закрывает всю цепочку вложенных поповеров разом — полезно в сценариях с подтверждением внутри меню.

```tsx
<Popover
  content={({ hideAllSequence }) => (
    <Popover
      content={({ hideAllSequence: hideAll }) => (
        <Button label="Close all" onClick={hideAll} />
      )}
    >
      <Button label="Nested popover" />
    </Popover>
  )}
>
  <Button label="Parent popover" />
</Popover>
```

## Свойства

:::prop[children*]{type="ReactElement | ((ctx: { open: boolean; hide: () => void }) => ReactElement)"}
Элемент-триггер. Функция получает текущее состояние и колбэк закрытия. Собственный `ref` триггера объединяется с `ref`, переданным `Popover`, а не перезаписывается.
:::

:::prop[content*]{type="ReactElement | ((ctx: { hide: () => void; hideAllSequence: () => void }) => ReactElement)"}
Содержимое панели. Функция получает колбэки закрытия текущего поповера и всей цепочки вложенных поповеров.
:::

:::prop[placement]{type="Placement | 'auto'" default="'auto'"}
Позиция панели — строка Floating UI (`'top'`, `'bottom-start'`, …) или `'auto'` для автоматического выбора лучшего места.
:::

:::prop[trigger]{type="'click' | 'focus' | 'hover' | Array<'click' | 'focus' | 'hover'>" default="'click'"}
Что открывает поповер. Массив комбинирует несколько триггеров одновременно.
:::

:::prop[overlap]{type="boolean" default="false"}
Панель перекрывает триггер вместо того, чтобы стоять рядом с ним.
:::

:::prop[parentWidth]{type="boolean" default="false"}
Ширина панели равна ширине триггера.
:::

:::prop[title]{type="string"}
Заголовок в шапке. Вместе с `showCloseButton` делает панель озаглавленным `role="dialog"`.
:::

:::prop[showCloseButton]{type="boolean" default="false"}
Кнопка закрытия в шапке.
:::

:::prop[focusTrap]{type="boolean" default="true"}
Ловушка фокуса внутри открытой панели для клавиатурной навигации.
:::

:::prop[focusTrapTargets]{type="('reference' | 'floating' | 'content')[]" default="['reference', 'content']"}
Порядок обхода focus-trap табом. Как правило, нужен только при построении собственного меню поверх `Popover` — `Dropdown` и `Select` настраивают его сами.
:::

:::prop[listNavigation]{type="boolean" default="false"}
Включает навигацию стрелками по элементам списка внутри панели. Используется `Dropdown` и `Select` для построения меню — для обычной панели с произвольным содержимым не нужен.
:::

:::prop[defaultListNavigationIndex]{type="number | null" default="null"}
Начальный активный индекс при `listNavigation`.
:::

:::prop[virtualNavigationFocus]{type="boolean" default="false"}
При `listNavigation` держит реальный DOM-фокус на триггере, подсвечивая активный пункт списка только визуально — паттерн `aria-activedescendant`, как в `AutocompleteInput`.
:::

:::prop[enabled]{type="boolean" default="true"}
При `false` рендерится только триггер — вся логика открытия и позиционирования отключена.
:::

:::prop[open]{type="boolean"}
Управляемое состояние открытия. Без этого пропа `Popover` неуправляемый — см. `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Начальное состояние для неуправляемого поповера. Игнорируется, если передан `open`.
:::

:::prop[onOpenChange]{type="(open: boolean, event?: Event, reason?: OpenChangeReason) => void"}
Вызывается при каждой смене состояния. `reason` говорит, *как* оно изменилось: `escape-key`, `outside-press`, `reference-press`, `hover`…
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на DOM-элемент триггера — не на плавающую панель.
:::

:::prop[controlRef]{type="Ref<PopoverRef>"}
Императивный доступ к состоянию и управлению поповером: `open`, `show()`, `hide()`, `activeIndex`, `childrenNode`, `contentNode`, `context`, `actualPlacement`, `transformOrigin`.
:::

## Похожие темы

- [Dropdown](/ru/components/overlays/dropdown) — надстройка над `Popover` для списков пунктов меню с иконками, клавишами и разделителями
- [Modal](/ru/components/overlays/modal) — блокирующий диалог, когда решение требует полного внимания пользователя, а не быстрого контекстного действия
- [Drawer](/ru/components/overlays/drawer) — боковая панель, не привязанная к триггеру, для более объёмного содержимого
