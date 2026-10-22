# Label

## Keep the text short

A label is read at a glance: one or two words. A whole sentence turns it into a colored paragraph — put the explanation next to it or into a tooltip on the parent element.

::::good-bad
:::good
::playground{src=label/LabelGuidelineTextGoodDemo caption="One or two words — readable at a glance"}
:::

:::bad
::playground{src=label/LabelGuidelineTextBadDemo caption="Sentences instead of a status"}
:::
::::

## Match the color to the meaning

People read `success` as "everything is fine" and `danger` as "something went wrong". Use the semantic colors for statuses and keep the same status in the same color everywhere in the product. Categorical colors have no meaning of their own — leave them for categories.

::::good-bad
:::good
::playground{src=label/LabelGuidelineMeaningGoodDemo caption="The color confirms what the text says"}
:::

:::bad
::playground{src=label/LabelGuidelineMeaningBadDemo caption="Red \"Completed\" and green \"Failed\" contradict the text"}
:::
::::

## Use one style within a group

Labels of the same kind next to each other should share `variant`, `shape` and `size` — then only the color and the text differ. A mix of styles reads as different levels of importance where there are none.

::::good-bad
:::good
::playground{src=label/LabelGuidelineVariantGoodDemo caption="One variant and size — only the color differs"}
:::

:::bad
::playground{src=label/LabelGuidelineVariantBadDemo caption="Four styles for four equal categories"}
:::
::::

## Save the solid variant for what matters

`solid` is the most prominent variant. In a table full of statuses, `soft` or `status` keep the page calm; make a label solid when it has to catch the eye, for example "Beta" next to a heading.

## Don't make a label clickable

`Label` is not a control: it has no focus, hover or pressed states. For an action use a `Button`, for removable or clickable keywords use `Tags`.

## Accessibility

- The label is a plain `<div>` with text and has no role — screen readers read its text as part of the surrounding content.
- The color and the dot are not announced, so the text must carry the whole meaning on its own: "Failed", not a red label with "Status".
- Icons from `lucide-react` are hidden from assistive technology by default; if the icon is the only carrier of meaning, add it to the text.
- If a status changes while the page is open and the change matters, announce it through a live region in your own markup.
