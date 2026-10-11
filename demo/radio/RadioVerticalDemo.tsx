"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioVerticalDemo() {
  const [plan, setPlan] = useState("pro");

  return (
    <Radio value={plan} onChange={setPlan} orientation="vertical">
      <Radio.Item value="free">Free — $0 per month</Radio.Item>
      <Radio.Item value="pro">Pro — $12 per month</Radio.Item>
      <Radio.Item value="enterprise">Enterprise — contact us</Radio.Item>
    </Radio>
  );
}
