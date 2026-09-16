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

`onChange` возвращает строковое значение выбранного `Radio.Item` — не нужно читать DOM-ивент вручную. Каждый вариант — это настоящий `<input type="radio">`, визуально скрытый, но остающийся в дереве доступности: фокус попадает на него, стрелки перемещают выбор между вариантами нативно.

## Вертикальное расположение

По умолчанию варианты идут в строку. `orientation="vertical"` переключает на столбец.

::playground{src=RadioHorizontalDemo}

```tsx
<Radio value={value} onChange={(v) => setValue(v)} name="period" orientation="vertical">
  <Radio.Item value="week">Неделя</Radio.Item>
  <Radio.Item value="month">Месяц</Radio.Item>
  <Radio.Item value="year">Год</Radio.Item>
</Radio>
```

:::tip
Строка хорошо работает для 2–4 коротких вариантов. Для длинных подписей или большого количества вариантов предпочтительнее вертикальный список.
:::

## Размеры

`size` на контейнере `Radio` масштабирует все варианты (точку и текст подписи);
отдельный `Radio.Item` может переопределить его. Строка не становится ниже 24px.

```tsx
<Radio size="s" value={value} onChange={setValue} name="compact">
  <Radio.Item value="a">Компактно</Radio.Item>
  <Radio.Item value="b">строка</Radio.Item>
</Radio>
```

## Без подписи

Если `children` не передан, имя для скринридеров задаётся через `aria-label` — он
попадает на сам `<input>`.

```tsx
<Radio value={value} onChange={setValue} name="opt">
  <Radio.Item value="a" aria-label="Вариант A" />
  <Radio.Item value="b" aria-label="Вариант B" />
</Radio>
```

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

:::prop[onChange*]{type="(value: string, event: ChangeEvent<HTMLInputElement>) => void"}
Вызывается при выборе нового варианта. Первый аргумент — значение выбранного `Radio.Item` (всегда строка). Обязательный.
:::

:::prop[children*]{type="ReactElement<RadioItemProps> | ..."}
Один или несколько `Radio.Item`. Обязательный.
:::

:::prop[name]{type="string"}
HTML-атрибут `name`, общий для всех кнопок в группе. Нужен при использовании внутри `<form>`.
:::

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Направление расположения вариантов.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует все варианты в группе.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Масштаб точки и типографики подписи для всех вариантов. Высота строки не опускается ниже 24px.
:::

## Свойства Radio.Item

:::prop[value*]{type="string | number"}
Значение этого варианта. Должно быть уникальным внутри группы. Обязательный.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует только этот вариант, не затрагивая остальные.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Переопределяет `size` группы для этого варианта.
:::

:::prop[children]{type="ReactNode"}
Подпись варианта.
:::

## Рекомендации

**Показывайте все варианты сразу.** Radio подходит, когда вариантов 2–7. Если вариантов больше — рассмотрите `Select`: длинный список радио-кнопок требует прокрутки и теряет преимущество видимости.

**Всегда выбирайте что-то по умолчанию.** Группа без выбора заставляет пользователя принимать решение, которого он не ожидал. Если у вас нет логичного варианта по умолчанию — добавьте вариант «Не указано» или «По умолчанию».

**Не используйте Radio для мгновенных действий.** Выбор варианта радио не должен сразу что-то запускать. Если нужно немедленное действие — используйте `Button` или `Switch`.

**`name` важен в формах.** При отправке через `<form>` без `name` браузер не сможет сериализовать значение. Указывайте `name` всегда, если компонент находится внутри формы.
