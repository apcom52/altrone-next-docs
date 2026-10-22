# Pagination

`Pagination` сам рисует четыре иконки — на кнопках «назад», «вперёд», «в начало» и «в конец». У всех них есть доступное название, а сами иконки декоративны. Номера страниц и многоточие иконками не являются.

:::spoiler[Как заменить иконки]
Передайте нужные пропы напрямую.

```tsx
import { ArrowLeft, ArrowRight } from "lucide-react";

<Pagination totalPages={12} prevIcon={<ArrowLeft />} nextIcon={<ArrowRight />} />
```

::playground{src=pagination/PaginationIconsDemo caption="Стрелки и двойные шевроны вместо стандартных иконок"}

Проп принимает любой `ReactElement`; размер иконки подстраивается под `size` полосы. `firstPageIcon` и `lastPageIcon` нужны только при `showEdgeButtons`.

Стрелки «назад» и «вперёд» общие для нескольких компонентов (`Calendar`, `DatePicker`, `Pagination`). Чтобы заменить их разом везде, задайте `prev` и `next` в пропе `icons` у [Application](/ru/components/layout/application) — `prevIcon` и `nextIcon` на конкретной полосе всё равно сильнее. Для иконки из другой библиотеки задайте размер явно — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[prevIcon]{icon="ChevronLeft"}
Ведёт на предыдущую страницу
:::

:::icon-card[nextIcon]{icon="ChevronRight"}
Ведёт на следующую страницу
:::

:::icon-card[firstPageIcon]{icon="ChevronFirst"}
Ведёт на первую страницу, пока `showEdgeButtons` включён
:::

:::icon-card[lastPageIcon]{icon="ChevronLast"}
Ведёт на последнюю страницу, пока `showEdgeButtons` включён
:::
::::
