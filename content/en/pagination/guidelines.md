# Pagination

## Drop the edge buttons on short lists

With five pages the "first" and "last" buttons save nothing — every number is already in view. Keep them when there are many pages and the edge is far away.

::::good-bad
:::good
::playground{src=pagination/PaginationGuidelineEdgeGoodDemo caption="Five pages — only numbers and arrows"}
:::

:::bad
::playground{src=pagination/PaginationGuidelineEdgeBadDemo caption="The edge buttons duplicate visible numbers"}
:::
::::

## Don't bloat the window

One or two neighboring pages are enough to find your way. A large `siblings` stretches the strip and doesn't fit a narrow screen.

::::good-bad{columns="1"}
:::good
::playground{src=pagination/PaginationGuidelineSiblingsGoodDemo caption="The default siblings — the strip is compact"}
:::

:::bad
::playground{src=pagination/PaginationGuidelineSiblingsBadDemo caption="siblings = 4 — the strip is wide"}
:::
::::

## Hide the strip when there is one page

With `totalPages` equal to 1, pagination is useless — don't render it.

## Keep the page in bounds

In controlled mode make sure `currentPage` doesn't leave `1…totalPages`, especially when filtering leaves fewer pages. Reset the page to the last available one or to the first.

## Show where the person is

It helps to label the context next to the strip — "Page 3 of 12" or a range of records: the strip doesn't print this information itself.

## Accessibility

- The root is a `<nav>` with a localized `aria-label`.
- The current page gets `aria-current="page"`; every button has an accessible name ("Page 3", "Next page").
- The navigation buttons are disabled at the range boundaries and drop out of the tab order.
- The page state is not conveyed by color alone: the selected button also differs in fill.
