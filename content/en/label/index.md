# Label

`Label` is a small tag for a status or a category: "Completed", "Beta", "SDK". It is not an HTML `<label>` — to caption a form field, use [Form](/en/components/controls/form). By default the component renders a `<div>` built on [Box](/en/components/layout/box): the fill, the border and the text color come from its materials and tones, so a label looks consistent with the rest of the library in both themes.

```tsx
import { Label } from 'altrone-ui';
```

## Basic usage

The text is passed as `children`. Without other props the label is neutral, solid, rounded and of size `m`.

```tsx
<Label>Draft</Label>
```

::playground{src=label/LabelBasicDemo caption="A neutral label"}

## Variants

`variant` sets how strongly the label stands out:

- `solid` (default) — a filled background, the most prominent;
- `soft` — a pale fill and colored text;
- `outline` — a colored border and text without a fill;
- `status` — a pale fill, a border and a colored dot before the text.

```tsx
<Label color="primary">Solid</Label>
<Label color="primary" variant="soft">Soft</Label>
<Label color="primary" variant="outline">Outline</Label>
<Label color="primary" variant="status">Status</Label>
```

::playground{src=label/LabelVariantsDemo caption="solid, soft, outline and status"}

## Colors

`color` takes two kinds of values. The semantic ones follow the design-system status hues: `default` (neutral), `primary` (the application accent), `success`, `warning` and `danger`. The ten categorical ones — `amber`, `blue`, `brown`, `green`, `indigo`, `orange`, `pink`, `purple`, `red`, `teal` — have no meaning of their own and suit categories: teams, projects, product areas.

```tsx
<Label color="success" variant="soft">Completed</Label>
<Label color="teal">SDK</Label>
```

::playground{src=label/LabelColorsDemo caption="Semantic colors in the soft variant and categorical colors in the solid one"}

## Status with a dot

`variant="status"` draws a dot in the label's color before the text — a compact way to show the state of a task, a deployment or an order. Pass `icon` and it is drawn inside the dot instead of next to it; the dot keeps its size either way.

```tsx
import { Check } from 'lucide-react';

<Label color="warning" variant="status">In review</Label>
<Label color="success" variant="status" icon={<Check />}>Completed</Label>
```

::playground{src=label/LabelStatusDemo caption="Status labels with and without an icon in the dot"}

## Icon before the text

In the `solid`, `soft` and `outline` variants `icon` is placed before the text. The icon size follows `size`.

```tsx
import { Clock } from 'lucide-react';

<Label color="primary" icon={<Clock />}>Pending</Label>
```

::playground{src=label/LabelIconDemo caption="A leading icon in different variants"}

## Shape

`shape="rounded"` (default) gives a slightly rounded rectangle, `shape="pill"` fully rounded ends. In a status label the dot follows the label's own rounding, so in a pill it becomes a circle.

```tsx
<Label color="indigo" shape="pill">v2.0.0</Label>
```

::playground{src=label/LabelShapeDemo caption="rounded and pill, regular and status"}

## Sizes

`size` sets the text size, the padding, the rounding and the size of the dot and the icon. `m` suits most tables and cards, `mini` and `s` dense lists, `l` and `xl` headings.

```tsx
<Label size="s" color="primary" variant="soft">s</Label>
```

::playground{src=label/LabelSizesDemo caption="mini, s, m, l, xl"}

## Label as a link

With `asChild` the label doesn't render its own `<div>`: its classes and styles are merged onto the single child element — for example a link or a router `<Link>`. The child keeps its own semantics and behavior.

```tsx
<Label asChild color="blue" variant="soft">
  <a href="/releases/2.0">v2.0.0</a>
</Label>
```

## Props

:::prop[children*]{type="ReactNode"}
The label text.
:::

:::prop[color]{type="'default' | 'primary' | 'success' | 'danger' | 'warning' | 'amber' | 'blue' | 'brown' | 'green' | 'indigo' | 'orange' | 'pink' | 'purple' | 'red' | 'teal'" default="'default'"}
Label color: a semantic one or one of the categorical hues.
:::

:::prop[variant]{type="'solid' | 'soft' | 'outline' | 'status'" default="'solid'"}
Visual style. `status` adds a pale fill, a border and a colored dot before the text.
:::

:::prop[shape]{type="'rounded' | 'pill'" default="'rounded'"}
Corner shape.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Label size.
:::

:::prop[icon]{type="ReactElement"}
An icon before the text. In the `status` variant it is drawn inside the dot.
:::

:::prop[asChild]{type="boolean" default="false"}
Merge the label onto its single child element instead of rendering a `<div>`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Reference to the root element.
:::

Other `<div>` attributes, including `title` and `aria-*`, are passed to the root element.

## Related topics

- [Box](/en/components/layout/box) — the primitive the label is built on
- [Materials](/en/foundations/materials) — the fills and borders behind the variants
- [Color](/en/foundations/color) — status and categorical hues
- [Tags](/en/components/content/tags) — a row of tags for keywords and filters
- [Form](/en/components/controls/form) — captions for form fields
