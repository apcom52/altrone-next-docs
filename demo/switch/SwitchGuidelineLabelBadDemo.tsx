"use client";

import { useState } from "react";
import { Switch } from "altrone-ui";

export default function SwitchGuidelineLabelBadDemo() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Switch checked={enabled} onChange={setEnabled}>
      Enable dark theme
    </Switch>
  );
}
