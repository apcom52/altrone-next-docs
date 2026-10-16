"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarLowLevelDemo() {
  const [selected, setSelected] = useState<Dayjs | undefined>(dayjs("2026-10-12"));

  return (
    <Calendar
      month={dayjs("2026-10-01")}
      selectedDates={selected ? [selected] : []}
      onDateChange={setSelected}
    />
  );
}
