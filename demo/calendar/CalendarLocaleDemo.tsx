"use client";

import { Calendar, Flex, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarLocaleDemo() {
  const month = dayjs("2026-10-01");

  return (
    <Flex gap="xl" wrap="wrap">
      <Calendar mode="single" locale="en-US" defaultMonth={month} />
      <Calendar mode="single" locale="de-DE" defaultMonth={month} />
      <Calendar mode="single" locale="en-US" firstDayOfWeek="monday" defaultMonth={month} />
    </Flex>
  );
}
