# NavigationList

`NavigationList` draws one icon itself — a chevron next to a link whose nested links are open. The icon is decorative (`aria-hidden`). Icons you pass as `icon` are covered in the [overview](/en/components/navigation/navigationList).

:::spoiler[How to replace the icon]
Pass `childrenIcon` to the link that has nested links.

```tsx
import { ChevronUp } from "lucide-react";

<NavigationList.Link label="Teams" selected childrenIcon={<ChevronUp />}>
  <NavigationList.Link label="Frontend" />
</NavigationList.Link>
```

::playground{src=navigationList/NavigationListIconsDemo caption="An up chevron instead of the down one"}

The prop accepts any `ReactElement`. It is set per link, and the icon is sized like the other icons of the list by `--navigation-list-link-icon-size`.
:::

## Icons

::::icon-cards
:::icon-card[childrenIcon]{icon="ChevronDown"}
Signals that the nested links of the item are open
:::
::::
