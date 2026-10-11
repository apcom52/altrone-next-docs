"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioGuidelineSelectGoodDemo() {
  const [theme, setTheme] = useState("system");

  return (
    <Radio value={theme} onChange={setTheme} orientation="vertical">
      <Radio.Item value="light">Light</Radio.Item>
      <Radio.Item value="dark">Dark</Radio.Item>
      <Radio.Item value="system">Follow system</Radio.Item>
    </Radio>
  );
}
