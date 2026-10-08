# Spoiler

`Spoiler` сам рисует одну иконку — плюс в свёрнутом состоянии и минус в раскрытом, — и обе можно заменить. Иконка декоративна (`aria-hidden`); состояние озвучивается через `aria-expanded`. Содержимое, которое вы передаёте в `title`, описано в [сведениях](/ru/components/layout/spoiler).

:::spoiler[Как заменить иконки]
Передайте `expandIcon` и `collapseIcon`, чтобы заменить плюс и минус, например парой шевронов.

```tsx
import { ChevronDown, ChevronUp } from "lucide-react";

<Spoiler
  title="Shipping details"
  expandIcon={<ChevronDown />}
  collapseIcon={<ChevronUp />}
>
  ...
</Spoiler>
```

::playground{src=spoiler/SpoilerIconsDemo caption="Шевроны вместо плюса и минуса"}

Оба пропа принимают любой `ReactElement`. Размер задаёт `--spoiler-icon-size` (по умолчанию `18px`) для `<svg>` внутри слота иконки, поэтому иконка из другой библиотеки масштабируется так же — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[expandIcon]{icon="Plus"}
Сообщает, что секцию можно раскрыть, пока она свёрнута
:::

:::icon-card[collapseIcon]{icon="Minus"}
Сообщает, что секцию можно свернуть, пока она раскрыта
:::
::::
