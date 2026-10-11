"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioGuidelineDefaultGoodDemo() {
  const [speed, setSpeed] = useState("standard");

  return (
    <Radio value={speed} onChange={setSpeed} orientation="vertical">
      <Radio.Item value="standard">Standard delivery</Radio.Item>
      <Radio.Item value="express">Express delivery</Radio.Item>
    </Radio>
  );
}
