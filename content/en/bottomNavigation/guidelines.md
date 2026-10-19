# BottomNavigation

## No more than five sections

A bottom bar is meant for three to five main sections that people switch between constantly. More than five icons on a narrow screen become small and hard to read.

::::good-bad
:::good
::playground{src=bottomNavigation/BottomNavigationGuidelineCountGoodDemo caption="Four sections — everything reads well"}
:::

:::bad
::playground{src=bottomNavigation/BottomNavigationGuidelineCountBadDemo caption="Seven sections crowd and shrink"}
:::
::::

Move lower-priority sections into a menu or a separate screen.

## Keep labels short

The label is set in a small size under the icon and is truncated with an ellipsis when it doesn't fit. One word reads at once; a phrase gets cut off and loses its meaning.

::::good-bad
:::good
::playground{src=bottomNavigation/BottomNavigationGuidelineLabelsGoodDemo caption="One word per section"}
:::

:::bad
::playground{src=bottomNavigation/BottomNavigationGuidelineLabelsBadDemo caption="Long labels are truncated"}
:::
::::

## One selected link

Drive `selected` from a single source — the current route or one value in state. The backdrop follows the selected link, and several selected at once confuse both it and the person.

## A badge is for what needs attention

A badge says "look here". A counter that never resets stops being a signal, and badges on every link cancel each other out. Keep them for what is unread or awaiting action.

## Use asChild instead of wrapping the link

Don't wrap `BottomNavigation.Link` in a router link — it breaks the backdrop and the press area. Pass `asChild` and put the router link inside.

## Accessibility

- The selected link gets `aria-current="page"`.
- The bar root is a plain `<div>`. Outside `Screen.BottomNavigation`, which wraps the bar in a named `<nav>` itself, give it `role="navigation"` and an `aria-label`.
- A link without `href` gets `tabIndex={0}` and fires on `Enter` and `Space`.
- Every link is an icon with a label, so the meaning doesn't rest on the icon alone; state is not conveyed by color alone: the selected link gets a backdrop.
