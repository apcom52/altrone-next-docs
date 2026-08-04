"use client";

import { useState } from "react";
import { Checkbox } from "altrone-ui";

export default function CheckboxDangerDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox checked={checked} onChange={(v) => setChecked(v)} danger>
      Удалить все данные безвозвратно
    </Checkbox>
  );
}
