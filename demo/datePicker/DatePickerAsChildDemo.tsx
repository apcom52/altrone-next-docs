"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { dayjsInstance as dayjs, Button, DatePicker } from "altrone-ui";

export default function DatePickerAsChildDemo() {
  const [date, setDate] = useState<Dayjs | undefined>(dayjs("2026-10-09"));

  return (
    <DatePicker value={date} onChange={setDate} asChild>
      <Button label={date ? date.format("D MMM YYYY") : "Pick a date"} />
    </DatePicker>
  );
}
