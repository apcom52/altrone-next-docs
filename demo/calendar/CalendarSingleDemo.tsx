"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarSingleDemo() {
  const [value, setValue] = useState<Dayjs | undefined>(dayjs("2026-10-12"));

  return (
    <Calendar
      mode="single"
      value={value}
      onSelect={(next) => setValue(next as Dayjs | undefined)}
      defaultMonth={dayjs("2026-10-01")}
    />
  );
}
