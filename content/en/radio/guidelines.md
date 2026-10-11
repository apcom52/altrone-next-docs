# Radio

## Radio for short lists, Select for long ones

When there are two to five options, show them all: the user compares them by eye and chooses in one click. A dropdown hides the options behind an extra press, which pays off only when there are many of them.

::::good-bad
:::good
::playground{src=radio/RadioGuidelineSelectGoodDemo caption="Three options are visible at once, one click to choose"}
:::

:::bad
::playground{src=radio/RadioGuidelineSelectBadDemo caption="Three options are hidden behind a dropdown"}
:::
::::

## Pick a default option

A radio selection can't be unset, so a group with nothing selected leaves the user wondering whether they have to answer at all. If the setting has a sensible default, preselect it. Leave the group empty only where an answer is mandatory and you want the person to make it deliberately.

::::good-bad
:::good
::playground{src=radio/RadioGuidelineDefaultGoodDemo caption="Standard delivery is preselected"}
:::

:::bad
::playground{src=radio/RadioGuidelineDefaultBadDemo caption="Nothing is selected, and it's unclear whether an answer is required"}
:::
::::

## Explain how the options differ

A label should let people choose without opening the help. "Option A" and "Option B" say nothing; a name with a short explanation tells the user what the choice leads to.

::::good-bad
:::good
::playground{src=radio/RadioGuidelineLabelGoodDemo caption="The label names the option and what sets it apart"}
:::

:::bad
::playground{src=radio/RadioGuidelineLabelBadDemo caption="The labels give no way to tell the options apart"}
:::
::::

## Don't swap Radio and checkboxes

Radio buttons mean "one of", checkboxes mean "any number". If the user can pick several options, or none, use `Checkbox`. A single yes/no also calls for a `Checkbox` or a `Switch`, not a group of two radio buttons.

## Accessibility

- The group needs a shared name. Add `role="radiogroup"` and an `aria-labelledby` pointing at the question's heading to `Radio` — they are passed to the root `<div>`.
- Every option needs a label; when it has none, set `aria-label` or `aria-labelledby`.
- The options are native radio buttons: `Tab` enters the group, the arrow keys move the selection, `Space` selects the option.
- The selected state is shown by the dot inside the circle, not by color alone.
- The clickable row is never shorter than 24px at any size.
