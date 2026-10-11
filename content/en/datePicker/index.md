# Date Picker

`DatePicker` is a field for picking a date. It looks like a regular text field with a calendar icon, and on click it opens a popup with a calendar. There are four variants: a day, a month, a year and a date range.

`DatePicker` works with `dayjs` objects. To create them with the same configured instance the library uses (locales and plugins included), import `dayjsInstance` from `altrone-ui`.

## Basic usage

```tsx
import { dayjsInstance as dayjs } from "altrone-ui";

const [date, setDate] = useState<Dayjs | undefined>(dayjs("2026-10-09"));

<DatePicker value={date} onChange={setDate} />
```

::playground{src=datePicker/DatePickerBasicDemo caption="A controlled date field"}

`value` is a `Dayjs`. `onChange` is called when a date is picked and gets `undefined` when the field is cleared. The shown text follows the application language (`Application.language`).

:::note
`onChange` receives the value first and the event second: `(value?: Dayjs, event?: MouseEvent<HTMLButtonElement>) => void`. The event is optional because the value can also change without a click, for example when the field is cleared.
:::

## Day, month, year and range

The component is a family of four pickers that share the same props. The level of precision is chosen by the component itself:

| Component | What it picks | Value |
| --------- | ------------- | ----- |
| `DatePicker` | A day | `Dayjs` |
| `DatePicker.MonthPicker` | A month | `Dayjs` |
| `DatePicker.YearPicker` | A year | `Dayjs` |
| `DatePicker.RangePicker` | A range of days | `(Dayjs \| undefined)[]` |

```tsx
<DatePicker.MonthPicker value={month} onChange={setMonth} />
<DatePicker.YearPicker value={year} onChange={setYear} />
<DatePicker.RangePicker value={range} onChange={setRange} />
```

::playground{src=datePicker/DatePickerVariantsDemo caption="Four variants of the picker"}

In `RangePicker` the value is a two-element array `[start, end]`, and either element may be `undefined` while the range is not complete. The popup header lets you drill down: a click on the month opens the month grid, a click on the year opens the year grid.

## Allowed dates

`minDate` and `maxDate` limit the selectable dates. Everything outside the interval is disabled in the calendar, and the "Today", "This month" and "This year" shortcuts are disabled too when they fall outside it.

```tsx
<DatePicker
  value={date}
  onChange={setDate}
  minDate={dayjs("2026-10-05")}
  maxDate={dayjs("2026-10-20")}
/>
```

::playground{src=datePicker/DatePickerLimitsDemo caption="Only October 5–20 can be picked"}

If `minDate` is later than `maxDate`, the values are swapped and a warning is written to the console.

## Display format

By default the date is shown in the format of the application language. `format` accepts any `dayjs` format string and changes only the text in the field.

```tsx
<DatePicker value={date} onChange={setDate} format="DD/MM/YYYY" />
```

::playground{src=datePicker/DatePickerFormatDemo caption="A custom format"}

## Clearing

`clearable` adds a "Clear" button to the popup footer. It calls `onChange(undefined)` and closes the popup. Use `placeholder` to say what an empty field means.

```tsx
<DatePicker value={date} onChange={setDate} clearable placeholder="No date" />
```

::playground{src=datePicker/DatePickerClearableDemo caption="A Clear button in the popup"}

## Closing the popup

The popup closes right after a date is picked. `autoClose={false}` keeps it open, so the user can look through the calendar and change their mind; it is closed by a click outside or by `Escape`.

```tsx
<DatePicker value={date} onChange={setDate} autoClose={false} />
```

::playground{src=datePicker/DatePickerAutoCloseDemo caption="The popup stays open after a pick"}

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. The picker is a `TextInput`, so the size changes the height and the font of the field.

::playground{src=datePicker/DatePickerSizesDemo caption="Five sizes"}

## Read-only, disabled and invalid

`readOnly` keeps the value visible, but the popup doesn't open; the field stays focusable for screen readers. `disabled` locks the field completely. `invalid` highlights it as erroneous.

```tsx
<DatePicker value={date} onChange={() => {}} readOnly />
<DatePicker value={date} onChange={() => {}} disabled />
<DatePicker value={undefined} onChange={() => {}} invalid />
```

::playground{src=datePicker/DatePickerStatesDemo caption="Read-only, disabled and invalid fields"}

## Custom trigger

With `asChild`, your own element opens the popup instead of the text field. It must be a single child that accepts a `ref` and click handlers.

```tsx
<DatePicker value={date} onChange={setDate} asChild>
  <Button label={date ? date.format("D MMM YYYY") : "Pick a date"} />
</DatePicker>
```

::playground{src=datePicker/DatePickerAsChildDemo caption="A button instead of the field"}

A component placed inside the trigger can read the live state of the picker with `useDatePickerTrigger()` instead of receiving it through props. The hook returns `value`, `displayValue` (the text the field would show), `expanded` (whether the popup is open), `disabled` and `clear`. It throws when called outside a `DatePicker`.

```tsx
function Trigger() {
  const { displayValue, expanded } = useDatePickerTrigger();

  return (
    <Button
      label={displayValue || "Pick a date"}
      additionalIcon={expanded ? <ChevronUp /> : <ChevronDown />}
    />
  );
}

<DatePicker value={date} onChange={setDate} asChild>
  <Trigger />
</DatePicker>
```

::playground{src=datePicker/DatePickerTriggerStateDemo caption="The chevron follows the state of the popup"}

## Inside a form

Inside a `Form.Field` the field takes `disabled` and `size` from the form. A prop passed to the `DatePicker` itself wins.

```tsx
<Form size="l">
  <Form.Field name="start">
    <DatePicker value={start} onChange={setStart} />
  </Form.Field>
  <Form.Field name="end" disabled>
    <DatePicker value={end} onChange={setEnd} />
  </Form.Field>
</Form>
```

::playground{src=datePicker/DatePickerFormDemo caption="The size comes from the form; the second field is locked"}

## Ref and styling

`ref` points to the wrapper `<div>` of the field. The other props of [TextInput](/en/components/controls/textInput) (`placeholder`, `invalid`, `size`, `disabled`, `className`, `style`) are passed to the field, except `value` and `onChange`, which the picker handles itself. The popup shows the day grid of the [Calendar](/en/components/content/calendar), so weekdays, the first day of the week and range highlighting match it.

## Props

:::prop[value]{type="Dayjs | (Dayjs | undefined)[]"}
The selected date. A `Dayjs` for the day, month and year pickers, a pair `[start, end]` for `RangePicker`.
:::

:::prop[onChange]{type="(value?: Dayjs, event?: MouseEvent<HTMLButtonElement>) => void"}
Called when a date is picked or the field is cleared; the value is `undefined` after clearing. For `RangePicker` the value is an array of two dates.
:::

:::prop[minDate]{type="Dayjs"}
The earliest selectable date. Earlier dates are disabled.
:::

:::prop[maxDate]{type="Dayjs"}
The latest selectable date. Later dates are disabled.
:::

:::prop[format]{type="string"}
A `dayjs` format string for the text in the field. By default, the format of the application language.
:::

:::prop[clearable]{type="boolean" default="false"}
Adds a "Clear" button to the popup footer.
:::

:::prop[autoClose]{type="boolean" default="true"}
Closes the popup right after a date is picked.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
The size of the field. When unset, it is read from the form context.
:::

:::prop[placeholder]{type="string"}
A hint shown while no date is picked.
:::

:::prop[readOnly]{type="boolean" default="false"}
Shows the value without opening the popup.
:::

:::prop[disabled]{type="boolean"}
Locks the field. When unset, it is read from the form context.
:::

:::prop[invalid]{type="boolean"}
Highlights the field as erroneous.
:::

:::prop[asChild]{type="boolean" default="false"}
Uses the single child element as the trigger instead of the text field.
:::

:::prop[children]{type="ReactElement"}
The trigger for `asChild`.
:::

:::prop[triggerIcon]{type="ReactElement"}
The calendar icon in the field. See the Icons tab.
:::

:::prop[prevIcon]{type="ReactElement"}
The "previous" icon in the popup header. See the Icons tab.
:::

:::prop[nextIcon]{type="ReactElement"}
The "next" icon in the popup header. See the Icons tab.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref of the wrapper `<div>`.
:::

The remaining [TextInput](/en/components/controls/textInput) props, except `value`, `onChange`, `ref` and `children`, are passed to the field.

## Related topics

- [TextInput](/en/components/controls/textInput) — the field is built on it, and it defines the field's look
- [Calendar](/en/components/content/calendar) — the day grid in the popup comes from it
- [Popover](/en/components/overlays/popover) — the popup opens through it
- [Form](/en/components/controls/form) — `Form.Field` passes `disabled` and `size` to the field
