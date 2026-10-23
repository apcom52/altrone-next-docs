# NumberInput

Поле для ввода чисел. Оно форматирует число прямо во время ввода — пробелы между тысячами, фиксированное количество знаков после запятой — и отдаёт вашему коду настоящий `number`, а не строку. Построено на `TextInput`, поэтому острова, размеры и состояния работают так же.

## Базовый пример

```tsx
const [qty, setQty] = useState<number | undefined>(1);

<NumberInput value={qty} onChange={setQty} min={1} max={99} digitsAfterPoint={0} />
```

::playground{src=numberInput/NumberInputBasicDemo caption="Введите число: всё, что вне диапазона 1–99, просто не принимается"}

:::note
`onChange` получает число первым аргументом и нативное событие вторым: `(value?: number, event?: SyntheticEvent) => void`. Если пользователь очистил поле или ввёл то, что пока не число, придёт `0`.
:::

## Форматы

Вид числа настраивается несколькими пропами. Они меняют только то, что видит пользователь, — `onChange` всегда получает обычное число.

- `digitsAfterPoint` — сколько цифр может стоять после запятой (по умолчанию `2`). Для целых чисел поставьте `0`.
- `fixedDecimalScale` — всегда показывать все знаки после запятой, так что `5` превращается в `5.00`. Удобно для цен.
- `groupingDelimiter` — что разделяет тысячи (по умолчанию пробел).
- `decimalDelimiter` — что отделяет дробную часть (по умолчанию точка).

```tsx
<NumberInput value={qty} onChange={setQty} digitsAfterPoint={0} />

<NumberInput
  value={price}
  onChange={setPrice}
  fixedDecimalScale
  groupingDelimiter=","
/>

<NumberInput value={rate} onChange={setRate} groupingDelimiter="." decimalDelimiter="," />
```

::playground{src=numberInput/NumberInputFormatsDemo caption="Целые числа, цена с фиксированными копейками и европейские разделители"}

## Ограничения

Во время ввода число вне диапазона принимается, пока следующие цифры ещё могут вернуть его в диапазон: при `min={10}` цифра `1` — это путь к `15`. Нажатие отклоняется, только если число уже не сможет вернуться в диапазон, например цифра выводит его за положительный `max`. Когда поле теряет фокус, число вне диапазона прижимается к ближайшей границе, и `onChange` сообщает новое значение.

По умолчанию знак минус запрещён. Чтобы принимать отрицательные числа, передайте `allowNegative`, а если нужна нижняя граница — ещё и отрицательный `min`.

```tsx
<NumberInput
  value={temperature}
  onChange={setTemperature}
  allowNegative
  min={-273}
  max={1000}
/>
```

::playground{src=numberInput/NumberInputNegativeDemo caption="Температуры ниже нуля разрешены"}

## Степпер

Встроенных кнопок `+` и `−` у поля нет: набрать число обычно быстрее, чем кликать. Когда клики всё же удобнее, например для количества товара в корзине, соберите степпер из двух кнопок `TextInput.ActionIsland`. На границе диапазона отключайте нужную кнопку, чтобы пользователь видел, что дальше идти некуда.

```tsx
<NumberInput value={quantity} onChange={setQuantity} min={1} max={20}>
  <TextInput.ActionIsland
    label="Decrease"
    icon={<Minus />}
    showLabel={false}
    disabled={current <= 1}
    onClick={() => setQuantity(Math.max(1, current - 1))}
  />
  <TextInput.ActionIsland
    label="Increase"
    icon={<Plus />}
    showLabel={false}
    placement="end"
    disabled={current >= 20}
    onClick={() => setQuantity(Math.min(20, current + 1))}
  />
</NumberInput>
```

::playground{src=numberInput/NumberInputStepperDemo caption="Две кнопки внутри поля меняют количество на единицу"}

## Пустое значение

Если поле должно начинаться пустым, оставьте `value` равным `undefined` — поле покажет `placeholder`.

```tsx
const [amount, setAmount] = useState<number | undefined>();

<NumberInput value={amount} onChange={setAmount} placeholder="Enter an amount" />
```

Если начать с `0`, в поле будет настоящий ноль, который пользователю придётся сначала стереть, — в пустой форме это неудобно.

## Острова

`NumberInput` принимает те же острова, что и `TextInput`. Полезнее всего знак валюты или единица измерения: они остаются на виду, пока пользователь печатает, и число перестаёт быть двусмысленным.

```tsx
<NumberInput value={budget} onChange={setBudget} fixedDecimalScale groupingDelimiter=",">
  <TextInput.TextIsland label="$" />
</NumberInput>

<NumberInput value={weight} onChange={setWeight} digitsAfterPoint={1}>
  <TextInput.TextIsland label="kg" placement="end" />
</NumberInput>
```

::playground{src=numberInput/NumberInputIslandsDemo caption="Знак валюты перед числом, единица измерения после него"}

Все виды островов описаны в [TextInput](/ru/components/controls/textInput).

## Внутри формы

Внутри `Form.Field` поле берёт `name`, `disabled`, `invalid` и `size` из формы, так что повторять их не нужно. Значение, переданное прямо в `NumberInput`, имеет приоритет.

```tsx
<Form errorMessages={{ quantity: 'We only have 100 in stock' }}>
  <Form.Field name="quantity" label="Quantity">
    <NumberInput value={quantity} onChange={setQuantity} digitsAfterPoint={0} />
  </Form.Field>
</Form>
```

::playground{src=numberInput/NumberInputFormDemo caption="Сообщение об ошибке из формы помечает поле как ошибочное"}

## Свойства

`NumberInput` также принимает свойства `TextInput` — `size`, `invalid`, `disabled`, `readOnly`, `variant`, `inputRef` и остальные. См. [TextInput](/ru/components/controls/textInput).

:::prop[value]{type="number"}
Контролируемое значение. Оставьте `undefined`, чтобы показать пустое поле.
:::

:::prop[onChange*]{type="(value?: number, event?: SyntheticEvent<HTMLInputElement>) => void"}
Вызывается при каждом изменении. Первый аргумент — разобранное число, `undefined`, если разбирать нечего (пустое поле или одинокий минус).
:::

:::prop[min]{type="number"}
Наименьшее допустимое число. Меньшее число прижимается к нему, когда поле теряет фокус.
:::

:::prop[max]{type="number"}
Наибольшее допустимое число. Большее число прижимается к нему, когда поле теряет фокус; положительные числа больше него отклоняются во время ввода.
:::

:::prop[allowNegative]{type="boolean" default="false"}
Разрешает знак минус.
:::

:::prop[digitsAfterPoint]{type="number" default="2"}
Максимальное количество цифр после запятой.
:::

:::prop[fixedDecimalScale]{type="boolean" default="false"}
Всегда показывает ровно `digitsAfterPoint` знаков после запятой, добавляя нули при необходимости.
:::

:::prop[allowLeadingZeros]{type="boolean" default="false"}
Сохраняет нули в начале числа, например `007`.
:::

:::prop[groupingDelimiter]{type="string" default="' '"}
Символ между группами тысяч.
:::

:::prop[decimalDelimiter]{type="string" default="'.'"}
Символ между целой и дробной частью.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ref всего поля.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
Ref самого `<input>`.
:::

## Связанные темы

- [TextInput](/ru/components/controls/textInput) — поле, на котором построен `NumberInput`: острова, размеры, состояния
- [Form](/ru/components/controls/form) — подписи и сообщения об ошибках для полей
