# Dropdown

## Group related items, isolate destructive ones

Items from the same logical group sit together; different groups are separated by a `Divider`. This matters most for destructive actions: put a `danger` item last, after a `Divider`, so it's never mistaken for a neighboring action.

::::good-bad
:::good
::playground{src=dropdown/DropdownGuidelineGroupingGoodDemo caption="Delete sits alone, after a divider"}
:::

:::bad
::playground{src=dropdown/DropdownGuidelineGroupingBadDemo caption="Delete sits between two harmless actions"}
:::
::::

## Keep `hintText` short

`hintText` is a hint, not an instruction — it's meant to be read at a glance, the way a keyboard shortcut is. A full sentence there wraps awkwardly and competes with the label for attention.

::::good-bad
:::good
::playground{src=dropdown/DropdownGuidelineHintTextGoodDemo caption="A shortcut, read in a glance"}
:::

:::bad
::playground{src=dropdown/DropdownGuidelineHintTextBadDemo caption="A sentence where a shortcut belongs"}
:::
::::

Keyboard shortcuts shown this way are seen by users who already opened the menu with the mouse — a gentle reminder is useful, but don't rely on it as the only way to discover the shortcut.

## Don't build a menu out of one item

A single item is just a button wearing an extra click. If a menu would have fewer than two actions, use a button directly instead.

::::good-bad
:::good
::playground{src=dropdown/DropdownGuidelineSingleItemGoodDemo caption="One action, one button"}
:::

:::bad
::playground{src=dropdown/DropdownGuidelineSingleItemBadDemo caption="A menu that only ever offers one choice"}
:::
::::

## Nest submenus one level deep, at most

`Dropdown.ChildMenu` adds depth, but users lose their bearings past a single level of nesting. If there are many options, consider a dedicated settings screen or a `Popover` with filters instead.

::::good-bad
:::good
::playground{src=dropdown/DropdownGuidelineNestingGoodDemo caption="One level of nesting stays easy to follow"}
:::

:::bad
::playground{src=dropdown/DropdownGuidelineNestingBadDemo caption="A submenu inside a submenu loses the user"}
:::
::::

## Accessibility

- An icon-only trigger (`additionalIcon` with no visible label, or a bare icon `Button`) still needs an `aria-label` — it becomes the trigger's only accessible name.
- Arrow keys move focus between items, `Enter`/`Space` selects, `Escape` closes the menu and returns focus to the trigger — all wired in automatically, no extra props needed.
- `danger` alone doesn't protect the user — pair it with a label that names the consequence, and put a confirmation dialog in front of every irreversible action. See [Feedback](/en/foundations/feedback) for the confirmation patterns.

See [Accessibility](/en/foundations/accessibility) for the library-wide rules.
