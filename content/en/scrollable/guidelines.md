# Scrollable

## Set the height from outside

`Scrollable` doesn't know how much space it's been given — it fills its parent's full height. If the parent has no explicit height, scrolling never appears: the container simply grows with its content. Give the parent a height or pass `maxHeight`.

::::good-bad
:::good
::playground{src=scrollable/ScrollableGuidelineSizeGoodDemo caption="The parent has a height — the overflow scrolls"}
:::

:::bad
::playground{src=scrollable/ScrollableGuidelineSizeBadDemo caption="A parent with no height — the container grows and there's no bar"}
:::
::::

## Don't wrap the content of Modal and Drawer

`Modal` and `Drawer` already scroll on their own. An extra `Scrollable` inside `content` creates nested scrolling: the user can't tell what is moving, and the mouse wheel gets stuck on the inner area.

::::good-bad
:::good
::playground{src=scrollable/ScrollableGuidelineModalGoodDemo caption="The dialog scrolls as a whole"}
:::

:::bad
::playground{src=scrollable/ScrollableGuidelineModalBadDemo caption="Scrolling inside a dialog that can scroll on its own"}
:::
::::

## Use `Scrollable` for areas, not for pages

Scrolling the whole document with the browser is the expected behavior: it works with the back button, the scroll position, and find-in-page. `Scrollable` is for bounded zones: sidebars, chats, lists inside fixed panels.

## Don't nest scrollable areas without a reason

Nested scrolling is disorienting. If the content is long on its own, it may deserve a page of its own.

## Accessibility

- The bar is an overlay and doesn't change the layout, but it hides when idle; don't rely on it as the only signal that the content continues.
- `overflowX="hidden"` or `overflowY="hidden"` turns off gesture scrolling along that axis too — use it only where the content clearly fits along it.

For the library's general rules, see the [Accessibility](/en/foundations/accessibility) article.
