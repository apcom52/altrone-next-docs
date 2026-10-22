# Close Button

`CloseButton` сам рисует одну иконку — крестик `X`. У кнопки есть доступное имя, поэтому иконка декоративна. Крестик не входит в общий набор иконок `Application`, поэтому заменяется только на конкретной кнопке.

:::spoiler[Как заменить иконку]
Передайте проп `icon`.

```tsx
import { CircleX } from "lucide-react";

<CloseButton icon={<CircleX />} />
```

::playground{src=closeButton/CloseButtonIconDemo caption="Стандартный крестик, CircleX и PanelRightClose"}

Проп принимает любой `ReactElement`; иконка `lucide-react` сама подстраивается под `size` кнопки. Если новая иконка меняет смысл — например, сворачивает боковую панель, а не закрывает её, — поменяйте и `label`. Для иконки из другой библиотеки задайте размер явно — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[icon]{icon="X"}
Показывает, что кнопка закрывает или скрывает свой контейнер
:::
::::
