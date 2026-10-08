# Select

`Select` draws its own icons: the chevron that shows whether the list is open, the magnifier while the user searches, and the clear button. Each can be replaced. Options have no icons of their own — only text. If you need a different trigger altogether, see the [custom trigger](/en/components/controls/select#custom-trigger) in the overview.

:::spoiler[How to replace the icons]
Pass `openIcon`, `closeIcon`, `searchIcon` and `clearIcon` to change one `Select`. The replacement takes the place of the default icon in the same slot and, like any `lucide-react` icon, sizes itself to the field.

```tsx
import { ChevronsUpDown, Eraser, ScanSearch } from "lucide-react";

<Select
  searchable
  clearable
  value={theme}
  onChange={setTheme}
  options={options}
  openIcon={<ChevronsUpDown />}
  closeIcon={<ChevronsUpDown />}
  searchIcon={<ScanSearch />}
  clearIcon={<Eraser />}
/>
```

::playground{src=select/SelectIconsDemo caption="The same arrows while the list is open and closed, a different magnifier and eraser"}

To change the icons of every select in the app at once, set the shared `open`, `close`, `search` and `clear` icons on `Application` through the `icons` prop — a prop on `Select` still wins. The clear button is a regular button with a localized label, so a replacement icon doesn't change how it is announced.

All props accept any `ReactElement`. Automatic sizing is keyed to the `lucide` class, so an icon from another library needs an explicit size of about `16px` — see [Icons](/en/foundations/icons).
:::

## Icons

::::icon-cards
:::icon-card[openIcon]{icon="ChevronDown"}
Shows that the list can be opened while it is closed
:::

:::icon-card[closeIcon]{icon="ChevronUp"}
Shows that the list can be closed while it is open
:::

:::icon-card[searchIcon]{icon="Search"}
Replaces the chevron while a `searchable` select is being searched
:::

:::icon-card[clearIcon]{icon="Delete"}
Clears the choice when `clearable` is on
:::
::::
