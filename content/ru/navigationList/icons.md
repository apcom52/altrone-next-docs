# NavigationList

`NavigationList` сам рисует одну иконку — шеврон рядом со ссылкой, вложенные ссылки которой открыты. Иконка декоративная (`aria-hidden`). Иконки, которые вы передаёте в `icon`, описаны в [сведениях](/ru/components/navigation/navigationList).

:::spoiler[Как заменить иконку]
Передайте `childrenIcon` ссылке, у которой есть вложенные ссылки.

```tsx
import { ChevronUp } from "lucide-react";

<NavigationList.Link label="Teams" selected childrenIcon={<ChevronUp />}>
  <NavigationList.Link label="Frontend" />
</NavigationList.Link>
```

::playground{src=navigationList/NavigationListIconsDemo caption="Шеврон вверх вместо шеврона вниз"}

Проп принимает любой `ReactElement`. Он задаётся для каждой ссылки отдельно, а размер иконки, как у остальных иконок списка, задаёт `--navigation-list-link-icon-size`.
:::

## Иконки

::::icon-cards
:::icon-card[childrenIcon]{icon="ChevronDown"}
Сигнализирует, что вложенные ссылки пункта открыты
:::
::::
