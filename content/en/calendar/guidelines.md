# Calendar

## Limit the choice up front

If some dates are known to be unavailable — past ones, weekends, booked ones — disable them with `minDate`, `maxDate` and `isDateDisabled`. The user sees at once what can be picked and gets no error after a click.

::::good-bad
:::good
::playground{src=calendar/CalendarGuidelineLimitsGoodDemo caption="Past days and Sundays are disabled right away"}
:::

:::bad
::playground{src=calendar/CalendarGuidelineLimitsBadDemo caption="Anything can be picked — an invalid date has to be rejected later"}
:::
::::

## Use a range for a period

If you need a period, use `mode="range"`: the calendar orders the bounds itself and shows a solid band. A set of two separate dates in `mode="multiple"` doesn't tell the user the dates are connected.

::::good-bad
:::good
::playground{src=calendar/CalendarGuidelineRangeGoodDemo caption="The period is highlighted by one band"}
:::

:::bad
::playground{src=calendar/CalendarGuidelineRangeBadDemo caption="Two separate dates don't read as a period"}
:::
::::

## Use DatePicker for a form field

`Calendar` permanently takes space on the screen. For picking a date in a form use `DatePicker`: it shows the calendar only on demand and displays the chosen date itself. A permanent `Calendar` fits when picking a date is the main action of the screen, for example in a planner.

## Don't hide the navigation

Keep a calendar with `showNavigation={false}` only where the month is set outside the calendar — for example, by your own buttons or a switcher. Otherwise the user cannot reach another month.

## Accessibility

- Every day is a real `<button>`: reachable from the keyboard with `Tab`, `Enter` and `Space`.
- The navigation buttons have translated labels, "Previous month" and "Next month".
- Disabled days get the `disabled` attribute; adjacent-month days are hidden from assistive technologies and cannot be pressed.
- Today, the selected days and the range band differ by more than color: a selected day gets a separate pill.
