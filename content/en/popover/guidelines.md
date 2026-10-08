# Popover

## `Popover` is a primitive, `Dropdown` is the built-in menu

If you need a list of menu items with icons, shortcuts and dividers, use `Dropdown` — it gives you keyboard navigation, roles and styling for free. Reach for `Popover` when the content goes beyond a list: a form, a confirmation, a free-form info block. Hand-rolling a menu on top of `Popover` throws away what `Dropdown` already solved for you.

::::good-bad
:::good
::playground{src=popover/PopoverGuidelinePrimitiveGoodDemo caption="A free-form form — exactly what Popover is for"}
:::

:::bad
::playground{src=popover/PopoverGuidelinePrimitiveBadDemo caption="A hand-rolled list of items — this needs Dropdown"}
:::
::::

## Close the popover after an action

If the user pressed a button inside the panel and the action completed, the popover should close itself via `hide()`. Leaving it open after a completed action is confusing — it's unclear whether the click even did anything.

::::good-bad
:::good
::playground{src=popover/PopoverGuidelineCloseGoodDemo caption="The panel closes right after the action"}
:::

:::bad
::playground{src=popover/PopoverGuidelineCloseBadDemo caption="The button was pressed, but the panel just sits there"}
:::
::::

## Don't rely on hover alone

`trigger="hover"` by itself is unreachable for keyboard users — focusing the element opens nothing unless `focus` is also in the trigger list. Combine `hover` with `focus` whenever the trigger carries meaningful information rather than just opening the same thing a click would.

::::good-bad
:::good
::playground{src=popover/PopoverGuidelineHoverGoodDemo caption="Tab to it and open the tooltip with the keyboard"}
:::

:::bad
::playground{src=popover/PopoverGuidelineHoverBadDemo caption="Hover only — a keyboard user can't reach the panel"}
:::
::::

## Don't nest too deep

Two levels — a popover and a nested popover — is still something a user can keep in their head. Three levels and beyond isn't: they have to close the chain, navigate back down, and remember where they were. If a flow needs that much depth, that's a signal to restructure it, not to add another level.

::::good-bad
:::good
::playground{src=popover/PopoverGuidelineNestingGoodDemo caption="One level — the confirmation lives right in the action's own panel"}
:::

:::bad
::playground{src=popover/PopoverGuidelineNestingBadDemo caption="Three levels deep just to confirm one thing"}
:::
::::

## Accessibility

- `Escape` and an outside click close the panel by default (`useDismiss`), and focus returns to the trigger.
- With `title` or `showCloseButton`, the panel gets `role="dialog"` and `aria-labelledby`. Without them, no role is set — assign `role` yourself if the panel needs menu or tooltip semantics.
- `focusTrap` keeps tabbing inside the open panel while it's visible.
- `trigger="hover"` without `focus` excludes keyboard users — see above.

The library-wide rules are in [Accessibility](/en/foundations/accessibility).
