# Select

## Label the field

A placeholder is not a name: once a value is chosen, it disappears, and the field says only "Team" without telling what was asked. Put the field's name in a label — `Form.Field` with `label` — and let the placeholder describe the action.

::::good-bad
:::good
::playground{src=select/SelectGuidelineLabelGoodDemo caption="The label names the field, the placeholder invites to choose"}
:::

:::bad
::playground{src=select/SelectGuidelineLabelBadDemo caption="Without a label it is unclear what the chosen value is"}
:::
::::

## Add search to long lists

Scrolling through forty options to find one is slow. From about a dozen options on, turn on `searchable`, and the user can type the beginning of the word instead. With a handful of options search only adds noise.

::::good-bad
:::good
::playground{src=select/SelectGuidelineSearchGoodDemo caption="Typing finds the option without scrolling"}
:::

:::bad
::playground{src=select/SelectGuidelineSearchBadDemo caption="Forty options and no way to search"}
:::
::::

## Let an optional choice be cleared

If the field is a filter or can stay empty, add `clearable`. Without it, once the user has chosen something, there is no way back to "all", and the placeholder is never shown again.

::::good-bad
:::good
::playground{src=select/SelectGuidelineClearableGoodDemo caption="The clear button returns the field to “All statuses”"}
:::

:::bad
::playground{src=select/SelectGuidelineClearableBadDemo caption="The placeholder promises “All statuses”, but there is no way to return"}
:::
::::

## Pick the right control

`Select` hides its options until the user opens it. With two or three options that are worth comparing at a glance, show them all at once with radio buttons instead. Use `multiple` when several options can apply at the same time, and keep the number of chosen labels in the field short enough to read.

## Accessibility

- A select needs a visible label — use `Form.Field` with `label`.
- The field is exposed as a `combobox` with `aria-expanded`, and the list as a `listbox` with `option` rows.
- The arrow keys move through the list, `Enter` chooses, `Escape` closes it.
- A custom trigger passed through `asChild` should be a real button or input, so it can be reached with the keyboard.
- The clear button has a localized `aria-label`, so a custom `clearIcon` stays accessible.
