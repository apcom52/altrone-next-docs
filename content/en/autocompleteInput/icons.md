# AutocompleteInput

The field draws one icon itself: the error icon that appears at its end when loading suggestions fails. The spinner shown while suggestions load is the field's own `LoadingIsland` and can't be replaced. Icons you put into islands yourself are covered in the [overview](/en/components/controls/autocompleteInput).

:::spoiler[How to replace the icon]
Pass the icon to `errorIcon`.

```tsx
import { ServerCrash } from 'lucide-react';

<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  errorIcon={<ServerCrash />}
/>
```

::playground{src=autocompleteInput/AutocompleteInputIconsDemo caption="A crashed server instead of a warning sign"}

The value is a `ReactElement`; the field sizes it itself according to its `size`, so you don't need to set it. The icon keeps the danger color and is shown with a tooltip. An icon from another library works the same way — see [Icons](/en/foundations/icons).

To change the error icon for every component at once, set the `error` role through the `icons` prop of `Application` — `errorIcon` is used only when one field needs something different.
:::

## Icons

The card shows the prop that replaces the icon.

::::icon-cards
:::icon-card[errorIcon]{icon="CircleAlert"}
Shown at the end of the field when loading suggestions failed
:::
::::
