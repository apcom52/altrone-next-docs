# Date Picker

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="DatePicker" name="DatePicker" open="true"}
**4.0**

- New design.
- A new callback for `RangePicker`.
- The control can be replaced through `asChild` and `useDatePickerTrigger()`.
- `onChange` receives the event object.
- The value in the field follows the application language (`Application.language`).
- The "Today", "This month" and "This year" shortcuts are disabled outside `minDate`/`maxDate`.
- The cursor over the field is a hand.
- Reads `disabled` and `size` from `Form`.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" name="DatePicker"}
**3.5**

- `RangePicker`: the missing clear button is back, the glitch when picking the start date before the end is fixed, the range highlight in the American calendar format is fixed, and the weekday color matches the new glass surfaces.

**3.3**

- Added `autoClose`.
- Fixed closing of parent popovers on a click on a date.
- Fixed the `minDate`/`maxDate` limits in the month and year views.

**3.2**

- Fixed a wrong value after switching the current view.
- Fixed disabled dates in the month view.

**3.0**

- New design.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/datePicker-2.png" name="DatePicker"}
**2.1**

- Added support for date ranges.
- The month is now picked on a grid instead of a scrolling selector.
- Today is highlighted.
- Switched to `day.js` under the hood.
- Fixed the footer button paddings and the rendering of selected months.

**2.0**

- Added `surface` and `elevation`.
- The popup is rendered into the root element of the application.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/datePicker-1.png" name="DatePicker"}
**1.2**

- Added `clearable`.
- Fixed the placeholder being cut off in a narrow field.

**1.1**

- `minDate` and `maxDate` work not only at the year level.

**1.0**

- Added to the library — a field for picking a date in a popup calendar.
:::
