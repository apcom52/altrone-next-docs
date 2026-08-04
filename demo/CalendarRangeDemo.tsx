"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Calendar } from "altrone-ui";

export default function CalendarRangeDemo() {
  const [month] = useState(dayjs());
  const [range, setRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);
  const [cursor, setCursor] = useState<Dayjs | undefined>();

  const handleSelect = (date: Dayjs) => {
    const [start, end] = range;
    if (!start || (start && end)) {
      setRange([date, null]);
    } else {
      setRange([start, date]);
    }
  };

  return (
    <div onMouseLeave={() => setCursor(undefined)}>
      <Calendar
        month={month}
        selectedDates={range.filter(Boolean) as Dayjs[]}
        cursorDate={cursor}
        onDateChange={handleSelect}
      />
    </div>
  );
}
