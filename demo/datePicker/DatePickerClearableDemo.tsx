"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { dayjsInstance as dayjs, DatePicker } from "altrone-ui";

export default function DatePickerClearableDemo() {
  const [date, setDate] = useState<Dayjs | undefined>(dayjs("2026-10-09"));

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      clearable
      placeholder="No date"
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
