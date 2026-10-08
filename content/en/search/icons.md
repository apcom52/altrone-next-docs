# Search

The field draws two icons itself: a magnifier and a clear button, plus a warning icon when loading suggestions fails. The loading spinner is drawn by the field too, but it can't be replaced. Icons you put into islands yourself are covered in the [overview](/en/components/controls/search).

:::spoiler[How to replace the icons]
Pass the icon to `searchIcon`, `clearIcon` and `errorIcon`. You can replace any of them.

```tsx
import { ScanSearch, Trash2 } from 'lucide-react';

<Search
  value={query}
  onChange={setQuery}
  searchIcon={<ScanSearch />}
  clearIcon={<Trash2 />}
/>
```

::playground{src=search/SearchIconsDemo caption="Another magnifier and a trash bin instead of the backspace"}

Each value is a `ReactElement`. The field sizes the icon itself, so you don't need to set it. An icon from another library works the same way — see [Icons](/en/foundations/icons).

To replace the icons in every search of the app at once, set the `search`, `clear` and `error` roles through the `icons` prop of `Application`.
:::

## Icons

The cards show the props that replace the icons.

::::icon-cards
:::icon-card[searchIcon]{icon="Search"}
Marks the field as a search: in the middle of the empty field and at the start of the filled one
:::

:::icon-card[clearIcon]{icon="Delete"}
Shown on the button that clears the field once it has a value
:::

:::icon-card[errorIcon]{icon="CircleAlert"}
Signals that loading the suggestions failed
:::
::::
