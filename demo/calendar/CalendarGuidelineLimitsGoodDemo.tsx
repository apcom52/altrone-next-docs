"use client";

import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarGuidelineLimitsGoodDemo() {
  return (
    <Calendar
      mode="single"
      defaultMonth={dayjs("2026-10-01")}
      minDate={dayjs("2026-10-12")}
      isDateDisabled={(date) => date.day() === 0}
    />
  );
}
