"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Calendar } from "altrone-ui";

export default function CalendarBasicDemo() {
  const [month] = useState(dayjs());
  const [selected, setSelected] = useState<Dayjs | null>(null);

  return (
    <Calendar
      month={month}
      selectedDates={selected ? [selected] : []}
      onDateChange={(date) => setSelected(date)}
    />
  );
}
