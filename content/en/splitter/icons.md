# Splitter

The collapse and expand buttons on a divider draw four directional chevrons: left and right for a horizontal splitter, up and down for a vertical one. They can be replaced as a group. The drag handle itself is a plain pill and has no icon. Icons you pass to the content of your panels are covered in the [overview](/en/components/layout/splitter).

:::spoiler[How to replace the icons]
Pass `icons` with only the chevrons you want to change — the rest keep their defaults. The same chevron is reused for both directions of one button: a collapse button on the left panel points left, and once the panel is collapsed it points right.

```tsx
import { ArrowLeft, ArrowRight } from "lucide-react";

<Splitter icons={{ chevronLeft: <ArrowLeft />, chevronRight: <ArrowRight /> }}>
  <Splitter.Panel collapsible>
    <Sidebar />
  </Splitter.Panel>
  <Splitter.Panel>
    <Content />
  </Splitter.Panel>
</Splitter>
```

::playground{src=splitter/SplitterIconsDemo caption="Hover the divider to see the replaced arrows"}

Each icon is any `ReactElement`. Automatic sizing is keyed to the `lucide` class, so an icon from another library needs an explicit size of about `16px` — see [Icons](/en/foundations/icons).
:::

## Icons

::::icon-cards
:::icon-card[chevronLeft]{icon="ChevronLeft"}
Collapses a left panel, or expands a collapsed right one, in a horizontal splitter
:::

:::icon-card[chevronRight]{icon="ChevronRight"}
Collapses a right panel, or expands a collapsed left one, in a horizontal splitter
:::

:::icon-card[chevronUp]{icon="ChevronUp"}
Collapses a top panel, or expands a collapsed bottom one, in a vertical splitter
:::

:::icon-card[chevronDown]{icon="ChevronDown"}
Collapses a bottom panel, or expands a collapsed top one, in a vertical splitter
:::
::::
