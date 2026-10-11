"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { dayjsInstance as dayjs, DatePicker, Flex } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function DatePickerSizesDemo() {
  const [date, setDate] = useState<Dayjs | undefined>(dayjs("2026-10-09"));

  return (
    <Flex orientation="vertical" gap="s" style={{ maxWidth: 240 }}>
      {SIZES.map((size) => (
        <DatePicker key={size} size={size} value={date} onChange={setDate} />
      ))}
    </Flex>
  );
}
