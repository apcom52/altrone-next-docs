# Select

`Select` рисует свои иконки: шеврон, который показывает, открыт ли список, лупу, пока пользователь ищет, и кнопку очистки. Каждую можно заменить. У опций собственных иконок нет — только текст. Если нужен совсем другой триггер, см. [свой триггер](/ru/components/controls/select#свой-триггер) в сведениях.

:::spoiler[Как заменить иконки]
Передайте `openIcon`, `closeIcon`, `searchIcon` и `clearIcon`, чтобы изменить один `Select`. Замена встаёт на место иконки по умолчанию в том же слоте и — как любая иконка из `lucide-react` — сама подстраивается под размер поля.

```tsx
import { ChevronsUpDown, Eraser, ScanSearch } from "lucide-react";

<Select
  searchable
  clearable
  value={theme}
  onChange={setTheme}
  options={options}
  openIcon={<ChevronsUpDown />}
  closeIcon={<ChevronsUpDown />}
  searchIcon={<ScanSearch />}
  clearIcon={<Eraser />}
/>
```

::playground{src=select/SelectIconsDemo caption="Одна и та же стрелка у открытого и закрытого списка, другая лупа и ластик"}

Чтобы изменить иконки сразу у всех селектов приложения, задайте общие иконки `open`, `close`, `search` и `clear` на `Application` через проп `icons` — проп у `Select` по-прежнему приоритетнее. Кнопка очистки — обычная кнопка с локализованной подписью, поэтому другая иконка не меняет то, как её озвучивают.

Все пропы принимают любой `ReactElement`. Автоматический размер привязан к классу `lucide`, поэтому иконке из другой библиотеки нужен явный размер около `16px` — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[openIcon]{icon="ChevronDown"}
Показывает, что список можно открыть, пока он закрыт
:::

:::icon-card[closeIcon]{icon="ChevronUp"}
Показывает, что список можно закрыть, пока он открыт
:::

:::icon-card[searchIcon]{icon="Search"}
Заменяет шеврон, пока в `searchable`-селекте идёт поиск
:::

:::icon-card[clearIcon]{icon="Delete"}
Сбрасывает выбор при включённом `clearable`
:::
::::
