# Toolbar

`Toolbar` рисует несколько иконок сам: пару для переключателя сайдбара, шеврон кликабельного заголовка и шевроны триггера overflow-меню. Все они заменяются вместе через единственный проп `icons`. Иконки, которые вы передаёте в `Toolbar.Action`, описаны в [обзоре](/ru/components/layout/toolbar).

:::spoiler[Как заменить иконки]
Передайте в `icons` только те иконки, которые хотите изменить; остальные останутся прежними.

```tsx
import { ArrowRight, ChevronsDown } from "lucide-react";

<Toolbar icons={{ titleMenu: <ChevronsDown />, overflowRight: <ArrowRight /> }}>
  ...
</Toolbar>
```

::playground{src=toolbar/ToolbarIconsDemo caption="Другой шеврон у заголовка и стрелка у триггера overflow"}

Каждое значение — `ReactElement`. Размер иконок задаёт компонент, в котором они стоят: переключатель сайдбара — `size` действия, шеврон заголовка — размер шрифта заголовка. Иконка из другой библиотеки масштабируется так же — см. [Иконки](/ru/foundations/icons).

Иконка overflow выбирается по секции и ориентации: `overflowRight` — для `Toolbar.Leading`, `Toolbar.Center` и плоского горизонтального тулбара, `overflowLeft` — для `Toolbar.Trailing`, а `overflowDown` и `overflowUp` — для тех же секций в вертикальном тулбаре.
:::

## Иконки

Карточки показывают ключи пропа `icons`.

::::icon-cards
:::icon-card[sidebarExpand]{icon="PanelLeftOpen"}
Показывает, что сайдбар можно развернуть, пока он свёрнут
:::

:::icon-card[sidebarCollapse]{icon="PanelLeftClose"}
Показывает, что сайдбар можно свернуть, пока он развёрнут
:::

:::icon-card[titleMenu]{icon="ChevronDown"}
Показывает, что `clickable`-заголовок открывает меню
:::

:::icon-card[overflowRight]{icon="ChevronsRight"}
Открывает overflow-меню у `Toolbar.Leading` и `Toolbar.Center`
:::

:::icon-card[overflowLeft]{icon="ChevronsLeft"}
Открывает overflow-меню у `Toolbar.Trailing`
:::

:::icon-card[overflowDown]{icon="ChevronsDown"}
Открывает overflow-меню у начальной и центральной секций вертикального тулбара
:::

:::icon-card[overflowUp]{icon="ChevronsUp"}
Открывает overflow-меню у конечной секции вертикального тулбара
:::
::::
