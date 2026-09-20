# Popover

Плавающая панель, привязанная к триггеру. Базовый примитив, на котором построены `Dropdown`, `AutocompleteInput`, `ColorPicker` и `DatePicker`. Используйте `Popover` напрямую, когда нужна произвольная панель — форма, подтверждение, информационный блок — а не список пунктов меню.

## Базовый пример

```tsx
<Popover content={<div style={{ padding: 16 }}>Содержимое панели</div>}>
  <Button label="Открыть" />
</Popover>
```

::playground{src=PopoverBasicDemo caption="Клик открывает и закрывает панель"}

## Состояние открытия в триггере

`children` может быть функцией — она получает `{ open, hide }`. Используйте для переключения иконки или стиля кнопки-триггера.

```tsx
<Popover content={<FilterPanel />}>
  {({ open }) => (
    <Button
      label="Фильтры"
      additionalIcon={open ? <ChevronUp /> : <ChevronDown />}
    />
  )}
</Popover>
```

::playground{src=PopoverOpenStateDemo caption="Иконка кнопки реагирует на состояние поповера"}

## Закрытие изнутри

`content` тоже может быть функцией — она получает `hide` и `hideAllSequence`. Передайте `hide` в кнопки внутри панели.

```tsx
<Popover
  content={({ hide }) => (
    <div style={{ padding: 16 }}>
      <p>Удалить запись?</p>
      <Button label="Удалить" danger onClick={() => { handleDelete(); hide(); }} />
      <Button label="Отмена" variant="text" onClick={hide} />
    </div>
  )}
>
  <Button label="Удалить" danger />
</Popover>
```

::playground{src=PopoverConfirmDemo caption="Подтверждение удаления внутри поповера"}

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
  <Button label="Открыть" />
</Popover>

<Button
  label="Закрыть снаружи"
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
        <Button label="Закрыть всё" onClick={hideAll} />
      )}
    >
      <Button label="Вложенный поповер" />
    </Popover>
  )}
>
  <Button label="Родительский поповер" />
</Popover>
```

## Свойства

:::prop[children*]{type="ReactNode | ((ctx: { open: boolean; hide: () => void }) => ReactNode)"}
Элемент-триггер. Функция получает текущее состояние и колбэк закрытия.
:::

:::prop[content*]{type="ReactNode | ((ctx: { hide: () => void; hideAllSequence: () => void }) => ReactNode)"}
Содержимое панели. Функция получает колбэки закрытия текущего поповера и всей цепочки.
:::

:::prop[placement]{type="Placement | 'auto'" default="'auto'"}
Позиция панели. `auto` — автоматический выбор лучшего места.
:::

:::prop[trigger]{type="'click' | 'focus' | 'hover' | Array" default="'click'"}
Что открывает поповер.
:::

:::prop[focusTrap]{type="boolean" default="true"}
Ловушка фокуса внутри открытой панели для клавиатурной навигации.
:::

:::prop[overlap]{type="boolean" default="false"}
Панель перекрывает триггер вместо того, чтобы стоять рядом.
:::

:::prop[title]{type="string"}
Заголовок в шапке. Делает панель озаглавленным `role="dialog"`.
:::

:::prop[showCloseButton]{type="boolean" default="false"}
Кнопка закрытия в шапке.
:::

:::prop[onOpenChange]{type="(open: boolean, event?: Event, reason?: OpenChangeReason) => void"}
Вызывается при каждой смене состояния. `reason` говорит, *как* оно изменилось: `escape-key`, `outside-press`, `reference-press`, `hover`…
:::

:::prop[open]{type="boolean"}
Управляемое состояние открытия. Без этого пропа `Popover` неуправляемый — см. `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Начальное состояние для неуправляемого поповера. Игнорируется, если передан `open`.
:::

## Рекомендации

**`Popover` — примитив, `Dropdown` — надстройка.** Если нужен список пунктов меню с иконками, клавишами и разделителями — используйте `Dropdown`. `Popover` берите тогда, когда содержимое выходит за рамки списка: форма, подтверждение, превью.

**Закрывайте поповер после действия.** Если пользователь нажал кнопку внутри панели и что-то произошло — поповер должен закрыться. Оставлять его открытым после завершённого действия сбивает с толку.

**Не вкладывайте слишком глубоко.** Два уровня — поповер и вложенный поповер — пользователь ещё держит в голове. Три уровня и глубже — уже нет. Если логика требует глубокой вложенности, переработайте сценарий.
