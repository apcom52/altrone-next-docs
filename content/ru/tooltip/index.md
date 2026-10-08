# Tooltip

Короткая всплывающая подсказка, привязанная к элементу. По умолчанию появляется через 500 мс после наведения или немедленно при фокусе — и исчезает сразу при уходе курсора или потере фокуса; режим триггера настраивается через `trigger`, включая клик. `Tooltip` сообщает контекст, не захламляя интерфейс постоянно видимым текстом.

:::warning
Никогда не оборачивайте `Button` (или `CloseButton`, который сам является `Button`) в `Tooltip`. `Button` уже рендерит собственный внутренний тултип, когда передан `showLabel={false}` — передавайте `tooltip`/`kbd` напрямую в `Button`. Обёртка во второй, внешний `Tooltip` вкладывает друг в друга два экземпляра тултипа на одном и том же триггере и ломает рендер. Собственные пропы тултипа — в разделе [Button](/ru/components/controls/button).
:::

## Базовый пример

```tsx
<Tooltip content="Copy to clipboard">
  <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Copy">
    <Copy size={14} />
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipBasicDemo caption="Наведите на кнопку, чтобы увидеть подсказку"}

## Заголовок и горячая клавиша

`title` добавляет жирный заголовок над текстом. `kbd` — бейдж горячей клавиши. Используйте вместе для кнопок панели инструментов.

```tsx
<Tooltip title="Save document" content="Saves all unsaved changes." kbd="⌘S">
  <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Save">
    <Save size={14} />
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipTitleKbdDemo caption="title и kbd хорошо работают для кнопок без текста"}

## Иконка-вопрос (без children)

Если `children` не передан, `Tooltip` сам рендерит кнопку с иконкой `?`. Используйте рядом с полями форм и техническими терминами.

```tsx
<Flex gap="xs" align="center">
  <span>API key</span>
  <Tooltip content="A secret key for accessing the API. Never share it publicly." />
</Flex>
```

::playground{src=tooltip/TooltipHelpIconDemo}

## Позиционирование

По умолчанию тултип появляется сверху. `placement` принимает любую строку позиционирования Floating UI: `top`, `bottom`, `left`, `right` и их варианты с суффиксами `-start` / `-end`. При нехватке места тултип автоматически переворачивается.

```tsx
<Tooltip content="Top"    placement="top">…</Tooltip>
<Tooltip content="Bottom" placement="bottom">…</Tooltip>
<Tooltip content="Left"   placement="left">…</Tooltip>
<Tooltip content="Right"  placement="right">…</Tooltip>
```

::playground{src=tooltip/TooltipPlacementsDemo}

## Режимы триггера

По умолчанию тултип открывается и при наведении, и при фокусе (`trigger={['hover', 'focus']}`). `trigger` принимает одно значение или массив: `'hover'`, `'focus'`, `'click'`.

```tsx
<Tooltip content="Opens only on click" trigger="click">
  <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
    Info
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipTriggerModesDemo caption="Три независимых режима триггера"}

## Начальное состояние и отслеживание изменений

`defaultOpen` открывает тултип сразу при первом рендере. `onOpenChange` вызывается при каждом изменении состояния — параметр `reason` приходит от floating-ui (`'hover'`, `'focus'`, `'escape-key'`, `'outside-press'` и т.д.). Управляемого (`open`) режима у `Tooltip` нет.

```tsx
<Tooltip
  content="Visible right away, before any hover"
  defaultOpen
  onOpenChange={(open, event, reason) => console.log(open, reason)}
>
  <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
    Open by default
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipOpenStateDemo}

## Тултип на отключённом элементе

Элемент с нативным `disabled` не генерирует события мыши, поэтому тултип не появится. Вместо этого пометьте триггер `aria-disabled="true"` и оставьте его фокусируемым через `tabIndex={0}` — тогда подсказка работает и при наведении, и с клавиатуры.

```tsx
<Tooltip content="Select at least one item first">
  <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} style={{ opacity: 0.5 }} role="button" aria-disabled="true" tabIndex={0}>
    Delete
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipDisabledDemo}

## Произвольный контент

`content` принимает любой `ReactNode`. Используйте для структурированных подсказок с несколькими строками.

```tsx
<Tooltip
  content={
    <Flex orientation="vertical" gap="xs">
      <strong>Plan limits</strong>
      <span>5 projects · 3 members · 10 GB</span>
    </Flex>
  }
  maxWidth={240}
>
  <span>Current plan</span>
</Tooltip>
```

::playground{src=tooltip/TooltipRichContentDemo}

## Пропсы

`className`/`style` — единственное исключение из того, как прокидываются HTML-атрибуты: все остальные нативные атрибуты (`id`, `aria-*`, `data-*`, обработчики событий) попадают на **триггер** (тот же элемент, на который указывает `ref`), а `className`/`style` — на саму плавающую панель тултипа.

:::prop[content*]{type="string | ReactElement"}
Текст или элемент внутри тултипа.
:::

:::prop[children]{type="ReactNode"}
Элемент-триггер. Если не передан — рендерится кнопка с иконкой `?`.
:::

:::prop[title]{type="string"}
Жирный заголовок над `content`.
:::

:::prop[kbd]{type="string"}
Бейдж горячей клавиши, отображается после `content`.
:::

:::prop[placement]{type="Placement" default="'top'"}
Позиция тултипа относительно триггера. Автоматически переворачивается при нехватке места.
:::

:::prop[maxWidth]{type="number | string"}
Максимальная ширина панели тултипа.
:::

:::prop[trigger]{type="'hover' | 'focus' | 'click' | ('hover' | 'focus' | 'click')[]" default="['hover', 'focus']"}
Какое взаимодействие открывает тултип — одно значение или комбинация.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Начальное состояние для неуправляемого тултипа.
:::

:::prop[onOpenChange]{type="(open: boolean, event?: Event, reason?: OpenChangeReason) => void"}
Вызывается при каждом изменении состояния открытости. `reason` приходит от floating-ui.
:::

:::prop[triggerIcon]{type="ReactElement"}
Иконка автоматически создаваемой кнопки-триггера (когда `children` не передан). По умолчанию — общая роль `icons.help` (см. `Application`). Не действует при кастомном триггере через `children`.
:::

:::prop[triggerClassName]{type="string"}
Дополнительный класс автоматически создаваемой кнопки-триггера. Не действует при кастомном триггере через `children`.
:::

:::prop[triggerStyle]{type="CSSProperties"}
Инлайновые стили автоматически создаваемой кнопки-триггера. Не действует при кастомном триггере через `children`.
:::

## Похожие темы

- [Popover](/ru/components/overlays/popover) — более тяжёлый примитив всплывающего контента, из которого выделен `Tooltip`; используйте его, если нужна шапка, focus trap или произвольный интерактивный контент
- [Button](/ru/components/controls/button) — имеет собственные пропы `tooltip`/`kbd` для кнопки только с иконкой; никогда не оборачивайте `Button` в отдельный `Tooltip`
- [Box](/ru/components/layout/box) — примитив, использованный выше для кастомного триггера, без конфликта с собственным авто-тултипом `Button`
- [Accessibility](/ru/foundations/accessibility) — требование `aria-label` для триггеров без текста, которое содержимое `Tooltip` никогда не заменяет
