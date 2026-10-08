# AutocompleteInput

## Suggest, don't restrict

`AutocompleteInput` helps the user type; it doesn't limit what they can enter. When the answer must come from a short fixed list — sizes, statuses, roles — use a `Select` or radio buttons instead: the user sees every option at once and can't make a typo. Reach for the autocomplete when the list is long or open-ended.

::::good-bad
:::good
::playground{src=autocompleteInput/AutocompleteInputGuidelineUseGoodDemo caption="A long, open-ended list: typing beats scrolling"}
:::

:::bad
::playground{src=autocompleteInput/AutocompleteInputGuidelineUseBadDemo caption="Three options hidden behind typing"}
:::
::::

## Don't query on every letter

One letter matches almost everything. Set `minChars` so the list appears when it can actually help, and the server isn't asked about each keystroke. The field already waits 300 ms after the last keystroke, so you don't need your own debounce. Turn on `cacheResults` when the data doesn't change during a session.

::::good-bad
:::good
::playground{src=autocompleteInput/AutocompleteInputGuidelineMinCharsGoodDemo caption="The list waits for two letters"}
:::

:::bad
::playground{src=autocompleteInput/AutocompleteInputGuidelineMinCharsBadDemo caption="One letter opens a list of almost everything"}
:::
::::

## Handle a failed request

Without `onError` the user sees only a small icon and doesn't know what happened or what to do next. Say it in words, and make clear that the field still works — the user can type the value by hand.

::::good-bad
:::good
::playground{src=autocompleteInput/AutocompleteInputGuidelineErrorGoodDemo caption="A message explains the failure and the way out"}
:::

:::bad
::playground{src=autocompleteInput/AutocompleteInputGuidelineErrorBadDemo caption="Only an icon: it isn't clear what went wrong"}
:::
::::

## Don't make a suggestion the only way in

A suggestion is a shortcut, not a validation. If the value must come from the list, check it on submit and report it through the form's error message — the field itself accepts any text.

## Accessibility

- Give the field a visible label — use `Form.Field` with `label`. A placeholder is not a label.
- The list is fully usable from the keyboard: `↑` and `↓` move the highlight, `Enter` picks, `Escape` closes. Your own `onKeyDown` runs first; call `event.preventDefault()` in it only when you really need to take over a key.
- Keep rows short and meaningful in plain text. Anything in `renderSuggestion` that is only a picture or a color is invisible to a screen reader.
- Report a loading failure with text (`onError`), not only with the icon: color and shape alone don't carry the message.
