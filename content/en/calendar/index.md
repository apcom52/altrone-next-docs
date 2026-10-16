# Calendar

`Calendar` shows one month on a six-week grid, so its height does not change when you switch months. It can select a single day, several days or a range, draws its own header with navigation and the weekday names, and picks up the application language.

The component requires `dayjs` as a peer dependency. Dates are passed in and returned as `Dayjs` objects.

## A single day

`mode="single"` enables picking one date. The value is a `Dayjs` or `undefined`.

```tsx
const [value, setValue] = useState<Dayjs>();

<Calendar mode="single" value={value} onSelect={(next) => setValue(next as Dayjs)} />
```

::playground{src=calendar/CalendarSingleDemo caption="Picking one date"}

`onSelect` receives the next value first and the event second. The shape of the value depends on `mode` while the callback type is shared, so you narrow it. If you don't need the state outside, pass only `defaultValue` — `Calendar` keeps the selection itself.

## Several days

`mode="multiple"` turns a click into a toggle: a selected day is removed, an unselected one is added. The value is a `Dayjs[]` array.

```tsx
const [value, setValue] = useState<Dayjs[]>([]);

<Calendar mode="multiple" value={value} onSelect={(next) => setValue(next as Dayjs[])} />
```

::playground{src=calendar/CalendarMultipleDemo caption="An arbitrary set of dates"}

## A range

`mode="range"` picks a period. The value is `{ from?: Dayjs; to?: Dayjs }`. The first click sets the start, the second sets the end; the bounds are ordered automatically, so `from` is never later than `to`. A click on an already selected range starts a new one. While only the start is selected, hovering a day shows a preview band.

```tsx
const [range, setRange] = useState<{ from?: Dayjs; to?: Dayjs }>({});

<Calendar mode="range" value={range} onSelect={(next) => setRange(next as typeof range)} />
```

::playground{src=calendar/CalendarRangeDemo caption="A range band with rounded outer corners"}

:::note
For picking a date in a form you usually want [DatePicker](/en/components/controls/datePicker): it is built on `Calendar` and adds a field, a popup and clearing. `Calendar` is a building block and a standalone widget for when the grid must always be visible.
:::

## The displayed month

You can drive the month from outside with `month` and `onMonthChange`, or leave it to `Calendar` — then `defaultMonth` sets the starting month (the current one by default). Only the year and the month are used, the day of the month is ignored. `onMonthChange` fires when the user flips months with the header buttons.

```tsx
const [month, setMonth] = useState(dayjs());

<Calendar mode="single" month={month} onMonthChange={setMonth} />
```

::playground{src=calendar/CalendarMonthDemo caption="The month lives in the parent's state"}

## Limiting the choice

`minDate` and `maxDate` disable the days outside the bounds, `isDateDisabled` disables individual days by a rule. `disabled` blocks every cell at once. A disabled day is visible but ignores clicks and hover.

```tsx
<Calendar
  mode="single"
  minDate={dayjs()}
  isDateDisabled={(date) => date.day() === 0 || date.day() === 6}
/>
```

::playground{src=calendar/CalendarLimitsDemo caption="Weekdays from October 5 to 25 are available"}

## Language and first day of the week

The month caption and the weekday names come from the application language (`Application.language`). A BCP-47 `locale` overrides it for one calendar. The first day of the week is derived from the locale by default (`firstDayOfWeek="auto"`); you can pin it: `'monday'` or `'sunday'`.

```tsx
<Calendar mode="single" locale="de-DE" />
<Calendar mode="single" firstDayOfWeek="monday" />
```

::playground{src=calendar/CalendarLocaleDemo caption="en-US, de-DE and en-US with Monday forced"}

## Header and adjacent days

With `mode` the calendar shows a header with navigation and a weekday row. Turn the parts off one by one: `showHeader`, `showNavigation`, `showWeekdays`. `showOutsideDays={false}` removes the days of adjacent months — empty cells stay in their place, so the grid keeps its size.

```tsx
<Calendar mode="single" showOutsideDays={false} />
<Calendar mode="single" showNavigation={false} showWeekdays={false} />
```

::playground{src=calendar/CalendarChromeDemo caption="Without adjacent-month days; without navigation and weekdays"}

Adjacent-month days are muted and cannot be selected.

## A custom day cell

`DateComponent` replaces the day cell. It receives [`CalendarRenderDateProps`](#day-cell-props): the date, the state flags and the `onSelect`/`onHover` callbacks. To change only the look, render the standard `Calendar.Date` and give it a `className` or `style`.

```tsx
const EventDay = (props: CalendarRenderDateProps) => (
  <Calendar.Date
    {...props}
    style={events.includes(props.currentDate.date()) ? { textDecoration: 'underline' } : undefined}
  />
);

<Calendar mode="single" DateComponent={EventDay} />
```

::playground{src=calendar/CalendarCustomDayDemo caption="Days with events are underlined"}

:::warning
If you write a cell from scratch, call `onSelect(currentDate, event)` and `onHover(currentDate, event)` yourself. Without them clicks won't reach the selection and the range preview won't work.
:::

## Low-level mode

Without `mode`, `Calendar` becomes a bare grid: no header or weekdays, no selection state of its own. You supply `month` and `selectedDates` and handle `onDateChange` yourself. `DatePicker` and other components that need their own header are built on this mode.

```tsx
<Calendar
  month={month}
  selectedDates={selected ? [selected] : []}
  onDateChange={setSelected}
/>
```

::playground{src=calendar/CalendarLowLevelDemo caption="A grid without a header: the caller drives the selection"}

In this mode `cursorDate` highlights a band between `selectedDates[0]` and the hovered date, in both directions — a range preview is built from it. The calendar does not track the mouse: update `cursorDate` from the `onHover` of your cell and reset it when the cursor leaves.

## Day cell props

Every cell rendered by `DateComponent` receives these props:

| Prop | Type | Description |
| ---- | ---- | ----------- |
| `currentDate` | `Dayjs` | The cell date |
| `weekDay` | `number` | Day of the week: 0 is Sunday … 6 is Saturday |
| `fromAnotherMonth` | `boolean` | A filler day from an adjacent month |
| `today` | `boolean` | Today |
| `selected` | `boolean` | The day is selected |
| `disabled` | `boolean` | The day is disabled |
| `inRange` | `boolean` | The day is inside the range, including the hover preview |
| `rangeStart` / `rangeEnd` | `boolean` | The range bounds |
| `cursorHighlighted` | `boolean` | The day is inside the band from `cursorDate` |
| `startOfWeek` / `endOfWeek` | `boolean` | The first and last column of a row |
| `inRangeAbove` / `inRangeBelow` | `boolean` | The band continues in the cell above / below — used to round only the outer corners |
| `onSelect` | `(date, event) => void` | Report a date selection |
| `onHover` | `(date, event) => void` | Drive the range preview |

## Ref and styling

`ref` points to the root `<div>`. `className`, `style` and the other `<div>` attributes apply to it as well. To change sizes and colors, override the [CSS variables](/en/components/content/calendar/css-vars); the navigation icons are replaced on the [Icons](/en/components/content/calendar/icons) tab.

## Props

:::prop[mode]{type="'single' | 'multiple' | 'range'"}
Enables selection and the calendar's own state. Without it the calendar is a bare grid.
:::

:::prop[value]{type="Dayjs | Dayjs[] | { from?: Dayjs; to?: Dayjs }"}
The controlled value. Its shape depends on `mode`.
:::

:::prop[defaultValue]{type="Dayjs | Dayjs[] | { from?: Dayjs; to?: Dayjs }"}
The initial value when the calendar is uncontrolled.
:::

:::prop[onSelect]{type="(value, event: MouseEvent<HTMLButtonElement>) => void"}
Called on every day click with the next value, in the same shape as `value`.
:::

:::prop[month]{type="Dayjs"}
The controlled displayed month. Only the year and the month are used.
:::

:::prop[defaultMonth]{type="Dayjs" default="dayjs()"}
The initial month when it is not driven from outside.
:::

:::prop[onMonthChange]{type="(month: Dayjs, event: MouseEvent<HTMLButtonElement>) => void"}
Called when the header navigation changes the month.
:::

:::prop[locale]{type="string" default="the application language"}
A BCP-47 locale for the month caption and the weekday names.
:::

:::prop[firstDayOfWeek]{type="'monday' | 'sunday' | 'auto'" default="'auto'"}
The first day of the week. `'auto'` derives it from the locale.
:::

:::prop[minDate]{type="Dayjs"}
Days before this date are disabled.
:::

:::prop[maxDate]{type="Dayjs"}
Days after this date are disabled.
:::

:::prop[isDateDisabled]{type="(date: Dayjs) => boolean"}
A predicate that disables individual days.
:::

:::prop[disabled]{type="boolean" default="false"}
Blocks every cell.
:::

:::prop[showHeader]{type="boolean"}
The header with the month caption. Visible by default when `mode` is set.
:::

:::prop[showNavigation]{type="boolean" default="true"}
The "previous" and "next" buttons in the header.
:::

:::prop[showWeekdays]{type="boolean"}
The weekday name row. Visible by default when `mode` is set.
:::

:::prop[showOutsideDays]{type="boolean" default="true"}
Render the days of adjacent months (muted) instead of empty cells.
:::

:::prop[prevIcon]{type="ReactElement" default="Application.icons.prev"}
The icon of the previous-month button.
:::

:::prop[nextIcon]{type="ReactElement" default="Application.icons.next"}
The icon of the next-month button.
:::

:::prop[DateComponent]{type="FC<CalendarRenderDateProps>" default="Calendar.Date"}
A custom day cell component.
:::

:::prop[selectedDates]{type="Dayjs[]"}
Low-level mode: the days in the selected state.
:::

:::prop[cursorDate]{type="Dayjs"}
Low-level mode: the hover date for a preview band from `selectedDates[0]`.
:::

:::prop[onDateChange]{type="(date: Dayjs, event: MouseEvent<HTMLButtonElement>) => void"}
Low-level mode: called on a day click, there is no state.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
The ref of the root element.
:::

All other `<div>` attributes, including `className` and `style`, are passed to the root element.

## Related topics

- [DatePicker](/en/components/controls/datePicker) — a field with a calendar popup for picking a date in a form
- [Application](/en/components/layout/application) — the application language and the shared `prev`/`next` icons
- [Color](/en/foundations/color) — the accent color tokens that paint the selected days and the range band
