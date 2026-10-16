"use client";

import { Calendar, dayjsInstance as dayjs, type CalendarRenderDateProps } from "altrone-ui";

const EVENT_DAYS = [6, 13, 20, 27];

const EventDay = (props: CalendarRenderDateProps) => (
  <Calendar.Date
    {...props}
    style={EVENT_DAYS.includes(props.currentDate.date()) ? { textDecoration: "underline" } : undefined}
  />
);

export default function CalendarCustomDayDemo() {
  return <Calendar mode="single" defaultMonth={dayjs("2026-10-01")} DateComponent={EventDay} />;
}
