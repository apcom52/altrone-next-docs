# Color Picker

`ColorPicker` рисует свои иконки: стрелку в поле, которая показывает, открыт ли попап, и значки вкладок «Сохранённые цвета» и «Палитра». Каждую можно заменить. Кружок-образец иконкой не является и не заменяется; он меняется на пустой кружок, пока цвет не выбран. О собственном триггере см. [свой триггер](/ru/components/controls/colorPicker#свой-триггер) в сведениях.

:::spoiler[Как заменить иконки]
Передайте `openIcon`, `closeIcon`, `presetsTabIcon` и `paletteTabIcon`, чтобы изменить один `ColorPicker`. Замена встаёт на место иконки по умолчанию в том же слоте и — как любая иконка из `lucide-react` — сама подстраивается под размер.

```tsx
import { ChevronsUpDown, SwatchBook, Pipette } from "lucide-react";

<ColorPicker
  value={color}
  onChange={setColor}
  colorPresets={BRAND_COLORS}
  openIcon={<ChevronsUpDown />}
  closeIcon={<ChevronsUpDown />}
  presetsTabIcon={<SwatchBook />}
  paletteTabIcon={<Pipette />}
/>
```

::playground{src=colorPicker/ColorPickerIconsDemo caption="Другая стрелка и другие значки вкладок"}

Чтобы изменить стрелку сразу у всех полей приложения, задайте общие иконки `open` и `close` на `Application` через проп `icons` — проп у `ColorPicker` по-прежнему приоритетнее. Значки вкладок общей настройкой не меняются.

Все пропы принимают любой `ReactElement`. Автоматический размер привязан к классу `lucide`, поэтому иконке из другой библиотеки нужен явный размер около `16px` — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[openIcon]{icon="ChevronDown"}
Показывает, что попап можно открыть, пока он закрыт
:::

:::icon-card[closeIcon]{icon="ChevronUp"}
Показывает, что попап можно закрыть, пока он открыт
:::

:::icon-card[presetsTabIcon]{icon="Grid3X3"}
Значок вкладки с набором цветов, если есть и набор, и палитра
:::

:::icon-card[paletteTabIcon]{icon="Palette"}
Значок вкладки с палитрой, если есть и набор, и палитра
:::
::::
