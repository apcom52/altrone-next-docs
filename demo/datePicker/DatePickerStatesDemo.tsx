"use client";

import { dayjsInstance as dayjs, DatePicker, Flex } from "altrone-ui";

export default function DatePickerStatesDemo() {
  const date = dayjs("2026-10-09");

  return (
    <Flex orientation="vertical" gap="s" style={{ maxWidth: 240 }}>
      <DatePicker value={date} onChange={() => {}} readOnly />
      <DatePicker value={date} onChange={() => {}} disabled />
      <DatePicker value={undefined} onChange={() => {}} invalid />
    </Flex>
  );
}
