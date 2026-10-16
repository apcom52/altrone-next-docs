"use client";

import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarLimitsDemo() {
  return (
    <Calendar
      mode="single"
      defaultMonth={dayjs("2026-10-01")}
      minDate={dayjs("2026-10-05")}
      maxDate={dayjs("2026-10-25")}
      isDateDisabled={(date) => date.day() === 0 || date.day() === 6}
    />
  );
}
