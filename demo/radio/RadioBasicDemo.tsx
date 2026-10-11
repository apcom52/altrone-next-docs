"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioBasicDemo() {
  const [channel, setChannel] = useState("email");

  return (
    <Radio value={channel} onChange={setChannel}>
      <Radio.Item value="email">Email</Radio.Item>
      <Radio.Item value="sms">SMS</Radio.Item>
      <Radio.Item value="push">Push notification</Radio.Item>
    </Radio>
  );
}
