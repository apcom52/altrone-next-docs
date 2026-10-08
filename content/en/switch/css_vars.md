# Switch

The CSS variables a `Switch` reads and you can override.

:::spoiler[How to override variables]
All of them are set on the root `<label>`, so the `style` prop is the reliable way to change one for a single switch: an inline value beats every class-based value, in every theme. A stylesheet rule works too, but it needs a selector more specific than the size classes (for example `.my-switch.my-switch`).

```tsx
<Switch
  checked={enabled}
  onChange={setEnabled}
  style={{ "--switch-track-height": "36px" } as React.CSSProperties}
>
  Taller track
</Switch>
```

::playground{src=switch/SwitchCssVarsDemo caption="Overriding variables through the style prop"}

The track width, the handle size and the handle inset are all derived from `--switch-track-height`, so changing that one value rescales the whole switch. Override `--switch-checked-background-color`, `--switch-checked-border-color` and `--switch-checked-icon-color` to recolor the on state and keep the hover and disabled looks. Overriding `--switch-background-color` or `--switch-border-color` directly replaces the value in every state, including on and disabled.

What can't be overridden:

- **The danger look.** `danger` only recolors the label through `--switch-label-text-color`; the track keeps its colors.
- **The focus ring.** It comes from the global `--focus-color`.
- **The 24px minimum row height.** It protects the hit area at `size="mini"`.
:::

## Internal variables

Defined by the switch itself.

::::css-vars
:::css-var[--switch-background-color]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Track background when off. Default: `var(--interactive-1)`
:::

:::css-var[--switch-hover-background-color]{kind="fill" type="Fill color" color="var(--interactive-2)"}
Track background on hover when off. Default: `var(--interactive-2)`
:::

:::css-var[--switch-checked-background-color]{kind="fill" type="Fill color" color="var(--accent-3)"}
Track background when on. Default: `var(--accent-3)`
:::

:::css-var[--switch-border-color]{kind="border" type="Border color" color="var(--border-a1)"}
Ring around the track when off. Default: `var(--border-a1)`
:::

:::css-var[--switch-checked-border-color]{kind="border" type="Border color" color="var(--accent-a5)"}
Ring around the track when on. Default: `var(--accent-a5)`
:::

:::css-var[--switch-icon-color]{kind="fill" type="Fill color" color="var(--solid-a1)"}
Handle color when off. Default: `var(--solid-a1)`
:::

:::css-var[--switch-checked-icon-color]{kind="fill" type="Fill color" color="var(--accent-12)"}
Handle color when on. Default: `var(--accent-12)`
:::

:::css-var[--switch-label-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Label color. Default: `var(--text-2)`
:::

:::css-var[--switch-track-height]{kind="size" type="Size"}
Height of the track; everything else is derived from it. Default: `24px`
:::

:::css-var[--switch-track-width]{kind="size" type="Size"}
Width of the track. Default: `calc(var(--switch-track-height) * 2)`
:::

:::css-var[--switch-handle-size]{kind="size" type="Size"}
Handle size when off. Default: `calc(var(--switch-track-height) * 2 / 3)`
:::

:::css-var[--switch-handle-checked-size]{kind="size" type="Size"}
Handle width when on. Default: `var(--switch-track-height)`
:::

:::css-var[--switch-handle-inset]{kind="gap" type="Spacing"}
Space between the handle and the track edge. Default: `calc(var(--switch-track-height) / 8)`
:::

:::css-var[--switch-label-size]{kind="font" type="Font size"}
Label font size. Default: `var(--text-size-4)`
:::

:::css-var[--switch-label-line-height]{kind="font" type="Font size"}
Label line height. Default: `var(--line-height-4)`
:::
::::

## Global variables

Not defined by the switch: global design tokens it reads. Changing a token restyles every switch at once.

::::css-vars
:::css-var[--gap]{kind="gap" type="Spacing"}
Space between the track and the label. Default: `8px`
:::

:::css-var[--focus-color]{kind="border" type="Border color" color="var(--focus-color)"}
Keyboard focus ring. Default: black in the light theme
:::

:::css-var[--danger-text-1]{kind="text" type="Text color" color="var(--danger-text-1)"}
Label color with `danger`. Default: `var(--red-11)`
:::

:::css-var[--disabled-background]{kind="fill" type="Fill color" color="var(--disabled-background)"}
Track background when disabled. Default: `var(--gray-3)`
:::

:::css-var[--disabled-border]{kind="border" type="Border color" color="var(--disabled-border)"}
Ring around a disabled track. Default: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Label and handle when disabled. Default: `var(--gray-9)`
:::

:::css-var[--shadow-1]{kind="shadow" type="Shadow"}
Soft shadow under the track. Default: `var(--shadow-1)`
:::
::::
