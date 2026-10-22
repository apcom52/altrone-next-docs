# Pagination

`Pagination` is a page-switching strip: "first", "previous", page numbers, "next" and "last" buttons. It renders a semantic `<nav>` with a localized `aria-label`, builds a window of numbers around the current page and puts an ellipsis wherever pages are skipped. It is made of ordinary `Button`s, so size, focus and states are the same as in other controls.

```tsx
import { Pagination } from 'altrone-ui';
```

## Basic usage

Only `totalPages` — the total number of pages — is required. Without `currentPage` the strip is uncontrolled: it keeps the current page itself, starting from `defaultPage` (`1` by default).

```tsx
<Pagination totalPages={20} />
```

::playground{src=pagination/PaginationBasicDemo caption="An uncontrolled strip: the component keeps the page itself"}

The first and last pages are always visible, neighbors are shown around the current one, and a gap is marked with an ellipsis. On the first page the "first" and "previous" buttons are disabled, on the last page "next" and "last" are.

## Controlled mode

If your code needs the page — for example to request data — pass `currentPage` and `onChange`. The handler receives the new page number and the click event as the last argument. The number must stay within `1…totalPages`: in development, going outside logs a warning to the console, so clamp the page yourself when `totalPages` shrinks.

```tsx
const [page, setPage] = useState(3);

<Pagination totalPages={12} currentPage={page} onChange={(next) => setPage(next)} />
```

::playground{src=pagination/PaginationControlledDemo caption="The current page lives in the parent's state"}

## Sibling pages

`siblings` is how many pages to show on each side of the current one. The default is `1`; `0` leaves only the current page, the first and the last.

```tsx
<Pagination totalPages={30} siblings={2} />
```

::playground{src=pagination/PaginationSiblingsDemo caption="siblings = 0, 1 and 2"}

## Edge buttons

The "first" and "last" buttons are shown by default. `showEdgeButtons={false}` removes them: "previous", "next" and the page numbers remain.

```tsx
<Pagination totalPages={20} showEdgeButtons={false} />
```

::playground{src=pagination/PaginationEdgeButtonsDemo caption="With and without the edge buttons"}

## Sizes

`size` scales the buttons, the ellipsis and the rounding of the strip.

```tsx
<Pagination totalPages={9} size="l" />
```

::playground{src=pagination/PaginationSizesDemo caption="Five sizes: mini, s, m, l, xl"}

## Props

:::prop[totalPages*]{type="number"}
The total number of pages.
:::

:::prop[currentPage]{type="number"}
The current page (1-based) in controlled mode. Without it, the strip keeps the page itself.
:::

:::prop[defaultPage]{type="number" default="1"}
The initial page in uncontrolled mode.
:::

:::prop[onChange]{type="(page: number, event: React.MouseEvent<HTMLButtonElement>) => void"}
Called when a page is chosen. The click event is passed as the last argument.
:::

:::prop[siblings]{type="number" default="1"}
How many pages to show on each side of the current one.
:::

:::prop[showEdgeButtons]{type="boolean" default="true"}
Show the buttons that jump to the first and last pages.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Strip size.
:::

:::prop[prevIcon]{type="ReactElement"}
The icon of the "previous" button. More on the [Icons](/en/components/navigation/pagination/icons) tab.
:::

:::prop[nextIcon]{type="ReactElement"}
The icon of the "next" button.
:::

:::prop[firstPageIcon]{type="ReactElement"}
The icon of the "first" button. Used with `showEdgeButtons`.
:::

:::prop[lastPageIcon]{type="ReactElement"}
The icon of the "last" button. Used with `showEdgeButtons`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Reference to the `<nav>` element.
:::

Other `<nav>` attributes (except `onChange`) are passed to the root element.

## Related topics

- [Button](/en/components/controls/button) — the strip itself is made of buttons
- [DataTable](/en/components/content/dataTable) — a table that pagination usually sits under
- [Tabs](/en/components/navigation/tabs) — switching between views rather than pages of a list
- [Application](/en/components/layout/application) — the label language and the shared `prev` and `next` icons
