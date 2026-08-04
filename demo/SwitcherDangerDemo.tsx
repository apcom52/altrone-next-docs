"use client";

import { useState } from "react";
import { Switcher } from "altrone-ui";

export default function SwitcherDangerDemo() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switcher checked={enabled} onChange={(v) => setEnabled(v)} danger>
      Публичный доступ к данным
    </Switcher>
  );
}
