"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioNoLabelDemo() {
  const [value, setValue] = useState("a");

  return (
    <Radio value={value} onChange={setValue}>
      <Radio.Item value="a" aria-label="Option A" />
      <Radio.Item value="b" aria-label="Option B" />
      <Radio.Item value="c" aria-label="Option C" />
    </Radio>
  );
}
