# Label

`Label` — небольшая метка статуса или категории: «Completed», «Beta», «SDK». Это не HTML-элемент `<label>` — подпись к полю формы делается через [Form](/ru/components/controls/form). Компонент рендерит `<div>` на основе [Box](/ru/components/layout/box): заливка, рамка и цвет текста берутся из его материалов и тонов, поэтому метка выглядит согласованно с остальной библиотекой в обеих темах.

```tsx
import { Label } from 'altrone-ui';
```

## Базовое использование

Текст передаётся через `children`. Без других пропов метка нейтральная, залитая, скруглённая и размера `m`.

```tsx
<Label>Draft</Label>
```

::playground{src=label/LabelBasicDemo caption="Нейтральная метка"}

## Варианты

`variant` задаёт, насколько метка выделяется:

- `solid` (по умолчанию) — сплошная заливка, самый заметный;
- `soft` — бледная заливка и цветной текст;
- `outline` — цветная рамка и текст без заливки;
- `status` — бледная заливка, рамка и цветная точка перед текстом.

```tsx
<Label color="primary">Solid</Label>
<Label color="primary" variant="soft">Soft</Label>
<Label color="primary" variant="outline">Outline</Label>
<Label color="primary" variant="status">Status</Label>
```

::playground{src=label/LabelVariantsDemo caption="solid, soft, outline и status"}

## Цвета

`color` принимает значения двух видов. Семантические следуют статусным цветам дизайн-системы: `default` (нейтральный), `primary` (акцент приложения), `success`, `warning` и `danger`. Категориальные — `amber`, `blue`, `brown`, `indigo`, `pink`, `purple`, `red`, `teal` — собственного смысла не несут и подходят для категорий: команд, проектов, разделов продукта.

```tsx
<Label color="success" variant="soft">Completed</Label>
<Label color="teal">SDK</Label>
```

::playground{src=label/LabelColorsDemo caption="Семантические цвета в варианте soft и категориальные в варианте solid"}

## Статус с точкой

`variant="status"` рисует перед текстом точку цвета метки — компактный способ показать состояние задачи, деплоя или заказа. Если передать `icon`, она рисуется внутри точки, а не рядом; размер точки при этом не меняется.

```tsx
import { Check } from 'lucide-react';

<Label color="warning" variant="status">In review</Label>
<Label color="success" variant="status" icon={<Check />}>Completed</Label>
```

::playground{src=label/LabelStatusDemo caption="Статусные метки с иконкой в точке и без неё"}

## Иконка перед текстом

В вариантах `solid`, `soft` и `outline` `icon` ставится перед текстом. Размер иконки следует за `size`.

```tsx
import { Clock } from 'lucide-react';

<Label color="primary" icon={<Clock />}>Pending</Label>
```

::playground{src=label/LabelIconDemo caption="Иконка перед текстом в разных вариантах"}

## Форма

`shape="rounded"` (по умолчанию) даёт слегка скруглённый прямоугольник, `shape="pill"` — полностью скруглённые края. В статусной метке точка повторяет скругление самой метки, поэтому в «таблетке» она становится кругом.

```tsx
<Label color="indigo" shape="pill">v2.0.0</Label>
```

::playground{src=label/LabelShapeDemo caption="rounded и pill, обычная и статусная"}

## Размеры

`size` задаёт размер текста, отступы, скругление и размер точки и иконки. `m` подходит для большинства таблиц и карточек, `mini` и `s` — для плотных списков, `l` и `xl` — для заголовков.

```tsx
<Label size="s" color="primary" variant="soft">s</Label>
```

::playground{src=label/LabelSizesDemo caption="mini, s, m, l, xl"}

## Свойства

:::prop[children*]{type="ReactNode"}
Текст метки.
:::

:::prop[color]{type="'default' | 'primary' | 'success' | 'danger' | 'warning' | 'amber' | 'blue' | 'brown' | 'indigo' | 'pink' | 'purple' | 'red' | 'teal'" default="'default'"}
Цвет метки: семантический или один из категориальных.
:::

:::prop[variant]{type="'solid' | 'soft' | 'outline' | 'status'" default="'solid'"}
Визуальный стиль. `status` добавляет бледную заливку, рамку и цветную точку перед текстом.
:::

:::prop[shape]{type="'rounded' | 'pill'" default="'rounded'"}
Форма углов.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер метки.
:::

:::prop[icon]{type="ReactElement"}
Иконка перед текстом. В варианте `status` рисуется внутри точки.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на корневой элемент.
:::

Остальные атрибуты `<div>`, включая `title` и `aria-*`, передаются корневому элементу.

## Похожие темы

- [Box](/ru/components/layout/box) — примитив, на котором построена метка
- [Материалы](/ru/foundations/materials) — заливки и рамки, из которых сделаны варианты
- [Цвет](/ru/foundations/color) — статусные и категориальные цвета
- [Tags](/ru/components/content/tags) — ряд тегов для ключевых слов и фильтров
- [Form](/ru/components/controls/form) — подписи к полям формы
