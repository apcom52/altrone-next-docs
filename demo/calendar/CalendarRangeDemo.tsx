"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { Calendar, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarRangeDemo() {
  const [range, setRange] = useState<{ from?: Dayjs; to?: Dayjs }>({
    from: dayjs("2026-10-08"),
    to: dayjs("2026-10-16"),
  });

  return (
    <Calendar
      mode="range"
      value={range}
      onSelect={(next) => setRange(next as { from?: Dayjs; to?: Dayjs })}
      defaultMonth={dayjs("2026-10-01")}
    />
  );
}
