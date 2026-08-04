"use client";

import { useState } from "react";
import { Switcher } from "altrone-ui";

export default function SwitcherBasicDemo() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switcher checked={enabled} onChange={(v) => setEnabled(v)}>
      Тёмная тема
    </Switcher>
  );
}
