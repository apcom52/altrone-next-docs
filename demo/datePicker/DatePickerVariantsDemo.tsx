"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { dayjsInstance as dayjs, DatePicker, Flex } from "altrone-ui";

export default function DatePickerVariantsDemo() {
  const [day, setDay] = useState<Dayjs | undefined>(dayjs("2026-10-09"));
  const [month, setMonth] = useState<Dayjs | undefined>(dayjs("2026-10-01"));
  const [year, setYear] = useState<Dayjs | undefined>(dayjs("2026-01-01"));
  const [range, setRange] = useState<(Dayjs | undefined)[]>([
    dayjs("2026-10-05"),
    dayjs("2026-10-12"),
  ]);

  return (
    <Flex orientation="vertical" gap="s" style={{ maxWidth: 280 }}>
      <DatePicker value={day} onChange={setDay} />
      <DatePicker.MonthPicker value={month} onChange={setMonth} />
      <DatePicker.YearPicker value={year} onChange={setYear} />
      <DatePicker.RangePicker value={range} onChange={setRange} />
    </Flex>
  );
}
