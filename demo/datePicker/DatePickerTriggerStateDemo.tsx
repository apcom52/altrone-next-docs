"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { ChevronDown, ChevronUp } from "lucide-react";
import { dayjsInstance as dayjs, Button, DatePicker, useDatePickerTrigger } from "altrone-ui";

function Trigger() {
  const { displayValue, expanded } = useDatePickerTrigger();

  return (
    <Button
      label={displayValue || "Pick a date"}
      additionalIcon={expanded ? <ChevronUp /> : <ChevronDown />}
    />
  );
}

export default function DatePickerTriggerStateDemo() {
  const [date, setDate] = useState<Dayjs | undefined>(dayjs("2026-10-09"));

  return (
    <DatePicker value={date} onChange={setDate} asChild>
      <Trigger />
    </DatePicker>
  );
}
