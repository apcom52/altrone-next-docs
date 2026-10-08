# Checkbox

## Write the label as a statement

A checkbox is "on" or "off", so its label should read as something that can be true. A question makes the user translate "yes" into what ticking the box actually does.

::::good-bad
:::good
::playground{src=checkbox/CheckboxGuidelineLabelGoodDemo caption="The label says what the box turns on"}
:::

:::bad
::playground{src=checkbox/CheckboxGuidelineLabelBadDemo caption="A question: what does ticking it mean?"}
:::
::::

## Show partial selection

When a checkbox controls a group, it must reflect the group. If only some items are selected and the parent looks empty, the user can't tell the selection from "nothing chosen". Pass `indeterminate` and make a click on it select everything.

::::good-bad
:::good
::playground{src=checkbox/CheckboxGuidelineSelectAllGoodDemo caption="The parent shows a dash while only some files are selected"}
:::

:::bad
::playground{src=checkbox/CheckboxGuidelineSelectAllBadDemo caption="The parent looks empty although one file is selected"}
:::
::::

## Don't use it for instant settings

A checkbox records an intention that takes effect later — on Save or Submit. If flipping it changes something right away, use a `Switch`: the sliding handle tells the user the effect is immediate.

::::good-bad
:::good
::playground{src=checkbox/CheckboxGuidelineInstantGoodDemo caption="A switch for a setting that applies at once"}
:::

:::bad
::playground{src=checkbox/CheckboxGuidelineInstantBadDemo caption="A checkbox suggests a Save button that isn't there"}
:::
::::

## Mind the danger

Reserve `danger` for choices with irreversible consequences. If every second checkbox is red, red stops meaning anything. The color is not a substitute for a confirmation: a destructive action still needs one when the user submits.

## Accessibility

- A checkbox needs an accessible name: the label text, or `aria-label` / `aria-labelledby` when there is none.
- `indeterminate` is announced as `mixed` — pair it with a group label so the user knows what is partially selected.
- State is conveyed by the mark inside the box, not by color alone.
- The clickable row is at least 24px tall at every size.
- Don't use `disabled` to hide a reason: say why the option is unavailable next to it.

## Related topics

- [Switch](/en/components/controls/switch) — when the change applies instantly
- [Form](/en/components/controls/form) — labels, hints and error messages around a control
