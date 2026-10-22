# Loading

`Loading` is a circular SVG spinner for an operation in progress. The root gets `role="status"` and a localized `aria-label` ("Loading"). With `value` it turns into a determinate circular indicator that shows how far the operation has gone. How to choose between `Loading`, `Skeleton` and the loading states built into controls is covered in the [Loading](/en/foundations/loading) article.

```tsx
import { Loading } from 'altrone-ui';
```

## Basic usage

Without props the spinner is 24px wide with a 2px stroke and the color of secondary text. A faint full-circle track sits behind the moving arc.

```tsx
<Loading />
```

::playground{src=loading/LoadingBasicDemo caption="The spinner with default settings"}

:::note
The spinner keeps spinning under `prefers-reduced-motion`: it is a functional state indicator, the only signal that the operation is still running, not decoration. See [Motion](/en/foundations/motion).
:::

## Size and stroke

`size` is the diameter, `strokeWidth` is the ring thickness in the same units. `size` takes a number of pixels or any CSS length (`24`, `'24px'`, `'2rem'`), and the stroke can be fractional (`1.5`). With a non-pixel `size` the ring is drawn as if it were 24px and scaled to the actual size, so `strokeWidth` is measured against a 24px circle and grows along with it.

```tsx
<Loading size={16} strokeWidth={1.5} />
<Loading size={64} strokeWidth={4} />
```

::playground{src=loading/LoadingSizesDemo caption="16, 24, 40 and 64 pixels"}

## Known progress

Pass `value` from 0 to 100 and the spinner stops: it draws a fixed arc starting at 12 o'clock, and the arc length follows the value with a short transition, which is turned off under reduced motion. Values outside the range are clamped to `0…100`, and `NaN` is treated as no value — the spinner keeps spinning. The root switches to `role="progressbar"` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax`.

```tsx
<Loading size={48} strokeWidth={4} value={progress} aria-label="Upload progress" />
```

::playground{src=loading/LoadingProgressDemo caption="Move the slider to change the progress"}

## Color

`color` takes any CSS color and paints both the arc and the track. Without it the spinner uses `--loading-color`. Pass `currentColor` to inherit the color of the surrounding text — handy for a spinner inside a line of text. A `color` in `style` works too; if both are set, the prop wins.

```tsx
<Loading color="var(--accent-11)" />
<Loading size={16} color="currentColor" aria-label="Saving changes" />
```

::playground{src=loading/LoadingColorsDemo caption="The default color, accent, danger and the color of the surrounding text"}

## Props

:::prop[size]{type="number | string" default="'24px'"}
Diameter: a number of pixels or any CSS length. With a non-pixel length the stroke scales relative to a 24px circle.
:::

:::prop[strokeWidth]{type="number | string" default="'2'"}
Ring thickness in the same units as `size`. Can be fractional.
:::

:::prop[color]{type="string"}
Color of the arc and the track — any CSS color. Wins over `style.color`; without both, `--loading-color` is used.
:::

:::prop[value]{type="number"}
Progress from 0 to 100. When set, the spinner stops and becomes a determinate indicator with `role="progressbar"`. `NaN` is treated as unset.
:::

:::prop[aria-label]{type="string" default="'Loading'"}
Accessible name. The default is localized; pass your own to say what exactly is loading.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the root element.
:::

Other `<div>` attributes are passed to the root element.

## Related topics

- [Loading](/en/foundations/loading) — choosing between `Skeleton`, `Loading` and the loading states of controls
- [Skeleton](/en/components/feedback/skeleton) — a placeholder for content whose shape is known in advance
- [Progress](/en/components/feedback/progress) — a full-width progress bar with a label
- [Button](/en/components/controls/button) — the built-in `loading` state of a button
- [Motion](/en/foundations/motion) — why the spinner keeps spinning under reduced motion
