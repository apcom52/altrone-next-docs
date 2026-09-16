"use client";

import { useState } from "react";
import { Switch } from "altrone-ui";

export default function SwitchBasicDemo() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch checked={enabled} onChange={(v) => setEnabled(v)}>
      Тёмная тема
    </Switch>
  );
}
