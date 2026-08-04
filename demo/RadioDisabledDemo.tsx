"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioDisabledDemo() {
  const [value, setValue] = useState("standard");

  return (
    <Radio value={value} onChange={(v) => setValue(v)} name="plan">
      <Radio.Item value="standard">Стандартный</Radio.Item>
      <Radio.Item value="pro">Pro</Radio.Item>
      <Radio.Item value="enterprise" disabled>
        Enterprise (недоступно)
      </Radio.Item>
    </Radio>
  );
}
