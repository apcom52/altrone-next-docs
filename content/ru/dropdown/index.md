# Dropdown

Плавающее меню, привязанное к кнопке-триггеру. Построен на `Popover` и добавляет готовую систему пунктов: действия с иконками, горячими клавишами и бейджами, радиосписки, чекбоксы и вложенные подменю. `Dropdown` — правильный выбор всякий раз, когда нужно спрятать набор действий за одной кнопкой.

## Базовый пример

```tsx
<Dropdown
  content={
    <Dropdown.Menu>
      <Dropdown.Action label="Edit"      icon={<Pencil />} onClick={handleEdit} />
      <Dropdown.Action label="Duplicate" icon={<Copy />}   onClick={handleDuplicate} />
      <Divider />
      <Dropdown.Action label="Delete" icon={<Trash />} danger onClick={handleDelete} />
    </Dropdown.Menu>
  }
>
  <Button label="Actions" additionalIcon={<ChevronDown />} />
</Dropdown>
```

::playground{src=dropdown/DropdownBasicDemo caption="Навигация стрелками ↑↓, выбор — Enter, закрытие — Escape"}

## Состояние открытия в триггере

`children` может быть функцией — она получает `open`. Используйте для переключения иконки шеврона.

```tsx
<Dropdown content={<Dropdown.Menu>…</Dropdown.Menu>}>
  {({ open }) => (
    <Button
      label="Export"
      additionalIcon={open ? <ChevronUp /> : <ChevronDown />}
    />
  )}
</Dropdown>
```

::playground{src=dropdown/DropdownOpenStateDemo caption="Иконка шеврона отражает состояние меню"}

## Горячие клавиши

`hintText` отображается справа от названия пункта. Стандартное применение — подсказка клавиатурного сокращения.

```tsx
<Dropdown.Action label="Save"  icon={<Save />} hintText="⌘S" onClick={save} />
<Dropdown.Action label="Print" icon={<Print />} hintText="⌘P" onClick={print} />
<Dropdown.Action label="Undo"  icon={<Undo />}  hintText="⌘Z" onClick={undo} />
```

Если у пункта заданы и `badge`, и `hintText`, приоритет у бейджа — `hintText` не показывается.

## Радиосписки и чекбоксы

`Dropdown.RadioList` — группа взаимоисключающих вариантов. `Dropdown.Checkbox` — независимый переключатель. Оба управляют состоянием снаружи через контролируемые пропы. В отличие от `Dropdown.Action`, выбор пункта радиосписка или переключение чекбокса не закрывает меню — это позволяет изменить сразу несколько настроек за одно открытие.

```tsx
const [sort, setSort] = useState('date');
const [compact, setCompact] = useState(false);

<Dropdown.RadioList label="Sort by" value={sort} onChange={setSort}>
  <Dropdown.RadioItem value="date" label="By date" />
  <Dropdown.RadioItem value="name" label="By name" />
  <Dropdown.RadioItem value="size" label="By size" />
</Dropdown.RadioList>

<Divider />

<Dropdown.Checkbox
  label="Compact mode"
  checked={compact}
  onChange={setCompact}
/>
```

::playground{src=dropdown/DropdownRadioDemo caption="Выбор сохраняется между открытиями меню"}

## Вложенные подменю

`Dropdown.ChildMenu` открывает вложенное меню по клику, позиционируя его сбоку от родительского пункта.

```tsx
<Dropdown.ChildMenu label="Share" icon={<Share />}>
  <Dropdown.Action label="Copy link" icon={<Link />} />
  <Dropdown.Action label="Send by email" icon={<Mail />} />
</Dropdown.ChildMenu>
```

::playground{src=dropdown/DropdownChildMenuDemo caption="Кликните по пункту, чтобы открыть подменю"}

## Действия как ссылки

`asChild` переносит стили `Dropdown.Action` на дочерний элемент. Используйте для ссылок маршрутизатора.

```tsx
<Dropdown.Action asChild icon={<Settings />} label="Settings" hintText="⌘,">
  <a href="/settings" />
</Dropdown.Action>
```

## Полный пример: меню аккаунта

```tsx
<Dropdown
  placement="bottom-end"
  content={
    <Dropdown.Menu>
      <Dropdown.Action icon={<User />} label="Alex Morgan" hintText="@amorgan" />
      <Divider />
      <Dropdown.Action icon={<Settings />} label="Settings" hintText="⌘," />
      <Dropdown.Action icon={<CreditCard />} label="Billing & plan" badge="PRO" />
      <Divider />
      <Dropdown.RadioList label="Theme" value={theme} onChange={setTheme}>
        <Dropdown.RadioItem value="system" label="System" />
        <Dropdown.RadioItem value="light"  label="Light" />
        <Dropdown.RadioItem value="dark"   label="Dark" />
      </Dropdown.RadioList>
      <Divider />
      <Dropdown.Checkbox label="Compact mode" checked={compact} onChange={setCompact} />
      <Divider />
      <Dropdown.Action danger icon={<LogOut />} label="Log out" />
    </Dropdown.Menu>
  }
>
  <Avatar firstName="Alex" lastName="Morgan" size="s" />
</Dropdown>
```

::playground{src=dropdown/DropdownAccountDemo}

## Пропсы

`Dropdown` принимает все пропы `Popover` (`placement`, `trigger`, `overlap`, `controlRef`, `focusTrap`, …) в дополнение к перечисленным ниже — полный список см. в документации [Popover](/ru/components/overlays/popover).

:::prop[children*]{type="ReactNode | ((ctx: { open: boolean; hide: () => void }) => ReactNode)"}
Триггер. Функция получает текущее состояние и колбэк закрытия.
:::

:::prop[content*]{type="ReactNode | ((ctx: { hide: () => void; hideAllSequence: () => void }) => ReactNode)"}
Содержимое меню.
:::

:::prop[placement]{type="Placement | 'auto'" default="'bottom'"}
Позиция меню относительно триггера.
:::

:::prop[trigger]{type="'click' | 'focus' | 'hover' | Array" default="'click'"}
Что открывает меню.
:::

:::prop[closeParentPopover]{type="boolean" default="true"}
Закрывать ли родительский поповер при выборе пункта внутри вложенного меню.
:::

### Dropdown.Action

:::prop[label*]{type="string"}
Название пункта меню.
:::

:::prop[icon]{type="ReactElement"}
Иконка слева.
:::

:::prop[hintText]{type="string"}
Вспомогательный текст справа — обычно горячая клавиша.
:::

:::prop[badge]{type="string | number | ReactElement"}
Бейдж справа.
:::

:::prop[danger]{type="boolean" default="false"}
Красный цвет для деструктивных действий.
:::

:::prop[disabled]{type="boolean" default="false"}
Отключает пункт.
:::

:::prop[asChild]{type="boolean" default="false"}
Переносит стили на дочерний элемент через Slot.
:::

## Похожие темы

- [Popover](/ru/components/overlays/popover) — плавающий примитив, на котором построен `Dropdown`: позиционирование, триггеры и императивный API `controlRef`
- [Button](/ru/components/controls/button) — самый частый элемент-триггер для `Dropdown`
- [Accessibility](/ru/foundations/accessibility) — клавиатурная навигация и требование `aria-label` для триггеров без текста
