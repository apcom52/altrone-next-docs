# Drawer

## `Drawer` is not a replacement for a page

A side panel works well for forms of 3–5 fields, filters, record details. If a form needs more than that, build a dedicated screen instead. An overflowing panel is harder to use than a page: it scrolls, has no URL, and can't be returned to directly.

::::good-bad
:::good
::playground{src=drawer/DrawerGuidelineSizeGoodDemo caption="A short form fits without scrolling"}
:::

:::bad
::playground{src=drawer/DrawerGuidelineSizeBadDemo caption="A dozen-plus fields is a dedicated screen already"}
:::
::::

## Don't duplicate the primary action

`onDone` renders a Done button in the header — that's already a complete way to finish with the panel. Adding your own save button to `footer` on top of it gives the user two different controls for the same action, with no way to tell them apart. Pick one path: either `onDone`, or your own button in `footer`.

::::good-bad
:::good
::playground{src=drawer/DrawerGuidelineActionsGoodDemo caption="One clear way to save — the footer button"}
:::

:::bad
::playground{src=drawer/DrawerGuidelineActionsBadDemo caption="Done in the header and Save in the footer — which one do you press?"}
:::
::::

## Don't block closing without a reason

`dismissible={false}` is worth reaching for only when closing the panel could actually lose the user's data — and paired with an explicit confirmation, not as an end in itself. Blindly rejecting the backdrop and Escape with no explanation reads as a bug: the panel just shakes and gives no clue why.

::::good-bad
:::good
::playground{src=drawer/DrawerGuidelineDismissGoodDemo caption="Asks for confirmation only when there's something to lose"}
:::

:::bad
::playground{src=drawer/DrawerGuidelineDismissBadDemo caption="Won't close on Escape or the backdrop, even with an empty field"}
:::
::::

## Use `placement="end"` for content anchored to the right edge

Notifications, details of a selection, previews — all of these naturally appear from the same side of the screen as the trigger. A panel sliding in from the opposite side of the button that opened it reads as disconnected from its context.

::::good-bad
:::good
::playground{src=drawer/DrawerGuidelinePlacementGoodDemo caption="The panel slides in from the same side as the button"}
:::

:::bad
::playground{src=drawer/DrawerGuidelinePlacementBadDemo caption="The button is on the right, the panel comes from the left"}
:::
::::

## Accessibility

- Focus is trapped inside the open panel and returns to the trigger on close.
- `Escape` closes the panel unless `dismissible={false}` is set.
- The panel is a `role="dialog"` with `aria-modal="true"`; when `title` is set, the panel also gets `aria-labelledby` pointing to it.
- The close button always stays keyboard-accessible and carries its own accessible name, regardless of the panel's content.

The library-wide rules are in [Accessibility](/en/foundations/accessibility).
