"use client";

import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarGuidelineRangeBadDemo() {
  return (
    <Calendar
      mode="multiple"
      defaultMonth={dayjs("2026-10-01")}
      defaultValue={[dayjs("2026-10-09"), dayjs("2026-10-15")]}
    />
  );
}
