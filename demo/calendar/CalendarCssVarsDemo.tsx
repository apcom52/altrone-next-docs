"use client";

import type { CSSProperties } from "react";
import { Calendar, Flex, dayjsInstance as dayjs } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function CalendarCssVarsDemo() {
  const month = dayjs("2026-10-01");

  return (
    <Flex gap="xl" wrap="wrap">
      <Calendar mode="range" defaultMonth={month} />
      <Calendar
        mode="range"
        defaultMonth={month}
        style={vars({
          "--calendar-cell-size": "40px",
          "--calendar-width": "280px",
          "--calendar-band-color": "var(--teal-a4)",
          "--calendar-cell-selected-text-color": "var(--teal-11)",
        })}
      />
    </Flex>
  );
}
