"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { DatePicker } from "altrone-ui";

export default function DatePickerGuidelineLimitsBadDemo() {
  const [date, setDate] = useState<Dayjs | undefined>();

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      placeholder="Delivery date"
      style={{ width: "100%", maxWidth: 240 }}
    />
  );
}
