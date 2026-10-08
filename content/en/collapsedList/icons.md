# CollapsedList

The toggle button draws a chevron itself: down while the list is collapsed, up while it is expanded. By default they come from the shared `icons.open` and `icons.close` roles. There is nothing in the list that can't be replaced. The items and the label you pass in are covered in the [overview](/en/components/layout/collapsedList).

:::spoiler[How to replace the icons]
Pass `openIcon` and `closeIcon` to change the icons for one list, or set the `open`/`close` roles once in `Application`'s `icons` prop to change them everywhere — in `Select` and `ColorPicker` too.

```tsx
import { CirclePlus, CircleMinus } from "lucide-react";

<CollapsedList openIcon={<CirclePlus />} closeIcon={<CircleMinus />}>
  {items.map(/* ... */)}
</CollapsedList>
```

::playground{src=collapsedList/CollapsedListIconsDemo caption="Plus and minus instead of the chevrons"}

Both props accept any `ReactElement`. A `lucide-react` icon sizes itself to the button automatically; an icon from another library needs an explicit size of about `16px` — see [Icons](/en/foundations/icons) and [Application](/en/components/layout/application).
:::

## Icons

::::icon-cards
:::icon-card[openIcon]{icon="ChevronDown"}
Marks the toggle while the list is collapsed and can be expanded
:::

:::icon-card[closeIcon]{icon="ChevronUp"}
Marks the toggle while the list is expanded and can be collapsed
:::
::::
