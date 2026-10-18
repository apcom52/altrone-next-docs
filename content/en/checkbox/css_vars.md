# Checkbox

The CSS variables a `Checkbox` reads and you can override.

:::spoiler[How to override variables]
All of them are set on the root `<label>`, so the `style` prop is the reliable way to change one for a single checkbox: an inline value beats every class-based value, in every theme. A stylesheet rule works too, but it needs a selector more specific than the size classes (for example `.my-checkbox.my-checkbox`).

```tsx
<Checkbox
  checked={checked}
  onChange={setChecked}
  style={{ "--checkbox-size": "32px", "--checkbox-check-icon-size": "18px" } as React.CSSProperties}
>
  Bigger box
</Checkbox>
```

::playground{src=checkbox/CheckboxCssVarsDemo caption="Overriding variables through the style prop"}

Override `--checkbox-checked-background-color` and `--checkbox-checked-border-color` to recolor the checked state and keep the hover and disabled looks. Overriding `--checkbox-background-color` or `--checkbox-border-color` directly replaces the value in every state, including checked and disabled.

What can't be overridden:

- **The danger look.** `danger` only recolors the label through `--checkbox-text-color`; the box keeps its colors.
- **Percentage radii.** `--checkbox-rounding` feeds a registered `<length>` property, so use a length such as `12px` (half of the default box for a circle), not `50%`.
- **The focus ring.** It comes from the global `--focus-color`.
- **The 24px minimum row height.** It protects the hit area at `size="mini"`.
:::

## Internal variables

Defined by the checkbox itself.

::::css-vars
:::css-var[--checkbox-background-color]{kind="fill" type="Fill color" color="var(--interactive-1)"}
Box background at rest. Default: `var(--interactive-1)`
:::

:::css-var[--checkbox-hover-background-color]{kind="fill" type="Fill color" color="var(--interactive-2)"}
Box background on hover. Default: `var(--interactive-2)`
:::

:::css-var[--checkbox-checked-background-color]{kind="fill" type="Fill color" color="var(--accent-5)"}
Background of a checked or indeterminate box. Default: `var(--accent-5)`
:::

:::css-var[--checkbox-border-color]{kind="border" type="Border color" color="var(--border-1)"}
Ring around the box. Default: `var(--border-1)`
:::

:::css-var[--checkbox-checked-border-color]{kind="border" type="Border color" color="var(--accent-6)"}
Ring around a checked box. Default: `var(--accent-6)`
:::

:::css-var[--checkbox-icon-color]{kind="text" type="Icon color" color="var(--accent-12)"}
Check mark and dash. Default: `var(--accent-12)`
:::

:::css-var[--checkbox-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Label color. Default: `var(--text-2)`
:::

:::css-var[--checkbox-rounding]{kind="radius" type="Corner radius"}
Corner radius of the box. Default: `var(--radius-m)`
:::

:::css-var[--checkbox-size]{kind="size" type="Size"}
Width and height of the box. Default: `24px`
:::

:::css-var[--checkbox-row-height]{kind="size" type="Size"}
Minimum height of the clickable row. Default: `32px`
:::

:::css-var[--checkbox-check-icon-size]{kind="size" type="Size"}
Size of the check mark. Default: `12px`
:::

:::css-var[--checkbox-indetermination-size]{kind="size" type="Size"}
Size of the dash square. Default: `10px`
:::

:::css-var[--checkbox-label-size]{kind="font" type="Font size"}
Label font size. Default: `var(--text-size-4)`
:::

:::css-var[--checkbox-label-line-height]{kind="font" type="Font size"}
Label line height. Default: `var(--line-height-4)`
:::
::::

## Global variables

Not defined by the checkbox: global design tokens it reads. Changing a token restyles every checkbox at once.

::::css-vars
:::css-var[--gap]{kind="gap" type="Spacing"}
Space between the box and the label. Default: `8px`
:::

:::css-var[--focus-color]{kind="border" type="Border color" color="var(--focus-color)"}
Keyboard focus ring. Default: black in the light theme
:::

:::css-var[--danger-text-1]{kind="text" type="Text color" color="var(--danger-text-1)"}
Label color with `danger`. Default: `var(--red-11)`
:::

:::css-var[--disabled-background]{kind="fill" type="Fill color" color="var(--disabled-background)"}
Box background when disabled. Default: `var(--gray-3)`
:::

:::css-var[--disabled-border]{kind="border" type="Border color" color="var(--disabled-border)"}
Ring around a disabled box. Default: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
Label and check mark when disabled. Default: `var(--gray-9)`
:::

:::css-var[--radius-s]{kind="radius" type="Corner radius"}
Corner radius of the dash. Default: `4px`
:::

:::css-var[--shadow-1]{kind="shadow" type="Shadow"}
Soft shadow under the box. Default: `var(--shadow-1)`
:::
::::
