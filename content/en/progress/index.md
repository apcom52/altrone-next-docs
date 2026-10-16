# Progress

`Progress` is a horizontal bar that shows how much of a process is done: a file upload, a wizard step, storage fill. The component is fully controlled — it draws exactly the value it is given and never counts time on its own.

## Basic usage

Pass `value` — by default the scale runs from `0` to `100`, and the bar shows a percentage.

```tsx
<Progress value={60} />
```

::playground{src=progress/ProgressBasicDemo caption="The default label is the percentage done"}

## Label

`label` replaces the percentage with your own text or markup. A function receives `{ value, min, max, percentage }`, so the label can be built from any numbers: "42 of 200 GB", "Step 3 of 8".

```tsx
<Progress value={42} label="Uploading files…" />

<Progress
  value={3}
  max={8}
  aria-label="Step 3 of 8"
  label={({ value, max }) => `Step ${value} of ${max}`}
/>
```

::playground{src=progress/ProgressLabelDemo caption="A string, a function with a percentage and a step counter"}

A string `label` also becomes the `aria-label`. If the label is not a string, the bar has no accessible name — pass `aria-label` alongside it.

## Range

`min` and `max` set the scale bounds. The fill is `(value − min) / (max − min)` clamped to 0–100%, so a value outside the range simply stops at the edge.

```tsx
<Progress
  min={100}
  max={200}
  value={140}
  aria-label="Temperature"
  label={({ value }) => `${value}°`}
/>
```

::playground{src=progress/ProgressRangeDemo caption="A scale from 100 to 200: the value 140 is 40%"}

## Sizes

`size` changes the bar height and the label size: `mini` is 18px, `s` is 24px, `m` (the default) is 32px, `l` is 40px and `xl` is 48px.

```tsx
<Progress size="mini" value={60} />
<Progress size="xl" value={60} />
```

::playground{src=progress/ProgressSizesDemo caption="Five sizes"}

## Live updates

Update `value` as the process advances — the bar and the label redraw. The fill changes instantly, so pass values often enough for the movement to look smooth.

```tsx
const [uploaded, setUploaded] = useState(0);

<Progress value={uploaded} max={file.size} label={({ percentage }) => `${percentage}% uploaded`} />
```

::playground{src=progress/ProgressLiveDemo caption="Press “Start upload”"}

## Accessibility

The bar has the `progressbar` role and the `aria-valuenow`, `aria-valuemin` and `aria-valuemax` attributes; the current value is clamped to the range. For a string `label` the name is filled in automatically, for others set `aria-label` yourself.

## Props

:::prop[value]{type="number" default="0"}
The current value.
:::

:::prop[min]{type="number" default="0"}
The lower bound of the scale.
:::

:::prop[max]{type="number" default="100"}
The upper bound of the scale.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Bar height and label size.
:::

:::prop[label]{type="ReactNode | ((ctx: { value: number; min: number; max: number; percentage: number }) => ReactNode)"}
The label on the bar. Defaults to the percentage. A non-string label requires `aria-label`.
:::

:::prop[activeClassName]{type="string"}
An extra class for the filled part.
:::

:::prop[activeStyle]{type="CSSProperties"}
Inline styles for the filled part.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the root element.
:::

## Related topics

- [Loading](/en/components/feedback/loading) — an indicator for a process of unknown duration
- [Message](/en/components/feedback/message) — a message about the outcome of a process
- [Dialogs](/en/components/overlays/dialog) — a confirmation before starting a long operation
