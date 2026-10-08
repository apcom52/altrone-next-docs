# NumberInput

## Use whole numbers for things you can count

Nobody orders 2.5 chairs. If the value is a count, set `digitsAfterPoint={0}` and, where it makes sense, `min={1}`. Don't rely on the default of two decimals: it quietly lets people type fractions.

::::good-bad
:::good
::playground{src=numberInput/NumberInputGuidelineWholeGoodDemo caption="Only whole numbers can be typed"}
:::

:::bad
::playground{src=numberInput/NumberInputGuidelineWholeBadDemo caption="Two decimals by default let a fraction of an item in"}
:::
::::

## Show the unit next to the number

A bare number leaves questions: kilograms or pounds, dollars or euros? Put the unit or the currency into a `TextInput.TextIsland`. It stays visible while typing, unlike a placeholder.

::::good-bad
:::good
::playground{src=numberInput/NumberInputGuidelineUnitGoodDemo caption="The unit is always visible"}
:::

:::bad
::playground{src=numberInput/NumberInputGuidelineUnitBadDemo caption="Nothing says what the number measures"}
:::
::::

## Not every number is a number

Phone numbers, card numbers, postal codes and PINs are digits, but you never calculate with them. They can start with zero, contain spaces or a plus, and should not be rounded or grouped like money. Use `TextInput` for them, with a suitable `inputMode`.

## Tell people about the limits

Because a number outside `min`/`max` is just refused, the user may not understand why the key does nothing. Say what is allowed in the label or a hint, for example "Quantity (1–99)".

## Accessibility

- A field needs a visible label — use `Form.Field` with `label`.
- `invalid` sets `aria-invalid`; pair it with an error message that says what to fix.
