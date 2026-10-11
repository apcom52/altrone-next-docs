"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioGuidelineLabelBadDemo() {
  const [plan, setPlan] = useState("b");

  return (
    <Radio value={plan} onChange={setPlan} orientation="vertical">
      <Radio.Item value="a">Option A</Radio.Item>
      <Radio.Item value="b">Option B</Radio.Item>
    </Radio>
  );
}
