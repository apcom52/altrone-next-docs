# Date Picker

## Limit dates that can't be chosen

If only some dates make sense, such as a delivery that can't be in the past, don't leave the choice to the user and a later error message. Pass `minDate` and `maxDate`: unavailable days are disabled right in the calendar.

::::good-bad
:::good
::playground{src=datePicker/DatePickerGuidelineLimitsGoodDemo caption="Past days are disabled in the calendar"}
:::

:::bad
::playground{src=datePicker/DatePickerGuidelineLimitsBadDemo caption="Any day can be picked, and the mistake is only found later"}
:::
::::

## Pick a period with one field

For a period, such as the dates of a trip or a report, use `DatePicker.RangePicker`. The user sees the whole period in the calendar, and the end can't end up earlier than the start. Two separate fields force the user to keep the order in their head.

::::good-bad
:::good
::playground{src=datePicker/DatePickerGuidelineRangeGoodDemo caption="The period is highlighted in a single calendar"}
:::

:::bad
::playground{src=datePicker/DatePickerGuidelineRangeBadDemo caption="Two fields that don't know about each other"}
:::
::::

## Pick the level that matches the data

Ask for exactly as much as you need: a card's expiry is a month and a year, a birth year is a year. `MonthPicker` and `YearPicker` spare the user from choosing a day that means nothing.

## Label the field

An empty date field doesn't say which date it expects. Put a label next to it, such as "Delivery date", place the field in a `Form.Field`, or at least write the purpose in `placeholder`.

## Accessibility

- The field needs an accessible name: a visible label, `aria-label` or `aria-labelledby`.
- With `asChild`, name the trigger itself, for example through the button label: a bare calendar icon has no text for a screen reader.
- The date is written in the field as text, so it can be read and copied; the popup doesn't have to be the only way to see it.
- `readOnly` keeps the field focusable, unlike `disabled`: use it for a value that must be readable but not editable.
