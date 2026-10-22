# Close Button

`CloseButton` сам рисует одну иконку — крестик `X`. У кнопки есть доступное имя, поэтому иконка декоративна. Крестик берётся из общей роли иконок `dismiss`, поэтому его можно заменить на одной кнопке или сразу везде.

:::spoiler[Как заменить иконку]
Чтобы заменить крестик на одной кнопке, передайте проп `icon`.

```tsx
import { CircleX } from "lucide-react";

<CloseButton icon={<CircleX />} />
```

::playground{src=closeButton/CloseButtonIconDemo caption="Стандартный крестик, CircleX и PanelRightClose"}

Проп принимает любой `ReactElement`; иконка `lucide-react` сама подстраивается под `size` кнопки. Если новая иконка меняет смысл — например, сворачивает боковую панель, а не закрывает её, — поменяйте и `label`. Чтобы заменить крестик разом везде, задайте роль `dismiss` в пропе `icons` у [Application](/ru/components/layout/application). Её подхватит каждый `CloseButton` без собственного `icon`, включая встроенные в `Modal`, `Drawer`, `Popover`, `Message`, тосты и уведомления. `icon` на конкретной кнопке всё равно сильнее.

```tsx
import { CircleX } from "lucide-react";

<Application icons={{ dismiss: <CircleX /> }}>
  <App />
</Application>
```

Для иконки из другой библиотеки задайте размер явно — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[icon]{icon="X"}
Показывает, что кнопка закрывает или скрывает свой контейнер. Для всех кнопок сразу — роль `dismiss` в `Application`
:::
::::
