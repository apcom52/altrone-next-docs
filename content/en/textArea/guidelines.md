# TextArea

## Name the field with a label, not a placeholder

A placeholder disappears as soon as the user starts typing, and in a long text they quickly forget what was asked. Put the field's name in a label — `Form.Field` with `label` — and use the placeholder for a hint about what to write.

::::good-bad
:::good
::playground{src=textArea/TextAreaGuidelineLabelGoodDemo caption="The label stays visible, the placeholder helps to start"}
:::

:::bad
::playground{src=textArea/TextAreaGuidelineLabelBadDemo caption="Once the user types, nothing says what the field is for"}
:::
::::

## Show the limit

`maxLength` silently drops the extra characters: the user types and nothing appears. Add `TextInput.CharCounterIsland` so the limit is visible while writing, not after it has been hit.

::::good-bad
:::good
::playground{src=textArea/TextAreaGuidelineLimitGoodDemo caption="The counter shows how much room is left"}
:::

:::bad
::playground{src=textArea/TextAreaGuidelineLimitBadDemo caption="Typing just stops working, and it is unclear why"}
:::
::::

## Explain the error

A red frame draws attention but tells nothing: what is wrong and how to fix it. Show the message next to the field. Inside `Form`, pass it through `errorMessages` and the field turns `invalid` by itself.

::::good-bad
:::good
::playground{src=textArea/TextAreaGuidelineErrorGoodDemo caption="The message says what to change"}
:::

:::bad
::playground{src=textArea/TextAreaGuidelineErrorBadDemo caption="A red frame with no explanation"}
:::
::::

## Pick the right field

Use `TextArea` when the answer is a sentence or more. For a name, an email or a search query, a single-line `TextInput` is shorter and easier to scan. Don't make a `TextArea` with `rows={1}` to imitate one.

## Accessibility

- A field needs a visible label — use `Form.Field` with `label`.
- `invalid` sets `aria-invalid`; pair it with an error message.
- Island buttons always have a `label`. With `showLabel={false}` it becomes the `aria-label` and the tooltip.
- Don't use `disabled` for a text the user may want to copy — use `readOnly`, which stays focusable.
