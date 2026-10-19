# Breadcrumbs

`Breadcrumbs` draws one icon itself — the separator after every crumb except the last one. It is decorative (`aria-hidden`). Icons you pass as `icon` are covered in the [overview](/en/components/navigation/breadcrumbs).

:::spoiler[How to replace the icon]
Pass `separatorIcon` to the crumb that should be followed by a different separator.

```tsx
import { Slash } from "lucide-react";

<Breadcrumbs>
  <Breadcrumbs.Item label="Home" separatorIcon={<Slash />} />
  <Breadcrumbs.Item label="Products" separatorIcon={<Slash />} />
  <Breadcrumbs.Item label="Details" current />
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsIconsDemo caption="A slash instead of a chevron"}

The prop accepts any `ReactElement`. It is set per crumb — to replace the separator along the whole path, pass it to every crumb. The icon size is set by `--breadcrumbs-separator-size`, the color by `--breadcrumbs-separator-color`. The last crumb shows no separator even if one is passed.
:::

## Icons

::::icon-cards
:::icon-card[separatorIcon]{icon="ChevronRight"}
Separates the crumbs in the path
:::
::::
