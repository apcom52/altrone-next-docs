# NavigationList

## Keep labels short

A menu item is a destination name, not a sentence. One or two words are scanned in a glance and fit the width without truncation; long labels are cut with an ellipsis.

::::good-bad
:::good
::playground{src=navigationList/NavigationListGuidelineLabelsGoodDemo caption="One word per destination, with an icon"}
:::

:::bad
::playground{src=navigationList/NavigationListGuidelineLabelsBadDemo caption="Sentences are truncated and hard to scan"}
:::
::::

## Group long menus

Seven or more items in a flat list are hard to scan. Split them by meaning into groups with short titles, and put the most frequent destinations first.

::::good-bad
:::good
::playground{src=navigationList/NavigationListGuidelineGroupsGoodDemo caption="Titled groups give the menu a structure"}
:::

:::bad
::playground{src=navigationList/NavigationListGuidelineGroupsBadDemo caption="Eight items in a flat list"}
:::
::::

## Mark the current page

Always set `selected` on the item for the current page, and on the parent of a nested item too. The highlight shows where the person is, and `aria-current` tells the same to assistive technology.

## Use badges sparingly

A badge says "look here". If several items carry one, none of them stands out. Keep badges for counters that need action, such as unread messages.

## Accessibility

- The list is a `<nav>`; set `aria-label` when a page has more than one navigation.
- The current page gets `aria-current="page"`, and the parent of an open sub-menu gets `aria-current="true"`.
- An item without `href` is focusable and works with `Enter` and `Space`; a disabled item leaves the tab order.
- Icon-only buttons in `actions` need a `label` as their accessible name.
- The chevron next to an open sub-menu is decorative and hidden from screen readers.
