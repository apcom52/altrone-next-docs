"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { dayjsInstance as dayjs, DatePicker } from "altrone-ui";

export default function DatePickerLimitsDemo() {
  const [date, setDate] = useState<Dayjs | undefined>(dayjs("2026-10-09"));

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      minDate={dayjs("2026-10-05")}
      maxDate={dayjs("2026-10-20")}
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
