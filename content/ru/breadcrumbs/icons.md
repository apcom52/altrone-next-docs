# Breadcrumbs

`Breadcrumbs` сам рисует одну иконку — разделитель после каждой крошки, кроме последней. Он декоративный (`aria-hidden`). Иконки, которые вы передаёте в `icon`, описаны в [сведениях](/ru/components/navigation/breadcrumbs).

:::spoiler[Как заменить иконку]
Передайте `separatorIcon` крошке, после которой нужен другой разделитель.

```tsx
import { Slash } from "lucide-react";

<Breadcrumbs>
  <Breadcrumbs.Item label="Home" separatorIcon={<Slash />} />
  <Breadcrumbs.Item label="Products" separatorIcon={<Slash />} />
  <Breadcrumbs.Item label="Details" current />
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsIconsDemo caption="Косая черта вместо шеврона"}

Проп принимает любой `ReactElement`. Он задаётся для каждой крошки отдельно — чтобы заменить разделитель во всём пути, передайте его каждой крошке. Размер иконки задаёт `--breadcrumbs-separator-size`, цвет — `--breadcrumbs-separator-color`. Последняя крошка разделитель не показывает, даже если он ей передан.
:::

## Иконки

::::icon-cards
:::icon-card[separatorIcon]{icon="ChevronRight"}
Разделяет крошки в пути
:::
::::
