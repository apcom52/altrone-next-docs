# Radio

The CSS variables `Radio` reads and that you can override.

:::spoiler[How to override the variables]
The colors are declared on the application root and inherited, so you can set them through the `style` prop of `Radio` — for the whole group — or of a single `Radio.Item`. The size variables (`--radio-size`, `--radio-dot-size`, `--radio-label-size`, `--radio-label-line-height`) are declared by each item through its size class, so set them only through `style` on a `Radio.Item`: an inline value beats the class.

```tsx
<Radio.Item
  value="b"
  style={{ "--radio-size": "32px", "--radio-dot-size": "16px" } as React.CSSProperties}
>
  Larger dot
</Radio.Item>
```

::playground{src=radio/RadioCssVarsDemo caption="A larger dot on one option and a custom selected color on the group"}

To recolor the selected state and keep the hover behavior, override `--radio-checked-background-color` and `--radio-checked-icon-color`. The values for the regular and hovered states work the same way: `--radio-background-color` and `--radio-hover-background-color`.

What can't be overridden:

- **The disabled look.** It takes the global `--disabled-*` tokens and wins over the variables above. A disabled option can only be recolored with inline values on the `Radio.Item` itself.
- **The focus ring.** It comes from the global `--focus-color`.
- **The 24px minimum row height.** It protects the hit area at `size="mini"`.
:::

## Internal variables

Defined by the component itself.

::::css-vars
:::css-var[--radio-background-color]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Circle background at rest. Default: `var(--interactive-a1)`
:::

:::css-var[--radio-hover-background-color]{kind="fill" type="Fill color" color="var(--interactive-a2)"}
Circle background on hover. Default: `var(--interactive-a2)`
:::

:::css-var[--radio-checked-background-color]{kind="fill" type="Fill color" color="var(--accent-a5)"}
Circle background of the selected option. Default: `var(--accent-a5)`
:::

:::css-var[--radio-border-color]{kind="border" type="Border color" color="var(--border-a1)"}
Ring around the circle at rest. Default: `var(--border-a1)`
:::

:::css-var[--radio-checked-border-color]{kind="border" type="Border color" color="var(--border-a1)"}
Ring around the circle of the selected option. Default: `var(--border-a1)`
:::

:::css-var[--radio-icon-color]{kind="fill" type="Fill color" color="var(--text-2)"}
Dot color at rest. Default: `var(--text-2)`
:::

:::css-var[--radio-checked-icon-color]{kind="fill" type="Fill color" color="var(--accent-12)"}
Dot color of the selected option. Default: `var(--accent-12)`
:::

:::css-var[--radio-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Label color. Default: `var(--text-2)`
:::

:::css-var[--radio-size]{kind="size" type="Size"}
Circle diameter. Default: `24px`
:::

:::css-var[--radio-dot-size]{kind="size" type="Size"}
Diameter of the dot inside the circle. Default: `12px`
:::

:::css-var[--radio-label-size]{kind="font" type="Font size"}
Label font size. Default: `var(--text-size-4)`
:::

:::css-var[--radio-label-line-height]{kind="font" type="Font size"}
Label line height. Default: `var(--line-height-4)`
:::
::::

## Global variables

Not defined by the component: the global design tokens it reads. Changing a token affects every component at once.

::::css-vars
:::css-var[--gap]{kind="gap" type="Spacing"}
Space between options and between the circle and its label. Default: `8px`
:::

:::css-var[--focus-color]{kind="border" type="Border color" color="var(--focus-color)"}
Keyboard focus ring. Default: black in the light theme
:::

:::css-var[--background-a2]{kind="fill" type="Fill color" color="var(--background-a2)"}
Circle background of a disabled option. Default: `var(--gray-a2)`
:::

:::css-var[--disabled-border]{kind="border" type="Border color" color="var(--disabled-border)"}
Ring around a disabled circle. Default: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Label and dot of a disabled option. Default: `var(--gray-9)`
:::

:::css-var[--shadow-1]{kind="shadow" type="Shadow"}
Soft shadow under the circle. Default: `var(--shadow-1)`
:::
::::
