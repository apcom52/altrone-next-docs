# Pagination

`Pagination` draws four icons itself — on the "previous", "next", "first" and "last" buttons. Each of those buttons has an accessible name, and the icons are decorative. Page numbers and the ellipsis are not icons.

:::spoiler[How to replace the icons]
Pass the props you need directly.

```tsx
import { ArrowLeft, ArrowRight } from "lucide-react";

<Pagination totalPages={12} prevIcon={<ArrowLeft />} nextIcon={<ArrowRight />} />
```

::playground{src=pagination/PaginationIconsDemo caption="Arrows and double chevrons instead of the default icons"}

A prop accepts any `ReactElement`; the icon adapts to the strip's `size`. `firstPageIcon` and `lastPageIcon` matter only with `showEdgeButtons`.

The "previous" and "next" arrows are shared by several components (`Calendar`, `DatePicker`, `Pagination`). To replace them everywhere at once, set `prev` and `next` in the `icons` prop of [Application](/en/components/layout/application) — `prevIcon` and `nextIcon` on a particular strip still win. For an icon from another library, set the size explicitly — see the [Icons](/en/foundations/icons) article.
:::

## Icons

::::icon-cards
:::icon-card[prevIcon]{icon="ChevronLeft"}
Leads to the previous page
:::

:::icon-card[nextIcon]{icon="ChevronRight"}
Leads to the next page
:::

:::icon-card[firstPageIcon]{icon="ChevronFirst"}
Leads to the first page while `showEdgeButtons` is on
:::

:::icon-card[lastPageIcon]{icon="ChevronLast"}
Leads to the last page while `showEdgeButtons` is on
:::
::::
