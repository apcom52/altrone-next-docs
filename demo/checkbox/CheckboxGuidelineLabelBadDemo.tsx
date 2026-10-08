"use client";

import { useState } from "react";
import { Checkbox } from "altrone-ui";

export default function CheckboxGuidelineLabelBadDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox checked={checked} onChange={setChecked}>
      Do you want to receive product updates?
    </Checkbox>
  );
}
