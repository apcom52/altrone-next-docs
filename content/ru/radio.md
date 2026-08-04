# Radio

Radio — это группа вариантов, где можно выбрать только один. Используйте его, когда варианты взаимоисключают друг друга и пользователю нужно видеть все сразу, чтобы принять решение.

## Основное использование

`Radio` — контейнер группы. `Radio.Item` — отдельный вариант. Выбранное значение передаётся через `value` на уровне группы.

::playground{src=RadioBasicDemo}

```tsx
const [value, setValue] = useState("email");

<Radio value={value} onChange={(v) => setValue(v)} name="notification">
  <Radio.Item value="email">Email</Radio.Item>
  <Radio.Item value="sms">SMS</Radio.Item>
  <Radio.Item value="push">Push-уведомление</Radio.Item>
</Radio>
```

`onChange` возвращает строковое значение выбранного `Radio.Item` — не нужно читать DOM-ивент вручную.

## Горизонтальное расположение

По умолчанию варианты расположены вертикально. `direction="horizontal"` переключает на строку.

::playground{src=RadioHorizontalDemo}

```tsx
<Radio value={value} onChange={(v) => setValue(v)} name="period" direction="horizontal">
  <Radio.Item value="week">Неделя</Radio.Item>
  <Radio.Item value="month">Месяц</Radio.Item>
  <Radio.Item value="year">Год</Radio.Item>
</Radio>
```

:::tip
Горизонтальное расположение хорошо работает для 2–4 коротких вариантов. Для длинных подписей или большого количества вариантов предпочтительнее вертикальный список.
:::

## Недоступные варианты

Отдельный вариант можно заблокировать через `disabled` на `Radio.Item`.

::playground{src=RadioDisabledDemo}

```tsx
<Radio value={value} onChange={(v) => setValue(v)} name="plan">
  <Radio.Item value="standard">Стандартный</Radio.Item>
  <Radio.Item value="pro">Pro</Radio.Item>
  <Radio.Item value="enterprise" disabled>Enterprise (недоступно)</Radio.Item>
</Radio>
```

Чтобы заблокировать всю группу, используйте `disabled` на `Radio`:

::playground{src=RadioDisabledGroupDemo}

```tsx
<Radio value="b" onChange={() => {}} name="locked" disabled>
  <Radio.Item value="a">Вариант A</Radio.Item>
  <Radio.Item value="b">Вариант B</Radio.Item>
  <Radio.Item value="c">Вариант C</Radio.Item>
</Radio>
```

## Свойства Radio

:::prop[value*]{type="string | number"}
Значение выбранного варианта. Обязательный.
:::

:::prop[onChange*]{type="(value: string, e: ChangeEvent) => void"}
Вызывается при выборе нового варианта. Первый аргумент — значение выбранного `Radio.Item`. Обязательный.
:::

:::prop[children*]{type="ReactElement<RadioItemProps> | ..."}
Один или несколько `Radio.Item`. Обязательный.
:::

:::prop[name]{type="string"}
HTML-атрибут `name`, общий для всех кнопок в группе. Нужен при использовании внутри `<form>`.
:::

:::prop[direction]{type="'vertical' | 'horizontal'" default="'vertical'"}
Направление расположения вариантов.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует все варианты в группе.
:::

## Свойства Radio.Item

:::prop[value*]{type="string | number"}
Значение этого варианта. Должно быть уникальным внутри группы. Обязательный.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует только этот вариант, не затрагивая остальные.
:::

:::prop[children]{type="ReactNode"}
Подпись варианта.
:::

## Рекомендации

**Показывайте все варианты сразу.** Radio подходит, когда вариантов 2–7. Если вариантов больше — рассмотрите `Select`: длинный список радио-кнопок требует прокрутки и теряет преимущество видимости.

**Всегда выбирайте что-то по умолчанию.** Группа без выбора заставляет пользователя принимать решение, которого он не ожидал. Если у вас нет логичного варианта по умолчанию — добавьте вариант «Не указано» или «По умолчанию».

**Не используйте Radio для мгновенных действий.** Выбор варианта радио не должен сразу что-то запускать. Если нужно немедленное действие — используйте `Button` или `Switcher`.

**`name` важен в формах.** При отправке через `<form>` без `name` браузер не сможет сериализовать значение. Указывайте `name` всегда, если компонент находится внутри формы.
