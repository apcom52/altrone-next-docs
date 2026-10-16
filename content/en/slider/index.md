# Slider

A slider picks a number from a range by dragging or with the arrow keys. It fits values where the position on the scale matters more than the exact digit: volume, brightness, opacity, a price range.

## Basic usage

```tsx
const [volume, setVolume] = useState(40);

<Slider aria-label="Volume" value={volume} onChange={setVolume} />
```

::playground{src=slider/SliderBasicDemo caption="A controlled slider"}

`Slider` keeps no state of its own: pass `value` and `onChange` together. `onChange` receives the next value first and the event second, so a `useState` setter can be passed straight in. The slider fills the width of its parent, so limit it with a container.

:::note
`Slider` draws no label. Name it with `aria-label` (it lands on the root element with `role="slider"`) and show a visible label next to it, for example with `Text` or `Form.Field`.
:::

## Range and step

`min` and `max` set the bounds (`0` and `100` by default), `step` sets the increment (`1` by default). The value is always snapped to the nearest step and clamped to the bounds, including with a fractional step.

```tsx
<Slider value={opacity} onChange={setOpacity} min={0} max={1} step={0.05} />
```

::playground{src=slider/SliderRangeStepDemo caption="A fractional step and a narrow integer range"}

## Variants

`variant="default"` is a thin track with a round thumb, the shape a native slider has. The filled part uses the accent color.

`variant="fill"` is a slab: the whole control is the track and the fill level plays the part of the handle. The value and the icon are shown inside the slab. It is expressive but heavy for dense forms.

`icon` puts an icon at the start of the track in `default` and inside the slab in `fill`.

```tsx
<Slider value={brightness} onChange={setBrightness} variant="fill" icon={<Sun />} />
```

::playground{src=slider/SliderVariantsDemo caption="A thin track with an icon, and a slab"}

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. It changes the track thickness, the thumb diameter and the slab height in `fill`. The hit area never gets lower than 24px, even at `mini`.

```tsx
<Slider size="s" value={value} onChange={setValue} />
```

::playground{src=slider/SliderSizesDemo caption="Five sizes"}

## Current value

`showCurrentValue` controls the value bubble:

- `'active'` (the default) — while the slider is hovered, keyboard-focused or being dragged;
- `'always'` — always;
- `false` — never.

`renderLabel` formats the value: units, currency, percent. Its result is shown in the bubble and goes into `aria-valuetext`, so a screen reader says "250 dollars" instead of "250".

```tsx
<Slider
  value={price}
  onChange={setPrice}
  max={1000}
  showCurrentValue="always"
  renderLabel={(value) => `$${value}`}
/>
```

::playground{src=slider/SliderValueLabelDemo caption="A formatted value and a slider without a bubble"}

In `default` the bubble is rendered through a portal, so a parent with `overflow: hidden` cannot clip it, for example in a `Drawer` body, a `Popover` or a table cell. In `fill` the bubble lives inside the slab.

## Orientation

`orientation="vertical"` makes the slider vertical: the minimum is at the bottom, the maximum at the top. The parent sets the height, so the container needs an explicit height.

```tsx
<Flex style={{ height: 180 }}>
  <Slider orientation="vertical" value={level} onChange={setLevel} />
</Flex>
```

::playground{src=slider/SliderOrientationDemo caption="Vertical sliders in both variants"}

## Committing the value

`onChange` fires on every move while dragging. When the change needs an expensive reaction — a server request, a recalculation, saving — put it on `onChangeEnd`: it fires once, when the user releases the thumb or presses a key.

```tsx
<Slider value={value} onChange={setValue} onChangeEnd={save} />
```

::playground{src=slider/SliderCommitDemo caption="The saved value updates only when the drag ends"}

## Disabled and read-only

`disabled` blocks the slider: it ignores the pointer and the keyboard, cannot be focused and turns gray.

`readOnly` replaces the slider with a static label showing the value (the result of `renderLabel`, if set). It suits showing a finished value in the same forms where it can be edited.

```tsx
<Slider value={40} onChange={noop} disabled />
<Slider value={75} onChange={noop} readOnly renderLabel={(value) => `${value}% complete`} />
```

::playground{src=slider/SliderStatesDemo caption="Disabled and read-only"}

## Inside a form

Inside `Form.Field` the slider takes `name`, `disabled` and `size` from the form. A prop passed to `Slider` itself wins. The value goes into the native form submission through a hidden `<input>` with that `name`.

```tsx
<Form size="l">
  <Form.Field name="volume">
    <Slider value={volume} onChange={setVolume} />
  </Form.Field>
</Form>
```

::playground{src=slider/SliderFormDemo caption="The size comes from the form; the second field is blocked"}

## Keyboard

The slider is focused with `Tab`; the focus ring shows only during keyboard navigation.

| Key | Action |
| --- | ------ |
| `←` / `↓` | Decrease by `step` |
| `→` / `↑` | Increase by `step` |
| `Home` | Jump to `min` |
| `End` | Jump to `max` |

Every key press fires both `onChange` and `onChangeEnd`.

## Ref and styling

`ref` points to the root `<div role="slider">`. `className`, `style` and the other `<div>` attributes apply to it as well. The filled part of the track can be styled separately with `activeClassName` and `activeStyle`. To change the whole look, override the [CSS variables](/en/components/controls/slider/css-vars).

## Props

:::prop[value*]{type="number"}
The current value. The slider is controlled and keeps no state.
:::

:::prop[onChange*]{type="(value: number, event: PointerEvent | KeyboardEvent) => void"}
Called on every change while dragging and pressing keys. The first argument is the next value, the second is the native event.
:::

:::prop[onChangeEnd]{type="(value: number, event: PointerEvent | KeyboardEvent) => void"}
Called once, when the user releases the thumb or presses a key. For expensive side effects.
:::

:::prop[min]{type="number" default="0"}
The minimum value.
:::

:::prop[max]{type="number" default="100"}
The maximum value.
:::

:::prop[step]{type="number" default="1"}
The value increment.
:::

:::prop[variant]{type="'default' | 'fill'" default="'default'"}
`default` is a thin track with a round thumb, `fill` is a slab where the fill level plays the part of the handle.
:::

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
The slider direction. In a vertical slider the minimum is at the bottom.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
The track thickness, the thumb size and the slab height in `fill`. When not set, it is read from the form context.
:::

:::prop[showCurrentValue]{type="'active' | 'always' | false" default="'active'"}
When to show the value bubble: while the slider is active, always, or never.
:::

:::prop[renderLabel]{type="(value: number) => ReactNode"}
Formats the value for the bubble, `readOnly` mode and `aria-valuetext`.
:::

:::prop[icon]{type="ReactElement"}
An icon at the start of the track (`default`) or inside the slab (`fill`).
:::

:::prop[disabled]{type="boolean" default="false"}
Blocks the slider. When not set, it is read from the form context.
:::

:::prop[readOnly]{type="boolean" default="false"}
Shows a static label with the value instead of the slider.
:::

:::prop[name]{type="string"}
The `name` attribute of the hidden `<input>`. When not set, it is read from the form context.
:::

:::prop[activeClassName]{type="string"}
A class for the filled part of the track.
:::

:::prop[activeStyle]{type="CSSProperties"}
Inline styles for the filled part of the track.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
The ref of the root element.
:::

All other `<div>` attributes, including `className`, `style` and `aria-*`, are passed to the root element.

## Related topics

- [NumberInput](/en/components/controls/numberInput) — when you need to type an exact number rather than pick a position on a scale
- [Form](/en/components/controls/form) — `Form.Field` passes `name`, `disabled` and `size` to the slider
- [Keyboard](/en/keyboard) — general rules of keyboard navigation
