"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioGuidelineDefaultBadDemo() {
  const [speed, setSpeed] = useState<string>();

  return (
    <Radio value={speed} onChange={setSpeed} orientation="vertical">
      <Radio.Item value="standard">Standard delivery</Radio.Item>
      <Radio.Item value="express">Express delivery</Radio.Item>
    </Radio>
  );
}
