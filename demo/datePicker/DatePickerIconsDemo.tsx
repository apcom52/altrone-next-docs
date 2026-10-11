"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { dayjsInstance as dayjs, DatePicker } from "altrone-ui";

export default function DatePickerIconsDemo() {
  const [date, setDate] = useState<Dayjs | undefined>(dayjs("2026-10-09"));

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      triggerIcon={<CalendarDays />}
      prevIcon={<ChevronLeft />}
      nextIcon={<ChevronRight />}
      style={{ width: 240 }}
    />
  );
}
