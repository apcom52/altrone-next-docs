# Switch

## Describe the effect, not the action

A switch already means "on" and "off", so the label only needs to name the thing being switched. Repeating "enable" or "turn on" in the text adds noise and reads strangely when the switch is off.

::::good-bad
:::good
::playground{src=switch/SwitchGuidelineLabelGoodDemo caption="The label names the setting"}
:::

:::bad
::playground{src=switch/SwitchGuidelineLabelBadDemo caption="The verb repeats what the switch already says"}
:::
::::

## Apply the change at once

A switch promises an immediate result. When switches sit next to a Save button, the user doesn't know whether flipping one did anything. If the settings are saved together, use `Checkbox`; if they apply instantly, drop the button.

::::good-bad
:::good
::playground{src=switch/SwitchGuidelineInstantGoodDemo caption="Each switch applies as soon as it is flipped"}
:::

:::bad
::playground{src=switch/SwitchGuidelineInstantBadDemo caption="The Save button contradicts the instant effect"}
:::
::::

## Explain a disabled switch

A grayed-out switch raises a question: why can't I turn it on? Say what is missing — a plan, a permission, another setting — next to the switch, or in a `Tooltip`.

::::good-bad
:::good
::playground{src=switch/SwitchGuidelineDisabledGoodDemo caption="A line under the switch says how to unlock it"}
:::

:::bad
::playground{src=switch/SwitchGuidelineDisabledBadDemo caption="The user can only guess why it's locked"}
:::
::::

## Don't mix switches and checkboxes

A checkbox records an intention that is applied later; a switch applies at once. Mixing both in one list of settings makes users unsure when a change takes effect. Pick one pattern per screen.

## Accessibility

- A switch needs an accessible name: the label text, or `aria-label` / `aria-labelledby` when there is none.
- It is announced with `role="switch"` and its on/off state, so the label shouldn't repeat the state.
- State is conveyed by the handle position, not by color alone.
- The clickable row is at least 24px tall at every size.

## Related topics

- [Checkbox](/en/components/controls/checkbox) — when the change is saved later
- [Tooltip](/en/components/overlays/tooltip) — a place for the reason a control is unavailable
