"use client";

import { Calendar, Flex, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarChromeDemo() {
  const month = dayjs("2026-10-01");

  return (
    <Flex gap="xl" wrap="wrap">
      <Calendar mode="single" defaultMonth={month} showOutsideDays={false} />
      <Calendar mode="single" defaultMonth={month} showNavigation={false} showWeekdays={false} />
    </Flex>
  );
}
