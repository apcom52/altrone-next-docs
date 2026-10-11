# Date Picker

The CSS custom properties `DatePicker` reads and that can be overridden.

:::spoiler[How to override variables]
The field is a `TextInput`, so its `--text-input-*` variables are set through the `style` prop of the `DatePicker`. Inline styles beat the per-size classes, which means an override replaces the value for every `size`:

```tsx
<DatePicker
  value={date}
  onChange={setDate}
  style={{ "--text-input-font-size": "18px" } as React.CSSProperties}
/>
```

The calendar opens in a portal, outside the field, so a variable set through `style` doesn't reach it. To change the popup, set the `--date-picker-*` variables on the `Application` root, which changes them for every picker at once.

What can't be overridden:

- **The disabled look.** `disabled` forces `--box-fill` and `--box-tone-text` to the disabled tokens.
- **The day grid.** The cells of the days are drawn by the [Calendar](/en/components/content/calendar/css-vars), and its variables apply to them.
:::

## Internal variables

Defined by `DatePicker` itself. They style the popup, so they are read from the application root.

::::css-vars
:::css-var[--date-picker-header-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Color of the month and year in the popup header. Default: `var(--text-2)`
:::

:::css-var[--date-picker-header-text-size]{kind="font" type="Font size"}
Font size of the popup header. Default: `14px`
:::

:::css-var[--date-picker-header-hover-text-color]{kind="text" type="Text color" color="var(--accent-11)"}
Color of the header buttons on hover. Default: `var(--accent-11)`
:::

:::css-var[--date-picker-cell-text-color]{kind="text" type="Text color" color="var(--text-2)"}
Color of the cells in the month and year grids. Default: `var(--text-2)`
:::

:::css-var[--date-picker-cell-text-size]{kind="font" type="Font size"}
Font size of the cells in the month and year grids. Default: `14px`
:::

:::css-var[--date-picker-cell-backdrop-color]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
Hover fill of a cell. Default: `var(--interactive-a1)`
:::

:::css-var[--date-picker-cell-selected-text-color]{kind="text" type="Text color" color="var(--accent-11)"}
Color of the selected month or year. Default: `var(--accent-11)`
:::
::::

## Global variables

Not defined by `DatePicker`: variables of the `TextInput` and `Box` the field is built on and global design tokens.

::::css-vars
:::css-var[--text-input-font-size]{kind="font" type="Font size"}
Font size of the value. Default: `14px`
:::

:::css-var[--text-input-icon-size]{kind="size" type="Size"}
Size of the calendar icon. Default: `16px`
:::

:::css-var[--box-fill]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
Fill of the field. Default: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Text color" color="var(--text-2)"}
Color of the value. Default: `var(--text-2)`
:::

:::css-var[--box-padding-x]{kind="gap" type="Spacing"}
Horizontal padding of the field. Default: `var(--space-control-x-m)` (`8px`)
:::

:::css-var[--box-size]{kind="size" type="Size"}
Height of the field. Default: `32px`
:::

:::css-var[--box-radius]{kind="radius" type="Corner radius"}
Corner radius of the field. Default: `var(--radius-pill)`
:::

:::css-var[--accent-11]{kind="text" type="Text color" color="var(--accent-11)"}
Accent text color used for hover and selection. Default: `var(--accent-11)`
:::
::::
