# Progress

## Label what is actually in progress

The bar shows a share but not its meaning: "3" or "37%" without context says nothing. Name the process and, if there is one, the step or amount — "Uploading file 3 of 8". Set a string `label` and it also becomes the accessible name.

::::good-bad
:::good
::playground{src=progress/ProgressGuidelineLabelGoodDemo caption="The label names the process and shows a counter"}
:::

:::bad
::playground{src=progress/ProgressGuidelineLabelBadDemo caption="A bare “3” — of what, out of what?"}
:::
::::

## Use Loading for an unknown duration

`Progress` promises that the process has an end and its share can be measured. A bar frozen at "50%" while waiting for the server is misleading. If you don't know how much is left, show `Loading` with some text.

::::good-bad
:::good
::playground{src=progress/ProgressGuidelineUnknownGoodDemo caption="The spinner honestly says “waiting” without promising a time"}
:::

:::bad
::playground{src=progress/ProgressGuidelineUnknownBadDemo caption="A bar at 50% creates a false sense of progress"}
:::
::::

## Accessibility

- A non-string `label` gives the bar no name — always add `aria-label`.
- Don't convey meaning by the fill color alone; the percentage or text on the bar stays the source of the value.
- Don't update the label more often than needed: screen readers announce `aria-valuenow` changes.
