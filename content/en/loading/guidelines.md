# Loading

## Use a skeleton when the shape is known

If you know what the content will look like — a list of rows, a grid of cards — reserve its space with `Skeleton`. A spinner in an empty area tells nothing about what is coming, and the page jumps when the content arrives.

::::good-bad
:::good
::playground{src=loading/LoadingGuidelineShapeGoodDemo caption="The rows of the future list are already in place"}
:::

:::bad
::playground{src=loading/LoadingGuidelineShapeBadDemo caption="A spinner in place of a list of known shape"}
:::
::::

## Show progress when you know it

If the operation reports how far it has gone — an upload, an export — pass `value`. A filling arc answers "how much longer" better than an endless rotation.

::::good-bad
:::good
::playground{src=loading/LoadingGuidelineProgressGoodDemo caption="The arc shows how much of the file is uploaded"}
:::

:::bad
::playground{src=loading/LoadingGuidelineProgressBadDemo caption="The progress is known but not shown"}
:::
::::

## Use the button's own loading state

A button that started an action shows the wait itself through `state="loading"`: it blocks repeated clicks and keeps its size. A separate spinner next to an active button invites a second click.

::::good-bad
:::good
::playground{src=loading/LoadingGuidelineButtonGoodDemo caption="The button shows the wait and is blocked"}
:::

:::bad
::playground{src=loading/LoadingGuidelineButtonBadDemo caption="The spinner is next to a button that can still be clicked"}
:::
::::

## Match the size to the context

Next to text the spinner should be no bigger than a line: 16px with a thin stroke and `currentColor`. Save large sizes for a wait that occupies a whole area.

::::good-bad
:::good
::playground{src=loading/LoadingGuidelineSizeGoodDemo caption="The spinner is the size of the text and its color"}
:::

:::bad
::playground{src=loading/LoadingGuidelineSizeBadDemo caption="The spinner is much larger than the line"}
:::
::::

## Don't stop the spinner under reduced motion

The spinner keeps rotating under `prefers-reduced-motion` on purpose: without the motion people can't tell a running operation from a frozen one. Don't add your own override that stops it.

## Accessibility

- An indeterminate spinner is `role="status"`; a determinate one is `role="progressbar"` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax`.
- The default `aria-label` is a localized "Loading". Pass a specific one ("Loading comments", "Uploading report.pdf") so that it's clear what is waited for.
- If visible text next to the spinner already says what is happening, keep the label consistent with it.
- The SVG inside is hidden from assistive technology (`aria-hidden`).
