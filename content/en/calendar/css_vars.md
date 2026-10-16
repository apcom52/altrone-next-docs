# Calendar

The CSS variables `Calendar` reads and that can be overridden.

:::spoiler[How to override the variables]
All of them are set on the root element, so the reliable way to change a variable on one calendar is the `style` prop: an inline value beats any value from classes, in any theme.

```tsx
<Calendar
  mode="range"
  style={{ "--calendar-cell-size": "40px", "--calendar-width": "280px", "--calendar-band-color": "var(--teal-a4)" } as React.CSSProperties}
/>
```

::playground{src=calendar/CalendarCssVarsDemo caption="Larger cells and a teal band through the style prop"}

The calendar is exactly seven cells wide, but the width is computed once at the application level, so when you change `--calendar-cell-size`, set `--calendar-width` too (seven cell sizes). The radius of the selected-day pill and of the range band is set separately by `--calendar-cell-radius`: with larger cells, raise it too so the days stay round.

What cannot be overridden:

- **The navigation buttons.** They are regular `Button`s, and their look is set by the button variables.
- **The disabled day look.** Its color comes from the global `--disabled-text-color`.
- **The selected-day pill animation.** It is defined in code.
:::

## Internal variables

Defined by the calendar itself.

::::css-vars
:::css-var[--calendar-cell-text-color]{kind="text" type="Text color" color="var(--text-2)"}
The day number color. Default: `var(--text-2)`
:::

:::css-var[--calendar-cell-weekend-text-color]{kind="text" type="Text color" color="var(--accent-12)"}
The weekend day number color. Default: `var(--accent-12)`
:::

:::css-var[--calendar-cell-today-text-color]{kind="text" type="Text color" color="var(--accent-11)"}
The today color. Default: `var(--accent-11)`
:::

:::css-var[--calendar-cell-selected-text-color]{kind="text" type="Text color" color="var(--accent-11)"}
The selected day color. Default: `var(--accent-11)`
:::

:::css-var[--calendar-cell-outside-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
The adjacent-month day color. Default: `var(--disabled-text-color)`
:::

:::css-var[--calendar-cell-hover-backdrop-color]{kind="fill" type="Fill color" color="var(--interactive-a1)"}
The day backdrop on hover and focus. Default: `var(--interactive-a1)`
:::

:::css-var[--calendar-band-color]{kind="fill" type="Fill color" color="var(--accent-a3)"}
The range band fill. Default: `var(--accent-a3)`
:::

:::css-var[--calendar-weekday-text-color]{kind="text" type="Text color" color="var(--text-1)"}
The weekday name color. Default: `var(--text-1)`
:::

:::css-var[--calendar-header-text-color]{kind="text" type="Text color" color="var(--text-2)"}
The month caption color in the header. Default: `var(--text-2)`
:::

:::css-var[--calendar-cell-size]{kind="size" type="Size"}
The side of a square cell; the calendar is seven cells wide. Default: `32px`
:::

:::css-var[--calendar-width]{kind="size" type="Size"}
The calendar width. Default: `calc(var(--calendar-cell-size) * 7)`
:::

:::css-var[--calendar-cell-radius]{kind="radius" type="Corner radius"}
The corner radius of the selected pill, the backdrop and the band edges. Default: `16px`
:::

:::css-var[--calendar-cell-text-size]{kind="font" type="Font size"}
The day number size. Default: `14px`
:::

:::css-var[--calendar-weekday-text-size]{kind="font" type="Font size"}
The weekday name size. Default: `10px`
:::

:::css-var[--calendar-header-text-size]{kind="font" type="Font size"}
The month caption size. Default: `14px`
:::
::::

## Global variables

Not defined by the calendar: global design tokens it reads. Changing a token affects all calendars at once.

::::css-vars
:::css-var[--gap]{kind="gap" type="Spacing"}
The gap between header elements. Default: `8px`
:::

:::css-var[--s-gap]{kind="gap" type="Spacing"}
The gap between the header, the weekdays and the grid. Default: `6px`
:::

:::css-var[--glass-background-color]{kind="fill" type="Fill color" color="var(--glass-background-color)"}
The selected-day pill fill. Default: `var(--glass-background-color)`
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Shadow"}
The selected-day pill shadow. Default: `var(--elevation-raised-shadow)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Text color" color="var(--disabled-text-color)"}
The disabled day color. Default: `var(--gray-9)`
:::
::::
