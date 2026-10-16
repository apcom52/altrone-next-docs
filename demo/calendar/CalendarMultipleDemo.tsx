"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarMultipleDemo() {
  const [value, setValue] = useState<Dayjs[]>([dayjs("2026-10-07"), dayjs("2026-10-14")]);

  return (
    <Calendar
      mode="multiple"
      value={value}
      onSelect={(next) => setValue(next as Dayjs[])}
      defaultMonth={dayjs("2026-10-01")}
    />
  );
}
