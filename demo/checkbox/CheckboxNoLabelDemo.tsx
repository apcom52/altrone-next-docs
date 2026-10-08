"use client";

import { useState } from "react";
import { Checkbox } from "altrone-ui";

export default function CheckboxNoLabelDemo() {
  const [checked, setChecked] = useState(false);

  return <Checkbox aria-label="Select row" checked={checked} onChange={setChecked} />;
}
