# Calendar

`Calendar` draws its own navigation icons in the header: the "previous month" and "next month" arrows. Both can be replaced. The rest of the content is numbers and names, with no icons.

:::spoiler[How to replace the icons]
Pass `prevIcon` and `nextIcon` to change one calendar. The replacement takes the place of the default icon in the same button slot and, like any `lucide-react` icon, sizes itself.

```tsx
import { ChevronLeft, ChevronRight } from "lucide-react";

<Calendar mode="single" prevIcon={<ChevronLeft />} nextIcon={<ChevronRight />} />
```

::playground{src=calendar/CalendarIconsDemo caption="Other navigation arrows"}

To change the arrows for every calendar and other component with navigation, set the shared `prev` and `next` icons on `Application` through the `icons` prop — the prop on `Calendar` still wins.

Both props accept any `ReactElement`. The automatic size is tied to the `lucide` class, so an icon from another library needs an explicit size of about `16px` — see the [Icons](/en/foundations/icons) article.
:::

## Icons

::::icon-cards
:::icon-card[prevIcon]{icon="ChevronLeft"}
Moves to the previous month in the header
:::

:::icon-card[nextIcon]{icon="ChevronRight"}
Moves to the next month in the header
:::
::::
