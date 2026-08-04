"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Calendar } from "altrone-ui";

export default function CalendarMondayDemo() {
  const [month] = useState(dayjs());
  const [selected, setSelected] = useState<Dayjs | null>(null);

  return (
    <Calendar
      month={month}
      firstDayOfWeek="monday"
      selectedDates={selected ? [selected] : []}
      onDateChange={(date) => setSelected(date)}
    />
  );
}
