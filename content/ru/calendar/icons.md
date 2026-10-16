# Calendar

`Calendar` рисует собственные иконки навигации в шапке: стрелки «предыдущий месяц» и «следующий месяц». Обе можно заменить. Остальное содержимое — числа и названия, иконок в нём нет.

:::spoiler[Как заменить иконки]
Передайте `prevIcon` и `nextIcon`, чтобы изменить один календарь. Замена занимает место иконки по умолчанию в том же слоте кнопки и, как любая иконка `lucide-react`, подбирает размер сама.

```tsx
import { ChevronLeft, ChevronRight } from "lucide-react";

<Calendar mode="single" prevIcon={<ChevronLeft />} nextIcon={<ChevronRight />} />
```

::playground{src=calendar/CalendarIconsDemo caption="Другие стрелки навигации"}

Чтобы поменять стрелки у всех календарей и других компонентов с навигацией, задайте общие иконки `prev` и `next` у `Application` через проп `icons` — проп у `Calendar` всё равно главнее.

Обе пропы принимают любой `ReactElement`. Автоматический размер привязан к классу `lucide`, поэтому иконке из другой библиотеки нужен явный размер около `16px` — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[prevIcon]{icon="ChevronLeft"}
Переходит к предыдущему месяцу в шапке
:::

:::icon-card[nextIcon]{icon="ChevronRight"}
Переходит к следующему месяцу в шапке
:::
::::
