"use client";

import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarGuidelineLimitsBadDemo() {
  return <Calendar mode="single" defaultMonth={dayjs("2026-10-01")} />;
}
