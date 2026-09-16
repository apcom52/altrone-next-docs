# NumberInput

Поле ввода числовых значений. Форматирует число в реальном времени — разделители разрядов, десятичные знаки — и молча зажимает значение в диапазон `min`/`max` прямо во время ввода. Основан на `react-number-format`, поэтому пользователь всегда видит корректно отформатированное число, а приложение получает уже разобранный `number`.

## Базовый пример

```tsx
const [qty, setQty] = useState(1);

<NumberInput
  value={qty}
  onChange={(v) => setQty(v)}
  min={1}
  max={99}
  digitsAfterPoint={0}
/>
```

::playground{src=NumberInputBasicDemo caption="Используйте кнопки +/− или введите значение вручную"}

:::note
`onChange` получает уже разобранное число (`number`), не строку. Если разобрать не удалось, передаётся `0`.
:::

## Форматы

`digitsAfterPoint` и `groupingDelimiter` управляют отображением. Форматирование — только визуальное: `onChange` всегда получает чистое число.

```tsx
{/* Целые числа */}
<NumberInput value={count} onChange={setCount} digitsAfterPoint={0} min={0} max={100} />

{/* Цена с разделителем тысяч */}
<NumberInput value={price} onChange={setPrice} digitsAfterPoint={2} groupingDelimiter="," />

{/* Отрицательные значения */}
<NumberInput value={temp} onChange={setTemp} digitsAfterPoint={1} min={-273} max={1000} />
```

::playground{src=NumberInputFormatsDemo}

:::warning
`min` по умолчанию равен `0`. Если нужны отрицательные значения, явно передайте `min` с отрицательным числом или `undefined`.
:::

## Ограничение диапазона

`min` и `max` зажимают значение прямо во время ввода — ввести число за пределами диапазона просто не получится, поле не «поправляет» его постфактум. По умолчанию `min` равен `0`; передайте `undefined` или отрицательное значение вместе с `allowNegative`, чтобы принимать числа меньше нуля.

```tsx
<NumberInput
  value={value}
  onChange={setValue}
  min={-100}
  max={100}
  allowNegative
/>
```

:::note
Спиннер-кнопок `+` / `−` у поля нет: это нишевое взаимодействие с крохотной зоной попадания. Наберите значение вручную или соберите явный степпер `[−] / [+]` на `TextInput.ActionIsland` там, где он действительно помогает.
:::

## Пустое значение

`value={null}` оставляет поле пустым. Используйте тип `number | null`, чтобы различать «ничего не введено» и `0`.

```tsx
const [amount, setAmount] = useState<number | null>(null);

<NumberInput
  value={amount}
  onChange={(v) => setAmount(v)}
  placeholder="Введите сумму"
/>
```

## Внутри формы

```tsx
<Form>
  <Form.Field name="quantity" label="Количество">
    <NumberInput
      value={form.quantity}
      onChange={(v) => setForm({ ...form, quantity: v })}
      min={1}
      digitsAfterPoint={0}
    />
  </Form.Field>
</Form>
```

Пропы `name`, `disabled`, `invalid` и `size` читаются из контекста `Form.Field` автоматически.

## Свойства

:::prop[value]{type="number | null"}
Контролируемое значение. `null` — пустое поле.
:::

:::prop[onChange]{type="(value: number, event: SyntheticEvent) => void"}
Обработчик изменения. Первым аргументом приходит разобранное число. При невалидном вводе передаётся `0`.
:::

:::prop[min]{type="number" default="0"}
Минимальное значение. Ограничивает кнопки спиннера. Для отрицательных значений задайте явно.
:::

:::prop[max]{type="number"}
Максимальное значение. Ограничивает кнопки спиннера.
:::

:::prop[digitsAfterPoint]{type="number" default="2"}
Количество знаков после запятой.
:::

:::prop[groupingDelimiter]{type="string" default="' '"}
Разделитель групп разрядов (тысяч).
:::

:::prop[invalid]{type="boolean" default="false"}
Состояние ошибки. Также читается из `FormFieldContext`.
:::

:::prop[disabled]{type="boolean" default="false"}
Отключает поле. Также читается из `FormFieldContext`.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер поля. Также читается из `FormFieldContext`.
:::

:::prop[placeholder]{type="string"}
Текст-подсказка в пустом поле.
:::

:::prop[readOnly]{type="boolean"}
Запрещает редактирование.
:::

## Рекомендации

**Задавайте `digitsAfterPoint={0}` для счётчиков и количеств.** Дробные части в поле «Количество товаров» вводят пользователя в замешательство. Явно устанавливайте `0` — не полагайтесь на дефолтные `2`.

**Не используйте `NumberInput` для телефонов и карт.** Номера телефонов и карт — строки с маской, а не числа. Используйте `TextInput` с соответствующим `inputMode` и библиотекой маски.

**`null` vs `0` — разные состояния.** Инициализируйте `value` значением `null`, если поле должно быть пустым при первом рендере. Инициализация нулём сразу отображает `0`, что может быть нежелательно в пустых формах.
