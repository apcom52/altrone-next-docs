# Color Picker

`ColorPicker` draws its own icons: the arrow in the field that shows whether the popup is open, and the icons of the "Saved colors" and "Palette" tabs. Each can be replaced. The round swatch is not an icon and can't be replaced; it turns into an empty circle while no color is chosen. For a trigger of your own, see [custom trigger](/en/components/controls/colorPicker#custom-trigger) in the overview.

:::spoiler[How to replace the icons]
Pass `openIcon`, `closeIcon`, `presetsTabIcon` and `paletteTabIcon` to change one `ColorPicker`. The replacement takes the place of the default icon in the same slot and, like any `lucide-react` icon, sizes itself.

```tsx
import { ChevronsUpDown, SwatchBook, Pipette } from "lucide-react";

<ColorPicker
  value={color}
  onChange={setColor}
  colorPresets={BRAND_COLORS}
  openIcon={<ChevronsUpDown />}
  closeIcon={<ChevronsUpDown />}
  presetsTabIcon={<SwatchBook />}
  paletteTabIcon={<Pipette />}
/>
```

::playground{src=colorPicker/ColorPickerIconsDemo caption="A different arrow and different tab icons"}

To change the arrow for every field in the app, set the shared `open` and `close` icons on `Application` through the `icons` prop — the prop on `ColorPicker` still wins. The tab icons can't be changed through the shared setting.

All props accept any `ReactElement`. Automatic sizing is tied to the `lucide` class, so an icon from another library needs an explicit size of about `16px` — see the [Icons](/en/foundations/icons) article.
:::

## Icons

::::icon-cards
:::icon-card[openIcon]{icon="ChevronDown"}
Shows that the popup can be opened while it is closed
:::

:::icon-card[closeIcon]{icon="ChevronUp"}
Shows that the popup can be closed while it is open
:::

:::icon-card[presetsTabIcon]{icon="Grid3X3"}
Icon of the preset colors tab, when both presets and the palette are available
:::

:::icon-card[paletteTabIcon]{icon="Palette"}
Icon of the palette tab, when both presets and the palette are available
:::
::::
