"use client";

import { useState } from "react";
import { Checkbox } from "altrone-ui";

export default function CheckboxBasicDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onChange={(v) => setChecked(v)}>
      Я согласен с условиями
    </Checkbox>
  );
}
