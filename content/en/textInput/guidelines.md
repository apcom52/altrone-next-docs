# TextInput

## Keep islands for in-field tasks

An island does something with the content of the field or says what the field is: a search icon, a clear button, a currency symbol. An action that is independent of the value belongs outside the field. Two or three islands is the ceiling — an icon on the left and a clear button on the right cover most cases. With more, people can no longer tell what is interactive.

::::good-bad
:::good
::playground{src=textInput/TextInputGuidelineIslandsGoodDemo caption="An icon and a clear button — each has a clear job"}
:::

:::bad
::playground{src=textInput/TextInputGuidelineIslandsBadDemo caption="Six islands crowd the value out and blur what is clickable"}
:::
::::

## Name the field with a label, not a placeholder

A placeholder disappears as soon as the user starts typing, and it is easy to take for a value already entered. Put the field's name in a label — `Form.Field` with `label` — and leave the placeholder for an example of the format.

::::good-bad
:::good
::playground{src=textInput/TextInputGuidelineLabelGoodDemo caption="The label stays visible, the placeholder shows the format"}
:::

:::bad
::playground{src=textInput/TextInputGuidelineLabelBadDemo caption="Once the user types, nothing says what the field is for"}
:::
::::

## Explain the error

A red frame draws attention but tells nothing: what is wrong and how to fix it. Show the message next to the field. Inside `Form`, pass it through `errorMessages` and the field turns `invalid` by itself.

::::good-bad
:::good
::playground{src=textInput/TextInputGuidelineErrorGoodDemo caption="The message says what to change"}
:::

:::bad
::playground{src=textInput/TextInputGuidelineErrorBadDemo caption="A red frame with no explanation"}
:::
::::

## Make the transparent field recognizable

`variant="transparent"` does not signal that the text is editable. Make sure the context says so: a placeholder, an edit icon, a visible hover and focus state. Use it for editing in place, not for ordinary forms.

## Accessibility

- A field needs a visible label — use `Form.Field` with `label`.
- `invalid` sets `aria-invalid`; pair it with an error message.
- `ActionIsland` always has a `label`. With `showLabel={false}` it becomes the `aria-label` and the tooltip — an icon alone is not enough.
- `LoadingIsland` announces itself with `role="status"`.
- Don't use `disabled` for a value the user may want to copy — use `readOnly`, which stays focusable.
