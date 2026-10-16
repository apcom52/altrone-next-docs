"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarIconsDemo() {
  return (
    <Calendar
      mode="single"
      defaultMonth={dayjs("2026-10-01")}
      prevIcon={<ChevronLeft />}
      nextIcon={<ChevronRight />}
    />
  );
}
