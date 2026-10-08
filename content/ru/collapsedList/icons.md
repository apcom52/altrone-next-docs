# CollapsedList

Кнопка-переключатель сама рисует шеврон: вниз, пока список свёрнут, и вверх, когда он развёрнут. По умолчанию они берутся из общих ролей `icons.open` и `icons.close`. Незаменяемого в списке ничего нет. Элементы и метку, которые вы передаёте сами, описывают [сведения](/ru/components/layout/collapsedList).

:::spoiler[Как заменить иконки]
Передайте `openIcon` и `closeIcon`, чтобы сменить иконки одного списка, либо один раз задайте роли `open`/`close` в пропе `icons` у `Application`, чтобы сменить их везде — в том числе в `Select` и `ColorPicker`.

```tsx
import { CirclePlus, CircleMinus } from "lucide-react";

<CollapsedList openIcon={<CirclePlus />} closeIcon={<CircleMinus />}>
  {items.map(/* ... */)}
</CollapsedList>
```

::playground{src=collapsedList/CollapsedListIconsDemo caption="Плюс и минус вместо шевронов"}

Оба пропа принимают любой `ReactElement`. Иконка из `lucide-react` сама подстраивается под размер кнопки; иконке из другой библиотеки нужен явный размер около `16px` — см. статьи [Иконки](/ru/foundations/icons) и [Application](/ru/components/layout/application).
:::

## Иконки

::::icon-cards
:::icon-card[openIcon]{icon="ChevronDown"}
Обозначает переключатель, пока список свёрнут и его можно развернуть
:::

:::icon-card[closeIcon]{icon="ChevronUp"}
Обозначает переключатель, пока список развёрнут и его можно свернуть
:::
::::
