# Skeleton

## Repeat the shape of the content

A placeholder should look like what replaces it: a round avatar where there will be an avatar, a short line where there will be a name. Then the eye already knows the layout, and nothing shifts when the data arrives.

::::good-bad
:::good
::playground{src=skeleton/SkeletonGuidelineShapeGoodDemo caption="Three list rows with an avatar and a name"}
:::

:::bad
::playground{src=skeleton/SkeletonGuidelineShapeBadDemo caption="One block — the layout is unknown until the list loads"}
:::
::::

## Let text lines end unevenly

Real text rarely fills every line to the edge. Make the last line of a paragraph shorter and round the corners slightly — a stack of identical full-width bars reads as a table or a form rather than text.

::::good-bad
:::good
::playground{src=skeleton/SkeletonGuidelineLinesGoodDemo caption="The last line is shorter — reads as a paragraph"}
:::

:::bad
::playground{src=skeleton/SkeletonGuidelineLinesBadDemo caption="Identical bars — it is unclear what is loading"}
:::
::::

## Use a spinner for actions

A skeleton is for content that is loading into a view. When the user has started an action — saved, sent, deleted — show the progress on the control itself, and keep it visible and labeled.

::::good-bad
:::good
::playground{src=skeleton/SkeletonGuidelineActionGoodDemo caption="The button keeps its label and shows a spinner"}
:::

:::bad
::playground{src=skeleton/SkeletonGuidelineActionBadDemo caption="The button turned into a gray block"}
:::
::::

## Accessibility

- Every skeleton has `aria-hidden` — announce the loading state on the wrapper with `aria-busy` and, if the content should be read out when it appears, `aria-live`.
- The pulse stops under `prefers-reduced-motion`, the block stays in place.
- Don't keep a skeleton on screen forever: if loading fails, replace it with an error message.
