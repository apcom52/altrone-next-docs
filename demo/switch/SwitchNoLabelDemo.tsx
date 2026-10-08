"use client";

import { useState } from "react";
import { Switch } from "altrone-ui";

export default function SwitchNoLabelDemo() {
  const [enabled, setEnabled] = useState(true);

  return <Switch aria-label="Wi-Fi" checked={enabled} onChange={setEnabled} />;
}
