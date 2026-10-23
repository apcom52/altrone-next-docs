# NumberInput

A field for typing numbers. It formats the number while the user types — spaces between thousands, a fixed number of decimals — and hands your code a real `number`, not a string. It is built on `TextInput`, so islands, sizes and states work the same way.

## Basic usage

```tsx
const [qty, setQty] = useState<number | undefined>(1);

<NumberInput value={qty} onChange={setQty} min={1} max={99} digitsAfterPoint={0} />
```

::playground{src=numberInput/NumberInputBasicDemo caption="Type a number: anything outside 1–99 is simply not accepted"}

:::note
`onChange` receives the number first and the native event second: `(value?: number, event?: SyntheticEvent) => void`. If the user clears the field or types something that is not a number yet, you get `0`.
:::

## Formats

The way the number looks is set with a few props. It only changes what the user sees — `onChange` always gets a plain number.

- `digitsAfterPoint` — how many digits can follow the decimal point (`2` by default). Use `0` for whole numbers.
- `fixedDecimalScale` — always show all the decimals, so `5` turns into `5.00`. Handy for prices.
- `groupingDelimiter` — what separates thousands (a space by default).
- `decimalDelimiter` — what separates the fraction (a dot by default).

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

::playground{src=numberInput/NumberInputFormatsDemo caption="Whole numbers, a price with fixed cents and European separators"}

## Limits

While the user types, a number outside the range is accepted as long as more digits can still bring it back: with `min={10}`, `1` is on the way to `15`. A key is refused only when the number can no longer return to the range, for example a digit that pushes it past a positive `max`. When the field loses focus, a number outside the range snaps to the nearest bound and `onChange` reports it.

Minus signs are not allowed by default. To accept negative numbers, pass `allowNegative`, and a negative `min` if you need a lower bound.

```tsx
<NumberInput
  value={temperature}
  onChange={setTemperature}
  allowNegative
  min={-273}
  max={1000}
/>
```

::playground{src=numberInput/NumberInputNegativeDemo caption="Temperatures below zero are allowed"}

## Stepper

The field has no built-in `+` and `−` buttons: typing a number is usually faster than clicking. When clicking really is handier — a quantity in a cart, say — make a stepper from two `TextInput.ActionIsland` buttons. Disable each button at the limit so the user sees there is nowhere left to go.

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

::playground{src=numberInput/NumberInputStepperDemo caption="Two buttons inside the field change the quantity by one"}

## Empty value

When the field has to start empty, keep `value` as `undefined`, and the field shows the `placeholder`.

```tsx
const [amount, setAmount] = useState<number | undefined>();

<NumberInput value={amount} onChange={setAmount} placeholder="Enter an amount" />
```

Starting with `0` instead shows a real zero that the user has to delete first, which feels clumsy in an empty form.

## Islands

`NumberInput` accepts the same islands as `TextInput`. The most useful are a currency sign or a unit of measure: they stay on screen while the user types and make the number unambiguous.

```tsx
<NumberInput value={budget} onChange={setBudget} fixedDecimalScale groupingDelimiter=",">
  <TextInput.TextIsland label="$" />
</NumberInput>

<NumberInput value={weight} onChange={setWeight} digitsAfterPoint={1}>
  <TextInput.TextIsland label="kg" placement="end" />
</NumberInput>
```

::playground{src=numberInput/NumberInputIslandsDemo caption="A currency sign before the number, a unit after it"}

See [TextInput](/en/components/controls/textInput) for all the island types.

## Inside a form

Within `Form.Field`, the field takes `name`, `disabled`, `invalid` and `size` from the form, so there is no need to repeat them. A value passed to `NumberInput` directly wins.

```tsx
<Form errorMessages={{ quantity: 'We only have 100 in stock' }}>
  <Form.Field name="quantity" label="Quantity">
    <NumberInput value={quantity} onChange={setQuantity} digitsAfterPoint={0} />
  </Form.Field>
</Form>
```

::playground{src=numberInput/NumberInputFormDemo caption="The error message from the form marks the field as invalid"}

## Props

`NumberInput` also accepts the `TextInput` props — `size`, `invalid`, `disabled`, `readOnly`, `variant`, `inputRef` and the others. See [TextInput](/en/components/controls/textInput).

:::prop[value]{type="number"}
The controlled value. Leave it `undefined` to show an empty field.
:::

:::prop[onChange*]{type="(value?: number, event?: SyntheticEvent<HTMLInputElement>) => void"}
Called on every change. The first argument is the parsed number, `0` when there is nothing to parse.
:::

:::prop[min]{type="number"}
The smallest allowed number. A smaller number snaps to it when the field loses focus.
:::

:::prop[max]{type="number"}
The largest allowed number. A bigger number snaps to it when the field loses focus; positive numbers past it are refused as the user types.
:::

:::prop[allowNegative]{type="boolean" default="false"}
Allows a minus sign.
:::

:::prop[digitsAfterPoint]{type="number" default="2"}
The maximum number of digits after the decimal point.
:::

:::prop[fixedDecimalScale]{type="boolean" default="false"}
Always shows exactly `digitsAfterPoint` decimals, adding zeros when needed.
:::

:::prop[allowLeadingZeros]{type="boolean" default="false"}
Keeps zeros at the start of the number, like `007`.
:::

:::prop[groupingDelimiter]{type="string" default="' '"}
The character between groups of thousands.
:::

:::prop[decimalDelimiter]{type="string" default="'.'"}
The character between the whole part and the fraction.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ref of the whole field.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
Ref of the `<input>` itself.
:::

## Related topics

- [TextInput](/en/components/controls/textInput) — the field `NumberInput` is built on: islands, sizes, states
- [Form](/en/components/controls/form) — labels and error messages for fields
