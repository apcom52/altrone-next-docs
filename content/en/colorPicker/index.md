# Color Picker

`ColorPicker` is a color input field. It looks like a regular text field with a round swatch, and on click it opens a popup: you can fine-tune a color on the palette down to the channel, or pick one from a predefined set.

## Basic usage

```tsx
const [color, setColor] = useState<string | undefined>("#5b5bd6");

<ColorPicker value={color} onChange={setColor} />
```

::playground{src=colorPicker/ColorPickerBasicDemo caption="A controlled color field"}

`value` is any color as a `#rrggbb` string, or `#rrggbbaa` when you need transparency. `onChange` always hands back the value in lowercase, and `undefined` when it is cleared. Changes arrive immediately while the user drags on the palette, so the "Apply" button only closes the popup.

:::note
`onChange` receives the value first and the event second: `(value: string | undefined, event?: SyntheticEvent) => void`. The event is optional because the palette doesn't expose native events.
:::

## Palette

The popup holds a color field with hue and opacity sliders, and below it a hex field and three fields for the R, G and B channels. The hex field is applied when it loses focus; if it doesn't contain six hexadecimal digits, the color is reset.

## Preset colors

`colorPresets` adds a tab of ready-made colors. Each color is an object `{ name, title, value }`, where `title` is shown in the swatch's tooltip. While both presets and the palette are available, the popup shows the "Saved colors" and "Palette" tabs. `allowPalette={false}` removes the palette, and the user picks only from the set. Without presets the palette is always shown, and `allowPalette` has no effect.

```tsx
const BRAND_COLORS: ColorPreset[] = [
  { name: "iris", title: "Iris", value: "#5b5bd6" },
  { name: "mint", title: "Mint", value: "#3dd68c" },
];

<ColorPicker value={color} onChange={setColor} colorPresets={BRAND_COLORS} />
<ColorPicker value={color} onChange={setColor} colorPresets={BRAND_COLORS} allowPalette={false} />
```

::playground{src=colorPicker/ColorPickerPresetsDemo caption="A set together with the palette, and the set alone"}

## Empty value

While `value` is unset, the swatch is replaced by a gray circle and the field shows a placeholder. Change the placeholder text through `placeholder`.

::playground{src=colorPicker/ColorPickerEmptyDemo caption="No color chosen yet"}

## Clearing

`clearable` adds a "Clear" button next to "Apply" in the popup. It calls `onChange(undefined)` and closes the popup.

```tsx
<ColorPicker value={color} onChange={setColor} clearable />
```

::playground{src=colorPicker/ColorPickerClearableDemo caption="A Clear button in the popup"}

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. It changes the height of the field, the size of the swatch and the size of the fields inside the popup.

::playground{src=colorPicker/ColorPickerSizesDemo caption="Five sizes"}

## Read-only and disabled

`readOnly` keeps the value visible but the popup doesn't open and the arrow disappears. `disabled` locks the whole field.

```tsx
<ColorPicker value="#5b5bd6" onChange={() => {}} readOnly />
<ColorPicker value="#5b5bd6" onChange={() => {}} disabled />
```

::playground{src=colorPicker/ColorPickerStatesDemo caption="Read-only and disabled fields"}

## Custom trigger

With `asChild`, your own element opens the popup instead of the text field. It must be a single child that accepts a `ref` and event handlers. The element receives a `data-value` attribute with the current color, and `data-opened` while the popup is open.

```tsx
<ColorPicker value={color} onChange={setColor} asChild>
  <button type="button" aria-label="Pick a color" style={{ background: color }} />
</ColorPicker>
```

::playground{src=colorPicker/ColorPickerAsChildDemo caption="A round button instead of the field"}

## Inside a form

Inside a `Form.Field` the field takes `disabled` and `size` from the form. A prop passed to the `ColorPicker` itself wins.

```tsx
<Form size="l">
  <Form.Field name="primary">
    <ColorPicker value={primary} onChange={setPrimary} />
  </Form.Field>
  <Form.Field name="secondary" disabled>
    <ColorPicker value={secondary} onChange={setSecondary} />
  </Form.Field>
</Form>
```

::playground{src=colorPicker/ColorPickerFormDemo caption="The size comes from the form; the second field is locked"}

## Ref and styling

`ref` points to the native `<input>` inside the field, or to your element with `asChild`. `className` and `style` apply to the root of the field, and the remaining `<input>` attributes are passed to the field. The look of the field itself is defined by the [TextInput CSS variables](/en/components/controls/textInput/css-vars).

## Props

:::prop[value]{type="string"}
The current color as a CSS string, usually `#rrggbb` or `#rrggbbaa`. Without a value the empty state is shown.
:::

:::prop[onChange*]{type="(value: string | undefined, event?: SyntheticEvent) => void"}
Called on every color change. The value is lowercased, and equals `undefined` after clearing. The event isn't always passed.
:::

:::prop[colorPresets]{type="ColorPreset[]" default="[]"}
Ready-made colors for the "Saved colors" tab. Each item is `{ name: string; title: string; value: string }`.
:::

:::prop[allowPalette]{type="boolean" default="true"}
Whether to show the palette. Only honored together with `colorPresets`: without them the palette is always needed.
:::

:::prop[clearable]{type="boolean" default="false"}
Adds a "Clear" button to the popup.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
The size of the field, the swatch and the fields in the popup. When unset, it is read from the form context.
:::

:::prop[placeholder]{type="string"}
Hint shown while no color is chosen. A localized string by default.
:::

:::prop[readOnly]{type="boolean" default="false"}
Shows the value without opening the popup.
:::

:::prop[disabled]{type="boolean"}
Locks the field. When unset, it is read from the form context.
:::

:::prop[transparent]{type="boolean"}
Draws the field without a background and border.
:::

:::prop[asChild]{type="boolean" default="false"}
Uses the single child element as the trigger instead of the text field.
:::

:::prop[children]{type="ReactElement"}
The trigger for `asChild`.
:::

:::prop[openIcon]{type="ReactElement"}
The field icon while the popup is closed. See the Icons tab.
:::

:::prop[closeIcon]{type="ReactElement"}
The field icon while the popup is open. See the Icons tab.
:::

:::prop[presetsTabIcon]{type="ReactElement"}
The icon of the preset colors tab. See the Icons tab.
:::

:::prop[paletteTabIcon]{type="ReactElement"}
The icon of the palette tab. See the Icons tab.
:::

:::prop[ref]{type="Ref<HTMLInputElement>"}
Ref of the native `<input>`; with `asChild`, the ref of your element.
:::

All other `<input>` attributes except `onChange`, `size`, `value` and `children` are passed to the field.

## Related topics

- [TextInput](/en/components/controls/textInput) — the field is built on it, and it defines the field's look
- [Popover](/en/components/overlays/popover) — the popup opens through it
- [Form](/en/components/controls/form) — `Form.Field` passes `disabled` and `size` to the field
