"use client";

import { useState } from "react";
import { Switch } from "altrone-ui";

export default function SwitchGuidelineLabelGoodDemo() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Switch checked={enabled} onChange={setEnabled}>
      Dark theme
    </Switch>
  );
}
