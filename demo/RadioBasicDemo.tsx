"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioBasicDemo() {
  const [value, setValue] = useState("email");

  return (
    <Radio value={value} onChange={(v) => setValue(v)} name="notification">
      <Radio.Item value="email">Email</Radio.Item>
      <Radio.Item value="sms">SMS</Radio.Item>
      <Radio.Item value="push">Push-уведомление</Radio.Item>
    </Radio>
  );
}
