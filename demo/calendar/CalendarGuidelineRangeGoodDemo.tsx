"use client";

import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarGuidelineRangeGoodDemo() {
  return (
    <Calendar
      mode="range"
      defaultMonth={dayjs("2026-10-01")}
      defaultValue={{ from: dayjs("2026-10-09"), to: dayjs("2026-10-15") }}
    />
  );
}
