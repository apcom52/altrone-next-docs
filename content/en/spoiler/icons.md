# Spoiler

`Spoiler` draws one icon itself — a plus while the section is collapsed and a minus while it is open — and both can be replaced. The icon is decorative (`aria-hidden`); the state is announced through `aria-expanded`. Content you pass in as `title` is covered in the [overview](/en/components/layout/spoiler).

:::spoiler[How to replace the icons]
Pass `expandIcon` and `collapseIcon` to swap the plus and minus, for example for a pair of chevrons.

```tsx
import { ChevronDown, ChevronUp } from "lucide-react";

<Spoiler
  title="Shipping details"
  expandIcon={<ChevronDown />}
  collapseIcon={<ChevronUp />}
>
  ...
</Spoiler>
```

::playground{src=spoiler/SpoilerIconsDemo caption="Chevrons instead of the plus and minus"}

Both props accept any `ReactElement`. The size is set by `--spoiler-icon-size` (`18px` by default) on the `<svg>` inside the icon slot, so an icon from another library is sized the same way — see [Icons](/en/foundations/icons).
:::

## Icons

::::icon-cards
:::icon-card[expandIcon]{icon="Plus"}
Signals that the section can be expanded while it is collapsed
:::

:::icon-card[collapseIcon]{icon="Minus"}
Signals that the section can be collapsed while it is open
:::
::::
