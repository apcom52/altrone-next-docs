"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { DatePicker } from "altrone-ui";

export default function DatePickerGuidelineRangeGoodDemo() {
  const [range, setRange] = useState<(Dayjs | undefined)[]>([]);

  return (
    <DatePicker.RangePicker
      value={range}
      onChange={setRange}
      placeholder="Trip dates"
      style={{ width: "100%", maxWidth: 280 }}
    />
  );
}
