"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioNoSelectionDemo() {
  const [answer, setAnswer] = useState<string>();

  return (
    <Radio value={answer} onChange={setAnswer}>
      <Radio.Item value="yes">Yes</Radio.Item>
      <Radio.Item value="no">No</Radio.Item>
    </Radio>
  );
}
