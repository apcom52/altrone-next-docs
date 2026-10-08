"use client";

import { useState } from "react";
import { Checkbox } from "altrone-ui";

export default function CheckboxGuidelineInstantBadDemo() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Checkbox checked={enabled} onChange={setEnabled}>
      Dark theme
    </Checkbox>
  );
}
