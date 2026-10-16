# Result

## Offer the next step

An empty state is a dead end unless it says what to do. Name the reason in the title and put the first useful action into `actions`: create, import, change the filter.

::::good-bad
:::good
::playground{src=result/ResultGuidelineNextStepGoodDemo caption="The title says what is missing, the button leads on"}
:::

:::bad
::playground{src=result/ResultGuidelineNextStepBadDemo caption="“Nothing here” leaves the person with nothing to do"}
:::
::::

## Match status to meaning

An empty list is not an error. Reserve `error` for failures, because it is announced to screen readers as urgent and colored red. A normal "nothing yet" stays `empty`.

::::good-bad
:::good
::playground{src=result/ResultGuidelineStatusGoodDemo caption="No messages is a normal state"}
:::

:::bad
::playground{src=result/ResultGuidelineStatusBadDemo caption="A red error for an empty list scares people for nothing"}
:::
::::

## Pick the size by the space

`mini` and `s` for a table, a menu or a small panel, `m` for a card, `l` and `xl` for a whole page. Don't put a large `Result` into a small area, it will crowd the content.

## Accessibility

- `error` is `role="alert"` and is announced at once, the others are a polite `role="status"`.
- The icon is decorative and hidden from screen readers, so the meaning must be in the title and the text.
- Don't rely on the chip color: the status must be clear from the words.
- Buttons in `actions` are ordinary buttons and reachable from the keyboard.
