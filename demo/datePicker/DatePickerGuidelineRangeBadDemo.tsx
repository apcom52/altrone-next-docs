"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { DatePicker, Flex } from "altrone-ui";

export default function DatePickerGuidelineRangeBadDemo() {
  const [from, setFrom] = useState<Dayjs | undefined>();
  const [to, setTo] = useState<Dayjs | undefined>();

  return (
    <Flex gap="s" style={{ width: "100%", maxWidth: 280 }}>
      <DatePicker value={from} onChange={setFrom} placeholder="From" />
      <DatePicker value={to} onChange={setTo} placeholder="To" />
    </Flex>
  );
}
