# Dropdown

Плавающее меню, привязанное к кнопке-триггеру. Построен на `Popover` и добавляет готовую систему пунктов: действия с иконками, горячими клавишами и бейджами, радиосписки, чекбоксы и вложенные подменю. `Dropdown` — правильный выбор всякий раз, когда нужно спрятать набор действий за одной кнопкой.

## Базовый пример

```tsx
<Dropdown
  content={
    <Dropdown.Menu>
      <Dropdown.Action label="Редактировать" icon={<Pencil />} onClick={handleEdit} />
      <Dropdown.Action label="Дублировать"   icon={<Copy />}   onClick={handleDuplicate} />
      <Divider />
      <Dropdown.Action label="Удалить" icon={<Trash />} danger onClick={handleDelete} />
    </Dropdown.Menu>
  }
>
  <Button label="Действия" additionalIcon={<ChevronDown />} />
</Dropdown>
```

::playground{src=DropdownBasicDemo caption="Навигация стрелками ↑↓, выбор — Enter, закрытие — Escape"}

## Состояние открытия в триггере

`children` может быть функцией — она получает `open`. Используйте для переключения иконки шеврона.

```tsx
<Dropdown content={<Dropdown.Menu>…</Dropdown.Menu>}>
  {({ open }) => (
    <Button
      label="Экспорт"
      additionalIcon={open ? <ChevronUp /> : <ChevronDown />}
    />
  )}
</Dropdown>
```

::playground{src=DropdownOpenStateDemo caption="Иконка шеврона отражает состояние меню"}

## Горячие клавиши

`hintText` отображается справа от названия пункта. Стандартное применение — подсказка клавиатурного сокращения.

```tsx
<Dropdown.Action label="Сохранить" icon={<Save />} hintText="⌘S" onClick={save} />
<Dropdown.Action label="Печать"    icon={<Print />} hintText="⌘P" onClick={print} />
<Dropdown.Action label="Отменить"  icon={<Undo />}  hintText="⌘Z" onClick={undo} />
```

## Радиосписки и чекбоксы

`Dropdown.RadioList` — группа взаимоисключающих вариантов. `Dropdown.Checkbox` — независимый переключатель. Оба управляют состоянием снаружи через контролируемые пропы.

```tsx
const [sort, setSort] = useState('date');
const [compact, setCompact] = useState(false);

<Dropdown.RadioList label="Сортировка" value={sort} onChange={setSort}>
  <Dropdown.RadioItem value="date" label="По дате" />
  <Dropdown.RadioItem value="name" label="По имени" />
  <Dropdown.RadioItem value="size" label="По размеру" />
</Dropdown.RadioList>

<Divider />

<Dropdown.Checkbox
  label="Компактный режим"
  checked={compact}
  onChange={setCompact}
/>
```

::playground{src=DropdownRadioDemo caption="Выбор сохраняется между открытиями меню"}

## Вложенные подменю

`Dropdown.ChildMenu` открывает вложенное меню при наведении или клике.

```tsx
<Dropdown.ChildMenu label="Поделиться" icon={<Share />}>
  <Dropdown.Action label="Скопировать ссылку" icon={<Link />} />
  <Dropdown.Action label="Отправить по email"  icon={<Mail />} />
</Dropdown.ChildMenu>
```

::playground{src=DropdownChildMenuDemo caption="Наведите на пункт, чтобы открыть подменю"}

## Действия как ссылки

`asChild` переносит стили `Dropdown.Action` на дочерний элемент. Используйте для ссылок маршрутизатора.

```tsx
<Dropdown.Action asChild icon={<Settings />} label="Настройки" hintText="⌘,">
  <a href="/settings" />
</Dropdown.Action>
```

## Полный пример: меню аккаунта

```tsx
<Dropdown
  placement="bottom-end"
  content={
    <Dropdown.Menu>
      <Dropdown.Action icon={<User />} label="Алексей Петров" hintText="@apetrov" />
      <Divider />
      <Dropdown.Action icon={<Settings />} label="Настройки" hintText="⌘," />
      <Dropdown.Action icon={<CreditCard />} label="Тариф и оплата" badge="PRO" />
      <Divider />
      <Dropdown.RadioList label="Тема" value={theme} onChange={setTheme}>
        <Dropdown.RadioItem value="system" label="Системная" />
        <Dropdown.RadioItem value="light"  label="Светлая" />
        <Dropdown.RadioItem value="dark"   label="Тёмная" />
      </Dropdown.RadioList>
      <Divider />
      <Dropdown.Checkbox label="Компактный режим" checked={compact} onChange={setCompact} />
      <Divider />
      <Dropdown.Action danger icon={<LogOut />} label="Выйти" />
    </Dropdown.Menu>
  }
>
  <Avatar firstName="Алексей" lastName="Петров" size="s" />
</Dropdown>
```

::playground{src=DropdownAccountDemo}

## Свойства Dropdown

:::prop[children*]{type="ReactNode | ((ctx: { open: boolean; hide: () => void }) => ReactNode)"}
Триггер. Функция получает текущее состояние и колбэк закрытия.
:::

:::prop[content*]{type="ReactNode | ((ctx: { hide: () => void; hideAllSequence: () => void }) => ReactNode)"}
Содержимое меню.
:::

:::prop[placement]{type="Placement | 'auto'" default="'bottom'"}
Позиция меню относительно триггера.
:::

:::prop[trigger]{type="'click' | 'focus' | 'hover' | Array" default="['click']"}
Что открывает меню.
:::

:::prop[closeParentPopover]{type="boolean" default="true"}
Закрывать ли родительский поповер при выборе пункта внутри вложенного меню.
:::

## Свойства Dropdown.Action

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

## Рекомендации

**Разделяйте группы через `Divider`.** Пункты одной логической группы — рядом, разные группы — через разделитель. Особенно важно отделять деструктивные действия: `danger`-пункт в конце, после `Divider`.

**`hintText` — для информирования, не обучения.** Горячие клавиши в меню видят пользователи, которые уже открыли меню — то есть мышью. Ненавязчивое напоминание полезно, но не замените им саму функциональность.

**Не делайте меню из одного пункта.** Один пункт — это просто кнопка. Если в меню меньше двух действий, поставьте кнопку напрямую.

**Вложенные подменю — максимум один уровень.** `Dropdown.ChildMenu` добавляет глубину, но пользователь теряет ориентацию при двух и более уровнях вложенности. Если вариантов много — рассмотрите отдельный экран настроек или `Popover` с фильтрами.
