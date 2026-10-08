# Toolbar

`Toolbar` draws several icons itself: the sidebar toggle's pair, the chevron of a clickable title and the chevrons of the overflow trigger. All of them are replaced together through the single `icons` prop. Icons you pass to `Toolbar.Action` are covered in the [overview](/en/components/layout/toolbar).

:::spoiler[How to replace the icons]
Pass the icons you want to change to `icons`; the rest stay as they are.

```tsx
import { ArrowRight, ChevronsDown } from "lucide-react";

<Toolbar icons={{ titleMenu: <ChevronsDown />, overflowRight: <ArrowRight /> }}>
  ...
</Toolbar>
```

::playground{src=toolbar/ToolbarIconsDemo caption="A different chevron for the title and an arrow for the overflow trigger"}

Every value is a `ReactElement`. Icons are sized by the component they sit in: the sidebar toggle by the action `size`, the title chevron by the title font size. An icon from another library is sized the same way — see [Icons](/en/foundations/icons).

The overflow icon is picked by the section and the orientation: `overflowRight` for `Toolbar.Leading`, `Toolbar.Center` and a flat horizontal toolbar, `overflowLeft` for `Toolbar.Trailing`, and `overflowDown` and `overflowUp` for the same sections in a vertical toolbar.
:::

## Icons

The cards show the keys of the `icons` prop.

::::icon-cards
:::icon-card[sidebarExpand]{icon="PanelLeftOpen"}
Signals that the sidebar can be expanded while it is collapsed
:::

:::icon-card[sidebarCollapse]{icon="PanelLeftClose"}
Signals that the sidebar can be collapsed while it is expanded
:::

:::icon-card[titleMenu]{icon="ChevronDown"}
Signals that a `clickable` title opens a menu
:::

:::icon-card[overflowRight]{icon="ChevronsRight"}
Opens the overflow menu of `Toolbar.Leading` and `Toolbar.Center`
:::

:::icon-card[overflowLeft]{icon="ChevronsLeft"}
Opens the overflow menu of `Toolbar.Trailing`
:::

:::icon-card[overflowDown]{icon="ChevronsDown"}
Opens the overflow menu of the leading and center sections of a vertical toolbar
:::

:::icon-card[overflowUp]{icon="ChevronsUp"}
Opens the overflow menu of the trailing section of a vertical toolbar
:::
::::
