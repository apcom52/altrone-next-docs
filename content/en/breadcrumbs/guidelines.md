# Breadcrumbs

## Mark the current page

The last crumb is the page the person is already on. Mark it with `current` and don't make it a link: it stands out by color and weight, and assistive technology learns where the person is.

::::good-bad
:::good
::playground{src=breadcrumbs/BreadcrumbsGuidelineCurrentGoodDemo caption="The last crumb is the current page, not a link"}
:::

:::bad
::playground{src=breadcrumbs/BreadcrumbsGuidelineCurrentBadDemo caption="All crumbs look the same — it's unclear where the person is"}
:::
::::

## An icon only on the first crumb

A "Home" icon on the first crumb saves space and is recognized at once. Icons on every level add noise and no meaning.

::::good-bad
:::good
::playground{src=breadcrumbs/BreadcrumbsGuidelineIconsGoodDemo caption="An icon only on Home"}
:::

:::bad
::playground{src=breadcrumbs/BreadcrumbsGuidelineIconsBadDemo caption="An icon on every level is visual noise"}
:::
::::

## Collapse long paths

A path deeper than four or five levels is hard to read and doesn't fit a narrow screen. Keep the first and the last crumbs and move the middle into a `Dropdown` behind an ellipsis.

## Show the real hierarchy

Breadcrumbs are a path through the structure of the site, not the history of the person's visits. Each crumb should lead to the parent page of the next one.

## Accessibility

- The root is a `<nav>` with a localized `aria-label`, with an ordered list `<ol>` inside.
- The current crumb gets `aria-current="page"`.
- Separators are decorative and hidden from assistive technology (`aria-hidden`).
- A crumb without `asChild` is not a link and can't be focused; to make it navigable, wrap it with `asChild` around an `<a>` or a router link.
- The current page is distinguished not only by color but also by bold weight.
