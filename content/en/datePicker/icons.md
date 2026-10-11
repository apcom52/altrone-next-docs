# Date Picker

`DatePicker` draws its own icons: the calendar in the field and the "previous" and "next" arrows in the popup header. Each can be replaced. For a trigger of your own, see [custom trigger](/en/components/controls/datePicker#custom-trigger) in the overview.

:::spoiler[How to replace the icons]
Pass `triggerIcon`, `prevIcon` and `nextIcon` to change one `DatePicker`. The replacement takes the place of the default icon in the same slot and, like any `lucide-react` icon, sizes itself.

```tsx
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

<DatePicker
  value={date}
  onChange={setDate}
  triggerIcon={<CalendarDays />}
  prevIcon={<ChevronLeft />}
  nextIcon={<ChevronRight />}
/>
```

::playground{src=datePicker/DatePickerIconsDemo caption="A different calendar icon and header arrows"}

To change the header arrows for every picker in the app, set the shared `prev` and `next` icons on `Application` through the `icons` prop — the prop on `DatePicker` still wins. The calendar icon of the field isn't a shared icon, so it is replaced only through `triggerIcon`.

All props accept any `ReactElement`. Automatic sizing is tied to the `lucide` class, so an icon from another library needs an explicit size of about `16px` — see the [Icons](/en/foundations/icons) article.
:::

## Icons

::::icon-cards
:::icon-card[triggerIcon]{icon="Calendar"}
Shows that the field opens a calendar
:::

:::icon-card[prevIcon]{icon="ChevronLeft"}
Goes to the previous month or year in the popup header
:::

:::icon-card[nextIcon]{icon="ChevronRight"}
Goes to the next month or year in the popup header
:::
::::
