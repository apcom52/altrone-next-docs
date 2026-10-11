# Date Picker

`DatePicker` рисует собственные иконки: календарь в поле и стрелки «назад» и «вперёд» в заголовке попапа. Каждую можно заменить. О своём триггере читайте в разделе [свой триггер](/ru/components/controls/datePicker#свой-триггер) обзора.

:::spoiler[Как заменить иконки]
Передайте `triggerIcon`, `prevIcon` и `nextIcon`, чтобы изменить один `DatePicker`. Замена занимает место иконки по умолчанию в том же слоте и, как любая иконка `lucide-react`, подбирает размер сама.

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

::playground{src=datePicker/DatePickerIconsDemo caption="Другая иконка календаря и стрелки заголовка"}

Чтобы поменять стрелки заголовка у всех пикеров приложения, задайте общие иконки `prev` и `next` у `Application` через проп `icons` — проп у `DatePicker` всё равно главнее. Иконка календаря в поле не входит в общие, поэтому меняется только через `triggerIcon`.

Все пропы принимают любой `ReactElement`. Автоматический размер привязан к классу `lucide`, поэтому иконке из другой библиотеки нужен явный размер около `16px` — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[triggerIcon]{icon="Calendar"}
Показывает, что поле открывает календарь
:::

:::icon-card[prevIcon]{icon="ChevronLeft"}
Переходит к предыдущему месяцу или году в заголовке попапа
:::

:::icon-card[nextIcon]{icon="ChevronRight"}
Переходит к следующему месяцу или году в заголовке попапа
:::
::::
