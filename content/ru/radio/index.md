# Radio

`Radio` — группа взаимоисключающих вариантов: пользователь выбирает ровно один из них. Все варианты видны сразу, поэтому группа подходит для коротких списков, где важно сравнить варианты глазами, например тарифы или способ доставки.

## Основное использование

`Radio` — контейнер группы, а каждый вариант описывается элементом `Radio.Item`.

```tsx
const [channel, setChannel] = useState("email");

<Radio value={channel} onChange={setChannel}>
  <Radio.Item value="email">Email</Radio.Item>
  <Radio.Item value="sms">SMS</Radio.Item>
  <Radio.Item value="push">Push notification</Radio.Item>
</Radio>
```

::playground{src=radio/RadioBasicDemo caption="Управляемая группа с тремя вариантами"}

`Radio` не хранит собственного состояния, поэтому `value` и `onChange` передаются вместе. Выбранным считается вариант, у которого `value` совпадает со значением группы.

:::note
`onChange` получает значение выбранного варианта первым аргументом и нативное событие вторым: `(value: string, event: ChangeEvent<HTMLInputElement>) => void`. Сеттер из `useState` можно передать напрямую.
:::

## Расположение

По умолчанию варианты идут в строку и переносятся, когда не помещаются. `orientation="vertical"` ставит их в колонку — так удобнее, когда подписи длинные или вариантов больше трёх.

```tsx
<Radio value={plan} onChange={setPlan} orientation="vertical">
  <Radio.Item value="free">Free — $0 per month</Radio.Item>
  <Radio.Item value="pro">Pro — $12 per month</Radio.Item>
  <Radio.Item value="enterprise">Enterprise — contact us</Radio.Item>
</Radio>
```

::playground{src=radio/RadioVerticalDemo caption="Вертикальная группа"}

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Он масштабирует кружок, точку и подпись всех вариантов сразу. Кликабельная строка не бывает ниже 24px даже на `mini`. Размер одного варианта можно переопределить через `size` у `Radio.Item`.

```tsx
<Radio size="s" value={value} onChange={setValue}>
  <Radio.Item value="a">Compact</Radio.Item>
  <Radio.Item value="b">Compact</Radio.Item>
</Radio>
```

::playground{src=radio/RadioSizesDemo caption="Пять размеров"}

## Недоступные варианты

`disabled` у `Radio` блокирует всю группу, а у `Radio.Item` — только один вариант. Заблокированный вариант не получает фокус и не реагирует на клики, а его кружок и подпись становятся серыми. Блокировка группы и варианта складываются: вариант недоступен, если заблокирован любой из двух уровней.

```tsx
<Radio value={role} onChange={setRole}>
  <Radio.Item value="viewer">Viewer</Radio.Item>
  <Radio.Item value="editor">Editor</Radio.Item>
  <Radio.Item value="admin" disabled>Admin</Radio.Item>
</Radio>
```

::playground{src=radio/RadioDisabledDemo caption="Один недоступный вариант и полностью заблокированная группа"}

## Без выбранного варианта

`value` необязателен. Если его не передать, группа отрисуется без выбранного варианта, а после первого клика ваш `onChange` получит значение. Вернуться к состоянию «ничего не выбрано» пользователь уже не сможет — это свойство нативных радиокнопок.

```tsx
const [answer, setAnswer] = useState<string>();

<Radio value={answer} onChange={setAnswer}>
  <Radio.Item value="yes">Yes</Radio.Item>
  <Radio.Item value="no">No</Radio.Item>
</Radio>
```

::playground{src=radio/RadioNoSelectionDemo caption="Группа, в которой пока ничего не выбрано"}

## Числовые значения

`value` у `Radio` и `Radio.Item` может быть числом, но `onChange` всегда отдаёт **строку**: значение читается из нативного `<input>`. Если вам нужно число, приведите его самостоятельно.

```tsx
const [quantity, setQuantity] = useState(5);

<Radio value={quantity} onChange={(next) => setQuantity(Number(next))}>
  <Radio.Item value={1}>1</Radio.Item>
  <Radio.Item value={5}>5</Radio.Item>
  <Radio.Item value={10}>10</Radio.Item>
</Radio>
```

::playground{src=radio/RadioNumericDemo caption="Числовые значения приводятся к числу в onChange"}

## Условные варианты

Вариантом может быть `null` или `false`, поэтому `Radio.Item` можно показывать по условию без дополнительных проверок.

```tsx
<Radio value={size} onChange={setSize}>
  <Radio.Item value="s">Small</Radio.Item>
  <Radio.Item value="m">Medium</Radio.Item>
  {isPremium && <Radio.Item value="l">Large</Radio.Item>}
</Radio>
```

## Без подписи

Если у варианта нет текста, задайте имя через `aria-label` или `aria-labelledby`. Они попадают на сам `<input>`, а не на обёртку.

```tsx
<Radio.Item value="a" aria-label="Option A" />
```

::playground{src=radio/RadioNoLabelDemo caption="Только кружки, имена заданы через aria-label"}

## Внутри формы

Внутри `Form.Field` группа берёт `name`, `disabled` и `size` из формы. Проп, переданный самой группе, приоритетнее. Без `name` из формы и без собственного `name` группа сама генерирует уникальное имя, поэтому несколько групп на странице не мешают друг другу.

```tsx
<Form size="l">
  <Form.Field name="delivery">
    <Radio value={delivery} onChange={setDelivery}>
      <Radio.Item value="courier">Courier</Radio.Item>
      <Radio.Item value="pickup">Pickup</Radio.Item>
    </Radio>
  </Form.Field>
  <Form.Field name="payment" disabled>
    <Radio value={payment} onChange={setPayment}>
      <Radio.Item value="card">Card</Radio.Item>
      <Radio.Item value="cash">Cash</Radio.Item>
    </Radio>
  </Form.Field>
</Form>
```

::playground{src=radio/RadioFormDemo caption="Размер берётся из формы; вторая группа заблокирована"}

## Клавиатура

Каждый вариант — настоящий `<input type="radio">`, скрытый визуально, но доступный для вспомогательных технологий. На группу можно попасть клавишей `Tab`: фокус получает выбранный вариант или, если ничего не выбрано, первый. Стрелки перемещают фокус между вариантами и сразу выбирают их, `Space` выбирает сфокусированный вариант. Кольцо фокуса появляется только при навигации с клавиатуры.

## Ref и стилизация

`ref` группы указывает на корневой `<div>`, а `ref` у `Radio.Item` — на его `<label>`. `className` и `style` применяются к тем же элементам, а остальные атрибуты передаются им же. Чтобы изменить внешний вид, переопределите [CSS-переменные](/ru/components/controls/radio/css-vars).

## Свойства

### Radio

:::prop[value]{type="string | number"}
Значение выбранного варианта. Не передавайте, чтобы отрисовать группу без выбранного варианта.
:::

:::prop[onChange*]{type="(value: string, event: ChangeEvent<HTMLInputElement>) => void"}
Вызывается, когда пользователь выбирает вариант. Первый аргумент — значение варианта в виде строки, второй — нативное событие.
:::

:::prop[children*]{type="ReactElement<RadioItemProps> | (ReactElement<RadioItemProps> | null | false)[]"}
Элементы `Radio.Item`. Допустимы `null` и `false` для условного показа.
:::

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Направление, в котором расположены варианты.
:::

:::prop[name]{type="string"}
Атрибут `name` у всех `<input>` группы. Если не задан, читается из контекста формы, а затем генерируется автоматически.
:::

:::prop[disabled]{type="boolean"}
Блокирует всю группу. Если не задан, читается из контекста формы.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер кружка, точки и подписи всех вариантов. Если не задан, читается из контекста формы.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref корневого `<div>`.
:::

Все остальные атрибуты `<div>`, включая `className` и `style`, передаются корневому элементу.

### Radio.Item

:::prop[value*]{type="string | number"}
Значение варианта.
:::

:::prop[children]{type="ReactNode"}
Подпись рядом с кружком. Принимает текст или любой React-узел.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует только этот вариант. Складывается с `disabled` группы.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Переопределяет размер группы для этого варианта.
:::

:::prop[aria-label]{type="string"}
Доступное имя, когда нет `children`. Применяется к `<input>`; `aria-labelledby` и `aria-describedby` работают так же.
:::

:::prop[ref]{type="Ref<HTMLLabelElement>"}
Ref корневого `<label>`.
:::

Все остальные атрибуты `<label>`, включая `className` и `style`, передаются корневому элементу варианта.

## Похожие темы

- [Checkbox](/ru/components/controls/checkbox) — когда можно выбрать несколько вариантов или ни одного
- [Select](/ru/components/controls/select) — когда вариантов много и они не должны занимать место на экране
- [Form](/ru/components/controls/form) — `Form.Field` передаёт группе `name`, `disabled` и `size`
