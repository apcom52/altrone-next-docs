"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { Calendar, Flex, Text, dayjsInstance as dayjs } from "altrone-ui";

export default function CalendarMonthDemo() {
  const [month, setMonth] = useState<Dayjs>(dayjs("2026-10-01"));

  return (
    <Flex orientation="vertical" gap="m" align="center">
      <Calendar mode="single" month={month} onMonthChange={setMonth} />
      <Text>Visible month: {month.format("MMMM YYYY")}</Text>
    </Flex>
  );
}
