# Color Picker

## When the set of colors is fixed, don't offer a palette

A free palette offers millions of shades, and it is easy to pick a color that doesn't exist in your design. When only brand or theme colors are allowed, pass them in `colorPresets` and turn the palette off with `allowPalette={false}`.

::::good-bad
:::good
::playground{src=colorPicker/ColorPickerGuidelinePresetsGoodDemo caption="The choice is limited to brand colors"}
:::

:::bad
::playground{src=colorPicker/ColorPickerGuidelinePresetsBadDemo caption="Any shade can be picked, even one that doesn't fit the design"}
:::
::::

## Let people remove an optional color

If the color is optional, such as a highlight or a tag background, the user must be able to go back to "no color". Turn on `clearable` and hint at what the empty value means through `placeholder`.

::::good-bad
:::good
::playground{src=colorPicker/ColorPickerGuidelineClearGoodDemo caption="The popup has a Clear button"}
:::

:::bad
::playground{src=colorPicker/ColorPickerGuidelineClearBadDemo caption="A chosen color can only be replaced, never removed"}
:::
::::

## Label the field

A color swatch alone doesn't say what the color applies to. Put a label next to it, such as "Accent color", or place the field in a `Form.Field`.

## Accessibility

- The field needs an accessible name: a visible label, `aria-label` or `aria-labelledby` — they are passed to the `<input>`.
- With `asChild`, name the trigger itself, for example `aria-label="Pick a color"`: a bare circle has no text for a screen reader.
- The color value is printed as text in the field, so it doesn't depend on how well someone perceives color.
- The picker works from the keyboard: `Enter`, `Space` or `↓` opens it and moves focus inside, `Tab` stays within the popup until it closes, the arrow keys move between preset colors and `Tab` goes on from them to the buttons, `Esc` closes it and returns focus to the field. A value still being typed in the hex or RGB fields is discarded on `Esc`.
- Preset colors have `title` tooltips — make them meaningful, not "Color 1".
