"use client";

import { useState } from "react";
import { Switch } from "altrone-ui";

export default function SwitchDangerDemo() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch checked={enabled} onChange={(v) => setEnabled(v)} danger>
      Публичный доступ к данным
    </Switch>
  );
}
