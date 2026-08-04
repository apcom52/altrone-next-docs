"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioHorizontalDemo() {
  const [value, setValue] = useState("month");

  return (
    <Radio
      value={value}
      onChange={(v) => setValue(v)}
      name="period"
      direction="horizontal"
    >
      <Radio.Item value="week">Неделя</Radio.Item>
      <Radio.Item value="month">Месяц</Radio.Item>
      <Radio.Item value="year">Год</Radio.Item>
    </Radio>
  );
}
