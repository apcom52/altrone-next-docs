"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { dayjsInstance as dayjs, DatePicker } from "altrone-ui";

export default function DatePickerGuidelineLimitsGoodDemo() {
  const [date, setDate] = useState<Dayjs | undefined>();

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      minDate={dayjs("2026-10-09")}
      placeholder="Delivery date"
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
