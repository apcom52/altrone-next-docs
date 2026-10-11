"use client";

import { useState } from "react";
import type { Dayjs } from "dayjs";
import { dayjsInstance as dayjs, DatePicker, Flex, Form } from "altrone-ui";

export default function DatePickerFormDemo() {
  const [start, setStart] = useState<Dayjs | undefined>(dayjs("2026-10-09"));
  const [end, setEnd] = useState<Dayjs | undefined>(dayjs("2026-10-16"));

  return (
    <Form size="l">
      <Flex orientation="vertical" gap="s">
        <Form.Field name="start">
          <DatePicker value={start} onChange={setStart} style={{ width: 240 }} />
        </Form.Field>
        <Form.Field name="end" disabled>
          <DatePicker value={end} onChange={setEnd} style={{ width: 240 }} />
        </Form.Field>
      </Flex>
    </Form>
  );
}
