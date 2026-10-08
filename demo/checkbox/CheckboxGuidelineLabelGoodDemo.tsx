"use client";

import { useState } from "react";
import { Checkbox } from "altrone-ui";

export default function CheckboxGuidelineLabelGoodDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox checked={checked} onChange={setChecked}>
      Send me product updates
    </Checkbox>
  );
}
